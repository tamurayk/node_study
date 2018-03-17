// httpモジュールを読み込み、httpという同名の変数に格納しています。
// requireはモジュール読み込みのためのグローバルモジュールです。
// requireを記述する時は慣例として、ファイルの先頭に記述することが多いです。
var http = require('http');

// httpモジュールのメソッドである、createServerを呼出し、
// サーバーを作成します。
var server = http.createServer(function(req, res) {
    res.end("Hello JSCafe");
});

// ポート番号3000番で受け付けるサーバーを起動する。
server.listen(3000, function() {
	// 起動したことを表すメッセージを追加。
	console.log('Server started, listening on : 3000');
});
