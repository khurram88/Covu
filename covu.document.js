var EXPORTED_SYMBOLS = [""];

CoVu.Document={
	
	nowarray : '',
	checkthis : '',
	login_session_key : '',
	leader_session_key : '',
	covu_id : '',
	user_name : '',
	covu_login : false,
	follower_list : [],
	lite_session_url : '',
	follower_session_key : '',
	follower_leader_session_key : '',
	follow_url : '',
	join_code : '',
	follower_email : '',
	email_id : '',
	password : '',
	lead_progress : false,
	forgot_email : '',
	remember : '',
	local_storage : false,
	help_screen : true,
	getfrom_url : false,
	join_url : '',
	url_channel : '',
	url_event : '',
	receivedURL : '',
	login_progress : false,
	url_sender_name : '',
	url_sender_id : '',
	store_arr : [],
	lead_home : false,
	leader_id : [],
	history_arr : [],
	FrendVar : false,
	
	Login : function(doc,type,exParam)
	{
		this.login_session_key=doc['login_session_key'];
		this.login_progress=false;
		CoVu.FacebookView.showHome();
		CoVu.FacebookView.showpicture();
		CoVu.FacebookView.showfriends();
		CoVu.FacebookEvent.start("getfriendstatus");
		
		//this.url_channel=doc['services']['url']['channel'];
		
		Pusher.log = function(message) {
      		if (window.console && window.console.log) window.console.log(message);
    	};

    	WEB_SOCKET_DEBUG = true;

    	this.url_event= pusher.subscribe(CoVu.Document.login_session_key);
    	this.url_event.bind('notification', function(data)
    	{
		    
			var md = hex_md5(CoVu.Document.login_session_key);
			if(md!=data['src'])
			{
                CoVu.FacebookDoc.notification(data);
				//CoVu.View.setUrl(data['params']['url']);
			}
			else
			{
				alert("yes");
			}
			
    	});
		
	},
	
	CreateMember : function()
	{
		CoVu.Plugin.customalert('SignUp Successfull!! Please verify your email before SignIn.');
		CoVu.View.showHome();
	},
	
	PasswordResset : function ()
	{
		
		CoVu.Plugin.customalert('SignUp Successfull!! Please verify your email before SignIn.');
		CoVu.View.showSignin();
	},
	
	Lead : function(doc,exParam)
	{
		this.leader_session_key=doc['leader_session_key'];
		this.join_code=doc['join_code'];
		this.lite_session_url='http://'+CoVu.Config.covu_website+'/join/'+this.join_code;
		CoVu.View.leadView();
		if(CoVu.Plugin.browser=='Chrome')
		{
			CoVu.Event.start("follower_list");
		}
		else if(CoVu.Plugin.browser=='Firefox')
		{
			CoVu.Plugin.setSessionsTimer();
		}
		
		this.url_channel=doc['services']['url']['channel'];
		
		Pusher.log = function(message) {
      		if (window.console && window.console.log) window.console.log(message);
    	};

    	WEB_SOCKET_DEBUG = true;

    	this.url_event= pusher.subscribe(this.url_channel);
    	this.url_event.bind('browsed', function(data)
    	{
			var md = hex_md5(CoVu.Document.leader_session_key);
			if(md!=data['src'])
			{
				CoVu.Document.receivedURL=data['params']['url'];
				CoVu.View.setUrl(data['params']['url'],data['params']['id'],data['params']['name']);
			}
			
    	});
		if(exParam==true)
		{
			CoVu.FacebookBack.notify_friends(CoVu.FacebookDoc.invite_user_id);
		}
		
	},
	logout : function ()
	{
		this.login_session_key='';
		this.email_id='';
		this.password='';
		CoVu.View.showHome();
	},
	CloseLeaderSession : function(doc)
	{
		this.leader_session_key='';
		this.follower_list=[];
		this.FrendVar=false;
		CoVu.FacebookDoc.invited_friend_list=[];
		CoVu.View.showHome();
		if(CoVu.Plugin.browser=='Chrome')
		{
			CoVu.Event.stop("follower_list");
		}
		else if(CoVu.Plugin.browser=='Firefox')
		{
			CoVu.Plugin.clearSessionsTimer();
		}
	
		try
		{
			this.url_event.unbind('browsed', function(data)
	    	{
	
	    	});
			pusher.unsubscribe(this.url_channel);
		}
		catch(e)
		{
			
		}
		

	},
	
	CloseFollowerSession : function()
	{
		this.follower_session_key='';
		this.follower_leader_session_key='';
		this.follower_list=[];
		this.leader_id=[];
		this.follow_url='';
		this.lead_home=false;
		this.FrendVar=false;
		CoVu.View.showHome();
		if(CoVu.Plugin.browser=='Chrome')
		{
			CoVu.Event.stop("get_url");
		}
		else if(CoVu.Plugin.browser=='Firefox')
		{
			CoVu.Plugin.clearSessionsTimer();
		}
		
		try
		{
			this.url_event.unbind('browsed', function(data)
	    	{
	
	    	});
			pusher.unsubscribe(this.url_channel);
		}
		catch(e)
		{
			
		}
	},
	
	setFollowers : function(doc)
	{
		if(this.follower_session_key!='')
		{
			var leaderID=doc['leader'];
			if(leaderID.id==null)
			{
				this.leader_id={"id" : "Guest"};
			}
			else
			{
				this.leader_id=doc['leader'];
			}
		}
		
		this.follower_list=doc['followers'];
		/* CoVu.Plugin.customalert(this.follower_list.length);
		CoVu.Plugin.customalert(this.checkthis);
		if(this.follower_list.length>0)
		{
			this.nowarray = this.follower_list.length;
			
			for(var b=0; b<this.nowarray; b++)
			{
				this.checkthis+=this.follower_list[b]['id'];
			}
		}	 */
		CoVu.View.showFollowerCount();
	},
	
	Follow : function(doc,type,exParam)
	{
		this.follower_session_key=doc['follower_session_key'];
		this.lite_session_url='http://'+CoVu.Config.covu_website+'/join/'+this.join_code;
		this.join_url=exParam[0];
		CoVu.View.showFollow();
		if(CoVu.Plugin.browser=='Chrome')
		{
			CoVu.Event.start("get_url");
		}
		else if(CoVu.Plugin.browser=='Firefox')
		{
			CoVu.Plugin.setSessionsTimer();
		}
		
				this.url_channel=doc['services']['url']['channel'];
		
		Pusher.log = function(message) {
      		if (window.console && window.console.log) window.console.log(message);
    	};

    	WEB_SOCKET_DEBUG = true;

    	this.url_event= pusher.subscribe(this.url_channel);
    	this.url_event.bind('browsed', function(data)
    	{
			var md = hex_md5(CoVu.Document.follower_session_key);
			if(md!=data['src'])
			{
			    CoVu.Document.receivedURL=data['params']['url'];
				CoVu.View.setUrl(data['params']['url'],data['params']['id'],data['params']['name']);
			}
    	});
	},
	
	sessionStopped : function()
	{
		if(this.follower_session_key!="")
			{
				//CoVu.Plugin.customalert('Leader has ended the session');
				CoVu.Plugin.createTab();
				CoVu.Plugin.updateTab("http"+"://"+CoVu.Config.covu_website+'/notice?invalid');
			}
			
		this.CloseFollowerSession();
	},
	
	GetLeaderSessionUrl : function(status)
	{
		if(status!=-1)
		{
			if(this.follower_session_key!="")
				CoVu.Plugin.customalert('Unable to Follow, please check your internet connection.');
		}
	},
	
	SetLeaderSessionUrl : function(status)
	{
		if(status==-1)
		{
			if(this.leader_session_key!="")
				CoVu.Plugin.customalert('Unable to share page.');
					}	
		else
		{
			if(this.leader_session_key!="")
				CoVu.Plugin.customalert('Unable to share page, please check your internet connection.');

		}
	}
	
	
}
