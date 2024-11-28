# フォロワー消失を通知するプラグイン(β)

* TOC
{:toc}

> [!WARNING]
> 本プラグインを利用した際の揉め事等には一切関与致しません。
> 尚、本プラグインを利用することで上記内容に同意するものとする。
> 自己責任でどうぞ。

## 内容
通知対象
- アカウント削除
- ブロック(したorされた)
- リムーブされた

上記、自分のフォロワーからいなくなったものが通知対象  

> [!TIP]
> サーバーと応答がとれなくなったり
> サービスが終了したとしても、
> フォロワーからいなくなるわけではないので通知はきません。  
> プラグインなのでアプリケーションを閉じている間には通知されません。

## 設定
1. フォロワー消失確認の更新間隔(分)  
既定値(10)  
2. ブロックしたユーザーの通知のON/OFF  
ブロックしたユーザーの通知をするかどうか  
既定値(ON)  
3. 詳細情報のON/OFF  
ユーザーとの関係やサーバー情報などを表示するかどうか  
既定値(ON)

## 通知例

1.アカウント削除(or不明)
> アカウント名  
> 　状態: アカウント削除(or不明)  
> 　サーバーの状態: 応答なし  
> 　あなたのメモ: こんな鯖ないけどね  

アカウント削除  
&サーバーの状態が応答なしなので、  
おそらくメンテ中かダウン中  
※メモは前回保存した時点のものを表示  

2.ブロックされている
> アカウント名  
> 　状態: ブロックされています  
> 　あなたのメモ: キモ  

3.ブロックした
> アカウント名  
> 　状態: ブロックしています  
> 　サーバーの状態: 配信中  
> 　あなたのメモ: 荒らしてるかもしれない  

4.アカウント削除
> アカウント名  
> 　状態: アカウント削除  
> 　サーバーの状態: 配信中  

5.リムーブA
> アカウント名  
> 　状態: リムーブされました(片思い)  
> 　サーバーの状態: 配信中  

6.リムーブB
> アカウント名  
> 　状態: リムーブされました(無関心)  
> 　サーバーの状態: 配信中  

7.サーバーがサービス終了
> アカウント名  
> 　状態: アカウント削除(or不明)  
> 　サーバーの状態: 手動停止中  
> 　あなたのメモ: ○○に垢は元から無い

稀ではあるが  
アカウント削除後にサーバーのサービスが終了した  
※メモは前回保存した時点のものを表示  

## ソース
[gone_follower_notification.is](https://github.com/elysion-pre/MisskeyPlugins/blob/main/src/gone_follower_notification.is)

## インストール

### submarin.online
- [インストールする](https://submarin.online/install-extentions?url=https://elysion-pre.github.io/MisskeyPlugins/json/gone_follower_notification.json&hash=1f80be46706b91e2f959621efb4c5433b18fa3f5f00f45aeba6a4b77157c0118d0093c7329228c81c441bda48f561474cd5259ecc4fcf999e1ea5d5d3eb049e0)

### msk.kitazawa.me
- [インストールする](https://msk.kitazawa.me/install-extentions?url=https://elysion-pre.github.io/MisskeyPlugins/json/gone_follower_notification.json&hash=1f80be46706b91e2f959621efb4c5433b18fa3f5f00f45aeba6a4b77157c0118d0093c7329228c81c441bda48f561474cd5259ecc4fcf999e1ea5d5d3eb049e0)

### misskey.stream
- [インストールする](https://misskey.stream/install-extentions?url=https://elysion-pre.github.io/MisskeyPlugins/json/gone_follower_notification.json&hash=1f80be46706b91e2f959621efb4c5433b18fa3f5f00f45aeba6a4b77157c0118d0093c7329228c81c441bda48f561474cd5259ecc4fcf999e1ea5d5d3eb049e0)

### mi.kochudaho.me
- [インストールする](https://mi.kochudaho.me/install-extentions?url=https://elysion-pre.github.io/MisskeyPlugins/json/gone_follower_notification.json&hash=1f80be46706b91e2f959621efb4c5433b18fa3f5f00f45aeba6a4b77157c0118d0093c7329228c81c441bda48f561474cd5259ecc4fcf999e1ea5d5d3eb049e0)

----

[サイトのトップ]({{ site.baseurl }})
