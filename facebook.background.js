var EXPORTED_SYMBOLS = [""];

CoVu.FacebookBack = {

	facebook_friends : function(method,value,type)
	{
		CoVu.FacebookAPI.facebook_friends(method,value,type) 
	},
	
	facebook_user_detail : function(method,value,type)
	{
		CoVu.FacebookAPI.facebook_user_detail(method,value,type)
	},
	
	FB_friends : function ()
	{
		CoVu.FacebookDoc.friends_online='';
		CoVu.FacebookAPI.FB_friends_list();
	},
	notify_friends : function(user_id)
	{
		CoVu.FacebookAPI.notify_friends(user_id);
	},
	updateFriendList : function()
	{
		CoVu.FacebookDoc.invited_friend_list=[];
		CoVu.FacebookView.showfriends();
	},
	
}
