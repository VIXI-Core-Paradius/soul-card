import type { Metadata } from "next";
import { PageHeader, Section, Note } from "@/components/Section";
import { DOWNLOAD, isDownloadReady } from "@/lib/download";

export const metadata: Metadata = {
  title: "ダウンロード",
  description:
    "Soul Card Akashic α版（Windows向け）のダウンロードページ。インストール手順と注意事項を掲載。",
};

export default function DownloadPage() {
  return (
    <>
      <PageHeader
        eyebrow="DOWNLOAD"
        title="α版ダウンロード"
        lead={`「${DOWNLOAD.buildName}」のα版を Windows 向けに無料配布しています。開発途中のバージョンです ― 数値・効果・仕様は今後変更される場合があります。`}
      />

      {/* ダウンロード本体 */}
      <Section>
        <div className="rounded-lg border border-gold/40 bg-gradient-to-b from-surface to-surface-2 p-7 md:p-9">
          <p className="text-xs tracking-[0.3em] text-gold">
            {DOWNLOAD.platform}
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-gold-bright md:text-3xl">
            {DOWNLOAD.buildName}
          </h2>
          <p className="mt-1 text-sm tracking-widest text-muted">
            {DOWNLOAD.version}
          </p>

          <div className="mt-7">
            {isDownloadReady ? (
              <a
                href={DOWNLOAD.url}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-9 py-3.5 text-sm font-bold tracking-widest text-background transition-colors hover:bg-gold-bright"
              >
                ダウンロード（zip）
              </a>
            ) : (
              <span
                aria-disabled
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-border bg-surface-2/60 px-9 py-3.5 text-sm font-bold tracking-widest text-muted"
              >
                準備中
              </span>
            )}
            <p className="mt-3 text-xs text-muted">
              {isDownloadReady
                ? `配布形式：zip ／ ${DOWNLOAD.size}`
                : "配布ファイルの準備が整い次第、ここからダウンロードできるようになります。"}
            </p>
          </div>
        </div>
      </Section>

      {/* 動作環境 */}
      <Section title="動作環境">
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="rounded-md border border-border bg-surface p-4 text-sm leading-relaxed text-muted">
            <span className="font-bold text-foreground">OS</span>
            ：Windows 10 / 11（64bit）
          </li>
          <li className="rounded-md border border-border bg-surface p-4 text-sm leading-relaxed text-muted">
            <span className="font-bold text-foreground">必要なソフト</span>
            ：zip を解凍できる環境（標準機能で可）
          </li>
          <li className="rounded-md border border-border bg-surface p-4 text-sm leading-relaxed text-muted">
            <span className="font-bold text-foreground">インストール</span>
            ：不要（解凍してそのまま起動）
          </li>
          <li className="rounded-md border border-border bg-surface p-4 text-sm leading-relaxed text-muted">
            <span className="font-bold text-foreground">料金</span>
            ：無料
          </li>
        </ul>
      </Section>

      {/* 導入手順 */}
      <Section title="インストールと起動">
        <ol className="space-y-3">
          {[
            "ダウンロードした zip ファイルを解凍します。",
            `解凍したフォルダ（実行ファイルと「(ゲーム名)_Data」フォルダなど）を、フォルダごと同じ階層に保ったまま置きます。中身を分けて移動しないでください。`,
            "フォルダ内の実行ファイル（.exe）をダブルクリックして起動します。",
          ].map((step, i) => (
            <li
              key={i}
              className="tile flex items-start gap-4 rounded-lg border border-border bg-surface p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-sm font-bold text-gold-bright">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-muted">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-6">
          <Note>
            起動時に「<strong className="text-foreground">Windows によって PC が保護されました</strong>
            」という青い画面（SmartScreen）が出ることがあります。これは署名のない個人開発アプリで
            一般的に表示されるもので、ウイルスではありません。
            <strong className="text-foreground">「詳細情報」→「実行」</strong>
            の順にクリックすると起動できます。不安な場合はお使いのウイルス対策ソフトでスキャンしてから実行してください。
          </Note>
        </div>
      </Section>

      {/* α版についての注意 */}
      <Section title="α版についての注意">
        <ul className="space-y-2.5 text-sm leading-relaxed text-muted">
          <li className="flex gap-2">
            <span className="text-gold">―</span>
            開発途中のバージョンです。カードの数値・効果・名称やルールは予告なく変更されることがあります。
          </li>
          <li className="flex gap-2">
            <span className="text-gold">―</span>
            一部の効果やカードは未実装・調整中です。動作が不安定な場合があります。
          </li>
          <li className="flex gap-2">
            <span className="text-gold">―</span>
            アップデートによりセーブデータの互換性が失われる可能性があります。
          </li>
          <li className="flex gap-2">
            <span className="text-gold">―</span>
            画面右下にバージョン（{DOWNLOAD.version}）が表示されます。不具合の報告時にご確認ください。
          </li>
        </ul>
      </Section>
    </>
  );
}
