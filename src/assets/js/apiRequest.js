function apiResponse(method, endpoint, key, parameters, callback) {
    // XMLHttpRequestコンストラクタを作成
    var request = new XMLHttpRequest();

    // ハンドラー
    request.onreadystatechange = function () {
        switch(request.readyState) {
            case 0:
                // 未初期状態
                console.log("Not initialized ... ");
                break;
            case 1:
                // データ送信中
                console.log("Sending data ... ");
                break;
            case 2:
                // 応答待ち
                console.log("Waiting for response ... ");
                break;
                // データ受信中
            case 3:
                console.log("Receiving of data ... ");
                break;
            case 4:
                // データ受信完了
                if (request.status == 200) {
                    var response_data = this.response;
                    if (key === '') {
                        console.log("Complete!! Received in JSON format.\n");
                        console.log(response_data);
                        callback(response_data);
                    } else {
                        console.log("Complete!! Received in JSON format.\n");
                        console.log(response_data[key]);
                        // コールバック
                        callback(response_data[key]);
                    }
                } else {
                    console.log('Failed. HttpStatus: ' + request.statusText)
                }
                break;
        }
    };

    // Httpリクエストに必要な情報
    request.open(method, endpoint, true);
    request.setRequestHeader('content-type', 'application/json');
    request.responseType = 'json';

    // Httpリクエストを送信(引数指定で特定の情報のみを送信)
    request.send(parameters);
}
