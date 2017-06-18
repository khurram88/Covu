var EXPORTED_SYMBOLS = [""];

CoVu.API = {

	apiResponse : function(doc,type,exParam)
	{
	
		if(doc["status"]=="0")//scuccess
		{ 
			if(type=="CreateMember")
			{
				CoVu.Document.CreateMember();
				//this.Login(doc['covu_id'],doc['password']);
			}
			else if(type=="Login")
			{
				CoVu.Document.Login(doc,type,exParam);
			}
			else if(type=="NotifyFriends")
			{
				
			}
			else if(type=="GetFriendsStatus")
			{
				CoVu.Document.FrendVar=false;
				CoVu.FacebookDoc.showfriends(doc);
			}
			else if(type=="RequestPasswordReset")
			{
				CoVu.Document.PasswordResset();
			}
			else if(type=="Logout")
			{
				//CoVu.Document.logout();
			}
			else if(type=='Lead')
			{		
				CoVu.Document.Lead(doc,exParam);
			}
			else if(type=='GetLeaderSessionFollowers')
			{
				CoVu.Document.setFollowers(doc);
			}
			else if(type=='CloseLeaderSession')
			{
		//		CoVu.Document.CloseLeaderSession();
			}
			else if(type=='SetLeaderSessionUrl')
			{
				
			}
			else if(type=='Follow')
			{
				CoVu.Document.Follow(doc,type,exParam);	
			}
			else if(type=='GetLeaderSessionUrl')
			{
				CoVu.View.setUrl(doc['url']);
			}
			else if(type=='CloseFollowerSession')
			{
		//		CoVu.Document.CloseFollowerSession();
			}
			else if(type=='InviteFollowers')
			{
				CoVu.Plugin.customalert('Email sent successfully!!');
			}
		}
		else if(doc["status"]=="-1")
		{
		
			if(type=='GetLeaderSessionUrl')
			{
				CoVu.Document.sessionStopped();
				
			//	CoVu.Plugin.customalert('Leader no longer active');
			}
			
			else if(type=='GetLeaderSessionFollowers')
			{
				if(CoVu.Document.leader_session_key!='')
				{
					CoVu.Plugin.customalert('Session Closed');
					CoVu.View.show_past_act_onsessionclosed();
					CoVu.Document.CloseLeaderSession();
				}
				else if(CoVu.Document.follower_session_key!='')
				{
					CoVu.Plugin.customalert('Leader no longer active');
					CoVu.Document.CloseFollowerSession();
				}
			}
			else if(type=='CreateMember')
			{
				CoVu.Plugin.customalert(doc['error']['message']);
				CoVu.View.showHome();
			}
			else if(type=='Login')
			{
				CoVu.Plugin.customalert('Invalid EmailID and Password.');
				CoVu.View.showHome();
			}
			else if(type=='Follow')
			{	
				CoVu.Plugin.customalert('Session no longer exists.');
				CoVu.View.invalidCode();
			}
			else if(type=='Lead')
			{
			    
				CoVu.Plugin.customalert('Unable to Lead.');
				CoVu.View.showHome();
			}
			else if(type=='SetLeaderSessionUrl')
			{
				CoVu.Document.SetLeaderSessionUrl(doc['status']);
			}
		}
		else
		{
			if(type=='GetLeaderSessionUrl')
			{
				CoVu.Document.GetLeaderSessionUrl(doc["status"]);

			}
			else if(type=='CreateMember')
			{
				CoVu.Plugin.customalert('Unable to SignUp, please check your internet connection.');
				CoVu.View.showSignup();
			}
			else if(type=='Login')
			{
				CoVu.Plugin.customalert('Unable to Login, please check your internet connection.');
				CoVu.View.showSignin();
			}
			else if(type=='Follow')
			{
				
				CoVu.Plugin.customalert('Unable to Follow, please check your internet connection.');
				CoVu.View.showHome();
			}
			else if(type=='Lead')
			{
			    
				CoVu.Plugin.customalert('Unable to Lead. please check your internet connection.');
				CoVu.View.showHome();
			}
			else if(type=='GetLeaderSessionFollowers')
			{
				//	CoVu.Plugin.customalert('Unable to Lead, please check your internet connection.');
			}
			else if(type=='CloseLeaderSession')
			{
		//		CoVu.Document.CloseLeaderSession();
			}
			else if(type=='CloseFollowerSession')
			{
		//		CoVu.Document.CloseFollowerSession();
			}
			else if(type=='SetLeaderSessionUrl')
			{
				CoVu.Document.SetLeaderSessionUrl(doc['status']);
			}
			else if(type=="GetFriendsStatus")
			{
				CoVu.Document.FrendVar=true;
				//CoVu.FacebookView.showfriends();
				//CoVu.FacebookView.showpicture();
				/* if(CoVu.Document.leader_session_key!='')
				{
					CoVu.Plugin.customalert("you are leading and internet dc");
					CoVu.View.show_current_screen_onDC();
					
				}
				else if(CoVu.Document.follower_session_key!='')
				{
					//CoVu.Plugin.customalert("you are following and internet dc");
				}
				else */
					//CoVu.View.showHome();
			}
			else if(type=="PushEvent")
			{
				CoVu.Plugin.customalert('Unable to share page.');
			}
			else if(type=="PushEventFollower")
			{
				CoVu.Plugin.customalert('Unable to share page.');
			}
		}
	},
	encodeData : function(value)
	{
		return encodeURIComponent(value);
	},
	PushEvent: function(url,id,name)
	{
		CoVu.httpRequest.sendGetRequest ("PushEvent",["service","leader_session_key","event","url","id","name"],['url',CoVu.Document.leader_session_key,"browsed",this.encodeData(url),id,name]);	
	},
	PushEventFollower : function(url,id,name)
	{
		CoVu.httpRequest.sendGetRequest ("PushEvent",["service","follower_session_key","event","url","id","name"],['url',CoVu.Document.follower_session_key,"browsed",this.encodeData(url),id,name]);
	},
	Login: function(type,param,value)
	{
		CoVu.httpRequest.sendGetRequest(type,param,value);	
	},
	CreateMember: function(email,password,confirm_pass)
	{
		CoVu.httpRequest.sendGetRequest ("CreateMember",["email","password","password_confirmation"],[this.encodeData(email),this.encodeData(password),this.encodeData(confirm_pass)]);

	},
	Logout : function()
	{
		CoVu.httpRequest.sendGetRequest("Logout",["login_session_key"],[CoVu.Document.login_session_key]);
	},
	Lead : function(exParam)
	{
		CoVu.httpRequest.sendGetRequest("Lead",["login_session_key"],[CoVu.Document.login_session_key],exParam);			
	},

	GetLeaderSessionFollowers_leader : function ()
	{
		CoVu.httpRequest.sendGetRequest("GetLeaderSessionFollowers",["leader_session_key","login_session_key"],[CoVu.Document.leader_session_key,CoVu.Document.login_session_key]);
	},
	GetLeaderSessionFollowers_follower : function ()
	{
		CoVu.httpRequest.sendGetRequest("GetLeaderSessionFollowers",["follower_session_key","login_session_key"],[CoVu.Document.follower_session_key,CoVu.Document.login_session_key]);
	},
	closeLeaderSession : function ()
	{
		CoVu.httpRequest.sendGetRequest("CloseLeaderSession",["leader_session_key","login_session_key"],[CoVu.Document.leader_session_key,CoVu.Document.login_session_key]);
	},
	
	SetLeaderSessionUrl : function(url)
	{
		CoVu.httpRequest.sendGetRequest("SetLeaderSessionUrl",["leader_session_key","login_session_key","url"],[CoVu.Document.leader_session_key,CoVu.Document.login_session_key,this.encodeData(url)]);
	},
	
	Follow : function(code,url_join)
	{	
		CoVu.httpRequest.sendGetRequest("Follow",["join_code","login_session_key"],[code,CoVu.Document.login_session_key],[url_join]);

	},
	
	GetLeaderSessionUrl : function ()
	{
		CoVu.httpRequest.sendGetRequest("GetLeaderSessionUrl",["follower_session_key","login_session_key"],[CoVu.Document.follower_session_key,CoVu.Document.login_session_key]);
	},
	
	CloseFollowerSession : function()
	{
		CoVu.httpRequest.sendGetRequest("CloseFollowerSession",["follower_session_key","login_session_key"],[CoVu.Document.follower_session_key,CoVu.Document.login_session_key]);
	},
	
resetPassword :function(forgot_email) 
	{
		CoVu.httpRequest.sendGetRequest("RequestPasswordReset",["email"],[this.encodeData(forgot_email)]);
	},
	FB_friends_list : function ()
	{
		CoVu.httpRequest.sendGetRequest("GetFriendsStatus",["login_session_key"],[CoVu.Document.login_session_key]);
	},
	
	sendInvitation : function (email_id,message)
	{
		recipient=email_id.split(",");
		
		var param=[];
		var value=[];
	//	
		param[0]="leader_session_key";
		value[0]=CoVu.Document.leader_session_key;
		param[1]="message";
		value[1]=this.encodeData(message);
		param[2]="login_session_key";
		value[2]=CoVu.Document.login_session_key;

		for(var i=0;i<recipient.length;i++)
		{
			param[i+3]="emails[]";
			value[i+3]=this.encodeData(recipient[i]);
		}
		
		CoVu.httpRequest.sendGetRequest("InviteFollowers",param,value);
	}
}