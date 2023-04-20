function getApi(){
	var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
        httpRequest.open('GET', 'https://apis.jxcxin.cn/api/yiyan?type=json');//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = httpRequest.responseText;//获取到json字符串，还需解析
				obj = JSON.parse(json);
				alert(obj['msg']);
				document.getElementById("tag").innerHTML = obj['msg'];
            }
        };
}

window.onload = function() {
  getApi();
}