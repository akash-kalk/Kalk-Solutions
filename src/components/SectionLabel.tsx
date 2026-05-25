type Props = { children: React.ReactNode; className?: string };

export function SectionLabel({ children, className }: Props) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
