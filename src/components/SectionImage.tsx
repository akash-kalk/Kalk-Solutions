type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  /** lazy by default — pass "eager" only for above-the-fold LCP images */
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
};

/**
 * Audience-relevant photography wrapper. Rounds, frames, and adds a caption
 * so the image reads as editorial, not stock.
 */
export function SectionImage({
  src,
  alt,
  caption,
  className,
  loading = "lazy",
  width = 1600,
  height = 1024,
}: Props) {
  return (
    <figure className={`overflow-hidden rounded-2xl border border-border bg-muted ${className ?? ""}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        className="h-full w-full object-cover"
      />
      {caption && (
        <figcaption className="border-t border-border bg-card px-4 py-3 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
