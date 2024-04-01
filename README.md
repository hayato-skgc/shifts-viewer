# シフト閲覧サイト

[東京理科大学野田地区理大祭実行委員会](https://nodaridaisai.com)で利用されている、シフトを一覧化し、表示するためのサイトです。

## 利用技術

- フレームワーク: [Next.js](nextjs.org)
- バックエンド: Next.js + [tRPC](trps.io)
- ORM: [Prisma](prisma.io)

## デプロイ方法

[Vercel](vercel.com)にデプロイすることを想定していますが、NetlifyやCloudflare Pagesなど、サーバーサイドで関数が実行できるフロントエンド環境であれば動くかと思います。

### データベース

[Prismaが対応しているデータベース](https://www.prisma.io/docs/orm/reference/supported-databases)であればどのデータベースでも構いません。Vercelにデプロイするなら[Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)が比較的簡単かと思います。
