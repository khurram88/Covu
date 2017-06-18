var EXPORTED_SYMBOLS = [""];

CoVu.FacebookAPI = {
	
	FBResponse : function (doc,type,exParam)
	{
		
			if(type=="friends")
			{
				CoVu.FacebookDoc.friends_FB(doc);
			}
			else if(type=="UserID")
			{
				CoVu.FacebookDoc.FB_name(doc);
			}		
		
	},
	
	
	facebook_friends : function(method,value,type)
	{
		CoVu.FacebookhttpRequest.sendGetRequest(method,value,type);
	},
	facebook_user_detail : function(method,value,type)
	{
		CoVu.FacebookhttpRequest.sendGetRequest(method,value,type);
	},
	FB_friends_list : function ()
	{
		CoVu.httpRequest.sendGetRequest("GetFriendsStatus",["login_session_key"],[CoVu.Document.login_session_key]);
	},
	notify_friends : function(user_id)
	{
		var param=[];
		var value=[];
		param[0]="login_session_key";
		value[0]=CoVu.Document.login_session_key;
		param[1]="code";
		value[1]=CoVu.Document.join_code;
		param[2]="name";
		value[2]=CoVu.FacebookDoc.FBname;
		param[3]="friend_ids[]";
		value[3]=user_id;
		CoVu.httpRequest.sendGetRequest("NotifyFriends",param,value);
		
	},
}