function sendUrl()
{
	chrome.extension.sendRequest({sendUrl: document.location.href});
}
function GetLeaderSessionEvents()
{
			chrome.extension.sendRequest({ msg: 'GetLeaderSessionLastClick' },function(response)
			{
				if(response.result!=false)
				{	
					__covu_getLeaderSessionEvents(response.result,response.page_url);
				}
			});
}
function onLoad()
{	
	sendUrl(); 
			//setInterval(GetLeaderSessionEvents, 7000);
			chrome.extension.sendRequest({ getOMLURL: document.location.protocol },function(response)
			{
				if(response.result!=false)
				{	
					var omlScript = document.createElement('script');
					omlScript.src = response.result;
					document.body.appendChild(omlScript);
				}				
			});

}
function onMouseDown(event)
{
	chrome.extension.sendRequest({ msg: 'getMouseClickUrl' },function(response)
	{
		if(response.result!=false)
		{	
		//	__covu_recordMouseClick(event,response.result,document.location.href);
		}
	});
}
$(document).ready(function() {

			
			chrome.extension.sendRequest({ msg: 'getUrlSender' },function(response)
			{
				
				if(response.id!="")
				
				{
				
					/* var unique_id = $.gritter.add(
						{
							// (string | mandatory) the heading of the notification
							title: response.name,
							// (string | mandatory) the text inside the notification
							text:  'Shared this page.',
							// (string | optional) the image to display on the left
							image: 'https://graph.facebook.com/'+response.id+'/picture ',
							// (bool | optional) if you want it to fade out on its own or just sit there
							sticky: false,
							// (int | optional) the time you want it to be alive for before fading out
							time: '',	
							// (string | optional) the class name you want to apply to that specific message
							class_name: 'my-sticky-class'
						}); */
						
					
					 if(response.id=="Guest")
					{
						var unique_id = $.gritter.add(
						{
							// (string | mandatory) the heading of the notification
							title: response.id,
							// (string | mandatory) the text inside the notification
							text:  'Shared this page.',
							// (string | optional) the image to display on the left
							image: 'http://files.covu.s3.amazonaws.com/images/profilePic.png',
							// (bool | optional) if you want it to fade out on its own or just sit there
							sticky: false,
							// (int | optional) the time you want it to be alive for before fading out
							time: '',	
							// (string | optional) the class name you want to apply to that specific message
							class_name: 'my-sticky-class'
						});
					}
					else
					{
						var unique_id = $.gritter.add(
						{
							// (string | mandatory) the heading of the notification
							title: response.name,
							// (string | mandatory) the text inside the notification
							text:  'Shared this page.',
							// (string | optional) the image to display on the left
							image: 'https://graph.facebook.com/'+response.id+'/picture ',
							// (bool | optional) if you want it to fade out on its own or just sit there
							sticky: false,
							// (int | optional) the time you want it to be alive for before fading out
							time: '',	
							// (string | optional) the class name you want to apply to that specific message
							class_name: 'my-sticky-class'
						});
					} 
				}
				
				//alert(response.name)				
			});
});
window.addEventListener("load", function(e) { onLoad(e); }, false);
try {
    window.addEventListener('mousedown', onMouseDown, false);
}
catch (e) {
    alert(e);
}
