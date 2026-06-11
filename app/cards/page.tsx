import type { Metadata } from "next";
import { PageHeader, Section, Note } from "@/components/Section";
import CardsBrowser from "@/components/CardsBrowser";

export const metadata: Metadata = {
  title: "カードリスト",
  description:
    "Soul Record - Soul Card の実装済みカード一覧。ソウルユニット・系譜ネクサス・ユニットをコスト順に掲載。",
};

export default function CardsPage() {
  return (
    <>
      <PageHeader
        eyebrow="CARD LIST"
        title="カードリスト"
        lead="現在実装されているカードの一覧です。コスト→名前の順で並んでいます。数値や効果は調整中のものを含みます。"
      />

      <Section>
        <CardsBrowser />
        <div className="mt-10">
          <Note>
            ※ 掲載カードは開発版のデータです。バランス調整により数値・効果・名称が
            変更される場合があります。場で生成されるトークンや、調整中の一部カードは
            掲載していません。
          </Note>
        </div>
      </Section>
    </>
  );
}
