//console.log(document.querySelectorAll(".tooltip"));       //NodeList[span#2025-]
//console.log(document.getElementsByClassName("tooltip"));  //HTMLCollection[span#2025-   ]
function collectElements() {
    const elements = document.querySelectorAll(".tooltip"); //getElementsByClassNameじゃだめ
    const result = {};

    elements.forEach(element => {
        const id = element.id;
        const innerText = element.innerText;

        const idMatch = id.match(/GXTC\d{4}/);
        let valueMatch = innerText.match(/～\s*(.*)/);

        if (idMatch) {
            result[idMatch] = valueMatch;
        }
    });
    return result;
}

const result = collectElements();
console.log(result);

const container = document.getElementById('container');   //コンテナid検索 

for (const key in result) {
    const div = document.createElement('div');  //div追加
    div.textContent = `${key}: ${result[key]}`;   //オブジェクト追加
    container.appendChild(div);                 //要素追加
}
