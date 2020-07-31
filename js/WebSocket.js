let txtHtml = "";
let ServerMessage = "您好，很高興為您服務。"
let ServerTime = "2020-07-30 15:30:52"
let ClientMessage = "我有問題！"
let ClientTime = "2020-07-30 15:31:52"

txtHtml += "<li class=\"list-group-item list-group-item-success text-left\">";
txtHtml += "<p>" + ServerMessage + "</p>";
txtHtml += "<small>" + ServerTime + "</small>";
txtHtml += "</li>";

$("#Message-List").append(txtHtml);

txtHtml = "";
txtHtml += "<li class=\"list-group-item text-right\">";
txtHtml += "<p>" + ClientMessage + "</p>";
txtHtml += "<small>" + ClientTime + "</small>";
txtHtml += "</li>";

$("#Message-List").append(txtHtml);


function WebSocketTest() {
    if ("WebSocket" in window) {
        console.log("您的浏览器支持 WebSocket!");

        $.ajax({
            url: "http://127.0.0.1:9453/WebSocket",
            method: "GET",
            // dataType:,
            // data:

            success: function(res) { console.log(res) },
            error: function(err) { console.log(err) },
        });

        // 打开一个 web socket
    //     var ws = new WebSocket("ws://127.0.0.1:8001");

    //     console.log(ws.readyState);

    //     ws.onopen = function() {
    //         // Web Socket 已连接上，使用 send() 方法发送数据
    //         ws.send("測試");
    //         ws.send(textToArrayBuffer("測試"));
    //         console.log("数据发送中...");
    //     };

    //     ws.onmessage = function(receiveData) {
    //         console.log(receiveData.data);
    //         console.log("数据已接收...");
    //     };

    //     // ws.onclose = function() {
    //     //     // 关闭 websocket
    //     //     alert("连接已关闭...");
    //     // };
    // } else {
    //     // 浏览器不支持 WebSocket
    //     alert("您的浏览器不支持 WebSocket!");
    }
}

function textToArrayBuffer(s) {
    var i = s.length;
    var n = 0;
    var ba = new Array()
    for (var j = 0; j < i;) {
        var c = s.codePointAt(j);
        if (c < 128) {
            ba[n++] = c;
            j++;
        } else if ((c > 127) && (c < 2048)) {
            ba[n++] = (c >> 6) | 192;
            ba[n++] = (c & 63) | 128;
            j++;
        } else if ((c > 2047) && (c < 65536)) {
            ba[n++] = (c >> 12) | 224;
            ba[n++] = ((c >> 6) & 63) | 128;
            ba[n++] = (c & 63) | 128;
            j++;
        } else {
            ba[n++] = (c >> 18) | 240;
            ba[n++] = ((c >> 12) & 63) | 128;
            ba[n++] = ((c >> 6) & 63) | 128;
            ba[n++] = (c & 63) | 128;
            j += 2;
        }
    }
    return new Uint8Array(ba).buffer;
}

WebSocketTest();