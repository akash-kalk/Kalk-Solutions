import { createReadStream } from "node:fs";
import { promises as fs } from "node:fs";
import http from "node:http";
import path from "node:path";

const projectRoot = process.cwd();
const staticRoot = path.join(projectRoot, "dist", "client");
const port = Number(process.env.PORT ?? 4173);
const host = process.env.HOST ?? "127.0.0.1";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

async function pathExists(filePath) {
  try {
    await fs.stat(filePath);
    return true;
  } catch {
    return false;
  }
}

async function resolveFilePath(urlPath) {
  const safePath = path.normalize(decodeURIComponent(urlPath)).replace(/^(\.\.[/\\])+/, "");
  const requestedPath = path.join(staticRoot, safePath);

  if (await pathExists(requestedPath)) {
    const stat = await fs.stat(requestedPath);
    if (stat.isFile()) return requestedPath;
    if (stat.isDirectory()) {
      const indexPath = path.join(requestedPath, "index.html");
      if (await pathExists(indexPath)) return indexPath;
    }
  }

  return path.join(staticRoot, "index.html");
}

async function main() {
  if (!(await pathExists(staticRoot))) {
    throw new Error("dist/client not found. Run `npm run build:static` first.");
  }

  const server = http.createServer(async (req, res) => {
    try {
      const requestUrl = new URL(req.url ?? "/", `http://${req.headers.host}`);
      const filePath = await resolveFilePath(requestUrl.pathname);
      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] ?? "application/octet-stream";

      res.writeHead(200, { "Content-Type": contentType });
      createReadStream(filePath).pipe(res);
    } catch {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Failed to serve static preview.");
    }
  });

  server.listen(port, host, () => {
    console.log(`Static preview running at http://${host}:${port}`);
  });
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
