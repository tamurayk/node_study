// httpモジュールを読み込み、httpという同名の変数に格納しています。
// requireはモジュール読み込みのためのグローバルモジュールです。
// requireを記述する時は慣例として、ファイルの先頭に記述することが多いです。
var http = require('http');

// httpモジュールのメソッドである、createServerを呼出し、
// サーバーを作成します。
var server = http.createServer(function(req, res) {
    res.end("Hello JSCafe");
});

// listeningイベントを受け取り、表示する。
server.on('listening', function(){
  console.log('Server started, listening on : 3000');
});

// ポート番号3000番で受け付けるサーバーを起動する。
server.listen(3000);
