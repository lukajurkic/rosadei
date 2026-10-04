import Link from "next/link";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  const iconSrc = inverse ? "/icon_white.png" : "/icon_black.png";

  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="RosaDei Grupa početna">
      <img
        src={iconSrc}
        alt="RosaDei Grupa logo"
        className="h-8 w-8 object-contain shrink-0"
        width={32}
        height={32}
      />
      <span className="font-display text-[15px] font-bold uppercase tracking-[0.18em]">
        RosaDei <span className={inverse ? "text-charcoal-muted" : "text-muted-foreground"}>Grupa</span>
      </span>
    </Link>
  );
}
