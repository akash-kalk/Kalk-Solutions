import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyTemplate, type CaseStudyData } from "@/components/CaseStudyTemplate";

const data: CaseStudyData = {
  tag: "ERP Transformation",
  industry: "Engineering / Motion Controls (confidential)",
  location: "India",
  result: "5 disconnected tools unified into one Odoo system",
  heroStat: "6 → 1",
  heroStatLabel: "Tools Unified",
  title: "From 5 Disconnected Tools to One Integrated Manufacturing System",
  intro:
    "An engineering manufacturer running on TeamCenter, Excel, PagarBook, Tally, and email replaced their entire stack with a single Odoo implementation — gaining real-time visibility, mobile operations, and zero people dependency.",
  business:
    "A multi-department engineering company in motion controls. Strong technical capability and a long-standing customer base. Operationally, the business depended on senior team members to glue together five different tools across design, purchase, HR, and accounting.",
  challenge:
    "TeamCenter held design data. Excel held BOMs. Purchase used email and Excel POs. Tally handled accounting. PagarBook handled HR. Nothing talked to each other. When a senior team member was unavailable, work simply stopped. Reporting was a weekly scramble of copy-paste from five places.",
  whatWeDid: [
    "Ran a 4-week discovery covering every workflow — sales, purchase, production, BOM, HR, and accounts — and mapped the integration points.",
    "Designed and implemented the Odoo solution — Sales, Purchase, Inventory, Manufacturing (BOM/MRP), HR, and Accounting modules — configured for their exact business flows.",
    "Built the integration: BOMs sync directly into purchase requisitions, auto-generate POs, route to vendors from Odoo, post receipts to inventory and journal entries to accounting automatically.",
    "Migrated historical data, ran 6 weeks of parallel testing with their team, trained department leads, and rolled out the Odoo mobile app for shop-floor and field operations.",
    "Provided 3 months of free hypercare post go-live, then transitioned to ongoing AMC support.",
  ],
  resultBody:
    "Real-time visibility from quote to cash. Zero people dependency — work continues whether key staff are present or not. Mobile-first operations. Department leads stopped chasing data and started managing performance. Leadership reports run in one click instead of one day.",
  takeaway:
    "ERP isn't a software project. It's the moment your business stops running on people and starts running on a system.",
  timeline: "~12 months end-to-end",
};

export const Route = createFileRoute("/case-studies/erp-unified-system")({
  head: () => ({
    meta: [
      {
        title:
          "Odoo ERP Case Study: From 5 Disconnected Tools to One Integrated Manufacturing System | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "Engineering manufacturer replaced TeamCenter + Excel + PagarBook + Tally + email with Odoo. Real-time visibility, zero people dependency. ~12 months.",
      },
      {
        property: "og:title",
        content: "Odoo ERP Case Study: 5 Tools → 1 System | Kalk Solutions",
      },
      {
        property: "og:description",
        content:
          "From 5 disconnected tools to one unified Odoo manufacturing system.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => <CaseStudyTemplate data={data} slug="erp-unified-system" />,
});
