import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyTemplate, type CaseStudyData } from "@/components/CaseStudyTemplate";

const data: CaseStudyData = {
  tag: "ERP Transformation",
  industry: "Multi-Department Manufacturer (confidential)",
  location: "International",
  result: "Margin leakage identified and recovered",
  heroStat: "1/2 → Full",
  heroStatLabel: "Margin Recovered",
  title:
    "How One Manufacturer Discovered They Were Running at Half Their Expected Margin",
  intro:
    "A multi-department manufacturer running on Procore, Sage, Monday.com, and QuickBooks discovered — only after consolidating into Odoo — that uncontrolled discounting and pricing chaos was silently halving their margin.",
  business:
    "A multi-department manufacturer with international operations. Several business lines, multiple sales channels, and a leadership team that knew their numbers — or thought they did. Each department had chosen its own tool over the years.",
  challenge:
    "Procore for project management. Sage for accounting. Monday.com for ops. QuickBooks for one entity. None of these systems talked to each other. Different teams gave different discounts. Pricing was inconsistent. Approval workflows existed only in inboxes. Margin leakage was invisible because no one had a single number to look at.",
  whatWeDid: [
    "Audited every quote, discount, and approval flow across all four tools — and built a consolidated view of where margin was actually leaking.",
    "Designed the Odoo solution with a centralised quotation system, locked-in price lists, admin-controlled discount approval workflows, and role-based dashboards for management, employees, and managers.",
    "Migrated all four tools' data into Odoo — Sales, Purchase, Inventory, Accounting, Project — with parallel running for validation.",
    "Implemented multi-company structure inside Odoo so each entity reports independently while leadership sees consolidated views.",
    "Trained every role on the new approval workflows and rolled out role-based dashboards before go-live.",
  ],
  resultBody:
    "The leadership team finally had one source of truth on pricing, margin, and discounts. Standardised pricing eliminated silent discount leakage across the sales team. Approval workflows enforced control without slowing deals down. Complete operational visibility across departments.",
  takeaway:
    "When you can't see your margin in one place, you don't have a margin problem — you have a system problem.",
  timeline: "~24 months (complex multi-entity)",
};

export const Route = createFileRoute("/case-studies/erp-margin-recovery")({
  head: () => ({
    meta: [
      {
        title:
          "Odoo ERP Case Study: How One Manufacturer Discovered They Were Running at Half Their Expected Margin | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "Multi-department manufacturer consolidated Procore + Sage + Monday + QuickBooks into Odoo. Margin leakage identified and recovered. ~24 months.",
      },
      {
        property: "og:title",
        content: "Odoo ERP Margin Recovery Case Study | Kalk Solutions",
      },
      {
        property: "og:description",
        content:
          "From 4-tool chaos to one unified Odoo system — margin recovered.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => <CaseStudyTemplate data={data} slug="erp-margin-recovery" />,
});
