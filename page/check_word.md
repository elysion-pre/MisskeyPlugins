# ワード検知で投稿内容を強制変更するプラグイン

* TOC
{:toc}

## 内容
投稿する際に指定されたワードが入っていた場合、 
自動でcwやホーム(フォロワー)投稿や連合を切るなど強制的に変更することが可能です。

> [!NOTE]
> ダイレクト投稿時は無効

## 使い方

> [!TIP]
> 各機能はプラグインの設定より「検知ワード設定」や「無効/有効」が設定可能です。  
> 初期設定では
> - 検知ワード
>   - うんこ,ちんちん
> - cw：ワード検知時のON/OFF
>   - ON
> - 注釈：ワード検知時の注釈に挿入するテキスト(空白・空文字はNG)
>   - cw(自動)
> - 公開範囲：ワード検知時のON/OFF
>   - ON
> - 公開範囲
>   - followers
> - 連合なし：ワード検知時のON/OFF
>   - ON

1. 上記設定の場合、「うんこ」か「ちんちん」がノート内に含まれていた場合
   cwが有効になり「cw(自動)」が挿入され、
   公開範囲が「フォロワー投稿」に変更され、
   「連合なし」になります。

## ソース
[check_word.is](https://github.com/elysion-pre/MisskeyPlugins/blob/main/src/check_word.is)

## インストール

### submarin.online
- [インストールする](https://submarin.online/install-extentions?url=https://elysion-pre.github.io/MisskeyPlugins/json/check_word.json&hash=00e693bf17ec0f34937dca09c2fb295f3b09a634ca0e4eb90d4f45e9ebfe3be7e7cfab74679c81b11ca38626e5f588defa5ff7cc029c11c692a0db937dbdba7e)

### msk.kitazawa.me
- [インストールする](https://msk.kitazawa.me/install-extentions?url=https://elysion-pre.github.io/MisskeyPlugins/json/check_word.json&hash=00e693bf17ec0f34937dca09c2fb295f3b09a634ca0e4eb90d4f45e9ebfe3be7e7cfab74679c81b11ca38626e5f588defa5ff7cc029c11c692a0db937dbdba7e)

### misskey.stream
- [インストールする](https://misskey.stream/install-extentions?url=https://elysion-pre.github.io/MisskeyPlugins/json/check_word.json&hash=00e693bf17ec0f34937dca09c2fb295f3b09a634ca0e4eb90d4f45e9ebfe3be7e7cfab74679c81b11ca38626e5f588defa5ff7cc029c11c692a0db937dbdba7e)

----

[サイトのトップ]({{ site.baseurl }})
