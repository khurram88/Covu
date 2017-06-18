var EXPORTED_SYMBOLS = [""];


 CoVu.httpRequest = {
	
	RestClientParameters : function() {
		var _pl = new Array();
		var _name = new Array();

		this.add = function(name, value) {
			for (var i = 0; i < name.length; i++) {
				_pl[i] = value[i];
				_name[i] = name[i];
			}

			return this;
		}
		this.toXml = function() {
			var xml = "";
			for (var i = 0; i < _pl.length; i++) {
				if (typeof(_pl[i]) != "function")
					xml += _name[i] + "=" + _pl[i] + "&";
			}
			xml = xml.slice(0, xml.length - 1);
			return xml;
		}

	},
	
	alert : function(title, text) {  
		  
		  try 
		  {  
		    
		    	Components.classes['@mozilla.org/alerts-service;1'].  
		              getService(Components.interfaces.nsIAlertsService).  
		              showAlertNotification("chrome://CoFollow/skin/icon36.png", title, text, false, '', null);  
		  } 
		  catch(e) 
		  {  

		  }  
	},
		
	
	invoke : function(url, method, params, callback, type, exParam,isPOST) 
	{
	
		
		var paramee = params.toXml();		
	   
		url =  CoVu.Config.protocol+'://'+url + "/" + method + ".json?";
	    $.ajax({
	    	type:		'POST',
	    	url:		url,
	    	data: 		paramee,
	    	success: function (data) 
			{
				CoVu.httpRequest.response(data, type, exParam);
			}
	    });
	
		/* try {
 
			url =  CoVu.Config.protocol+'://'+url + "/" + method + ".json?"+ parameters.toXml();
			
			var req =  new XMLHttpRequest();    
		//	var req = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"]
			//		.createInstance(Components.interfaces.nsIXMLHttpRequest);
			if(isPOST)
			{
				req.open('POST', url, true);		
			}
			else
				req.open('GET', url, true);
				
			req.type = type;
			req.exParam = exParam;
			req.onreadystatechange = function response(event) 
			{
				if (req.readyState == 4) 
				{
					if (req.status == 200) 
					{
						callback(JSON.parse(req.responseText), req.type,req.exParam);
					} 
					else if(req.status == 403)
					{
						//alert('Unable to process your request check your network connection.');
					}
					else if(req.status==0)
					{
					
						//CoVu.Plugin.customalert('Unable to process your request check your network connection.');
						callback("{status:1}", req.type,req.exParam);
													
					}
					else 
					{
						//alert('Unable to process your request check your network connection.');
					}
				}
			};
			req.send(exParam);
		
		} 
		catch (e) 
		{
		} */
	},
	
	
	
	response : function(doc, type, exParam) 
	{
		CoVu.API.apiResponse(doc, type, exParam)
	},
	
	sendPOSTRequest: function(method, param, values, exParam) 
	{
		var pl = new this.RestClientParameters();
		if(param)
			pl.add(param, values);
		this.invoke(CoVu.Config.api_endpoint+CoVu.Config.api_version, method, pl, this.response, method, exParam,true);	
	},
	
	sendGetRequest : function(method, param, values, exParam) 
	{	
		var pl = new this.RestClientParameters();
		if(param)
			pl.add(param, values);
		this.invoke(CoVu.Config.api_endpoint+CoVu.Config.api_version, method, pl, this.response, method, exParam,true);
	}
}