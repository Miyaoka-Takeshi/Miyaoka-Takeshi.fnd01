作りたいもの
計器室の借用期間一覧を取得する拡張機能です。

〇実際の実行環境
Chrome拡張としてインストールして
計器室HPで実行
manifest.jsonでcontent_scriptsで計器室HPの時だけ実行がよさそう

〇発表時の環境
Chrome拡張をインストールして
githubに簡略化、縮小した計器室HP.htmlで
実行
manifest.jsonはaction default_popupで起動

githubの構成は
表示用
 index.html
 script.js
 (style.css)

Chrome拡張
 manifest.json
  popup.html
   popup.css
   popup.js
    result.html
    result.js