# WordPress サイトにこのデザインを適用する方法

## 方法1: ヘッドレスWordPress構成（推奨）

このReactアプリを別のサーバーにデプロイして、WordPress REST APIからデータを取得する方法です。

### ステップ1: 管理画面でWordPress連携を設定

1. このアプリの管理画面にログイン
   - URL: `/admin/login`
   - ユーザー名: `admin`
   - パスワード: `admin123`

2. 「WordPress 連携」メニューをクリック

3. WordPress サイト URL を入力
   - 例: `https://trust-kensetsu.com`

4. 「接続テスト」をクリックして接続を確認

5. 「WordPress 連携を有効にする」にチェック

6. 「設定を保存」をクリック

### ステップ2: アプリをデプロイ

#### オプションA: Vercel（無料・簡単）

1. [Vercel](https://vercel.com) にアクセスしてアカウント作成

2. プロジェクトをGitHubにプッシュ

3. Vercelで「New Project」をクリック

4. GitHubリポジトリを選択

5. 自動的にデプロイされ、URLが発行されます
   - 例: `https://your-project.vercel.app`

6. このURLにアクセスすると、WordPressのデータを使用したReactデザインが表示されます

#### オプションB: Netlify（無料・簡単）

1. [Netlify](https://netlify.com) にアクセスしてアカウント作成

2. 「Add new site」→ 「Deploy manually」

3. このプロジェクトフォルダをドラッグ＆ドロップ

4. 自動的にビルド・デプロイされます

### ステップ3: カスタムドメインを設定（オプション）

- Vercel/Netlifyの設定で独自ドメインを追加できます
- 例: `new.trust-kensetsu.com`

---

## 方法2: WordPressテーマとして統合

ReactアプリをWordPressテーマに組み込む方法です（上級者向け）。

### 必要な手順

1. **Reactアプリをビルド**
   ```bash
   npm run build
   ```

2. **WordPressテーマフォルダに統合**
   - `build/` フォルダの内容をテーマフォルダにコピー
   - `index.php` を作成して、ビルドされたReactアプリを読み込む

3. **index.php の例**
   ```php
   <?php
   // index.php
   ?>
   <!DOCTYPE html>
   <html <?php language_attributes(); ?>>
   <head>
       <meta charset="<?php bloginfo( 'charset' ); ?>">
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <?php wp_head(); ?>
       <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/build/static/css/main.css">
   </head>
   <body>
       <div id="root"></div>
       <script src="<?php echo get_template_directory_uri(); ?>/build/static/js/main.js"></script>
       <?php wp_footer(); ?>
   </body>
   </html>
   ```

**注意**: この方法は技術的に複雑で、React RouterとWordPressのルーティングの調整が必要です。

---

## 方法3: 既存WordPressサイトと併用

既存のWordPressサイトはそのまま残し、このReactアプリを新しいフロントエンドとして使用する方法です。

### 構成例

- `https://trust-kensetsu.com` → 既存のWordPress（管理画面のみ使用）
- `https://new.trust-kensetsu.com` → このReactアプリ（公開フロントエンド）

### メリット

- ✅ 既存のWordPressサイトに影響なし
- ✅ WordPress管理画面で引き続きコンテンツ編集可能
- ✅ モダンで高速なフロントエンド
- ✅ セキュリティ向上（WordPressの脆弱性から分離）

---

## おすすめの構成

### 初期段階
1. **Vercel/Netlifyにデプロイ**して動作確認
2. WordPress連携を有効化してデータが正しく表示されるか確認

### 本番運用
1. カスタムドメインを設定
2. 既存のWordPress: `admin.trust-kensetsu.com`（管理画面専用）
3. 新しいReact: `trust-kensetsu.com`（公開サイト）

---

## よくある質問

### Q: WordPressの管理画面はどうなりますか？
A: そのまま使用できます。WordPress側でコンテンツを編集すると、Reactアプリに自動的に反映されます。

### Q: SEO対策は大丈夫ですか？
A: Vercel/Netlifyは自動的にSSR（サーバーサイドレンダリング）をサポートしているため、SEOに問題ありません。

### Q: 費用はかかりますか？
A: Vercel/Netlifyの無料プランで十分です。アクセスが増えた場合のみ有料プランを検討してください。

### Q: 既存のWordPressサイトを削除する必要がありますか？
A: いいえ、そのまま残してバックエンド（データ管理）として使用できます。

---

## 次のステップ

1. ✅ CORS設定完了（完了済み）
2. □ WordPress連携を有効化
3. □ Vercel/Netlifyにデプロイ
4. □ 動作確認
5. □ カスタムドメイン設定（オプション）

どの方法で進めますか？サポートが必要な場合はお知らせください！
