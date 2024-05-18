function createMisskeyShareLink(jsonUrl, text) {
    const domain = document.getElementById('domainInput').value;
    if (!domain) {
        alert('ドメインを入力してください');
        return;
    }

    const encodedDomain = encodeURIComponent(domain);
    const encodedJsonUrl = encodeURIComponent(jsonUrl);
    const hash = encodeURIComponent(text); // テキストをハッシュ化するなどして適切な形式に変換する必要があります

    const installUrl = `https://${encodedDomain}/install-extensions?url=${encodedJsonUrl}&hash=${hash}`;

    const shareLinkDiv = document.getElementById('shareLink');
    shareLinkDiv.innerHTML = `
        <p>Misskey共有リンク:</p>
        <a href="${installUrl}" target="_blank" id="shareLinkButton">Misskeyで共有</a>
    `;

    // リンクをクリックした時の処理を追加
    const shareLinkButton = document.getElementById('shareLinkButton');
    shareLinkButton.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトの動作をキャンセル
        window.open(installUrl, '_blank'); // 新しいウィンドウでリンクを開く
    });
}
