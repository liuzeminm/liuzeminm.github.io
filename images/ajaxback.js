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
	   window.alert("���ܴ���XMLHttpRequest����!");
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
			alert('��ҳ�����ɲ��������ƺ�����ַ��ֱ��ճ����ַ��QQ��MSN������Ϳ�����\n\n ��������һ����ܾ�ϲ����췢�Ͱɣ�');
			$("go").disabled = "";
			window.location = url;
			return true;
		 }
		 else{
		   alert("���������ҳ�����쳣!");
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
		alert('��ҳ�����ɲ��������ƺ�����ַ��ֱ��ճ����ַ��QQ��MSN������Ϳ�����\n\n ��������һ����ܾ�ϲ����췢�Ͱɣ�');
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