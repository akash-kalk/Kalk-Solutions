import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Props = {
  tag: string;
  title: string;
  excerpt: string;
  to: string;
  params?: Record<string, string>;
};

export function CaseStudyCard({ tag, title, excerpt, to }: Props) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/40"
    >
      <span className="self-start rounded-sm bg-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
        {tag}
      </span>
      <h3 className="mt-4 font-display text-xl font-bold leading-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
        Read full story
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
