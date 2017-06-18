var EXPORTED_SYMBOLS = [""];

CoVu.FacebookDoc={
	
	access_token : '',
	id_FB : '',
	friend_list : [],
	copy_friend_list : [],
	friends_online : [],
	notification_friends : [],
	login_progress : false,
	url_sender_name : '',
	url_sender_id : '',
	notify : false,
	recent_arr : '',
	store_arr : [],
	FBname : '',
	invited_friend_list : [],
	invite_user_id : '',
	Notification_count : [],
	params : [],
	
	friends_FB : function(doc)
	{
		this.friend_list=doc["data"];		
		this.copy_friend_list=doc["data"];
		
		CoVu.FacebookBack.facebook_user_detail('',this.id_FB,"UserID");
	},
	FB_name : function(doc)
	{
		CoVu.FacebookView.showWaiting();
		this.FBname=doc['name'];
		var param=[];
		var value=[];
		param[0]="facebook_id";
		value[0]=this.id_FB;
		param[1]="name";
		value[1]=this.FBname;

		for(var i=0;i<this.friend_list.length;i++)
		{
			param[i+2]="friend_ids[]";
			value[i+2]=this.friend_list[i]['id'];
		}
		this.login_progress=true; 
		CoVu.Background.logIn("Login",param,value);
	},
	pushInvitedFriends : function(param_id)
	{
		this.invited_friend_list.push({id: param_id, status: 'invited'});
	},
	
	showfriends : function(doc)
	{
		this.friends_online=doc['online'];
		CoVu.FacebookView.showpicture();
		CoVu.FacebookView.showfriends();
	},
	
	search : function(id) 
	{
		for(var i=0; i<this.friend_list.length; i++)
		{
			if(this.friend_list[i]['id']==id)
			{
				return this.friend_list[i]['name'];
			}
		}
		
	},
	playSound : function()
	{
		var snd = new Audio("img/NOTIFY.mp3");
		snd.play();
	},
	notification : function(data)
	{
	    this.Notification_count.push({id: data['sender'], join_code: data['params']['code']});
		CoVu.Plugin.badge_notification();
		this.playSound();
		CoVu.FacebookView.showNotificationCount();
	},
	
	
}