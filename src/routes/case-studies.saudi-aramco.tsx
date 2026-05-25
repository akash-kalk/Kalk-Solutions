import { createFileRoute } from "@tanstack/react-router";
import { CaseStudyTemplate, type CaseStudyData } from "@/components/CaseStudyTemplate";

const data: CaseStudyData = {
  tag: "Lead Generation",
  industry: "Precision Parts / Engineering",
  location: "Pune, India",
  result: "Saudi Aramco supply opportunity created",
  heroStat: "Saudi Aramco",
  heroStatLabel: "Opportunity Unlocked",
  title:
    "How a Precision Parts Manufacturer Got the Opportunity to Work With Saudi Aramco",
  intro:
    "A Pune-based precision parts manufacturer with zero international presence received a supply opportunity from Saudi Aramco — one of the world's largest oil companies — through a focused international digital strategy.",
  business:
    "A Pune-based precision components manufacturer serving Indian industrial OEMs. Strong engineering capability and ISO certifications, but international business was non-existent. They were entirely dependent on local agents who occasionally surfaced Gulf opportunities.",
  challenge:
    "Zero international visibility. No Gulf-market positioning. Their website spoke to Indian buyers in Indian language. International procurement teams searching for trusted Indian precision suppliers had no path to find them.",
  whatWeDid: [
    "Rebuilt the website with international buyer positioning — global credibility cues, ISO badges prominent, capability statements written for Gulf and Western procurement teams.",
    "Implemented Gulf-market SEO targeting the specific industrial keywords used by enterprise procurement teams in UAE, Saudi Arabia, and Oman.",
    "Built a digital credibility package — capacity sheets, quality processes, certifications, and capability documentation formatted for international tier-1 buyer evaluation.",
    "Created targeted outbound LinkedIn positioning aimed at Gulf manufacturing procurement decision-makers.",
  ],
  resultBody:
    "The business received the opportunity to supply Saudi Aramco — one of the world's largest oil and energy companies — through their new international funnel. A type of opportunity their entire industry had assumed was reserved for far larger players.",
  takeaway:
    "Global enterprise buyers don't care where you're located. They care whether you can prove capability — clearly, credibly, and online.",
};

export const Route = createFileRoute("/case-studies/saudi-aramco")({
  head: () => ({
    meta: [
      {
        title:
          "How a Precision Parts Manufacturer Got the Opportunity to Work With Saudi Aramco | Kalk Solutions",
      },
      {
        name: "description",
        content:
          "A Pune-based precision parts manufacturer received a Saudi Aramco supply opportunity through international digital positioning. Full case study.",
      },
      { property: "og:title", content: "Saudi Aramco Opportunity Case Study | Kalk Solutions" },
      {
        property: "og:description",
        content:
          "From zero international visibility to a Saudi Aramco supply opportunity.",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: () => <CaseStudyTemplate data={data} slug="saudi-aramco" />,
});
