function response(method, endpoint, key, parameters, callback) {
    // XMLHttpRequestコンストラクタを作成
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        switch(request.readyState) {
            case 0:
                // 未初期状態
                console.log("リクエストは初期化されていません。");
                break;
            case 1:
                // データ送信中
                console.log("データを送信中です。");
                break;
            case 2:
                // 応答待ち
                console.log("応答待ちです。");
                break;
                // データ受信中
            case 3:
                console.log("データ受信中です。" + request.responseText.length + "bytes.");
                break;
            case 4:
                // データ受信完了
                if (request.status == 200 || request.status == 304) {
                    var response_text = request.responseXML;
                    console.log("完了" + response_text);
                } else {
                    console.log("リクエスト失敗です。 HttpStatus: " + request.statusText);
                }
                break;
        }
    };

    // Httpリクエストに必要な情報
    request.open(method, endpoint, true);
    request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    request.responseType = 'json';

    // 実行
    request.onload = function () {
        var response_from_database = this.response;
        // ステータスコードによって処理を変更
        if (request.status === 401) {
            alert("リクエストデータが見つかりません");
            console.log(response_from_database);
        } else if (key === '') {
            console.log(response_from_database);
            // コールバック
            callback(response_from_database);
        } else {
            console.log(response_from_database[key]);
            // コールバック
            callback(response_from_database[key]);
        }

    };

    // Httpリクエストを送信(引数指定で特定の情報のみを送信)
    request.send(parameters);
}

