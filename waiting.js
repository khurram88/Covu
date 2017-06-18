// JavaScript Document

var EXPORTED_SYMBOLS = [""];
const BACKGROUND = chrome.extension.getBackgroundPage();
CoVu.Waiting={
	
id : function(id) 
	{
		return document.getElementById(id);		
	},

wait : function () 
	{
		var idd = document.getElementById("mydiv");
		if(!idd)
		{
			var div = document.createElement("div");
		
			div.setAttribute("id", "mydiv");

			div.className = "notice";
			div.style.display = "block";
			var oImg=document.createElement("img");
			oImg.setAttribute('src','img/spinny.gif')
			oImg.className = "noticeImg";
			div.appendChild(oImg);
			
			document.body.appendChild(div);
		}
		document.getElementById("mydiv").style.display = "block";
		this.id("screen_default").style.opacity=0.2;
	}
}