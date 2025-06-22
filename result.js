const container = document.getElementById('container');
const data = JSON.parse(localStorage.getItem('tooltipData') || '{}');

for (const key in data) {
const div = document.createElement('div');  //div追加
div.textContent = `${key}: ${data[key]}`;   //オブジェクト追加
container.appendChild(div);                 //要素追加
}
