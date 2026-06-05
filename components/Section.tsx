import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        {eyebrow && (
          <p className="mb-3 text-xs tracking-[0.3em] text-gold">{eyebrow}</p>
        )}
        <h1 className="font-serif text-3xl font-bold tracking-wide text-foreground md:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-muted leading-relaxed">{lead}</p>}
      </div>
    </div>
  );
}

export function Section({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      {title && (
        <h2 className="heading-rule mb-8 font-serif text-2xl font-bold tracking-wide text-gold-bright">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-border bg-surface/50 px-4 py-3 text-sm text-muted">
      {children}
    </p>
  );
}
