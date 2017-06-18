var EXPORTED_SYMBOLS = [""];

CoVu.Event={
	
	
	timer_follower_list : null,
	timer_get_url : null,
	
	
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