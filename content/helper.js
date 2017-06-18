
const BACKGROUND = chrome.extension.getBackgroundPage();
	
		function id(id) 
	{
		return document.getElementById(id);		
	}
	function getVersion()
	{
		return BACKGROUND.build+" v"+chrome.app.getDetails().version;
	}
	function timeDifference(laterdate,earlierdate) {
		laterdate=laterdate.getTime()+laterdate.getTimezoneOffset() * 60000;
		earlierdate=earlierdate.getTime()+earlierdate.getTimezoneOffset() * 60000;
		var difference = laterdate - earlierdate;
		if(difference<0)
			return " < 1 min ago";
		var daysDifference = Math.floor(difference/1000/60/60/24);
		
		if(daysDifference>0)
		{
			if(daysDifference>1)
				return daysDifference +" days ago";
			else
				return daysDifference +" day ago";
		}
		difference -= daysDifference*1000*60*60*24
	 
		var hoursDifference = Math.floor(difference/1000/60/60);
		
		if(hoursDifference>0)
		{
			if(hoursDifference>1)
				return hoursDifference+" hrs ago";
			else
				return hoursDifference+" hr ago";			
			
		}
			
		difference -= hoursDifference*1000*60*60
	 
		var minutesDifference = Math.floor(difference/1000/60);
		
		if(minutesDifference>0)
		{
			if(minutesDifference>1)
				return minutesDifference+" mins ago";
			else
				return minutesDifference+" min ago";
		}
			
		difference -= minutesDifference*1000*60;
	 
		var secondsDifference = Math.floor(difference/1000);
		
		if(secondsDifference>0)
			return " < 1 min ago";
			
			return " < 1 min ago";
	}
	//display blasts in the main screen view


	function escapeHTMLEncode(str) 
	{
	  var div = document.createElement('div');
	  var text = document.createTextNode(str);
	  div.appendChild(text);
	  return div.innerHTML;
 	}
 		function decodeData(data)
	{
		data=data.split('<').join('&lt;');
		data=data.split('>').join('&gt;');
	//	data=data.split('&').join('&amp;');
		return  $('<div/>').html(data).html();
	}
	function getDivContent(data)
	{
		return  $('<div/>').html(data).text();
	}
