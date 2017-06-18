	
	 chrome.cookies.getAll({url:'http://'+CoVu.Config.covu_website+"/login"}, function(cookies)
	{
	
	   for( var d=0; d<cookies.length; d++)
	    {
			if(cookies[d]['name']=="token")
			{
					if(CoVu.FacebookDoc.login_progress==false)
					{
						CoVu.FacebookView.loginProgress();
					}
					
					CoVu.FacebookDoc.access_token=cookies[d]['value'];
					
			}
			else if(cookies[d]['name']=="idFB")
			{
				CoVu.FacebookDoc.id_FB=cookies[d]['value'];
				
			}
			
	     }
	  
	    if(CoVu.FacebookDoc.access_token)
	    {	
			if(CoVu.Document.login_session_key=='')
			{
				CoVu.FacebookBack.facebook_friends("me/friends?access_token=",CoVu.FacebookDoc.access_token,"friends");
			}	
				
		}
	  
    }); 
	
	chrome.cookies.onChanged.addListener(function(changeInfo) 
	{
	  if(changeInfo.cookie.name=="token")
	  {
		   if(changeInfo.cause=='explicit')
		   {
				//if(changeInfo.cause=='explicit')
				//{ 
					if(changeInfo.removed==false)
					{
						CoVu.FacebookDoc.access_token=changeInfo.cookie.value;
						if(CoVu.Document.login_session_key=='')
						{
							CoVu.FacebookBack.facebook_friends("me/friends?access_token=",CoVu.FacebookDoc.access_token,"friends");
						}	
					}
				
				//}
				/* else if(changeInfo.cause=='overwrite')
				{
					CoVu.FacebookDoc.access_token=changeInfo.cookie.value;CoVu.Plugin.customalert("nd");
					CoVu.FacebookBack.facebook_friends("me/friends?access_token=",CoVu.FacebookDoc.access_token,"friends");
				} */
		   }
	  }
		else if(changeInfo.cookie.name=="idFB")
		{
			CoVu.FacebookDoc.id_FB=changeInfo.cookie.value;
		}	  
		
	}); 

	CoVu.facebook ={
	
	clearall : function()
	{
		CoVu.Document.access_token='';
		CoVu.Document.id_FB='';
	}
	
	
};

	