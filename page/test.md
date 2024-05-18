# テストプラグイン

* TOC
{:toc}

## 内容
ノートメニューに【表示：ノートの内容をプレーンテキストで見る】を追加します。

## 使い方

1. プレーンテキストで表示したいノートのメニューボタン(・・・)を押下
2. 【表示：ノートの内容をプレーンテキストで見る】を押下
3. ノートの内容がプレーンテキストで表示されます  

## ソース
[plain_text.is](https://github.com/elysion-pre/MisskeyPlugins/blob/main/src/plain_text.is)

## インストール

### submarin.online
- [インストールする](https://submarin.online/install-extentions?url=https://elysion-pre.github.io/MisskeyPlugins/json/plain_text.json&hash=ea380a154b41e9790ea78fdd0fa8a4672591d6eb10c582c24196394c0b777742aee2a08172477735a67338b9174ba89a8ecba9f7750d9c558559d76d7c8241df)


### msk.kitazawa.me
- [インストールする](https://msk.kitazawa.me/install-extentions?url=https://elysion-pre.github.io/MisskeyPlugins/json/plain_text.json&hash=ea380a154b41e9790ea78fdd0fa8a4672591d6eb10c582c24196394c0b777742aee2a08172477735a67338b9174ba89a8ecba9f7750d9c558559d76d7c8241df)


### test

ドメインを入力してください:
<input type="text" id="domainInput" placeholder="misskey.io">
<button onclick="createMisskeyShareLink('https://elysion-pre.github.io/MisskeyPlugins/json/plain_text.json', 'ea380a154b41e9790ea78fdd0fa8a4672591d6eb10c582c24196394c0b777742aee2a08172477735a67338b9174ba89a8ecba9f7750d9c558559d76d7c8241df')">リンク生成</button>

<div id="shareLink" style="margin-top: 20px;">インストール</div>

{% raw %}
<script src="scripts/share.js"></script>
{% endraw %}
