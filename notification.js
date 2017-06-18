// Desktop Notification JavaScript Document
var EXPORTED_SYMBOLS = [""];
const BACKGROUND = chrome.extension.getBackgroundPage();


function notify_follow (event)
{
	var elem=event.target;
	CoVu.Desktop.notify_follow(elem);
}




CoVu.Desktop={
	

   id : function(id) 
	{
		return document.getElementById(id);		
	},
	
	notify_follow : function(elem)
	{
		parent = elem.parentNode;
		nodeID = parent.id;
		if(BACKGROUND.CoVu.Document.leader_session_key=='' && BACKGROUND.CoVu.Document.follower_session_key=='')
		{
			
			var code = elem.getAttribute("code");
			//this.id("notification").style.display="none";
			BACKGROUND.CoVu.Background.Follow(code,false);
			for(var i=0;i<BACKGROUND.CoVu.FacebookDoc.Notification_count.length;i++)
			{
				if(BACKGROUND.CoVu.FacebookDoc.Notification_count[i].id==nodeID)
				{
					BACKGROUND.CoVu.FacebookDoc.Notification_count.splice(i,1);
					
				}
			}
			BACKGROUND.CoVu.Plugin.cancelNotification();
			BACKGROUND.CoVu.Plugin.badge_notification();
		}
		else
		{
			BACKGROUND.CoVu.Plugin.customalert("You are already in a session");
			for(var i=0;i<BACKGROUND.CoVu.facebook.Notification_count.length;i++)
			{
				if(BACKGROUND.CoVu.facebook.Notification_count[i].id==nodeID)
				{
					BACKGROUND.CoVu.facebook.Notification_count.splice(i,1);
					
				}
			}
			BACKGROUND.CoVu.Plugin.cancelNotification();
			BACKGROUND.CoVu.Plugin.badge_notification();
		}
	},
	
	Append_notification : function() 
	{
		
		if(BACKGROUND.CoVu.FacebookDoc.notify==true)
		{
		
			var data=BACKGROUND.CoVu.FacebookDoc.Notification_count;
			var node=this.id('desktop_notification');
		
			if(data)
			{	
				elem = this.id('desktop_notify').cloneNode(true);
				elem.id=data[data.length-1]['id'];
				elem.getElementsByTagName("img")[0].src="https://graph.facebook.com/"+data[data.length-1]['id']+"/picture";
					
				elem.getElementsByTagName("span")[0].textContent=BACKGROUND.CoVu.FacebookDoc.search(data[data.length-1]['id']);
				elem.getElementsByTagName("img")[1].setAttribute('code', data[data.length-1]['join_code']);
				elem.getElementsByTagName("img")[1].addEventListener("click", notify_follow, false);
				elem.style.display='block';
					
				this.id('desktop_notification').appendChild(elem);
		
			}
		
		}
	}
	
	
}

window.onload = function() {

CoVu.Desktop.Append_notification();
}

