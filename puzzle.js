'use strict'
// Please don't delete the 'use strict' line above
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

function createTile() { //タイル生成
  puzzle.innerHTML = "";    //毎回クリア
  for(let tile of tiles){   //9枚分繰り返し
    const div = document.createElement("div");  //9回divを作る
    if(tile === 0){            //0は空欄
      div.className = "blank";
      div.textContent = "";   
    }
    else{                       //それ以外は番号のタイル
      div.className = "tile";
      div.textContent = tile;
    }
    puzzle.appendChild(div);    //divをpuzzleに追加
  }
}

function swap(index, target) { //配列の入れ替え replaceは恒久より　swap一時的
  let pending = tiles[index];
  tiles[index] = tiles[target];
  tiles[target] = pending;
  createTile();           //タイル生成
}

function move(eventKey) {  //方向(event.key)
  const index = tiles.indexOf(0);  //0のインデックスは?
  const x = index % 3;                //X座標　壁判定のため
  const y = Math.floor(index / 3);  //Y座標　壁判定のため
  let target;
  switch (eventKey) {
    case "ArrowDown": if (y > 0){ target = index - 3; break;} //↑
    case "ArrowUp": if (y < 2){ target = index + 3; break;} //↓
    case "ArrowRight": if (x > 0){ target = index - 1; break}; //←
    case "ArrowLeft": if (x < 2){ target = index + 1; break;} //→
  }
  if (target !== undefined){ swap(index, target);}  //配列[0-8]外でなければ実行
}

const puzzle = document.getElementById("puzzle"); //divのidを検索
let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 0]; //初期値

document.addEventListener("keydown", (event) => { //function(event)
  move(event.key);
});

createTile();
