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
    }
    // ... 他のデータ ...
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
  