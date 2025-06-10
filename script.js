'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}
console.log("------------------------------------------------------------");
/**
  * @param {any}
  * @returns {() => any} 最初に渡された値を記憶し、それ以降は常にその値を返す関数を返す
  */

// ここにコードを書きましょう。
function rememberMe(any){
  let result =any;
  return function(){
    return result;
  };
}

const secretWord1 = "ナイショ";
const secretWord2 = new Date();

const func3 = rememberMe(secretWord1);
const func4 = rememberMe(secretWord2);

test(func3(), secretWord1);
test(func3(), secretWord1);
test(func4(), secretWord2);
test(func3(), secretWord1);
test(func4(), secretWord2);
test(func4(), secretWord2);

console.log("------------------------------------------------------------");

/**
  * クッキーの個数をカプセル化したクッキージャー🍪 関数を作成してください。
  * クッキーを食べると1個減り、「おいしい！」と表示されます。
  * クッキーがなくなると「クッキーがもうないよ」と表示してください。
  *
  * @param {number} count - 最初に入っているクッキーの数
  * @returns {{ eat: () => string }}
  */

// ここにコードを書きましょう。
function createCookieJar(number){
  let count = number;
  return {
    eat:function(){
      if(count>0){
        count--;
        return "おいしい！";
      }
      else{
        return "クッキーがもうないよ";
      }
    }
  };
}

const jar = createCookieJar(2);
test(jar.eat(), "おいしい！");
test(jar.eat(), "おいしい！");
test(jar.eat(), "クッキーがもうないよ");
test(jar.count, undefined);

console.log("------------------------------------------------------------");
function createLifeGauge(maxHp) {
  let hp = maxHp;
  return {
    takeDamage: function (amount) {
      hp = Math.max(0, hp - amount);
      return `💥 ${amount}のダメージ！現在のHP: ${hp}/${maxHp}`;
    },
    heal: function(amount) {
      hp = Math.min(maxHp, hp + amount);
      return `✨ ${amount}回復！現在のHP: ${hp}/${maxHp}`;
    },
    isAlive: function() {
      return hp > 0 ? "🟢 生きている" : "⚰️ やられた…";
    }
  };
}

const hero = createLifeGauge(100); // 勇者のライフゲージを初期化（HP の初期値は 100）

hero.takeDamage(60); // 60 のダメージを受ける
hero.heal(50);       // 50 回復する
console.log(hero.isAlive()); // まだ生きてる
hero.takeDamage(120); // 120 のダメージを受ける
hero.hp = 9999;      // 直接 HP を改ざん!!!（この操作は無効にしたい）
console.log(hero.isAlive()); // やられた、と表示されるのを期待している
console.log("------------------------------------------------------------");

