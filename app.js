// 仮のJSONデータ
const excuses = [
    {
      "id": "migita",
      "situation": "遅刻した時",
      "excuse": "電車で遅れました。"
    },
    {
      "id": "tanaka",
      "situation": "会議中に居眠り",
      "excuse": "前夜に仕事がありました。"
    },
    {
      "id": "sato",
      "situation": "忘れ物したとき",
      "excuse": "風で飛ばされました。"
    },
    {
      "id": "kinoko",
      "situation": "無駄遣いしたとき",
      "excuse": "そのうち使います。"
    },
    {
      "id": "kato",
      "situation": "花瓶壊しました",
      "excuse": "地震が起きました。"
    },
    {
      "id": "neet",
      "situation": "バイトを無断欠勤してしまいました",
      "excuse": "体調が悪くて起きれませんでした。"
    },
    {
      "id": "apple",
      "situation": "彼女に他の女友達と遊んでいるのをばれました",
      "excuse": "偶然会いました。"
    },
    {
      "id": "yano",
      "situation": "上司から頼まれていた仕事を忘れていました",
      "excuse": "ちょうど今からやるところです。"
    },
    // ... 他のデータ ...
    {
      "id": "syota",
      "situation": "お母さんからのお使いで足りないものがありました",
      "excuse": "売ってなかったです。"
    }
  ];
  
// データをHTMLに変換
function generateHTML(data) {
let html = '';

for (let item of data) {
    html += `
    <div class="item">
        <div class="content">
        <div class="row">
            <span class="label">ID:</span>
            <span class="data">${item.id}</span>
        </div>
        <div class="row">
            <span class="label">状況:</span>
            <span class="data">${item.situation}</span>
        </div>
        <div class="row">
            <span class="label">言い訳内容:</span>
            <span class="data">${item.excuse}</span>
        </div>
        </div>
        <div class="actions">
        <span class="icon">👍</span>
        <a href="https://instagram.com" target="_blank" class="instagram-icon"></a>
        <span class="icon">💬</span>
        </div>
    </div>
    `;
}

return html;
}

// HTMLをページに挿入
document.querySelector('.list-container').innerHTML = generateHTML(excuses);
