var http_request = false;
var CurrentPos;
var weburl;
var Bgsound;
function send_Request(url){ 
  if(window.XMLHttpRequest){
      http_request = new XMLHttpRequest();
	  if (http_request.overrideMineType){
	      http_request.overrideMineType('text/xml');
	    }
     }
  else if(window.ActiveXObject)
    {
	   try{
	      http_request = new ActiveXObject("Microsoft.XMLHttp");
		  }catch(e){
		    try{
			    http_request = new ActiveXObject("Msxml2.XMLHttp");
				} catch(e){}
		   }
	 }
    if(!http_request) {
	   window.alert("不能创建XMLHttpRequest对象!");
	   return false;
	  }
  http_request.onreadystatechange = prosessRequest;
  http_request.open('post',url,true);
  http_request.send(null);
}
  
function prosessRequest(){
	if(http_request.readyState == 4){
		if(http_request.status == 200) 
		{
			var url	= weburl+http_request.responseText;
			window.clipboardData.setData("Text",url);
			alert('网页已生成并替您复制好了网址，直接粘贴地址到QQ、MSN、邮箱就可以了\n\n 您的朋友一定会很惊喜，快快发送吧！');
			$("go").disabled = "";
			window.location = url;
			return true;
		 }
		 else{
		   alert("您所请求的页面有异常!");
		 }
   }
}
  
function GetResult(UserName,Bgsound,url)
{
	weburl = url;
	//alert(UserName);
	$("go").disabled = "disabled";
	if (UserName.length == 0) {
		var url	= weburl;
		window.clipboardData.setData("Text",url);
		alert('网页已生成并替您复制好了网址，直接粘贴地址到QQ、MSN、邮箱就可以了\n\n 您的朋友一定会很惊喜，快快发送吧！');
		$("go").disabled = "";
		window.location = url;
		return true;
	}else{
		send_Request("/send/username/?username="+UserName+'='+Bgsound);
	}
}

function $(id) {
	return document.getElementById(id);
}