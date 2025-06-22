document.getElementById('collect').addEventListener('click', async () => {  //取得ボタンidを検索してaddEvent  async非同期
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true }); //今のタブの情報を取得  await終わったら次へ
  await chrome.scripting.executeScript({    //現在のタブでcollectTooltips関数を実行
    target: { tabId: tab.id },
    function: collectTooltips
  });
  chrome.tabs.create({ url: chrome.runtime.getURL('results.html') });   //結果表示用のresult.htmlを表示
});

function collectTooltips() {
  const elements = document.querySelectorAll('.tooltip');   //tooltipを探す
  const data = {};
  elements.forEach((el, i) => {
    data[`tooltip_${i + 1}`] = el.innerText || '';          //中身を取得
  });
  localStorage.setItem('tooltipData', JSON.stringify(data));
}
