import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyTemplate, type CaseStudyData } from "@/components/CaseStudyTemplate";

const data: CaseStudyData = {
  tag: "Lead Generation",
  industry: "Steel / Metal Manufacturing",
  location: "Maharashtra, India",
  result: "₹25 Crore single RFQ generated",
  heroStat: "₹25 Cr",
  heroStatLabel: "Single RFQ",
  title: "How One Indian Manufacturer Received a ₹25 Crore RFQ Through Digital Marketing",
  intro:
    "A mid-sized Maharashtra steel manufacturer with no digital presence received a single RFQ worth ₹25 crore from a large industrial procurement team — entirely through their new digital funnel.",
  business:
    "A Maharashtra-based steel and metal manufacturer with established factory operations and a strong reputation in their local network. Revenue between ₹15 Cr and ₹30 Cr. All business historically came through referrals and trade exhibitions.",
  challenge:
    "Despite product strength, the business was completely invisible to enterprise procurement teams. No website, no SEO, no LinkedIn presence. When large industrial buyers searched online for the materials they manufactured, competitors with weaker products but stronger digital systems showed up first.",
  whatWeDid: [
    "Built a buyer-facing website engineered for enterprise B2B procurement teams — credibility-first design, technical specifications, ISO and certification visibility.",
    "Implemented technical and on-page SEO targeting high-value industrial keywords used by procurement teams (not retail buyers).",
    "Launched a credibility package — case examples, capability statements, and capacity sheets formatted for procurement evaluation.",
    "Built an inquiry funnel that automatically captured RFQs, scored them by size, and routed serious enquiries directly to the founder's WhatsApp and email.",
  ],
  resultBody:
    "Within months, the business received an RFQ worth ₹25 crore from a major industrial procurement team — a single inquiry larger than any deal in the company's history. The buyer specifically cited the website's technical depth and credibility positioning as the reason they reached out.",
  takeaway:
    "The buyer who would give you a ₹25 crore order is searching for you online today. Whether they find you — or your competitor — depends on whether you've built the system.",
};

export const Route = createFileRoute("/case-studies/25-crore-rfq")({
  head: () => ({
    meta: [
      {
        title:
          "How One Indian Manufacturer Received a ₹25 Crore RFQ Through Digital Marketing | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "A Maharashtra steel manufacturer with no digital presence received a single ₹25 crore RFQ through a new digital funnel. Read the full case study.",
      },
      { property: "og:title", content: "₹25 Crore RFQ Case Study | Kalk Solutions" },
      {
        property: "og:description",
        content:
          "From zero digital presence to a single ₹25 crore RFQ — anonymised case study.",
      },
      { property: "og:type", content: "article" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Case Studies", item: "/case-studies" },
            { "@type": "ListItem", position: 3, name: "₹25 Crore RFQ" },
          ],
        }),
      },
    ],
  }),
  component: () => <CaseStudyTemplate data={data} slug="25-crore-rfq" />,
});
