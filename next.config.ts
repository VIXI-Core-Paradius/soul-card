import type { NextConfig } from "next";

// GitHub Pages はリポジトリ名のサブパス（例: https://<user>.github.io/<repo>/）で
// 配信されるため、本番ビルド時のみ basePath を付ける。
// デプロイ前に repo 名を環境変数で渡す:  NEXT_PUBLIC_BASE_PATH=/sage-record-site npm run build
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // 静的サイトとして out/ に書き出し（GitHub Pages 対応）
  trailingSlash: true, // /rules → /rules/index.html（サブパス配信で安全）
  basePath,
  images: {
    unoptimized: true, // 静的エクスポートでは next/image の最適化サーバが使えない
  },
};

export default nextConfig;
