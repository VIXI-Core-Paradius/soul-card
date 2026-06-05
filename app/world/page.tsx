import type { Metadata } from "next";
import { PageHeader, Section, Note } from "@/components/Section";
import { ATTRIBUTES, LINEAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "世界観",
  description: "8つの属性、22の系譜が織りなす Sage Record - Soul Card の世界観。",
};

export default function WorldPage() {
  return (
    <>
      <PageHeader
        eyebrow="WORLD & STORY"
        title="世界観"
        lead="魂が記録され、語り継がれる世界。8つの属性と22の系譜が、終わらない物語を紡いでいく。"
      />

      <Section title="この世界について">
        <div className="space-y-4 leading-relaxed text-foreground/90">
          <p>
            ［ここに世界の成り立ちを書きます。タイトルの “Record（記録）” と “Soul（魂）”
            が世界観の核です。たとえば「かつて世界のすべては〈記録〉として刻まれ、
            魂を持つ者だけがその頁を書き換えられる」といった設定にすると、
            ゲームの〈レコードフェーズ〉や〈ソウルユニット〉と物語が結びつきます。］
          </p>
          <Note>
            ※ この段落はプレースホルダです。あなたの設定を教えてもらえれば、本文に書き起こします。
          </Note>
        </div>
      </Section>

      <Section title="8つの属性">
        <p className="mb-8 max-w-2xl leading-relaxed text-muted">
          世界を構成する力は、8つの属性に分かれています。属性はカードの個性であり、
          デッキの戦い方を方向づける最初の選択です。
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {ATTRIBUTES.map((a) => (
            <div
              key={a.key}
              className="tile flex items-start gap-4 rounded-lg border border-border bg-surface p-5"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-serif text-xl font-bold text-background"
                style={{ background: a.color }}
              >
                {a.name}
              </span>
              <div>
                <p className="font-bold text-foreground">
                  {a.name}{" "}
                  <span className="ml-1 text-xs tracking-widest text-muted">
                    {a.en}
                  </span>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="22の系譜">
        <p className="mb-8 max-w-2xl leading-relaxed text-muted">
          この世界に生きる存在たちは「系譜（けいふ）」と呼ばれる種族・勢力に属します。
          系譜は同じ物語を共有し、ときに手を取り、ときに激しく対立します。
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {LINEAGES.map((l) => (
            <div
              key={l.en}
              className="tile rounded-md border border-border bg-surface px-4 py-3 text-center"
            >
              <p className="font-serif font-bold text-gold-bright">{l.name}</p>
              <p className="mt-0.5 text-[0.65rem] tracking-widest text-muted">
                {l.en}
              </p>
            </div>
          ))}
        </div>
        <Note>
          ※ 各系譜の関係性・物語はこれから追加します。「今回は主要〇勢力を紹介」と
          少しずつ掘り下げる連載形式にすると読みやすくなります。
        </Note>
      </Section>

      <Section title="物語のはじまり">
        <div className="space-y-4 leading-relaxed text-foreground/90">
          <p>
            ［プロローグ・あらすじをここに。短くてかまいません。“続きはゲームで” という
            引きで締めると、プレイへの導線になります。］
          </p>
          <Note>※ この段落もプレースホルダです。</Note>
        </div>
      </Section>
    </>
  );
}
