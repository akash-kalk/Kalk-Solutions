import { promises as fs } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const clientDir = path.join(projectRoot, "dist", "client");
const assetsDir = path.join(clientDir, "assets");

async function ensureDirExists(dirPath) {
  try {
    const stat = await fs.stat(dirPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
}

async function main() {
  const hasClientDir = await ensureDirExists(clientDir);
  if (!hasClientDir) {
    throw new Error("dist/client not found. Run the build first.");
  }

  const hasAssetsDir = await ensureDirExists(assetsDir);
  if (!hasAssetsDir) {
    throw new Error("dist/client/assets not found. Build output looks incomplete.");
  }

  const files = await fs.readdir(assetsDir);
  const appEntry = files.find((name) => /^index-.*\.js$/.test(name));
  const styleEntry = files.find((name) => /^styles-.*\.css$/.test(name));

  if (!appEntry) {
    throw new Error("Could not find app entry file matching assets/index-*.js");
  }

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kalk Foundry</title>
    ${styleEntry ? `<link rel="stylesheet" href="/assets/${styleEntry}" />` : ""}
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${appEntry}"></script>
  </body>
</html>
`;

  const htaccess = `RewriteEngine On
RewriteBase /
RewriteRule ^index\\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
`;

  await fs.writeFile(path.join(clientDir, "index.html"), html, "utf8");
  await fs.writeFile(path.join(clientDir, ".htaccess"), htaccess, "utf8");

  console.log("Static export ready in dist/client");
  console.log("Upload dist/client contents to public_html");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
