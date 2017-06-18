	chrome.extension.onRequest.addListener(function (request, sender, sendResponse) 
	{
		if(request.sendUrl)
		{
			if(CoVu.Document.leader_session_key!="" || CoVu.Document.follower_session_key!="")
			{
				
				var url=request.sendUrl;
				if(url.search(CoVu.Config.website)!=-1)
				{
					var values=url.split('/');
					if(values.length==5)
					{
						if(values[3]=='join')
						{
							CoVu.Plugin.updateTab("http"+"://"+CoVu.Config.covu_website+'/notice?leading');
						}
						/*leader_key=values[4].split('?');
						if(leader_key.length==2)
						{	
							CoVu.Background.Follow(values[3],leader_key[0]);
						}*/
					}
				}
			//	var encode_code=encodeURIComponent(request.sendUrl);
			//	CoVu.Background.SetLeaderSessionUrl(encode_code);
			}
			else if(CoVu.Document.follower_session_key=="")
			{
				var url=request.sendUrl;
				if(url.search(CoVu.Config.website)!=-1)
				{
					var values=url.split('/');
					if(values.length==5)
					{
						if(values[3]=='join')
						{
							var join_url=true;
							//alert(join_url);
							CoVu.Background.Follow(values[4],join_url);
						}
						/*leader_key=values[4].split('?');
						if(leader_key.length==2)
						{	
							CoVu.Background.Follow(values[3],leader_key[0]);
						}*/
					}
				}
			}
			sendResponse({});
		}
		if(request.getOMLURL)
		{
			sendResponse({result: CoVu.Background.get_OMLInvocationURL(request.getOMLURL)});
		}
		if(request.msg=='getUrlSender')
		{
			sendResponse({name: CoVu.Document.url_sender_name, id : CoVu.Document.url_sender_id });
			CoVu.Document.url_sender_name='';
			CoVu.Document.url_sender_id='';
		}
		
	});
	
	chrome.tabs.onUpdated.addListener(function( tabId,  changeInfo,  tab) 
	{
		
		if(CoVu.Document.leader_session_key!="" && CoVu.Document.follower_session_key=="")
		{
			if(changeInfo.url && changeInfo.url!=CoVu.Document.receivedURL)
			{
				
					var encode_code=changeInfo.url;
					CoVu.Background.SetLeaderSessionUrl(encode_code);
				
			}
		}
		else if(CoVu.Document.leader_session_key=="" && CoVu.Document.follower_session_key!="")
		{
			if(changeInfo.url && changeInfo.url!=CoVu.Document.receivedURL)
			{
				var encode_code=changeInfo.url;
				CoVu.Background.SetLeaderSessionUrlFollower(encode_code);
				
				
			}
			//CoVu.Document.receivedURL='';
		}
		
	});
	
	chrome.tabs.onActivated.addListener(function( activeInfo) 
	{
		
		chrome.tabs.get( activeInfo.tabId ,  function(tab) 
		{	
			if(CoVu.Document.leader_session_key!="" && CoVu.Document.follower_session_key=="")
			{
				if(tab.url)
				{
					
						var encode_code=tab.url;
						CoVu.Background.SetLeaderSessionUrl(encode_code);
					
				}
			}
			else if(CoVu.Document.leader_session_key=="" && CoVu.Document.follower_session_key!="")
			{
				if(tab.url)
				{
					
						var encode_code=tab.url;
						CoVu.Background.SetLeaderSessionUrlFollower(encode_code);
					
				}
			}
		});
	});
	
	CoVu.Plugin ={
	
		browser : "Chrome",
		notification : null,
	
		popups : function()
		{
			var popups = chrome.extension.getViews({type: "popup"});			
			if(popups.length==1)
			   return popups[0];
			return 0;
		},
		
		createTab : function ()
		{
			chrome.tabs.create({url:"about:blank"});
		},
		
		updateTab : function (update_url)
		{
			chrome.tabs.getSelected(null, function(tab) 
		{
			chrome.tabs.update(tab.id,{url:update_url});
		});
		},
		
		customalert : function(errortext)
		{ 
			try
			{
				var popups = this.popups();
				
				if(popups!=0)
				{
				   popups.CoVu.Alert.showErrorAlert(errortext);
				}
				else
				{
					this.showcustomNotification(errortext);
				}
			}
			catch(e)
			{
			}
							
		},
		
		cancelNotification : function()
		{
			CoVu.Plugin.notification.cancel();
		},
		
		showcustomNotification : function(message) 
		{
			
			var notification = webkitNotifications.createNotification(
			'icon.png',                      // The image.
			"CoVu: Alert", // The title.
			message      // The body.
			);
			notification.show();
			setTimeout(function(){notification.cancel();},4000)
		
		},
		
		showNotification : function() 
		{
   
			this.notification = webkitNotifications.createHTMLNotification(
    
			'notification.html'
   
		);
		this.notification.show();

		setTimeout(this.cancelNotification,30000);
  
		},
		
		showLoginIcon : function()
		{
			chrome.browserAction.setIcon({ path: 'icon.png'});
		},
		showLiveIcon : function()
		{
			chrome.browserAction.setIcon({ path: 'live.png'});
		},
		badge_notification : function()
		{
			if(CoVu.FacebookDoc.Notification_count.length==0)
			{
				chrome.browserAction.setBadgeText({ text: ''});
			}
			else
			{
				chrome.browserAction.setBadgeText({ text: '' + CoVu.FacebookDoc.Notification_count.length});
			}
		},
		VersionInfo: function ()
		{
			return CoVu.Config.build+" v"+chrome.app.getDetails().version;
		},
			
	setLocalStorage : function ()
	{
		var recent=CoVu.FacebookDoc.recent_arr;
		var narr=[];
		narr=CoVu.Document.store_arr;
		narr.unshift(recent);
		CoVu.Document.store_arr=narr;
		for(var i=0;i<narr.length;i++)
		{
			if(narr[i]=="null" || narr[i]==null || narr[i]==undefined || narr[i]=='')
			break;
			localStorage["history"+i]=narr[i];
		}
		CoVu.View.History();
		CoVu.FacebookDoc.recent_arr='';
	},
	getHistory : function ()
	{
		for(var i=0; i<10; i++)
		{
			CoVu.Document.store_arr[i]=localStorage.getItem('history'+i);
		}
	},
	
	getLocalStorage : function (history)
	{
		storage=localStorage['history'];
		//alert(al);
		if (storage== undefined)
		{
			//CoVu.View.showHome();
		}
		else
		{
			history=localStorage.getItem('history');
			//CoVu.Document.lead_progress=true;
			//email= localStorage.getItem('email_id');
			//pwd=localStorage.getItem('password');
			//remember=localStorage.getItem('remember_password');
			//CoVu.Background.logIn(email,pwd,remember);
			return;
		}
		
	},
	
	helpStorage : function ()
	{
		storage=localStorage['help'];
		//alert(al);
		if (storage== undefined)
		{
			CoVu.Plugin.createTab();
			CoVu.Plugin.updateTab("http"+"://"+CoVu.Config.covu_website+'/thankyou');
			CoVu.Document.help_screen=false;
			localStorage["help"]=CoVu.Document.help_screen;
		}
	}
		
	};
	CoVu.Plugin.showLoginIcon();
	CoVu.Plugin.getHistory();
	CoVu.Plugin.badge_notification();