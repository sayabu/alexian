import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { assets } from "@/data/assets";
import { research } from "@/data/research";
export function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="eyebrow">
      <span>{number}</span>
      {children}
    </div>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowUpRight size={18} />
    </Link>
  );
}
export function Placeholder({
  id,
  compact = false,
}: {
  id: string;
  compact?: boolean;
}) {
  const asset = assets[id];
  if (asset.src)
    return (
      <div className={`approved-image ${compact ? "compact" : ""}`}>
        <Image
          src={asset.src}
          alt={asset.alt}
          width={asset.ratio === "16:9" ? 1920 : 1200}
          height={asset.ratio === "16:9" ? 1080 : 1200}
        />
      </div>
    );
  return (
    <div
      className={`placeholder ${compact ? "compact" : ""}`}
      role="img"
      aria-label={`Image placeholder: ${asset.alt}`}
    >
      <ImageIcon size={compact ? 24 : 38} strokeWidth={1} />
      <span>
        {id === "hospital-hero"
          ? "Your campus. The starting point."
          : "A human perspective."}
      </span>
      <small>
        IMAGE TO COME · {asset.id}
        <br />
        {asset.ratio} / {asset.pixels}
      </small>
    </div>
  );
}
export function Ref({ id }: { id: number }) {
  return (
    <sup>
      <a href={`#source-${id}`} aria-label={`Read source ${id}`}>
        [{id}]
      </a>
    </sup>
  );
}
export function Sources({ ids }: { ids: number[] }) {
  return (
    <aside className="sources">
      <h2>Sources & context</h2>
      {research
        .filter((s) => ids.includes(s.id))
        .map((s) => (
          <details key={s.id} id={`source-${s.id}`}>
            <summary>
              {s.id}. {s.title} <span>{s.type}</span>
            </summary>
            <p>
              {s.authors} · {s.publication} · {s.year}
            </p>
            <p>{s.method}</p>
            <p>{s.limitation}</p>
            {s.url && (
              <a href={s.url} target="_blank" rel="noreferrer">
                Read original source ↗
              </a>
            )}
          </details>
        ))}
    </aside>
  );
}
