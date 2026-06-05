import { SITE } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-10 text-center">
        <p className="font-serif text-sm tracking-widest text-gold">
          {SITE.title}
        </p>
        <p className="mt-2 text-xs text-muted">
          個人開発のオリジナルトレーディングカードゲーム
        </p>
        <p className="mt-4 text-[0.65rem] text-muted">
          © {new Date().getFullYear()} {SITE.titleJa}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
