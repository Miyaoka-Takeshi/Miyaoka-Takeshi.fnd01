6/23 下記で断念、内容変更予定 
 ・見せる用のhtmlを作るのが結構大掛かりで時間足りなそう（読み取る部分ははっきりしているが構成を理解して必要な所だけを自作するのが時間が足りない、そのままhtml保存は機密ではないと思うが社内データの為怖い）
 ・resultにオブジェクトを入れる所までは確認できたがpopup.htmlに表現するところで躓いている

6/19作りたいもの
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
