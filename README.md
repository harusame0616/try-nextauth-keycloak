# try-nextauth-keycloak

## how to use

### STEP1: サービスの起動

```sh
docker-compose up
```

- KEYCLOAK: http://localhost:18080/admin
- web-app: http://localhost:13000

### STEP2: KEYCLOAK のクライアントを作成

- KEYCLOAK 管理コンソールを開く(http://localhost:18080/admin)
- メニュー -> Clients -> Create client

設定の詳細はこちらを参照
https://www.keycloak.org/docs/latest/server_admin/index.html#proc-creating-oidc-client_server_administration_guide

#### page 1

- Client Type: OpenID Connect
- Client ID: {任意の ID}
- Name:
- Description:
- Always display in UI: OFF

#### page 2

- Client authentication: ON
- Authorization:
- Authentication flow: Standard flow のみチェック

#### page 3

- Root URL: http://localhost:13000
- Home URL:
- Valid redirect URLs: http://localhost:13000/api/auth/callback/keycloak
- Valid post logout redirect URIs:
- Web origins: http://localhost:13000

### STEP3: 環境変数の設定

- env.local を .env.local にリネーム

- NEXTAUTH_SECRET に `openssl rand -base64 32` で生成した値を設定

- KEYCLOAK_CLIENT_ID に 先程作成した KEYCLOAK の Client ID を設定
- KEYCLOAK_CLIENT_SECRET に 先程作成したクライアントの詳細画面の Credentials タブにある Client Secret の値を設定

- KEYCLOAK_ISSUER の {YOUR_REALMS} には KEYCLOAK の Realms の値(デフォルトでは MASTER)を設定

### STEP4: HOSTS の修正

hosts ファイルに以下を追記

- mac: /private/etc/hosts

```
127.0.0.1 idp
```

### ログイン

- シークレットブラウザで WebApp(http://localhost:13000) にアクセス
- ログインボタンをクリック
- ログイン画面で admin / password と入力してログイン
- WebApp にリダイレクトされログイン情報が表示されていれば成功

### 参考

- https://qiita.com/kanedaq/items/2678cfe978724dbca117
- https://zenn.dev/tfutada/articles/5557b780050574
- https://github.com/nextauthjs/next-auth/issues/6733
