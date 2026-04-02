import { ReactNode } from "react";

type SectionCardProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function SectionCard({ eyebrow, title, children }: SectionCardProps) {
  return (
    <article className="panel">
      <span className="eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <div className="panel-copy">{children}</div>
    </article>
  );
}
