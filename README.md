# 鈴木牧場 公式ホームページ

オーガニック牛乳とチーズを製造・販売する鈴木牧場の公式ホームページです。

## プロジェクト概要

このプロジェクトは、Next.js 15 (App Router) + TypeScript + Tailwind CSS で構築されています。
StandardプランとPremiumプランの2つのプランに対応しており、Premiumプランではブログやニュース機能が利用できます。

## 主な特徴

- 🌿 **オーガニック重視のデザイン**: 牧場らしい緑と白を基調とした、優しく親しみやすいデザイン
- 🎬 **リッチなアニメーション**: スライダー、スクロールアニメーション、ホバーエフェクトなど
- 📱 **レスポンシブ対応**: スマートフォンからデスクトップまで最適化
- ⚡ **高速**: Next.js 15の最新機能を活用した高速なページ読み込み
- 🎨 **モダンなUI**: Framer Motionを使った滑らかなアニメーション

## プラン別機能

### Standardプラン
- トップページ（ヒーロースライダー、特徴、商品紹介、オーガニックこだわり、CTA）
- 会社概要ページ（代表挨拶、沿革、会社情報、アクセス）
- 商品紹介ページ（全商品一覧、商品詳細）
- お問い合わせフォーム（メール送信機能）

### Premiumプラン（Standardの機能に加えて）
- ブログ機能（記事一覧、記事詳細）
- ニュース・お知らせ機能（お知らせ一覧、詳細）
- microCMS連携対応（現在はモックデータ）

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **CMS**: microCMS (Premium機能、現在はモックデータ)
- **画像**: Unsplash（高品質なストック画像）

## ディレクトリ構造

```
suzuki_ranch/
├── app/                    # Next.js App Router
│   ├── about/             # 会社概要ページ
│   ├── blog/              # ブログページ (Premium)
│   ├── contact/           # お問い合わせページ
│   ├── news/              # ニュースページ (Premium)
│   ├── products/          # 商品紹介ページ
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx           # トップページ
│   └── globals.css        # グローバルCSS
├── components/
│   ├── common/            # 共通コンポーネント (Header, Footer)
│   ├── features/          # 機能別コンポーネント
│   └── ui/                # UIコンポーネント
├── data/                  # モックデータ
│   ├── mock-blog.ts       # ブログ記事のモックデータ
│   └── mock-news.ts       # ニュースのモックデータ
├── lib/                   # ユーティリティ関数
├── types/                 # TypeScript型定義
│   └── index.ts
├── public/                # 静的ファイル
├── tailwind.config.ts     # Tailwind CSS設定
├── tsconfig.json          # TypeScript設定
└── package.json
```

## セットアップ

### 必要な環境

- Node.js 18.17以上
- npm または yarn

### インストール

```bash
# リポジトリのクローン
git clone <repository-url>
cd suzuki_ranch

# 依存関係のインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

### ビルド

```bash
npm run build
npm start
```

## microCMS連携について（Premium機能）

現在はモックデータで動作していますが、以下の手順でmicroCMSと連携できます。

### 1. microCMSのセットアップ

1. [microCMS](https://microcms.io/)でアカウントを作成
2. サービスを作成
3. 以下のAPIを作成:
   - **ブログ (blog)**: タイトル、本文、抜粋、公開日、サムネイル、カテゴリー、タグ
   - **ニュース (news)**: タイトル、本文、公開日、カテゴリー

### 2. 環境変数の設定

`.env.local`ファイルを作成し、以下を設定:

```bash
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

### 3. データ取得処理の実装

`lib/microcms.ts`を作成し、microCMSからデータを取得する処理を実装します。

## カスタマイズ

### カラーテーマの変更

`tailwind.config.ts`の`colors.ranch`セクションを編集してください。

```typescript
colors: {
  ranch: {
    primary: '#2d5016',  // 深い緑
    light: '#4a7c2a',    // 明るい緑
    cream: '#fef9f3',    // クリーム色
    brown: '#8b6f47',    // ブラウン
    gold: '#d4af37',     // ゴールド
  },
}
```

### お問い合わせフォームの送信先変更

`app/contact/page.tsx`の`handleSubmit`関数を編集し、実際のメール送信APIを実装してください。

## デプロイ

### Vercelへのデプロイ（推奨）

1. GitHubにリポジトリをプッシュ
2. [Vercel](https://vercel.com/)でプロジェクトをインポート
3. 環境変数を設定（microCMS使用時）
4. デプロイ

### その他のホスティングサービス

- Netlify
- AWS Amplify
- CloudFlare Pages

など、Next.jsに対応したサービスで利用できます。

## ライセンス

ISC

## お問い合わせ

プロジェクトに関するお問い合わせは、お気軽にご連絡ください。
