var EXPORTED_SYMBOLS = [""];

CoVu.Background = {

	CreateMember : function(email,password,confirm_pass)
	{
		CoVu.API.CreateMember(email,password,confirm_pass);
	},
	resetPassword : function (forgot_email)
	{
		CoVu.API.resetPassword(forgot_email);
	},
	notify_friends : function(user_id)
	{
		CoVu.API.notify_friends(user_id);
	},
	startLead : function(exParam)
	{
	 	CoVu.API.Lead(exParam);
	},
	
	logIn : function(type,param,value)
	{
		CoVu.API.Login(type,param,value);
	},
	
	Logout : function()
	{
		CoVu.API.Logout();
		CoVu.Document.logout();
	},
	
	GetLeaderSessionFollowers : function ()
	{
		if(CoVu.Document.leader_session_key!='')
		{
			CoVu.API.GetLeaderSessionFollowers_leader();
		}
		else
		{
			CoVu.API.GetLeaderSessionFollowers_follower();
		}	
	},
	
	closeLeaderSession : function ()
	{
			if(CoVu.Document.leader_session_key!="")
			{
				CoVu.API.closeLeaderSession();
				CoVu.Document.CloseLeaderSession();
			}
			else
			{	
				this.CloseFollowerSession();
				CoVu.Document.CloseFollowerSession();
			}
		
	},
	
	SetLeaderSessionUrl : function(url)
	{
		var pattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		var check = pattern.test(url);
		if(check==true)
		{
			//CoVu.API.SetLeaderSessionUrl(url);
			if(CoVu.Document.login_session_key!="")
			{
				CoVu.API.PushEvent(url,CoVu.FacebookDoc.id_FB,CoVu.FacebookDoc.FBname);
			}
			else
			{
				CoVu.API.PushEvent(url,'','');
			}
		}
	},
	
	SetLeaderSessionUrlFollower : function(url)
	{
		var pattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
		var check = pattern.test(url);
		if(check==true)
		{
			//CoVu.API.SetLeaderSessionUrl(url);
			if(CoVu.Document.login_session_key!="")
			{
				CoVu.API.PushEventFollower(url,CoVu.FacebookDoc.id_FB,CoVu.FacebookDoc.FBname);
			}
			else
			{
				CoVu.API.PushEventFollower(url,'','');
			}
		}
	},
	
	Follow : function(code,join_url)
	{
		
		CoVu.Document.join_code=code;
		CoVu.API.Follow(code,join_url);
	},
	
	GetUrl : function ()
	{
		CoVu.API.GetLeaderSessionUrl();
	},
	
	CloseFollowerSession : function ()
	{ 
		CoVu.API.CloseFollowerSession();
	},
	
	sendInvitation : function (email_id,message)
	{
		CoVu.API.sendInvitation(email_id,message);
	},
	
	get_OMLInvocationURL : function(proto)
	{
			if(proto=="https:")
				return "https://"+CoVu.Config.api_endpoint+CoVu.Config.api_version+"/InvokeOML.js?login_session_key="+CoVu.Document.login_session_key;
			else
				return "http://"+CoVu.Config.api_endpoint+CoVu.Config.api_version+"/InvokeOML.js?&login_session_key="+CoVu.Document.login_session_key;
	},
	
	autoLogin : function ()
	{	
		CoVu.Plugin.getLocalStorage();
	},
	
	helpScreen : function ()
	{
		CoVu.Plugin.helpStorage();
	}
}
CoVu.Background.autoLogin();
CoVu.Background.helpScreen();
