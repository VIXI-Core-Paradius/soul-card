// α版配布情報。配布ファイルが確定したら url を差し替えるだけでページが有効化される。
// url が "#" の間はダウンロードボタンが「準備中」表示になる。
export const DOWNLOAD = {
  buildName: "Soul Card Akashic",
  version: "v0.1.0 (α)",
  platform: "Windows（64bit）",
  // TODO: 配布ファイル（zip）の URL が決まったら差し替える
  url: "#",
  // 解凍後のおおよその容量（確定後に更新）
  size: "（容量は確定後に記載）",
};

export const isDownloadReady = DOWNLOAD.url !== "#";
