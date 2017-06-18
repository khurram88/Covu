var EXPORTED_SYMBOLS = [""];

CoVu.FacebookView={
	
	
	showLead : function()
	{
		try
		{
			CoVu.Document.lead_progress=false;
			if(CoVu.Plugin.browser=='Chrome')
			{
				CoVu.Plugin.showLiveIcon();
				var popups = CoVu.Plugin.popups();
				if(popups!=0)
				{
					popups.CoVu.Popup.showHome();
					popups.CoVu.Popup.setLeadUrl();
				}
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Plugin.showLiveIcon();
				CoVu.Popup.showLead();
				CoVu.Popup.setLeadUrl();
			}
		}
		catch(e)
		{
		}
	},
	
	showpicture : function()
	{
		try
		{
			if(CoVu.Plugin.browser=='Chrome')
			{
				var popups = CoVu.Plugin.popups();
				if(popups!=0)
				{
					popups.CoVu.FacebookPopup.showpicturee();
				}
				
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.showpicturee();
			}
		}
		catch(e)
		{
		}
	},
	History : function()
	{
		try
		{
			if(CoVu.Plugin.browser=='Chrome')
			{
				var popups = CoVu.Plugin.popups();
				if(popups!=0)
				{
					popups.CoVu.Popup.history();
				}
				
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.showpicturee();
			}
		}
		catch(e)
		{
		}
	},
	
	loginProgress : function()
	{
		try
		{
			if(CoVu.Plugin.browser=='Chrome')
			{
				var popups = CoVu.Plugin.popups();
				if(popups!=0)
				{
					popups.CoVu.Waiting.wait();
				}
				
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.hideAll();
			}
		}
		catch(e)
		{
		}
	},
	
	showFollowerCount : function()
	{
		try
		{
			if(CoVu.Plugin.browser=='Chrome')
			{
				var popups = CoVu.Plugin.popups();
				if(popups!=0)
				{
					popups.CoVu.Popup.showFollowerCount();
				}
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.showFollowerCount();
			}
		}
		catch(e)
		{
		}
	},
	
	showNotificationCount : function()
	{
		try
		{
			CoVu.FacebookDoc.notify=true;
			if(CoVu.Plugin.browser=='Chrome')
			{
				CoVu.Plugin.showNotification();
				var popups = CoVu.Plugin.popups();
				if(popups!=0)
				{
					popups.CoVu.FacebookPopup.showNotificationCount();
				}
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.showNotificationCount();
			}
		}
		catch(e)
		{
		}
	},

	showHome : function ()
	{
		try
		{
			CoVu.FacebookDoc.lead_progress=false;
			if(CoVu.Plugin.browser=='Chrome')
			{
				CoVu.Plugin.showLoginIcon();
				var popups = CoVu.Plugin.popups();
				
				if(popups!=0)
				{
					popups.CoVu.Popup.showHome();	
				}
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Plugin.showLoginIcon();
				CoVu.Popup.showHome();
			}
			
		}
		catch(e)
		{
		
		}
	},
	
	invalidCode : function ()
	{
		try
		{
			CoVu.Document.lead_progress=false;
			if(CoVu.Plugin.browser=='Chrome')
			{
				var popups = CoVu.Plugin.popups();			
				if(popups!=0)
				{
					
					popups.CoVu.Popup.showHome()	
				}
				else
				{
					CoVu.Plugin.updateTab("http"+"://"+CoVu.Config.covu_website+'/notice?invalid');
				}
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.showHome();
    			if(CoVu.Document.getfrom_url==true)
    			{
     				CoVu.Plugin.updateTab("http"+"://"+CoVu.Config.covu_website+'/notice?invalid');
     				CoVu.Document.getfrom_url=false;
     
  			    }
			}
			
		}
		catch(e)
		{
		
		}
	},

	showSignin : function ()
	{
		try
		{
			CoVu.Document.lead_progress=false;
			if(CoVu.Plugin.browser=='Chrome')
			{
				var popups = CoVu.Plugin.popups();
				
				if(popups!=0)
				{
					popups.CoVu.Popup.showSignin();	
				}
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.showSignin();
			}
			
		}
		catch(e)
		{
		
		}
	},

	
	showSignup : function ()
	{
		try
		{
			CoVu.Document.lead_progress=false;
			if(CoVu.Plugin.browser=='Chrome')
			{
				
				var popups = CoVu.Plugin.popups();
				
				if(popups!=0)
				{
					popups.CoVu.Popup.showSignup();	
				}
			}	
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.showSignup();
			}
		}
		catch(e)
		{
		
		}
	},
	
	showFollow : function()
	{
		try
		{
			CoVu.Document.lead_progress=false;
			if(CoVu.Plugin.browser=='Chrome')
			{
				CoVu.Plugin.showLiveIcon();
				
				if(CoVu.Document.join_url!=true)
				{
					CoVu.Plugin.createTab();
					CoVu.Plugin.updateTab('http://'+CoVu.Config.covu_website+'/start');
				}
				else
				{
					CoVu.Plugin.updateTab();
				}
				CoVu.Document.follow_url='http://'+CoVu.Config.covu_website+'/start';
				var popups = CoVu.Plugin.popups();
				if(popups!=0)
				{
					popups.CoVu.Popup.showHome()
					popups.CoVu.Popup.setFollowUrl();
				}
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Plugin.showLiveIcon();
				CoVu.Popup.showFollow()
				CoVu.Popup.setFollowUrl();
				CoVu.Plugin.createTab();
				CoVu.Plugin.updateTab('http://'+CoVu.Config.covu_website+'/home');
				CoVu.Document.follow_url='http://'+CoVu.Config.covu_website+'/home';
			}
		}
		catch(e)
		{
		}
	},
	showWaiting : function()
	{
		try
		{	
			if(CoVu.Plugin.browser=='Chrome')
			{
				var popups = CoVu.Plugin.popups();
				if(popups!=0)
				{
					popups.CoVu.Popup.showWaiting()
				}
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.showWaiting()
			}
		}
		catch(e)
		{
		}
	},
		
	loginView : function (login)
	{
	    if(!login)
		{
			this.showHome();
		}
	},
	
	leadView : function()
	{
		this.showLead();
		//CoVu.Plugin.createTab();
		//CoVu.Plugin.updateTab("http"+"://"+CoVu.Config.covu_website+'/home');
			//chrome.tabs.create({url:CoVu.Config.protocol+"://"+CoVu.Config.covu_website+'/home'});

	},
	showfriends : function()
	{	
	
			if(CoVu.Plugin.browser=='Chrome')
			{
				var popups = CoVu.Plugin.popups();
				if(popups!=0)
				{
					popups.CoVu.FacebookPopup.showfriends();
				}
			}
			else if(CoVu.Plugin.browser=='Firefox')
			{
				CoVu.Popup.showfriends();
			}
		
	},
	
	setUrl : function(url,id,name)
	{
		try
		{
			if(url!=null)
			{
				var current_url=url;
				
				if(CoVu.Document.follow_url!=current_url)
				{
					if(current_url=="http"+"://"+CoVu.Config.covu_website+'/home')
					{
					}
					else
					{
						CoVu.Plugin.updateTab(current_url);
						CoVu.Document.url_sender_name=name;
						CoVu.Document.url_sender_id=id;
						CoVu.Document.follow_url=current_url;
						return;
					}
				}
				
			}
			
			CoVu.Document.url_sender_name='';
			CoVu.Document.url_sender_id='';
		}
		catch(e)
		{
		}
	}
	
	
}