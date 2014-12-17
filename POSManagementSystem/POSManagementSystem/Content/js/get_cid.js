var xmlHttp;
function showAtCid (str) {
	
	if (str.length==0)
	  {
	  document.getElementById("cid").innerHTML="";
	  document.getElementById("cid").style.border="1px";
	  return;
	  }
	
	xmlHttp = GetXmlHttpObject();
	if(xmlHttp==null) {
		alert("Browser does not support HTTP Request");
		return;
	}

	var url="get_cid_data.php"+"?get_cid="+str;
	xmlHttp.onreadystatechange = stateCidChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}


function stateCidChanged() { 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="completex") { 
		document.getElementById("cid").value=xmlHttp.responseText;
        document.getElementById("cid").focus();
        document.getElementById("cid").keyup();
	} 
}


function GetXmlHttpObject() {
	var xmlHttp=null;
	try {
		// Firefox, Opera 8.0+, Safari
	 	xmlHttp=new XMLHttpRequest();
	}
	catch(e) {
		 //Internet Explorer
		try {
		  	xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e) {
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

    
   
