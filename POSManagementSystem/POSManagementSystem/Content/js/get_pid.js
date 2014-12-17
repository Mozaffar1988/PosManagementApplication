var xmlHttp;
function showAtexist(str) {
   
	
	if (str.length==0)
	  {
	  document.getElementById("idHint").innerHTML="";
	  document.getElementById("idHint").style.border="1px";
	  return;
	  }
	
	xmlHttp = GetXmlHttpObject();
	if(xmlHttp==null) {
		alert("Browser does not support HTTP Request");
		return;
	}

	var url = "http://localhost:1587/Home/GetProductID/" + str;
	xmlHttp.onreadystatechange = stateAtChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}


function stateAtChanged() { 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="completex") { 
	    document.getElementById("idHint").value = xmlHttp.responseText;
        document.getElementById("idHint").focus();
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

    
   
