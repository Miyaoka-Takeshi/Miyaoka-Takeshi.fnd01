'use strict'
// Please don't delete the 'use strict' line above
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

const classArray = document.getElementsByClassName("tooltip");
console.log(classArray);
let object={};
let result=[];
for(let clsarr of classArray){
    result[clsarr]= clsarr.innerText;
}
console.log(result);

const key="2025-06-20::GXTC2739:POPUP"
//const value = "貸出中（他人）"<br>"2025/06/18 ～ 2025/8/31"
const value = "貸出中（他人）2025/06/18 ～ 2025/8/31"
console.log(key.match(/GXTC\d{4}/)[0]);
