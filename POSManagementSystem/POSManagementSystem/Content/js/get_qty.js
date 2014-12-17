var xmlHttp;
function showAtQty (str) {
    
	if (str.length==0)
	  {
	  document.getElementById("stock").innerHTML="";
	  document.getElementById("stock").style.border="0px";
	  return;
	  }
	
	xmlHttp = GetXmlHttpObject();
	if(xmlHttp==null) {
		alert("Browser does not support HTTP Request");
		return;
	}

	var url = "http://localhost:1587/Home/GetQuantity/" + str;
	xmlHttp.onreadystatechange = stateAtQtyChanged;
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
    
 
 
    
    
}


function stateAtQtyChanged() { 
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="completeex") { 
		document.getElementById("stock").value=xmlHttp.responseText;
        
        
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




    
   
