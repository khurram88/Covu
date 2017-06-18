var EXPORTED_SYMBOLS = [""];

CoVu.FacebookEvent={
	
	
	timer_follower_list : null,
	timer_get_url : null,
	timer_get_friends_status : null,
	
	
	start : function(type)
	{
		if(type == "follower_list")
		{
			this.timer_follower_list=setInterval(CoVu.Background.GetLeaderSessionFollowers, 5000);
		}
		else if(type=="get_url")
		{
			this.timer_get_url=setInterval(CoVu.Background.GetLeaderSessionFollowers, 5000);
		}
		else if(type=="getfriendstatus")
		{
			this.timer_get_friends_status=setInterval(CoVu.FacebookBack.FB_friends, 5000);
		}
	},
	
	stop : function(type)
	{
		if(type == "follower_list")
		{
		 	clearInterval(this.timer_follower_list);
			this.timer_follower_list=null;
		}
		else if(type=="get_url")
		{
			clearInterval(this.timer_get_url);
			this.timer_get_url=null;
		}
		
		
	}
}