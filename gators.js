'use strict'
// 1行目に記載している 'use strict' は削除しないでください

document.getElementById('releaseButton').addEventListener('click', function() {
  const gatorCount = parseInt(document.getElementById('gatorCount').value);
  const gatorContainer = document.getElementById('gatorContainer');
  gatorContainer.innerHTML = ''; // Clear previous gators

  if (!isNaN(gatorCount) && gatorCount > 0) {
    for (let i = 0; i < gatorCount; i++) {
      const gator = document.createElement('span');
      gator.textContent = '🐊';
      gatorContainer.appendChild(gator);
    }
  } else {
    alert('有効な数を入力してください。');
  }
});
