var EXPORTED_SYMBOLS = [""];

function covu_lead_listen (event)
	{
		
		var elem=event.target;
		
		var eID=elem.id;
		if (eID=='friend_name' || eID=='img_pp' || eID=="online_friends_img")
		{
			var ParentNode=elem.parentNode;
			//alert(ParentNode);
			CoVu.FacebookPopup.covu_lead(ParentNode,true)
		}
		else
		{
			CoVu.FacebookPopup.covu_lead(elem, true)
		}
		 
	}
	
function reinvite(event)
{
	var elem=event.target;
	var userID = elem.getAttribute("useridinvite")
	BACKGROUND.CoVu.FacebookBack.notify_friends(userID);
}	
function covu_lead_hover (event)
{
	var elem= event.target;
	CoVu.FacebookPopup.covu_lead(elem, false)
	
}
	
function show_covu_buttonE (event)
{
		var elem = event.target;
		var elemID = elem.id;
		
		if(elemID=="online_friends_img" || elemID=="img_pp" || elemID=="friend_name" || elemID=="covu_img")
		{
			elem=elem.parentNode;
			//BACKGROUND.CoVu.Plugin.customalert(elem.id);
			elem.style.backgroundImage = "url(img/hover.png)";
		}
		else
		{
			elem.style.backgroundImage = "url(img/hover.png)";
		}
		var pic = elem.getElementsByTagName('img');
		pic[3].src="img/CoVu_button.png";
		pic[3].style.display="block"; 
		pic[3].addEventListener("click", covu_lead_hover, false);
}
function hide_covu_buttonE (event)
{
		var elem = event.target;		
		var elemID = elem.id;
		
		if(elemID=="online_friends_img" || elemID=="img_pp" || elemID=="friend_name" || elemID=="covu_img")
		{
			elem=elem.parentNode;
			//BACKGROUND.CoVu.Plugin.customalert(elem.id);
			elem.style.backgroundImage = "url(img/friend_tab.png)";
		}
		else
		{
			elem=elem;
			elem.style.backgroundImage = "url(img/friend_tab.png)";
		}		
		var pic = elem.getElementsByTagName('img');
		pic[3].src="";
		pic[3].style.display="none";
}

 function notify_cancel(event)
 {
 	var elem = event.target;
 	par = elem.parentNode;
	CoVu.FacebookPopup.notify_cancel(par);
 }
 

function notify_follow (event)
{
	var elem=event.target;
	CoVu.FacebookPopup.notify_follow(elem);
}
 
 
 
 
CoVu.FacebookPopup={
	
   id : function(id) 
	{
		return document.getElementById(id);		
	},
	
	hideAll: function ()
	{
		//document.removeChild("mydiv");
		CoVu.Waiting.wait();
		//this.id('home_Header').style.display="none";
		this.id("screen_waiting").style.display="none";
		//this.id("screen_follow").style.display="none";
		this.id("screen_default").style.opacity=0.5;
		this.id("screen_signin").style.display="none";
		this.id("screen_signup").style.display="none";
		this.id('screen_lead').style.display='none';
		//this.id("content_login").style.display="none";
		//this.id("content_logOut").style.display="none";
	},
  
	showLead : function ()
	{
		
		
		this.id("screen_waiting").style.display="none";
		//this.id("screen_follow").style.display="none";
		this.id("screen_default").style.display="none";
		this.id("screen_signin").style.display="none";
		this.id("screen_signup").style.display="none";
	    this.id('screen_lead').style.display='block';
		this.id('follower').setAttribute("onclick", "CoVu.Popup.toogleFollowerListDisplay();");
		this.id('follower').style.cursor="pointer";
		this.id('home_Header').style.display="block";
		this.id("invite_button").style.display='block';
		this.id("lead_main").style.display='block';
		
	},
	
	
	showHome : function ()
	{	
		if(BACKGROUND.CoVu.Document.login_session_key=='')
		{
			
			//CoVu.Waiting.wait();
			this.id('join_code').value="";
			this.id("screen_default").style.display="block";
			this.id("content_login").style.display="none";
			this.id("content_logOut").style.display="block";
			this.id("join_code").focus();
			this.id('screen_waiting').style.display='none';
			this.id('leadInfoFollowerList').className = 'slide down';
			//this.id('follower').style.backgroundImage="url(img/viewers.png)";
			this.id("invite-container").style.display='none';
			this.id('home_Header').style.display="block";
			this.id("Login_footer").style.display='none';
			this.id("fb_button").style.display='block';
			this.id("lead_main").style.display='none';
			
			this.id("notification_main").style.display="block";
			this.id("coviewed_main").style.display="block";
			this.id("screen_default").style.opacity=1;
			//document.getElementById("mydiv").style.display='none';
			
		}
		else if (BACKGROUND.CoVu.Document.leader_session_key!="")
		{
		   /* var copy_friend_list = BACKGROUND.CoVu.Document.copy_friend_list;
			for(var z=0; z<copy_friend_list.length; z++)
			{
				var node=this.id('lead_clone');
				node=node.cloneNode(true);
				node.style.display='block';
				if(copy_friend_list[z].status=="invite")
				{
					var picture=node.getElementsByTagName('img')
					var span=node.getElementsByTagName('span')
					picture[0].src="https://graph.facebook.com/"+copy_friend_list[z]['id']+"/picture";
					span[0].textContent=copy_friend_list[z]['name'];
					span[1].textContent=copy_friend_list[z]['status'];
					this.id('lead_container').appendChild(node);
				}			
			}*/
			//this.id('screen_waiting').style.display='none';
			this.id("content_login").style.display="block";
			this.id("content_logOut").style.display="none"
			this.id("screen_default").style.display="block";
			this.id("lead_main").style.display='block';
			this.id('home_Header').style.display="block";
			this.id("Login_footer").style.display='none';
			this.id("fb_button").style.display='none';
			this.id("f_n_container").style.height="429px";
			this.id("covu_friends_container").style.height=395-(this.id("lead_main").offsetHeight);
			this.id("f_n_container").style.backgroundImage = "url(img/friendlist_container.png)";
			this.id("frnd_large").style.display="block";
			   this.id("frnd_small").style.display="none";
			  
			   this.id("notification_small").style.display="block";
			   this.id("notification_large").style.display="none";
			   this.id("covu_friends_container").style.display="block";
			   this.id("screen_default").style.opacity=1;
			   if(document.getElementById("mydiv"))
				   document.getElementById("mydiv").style.display='none';
		}
		else if(BACKGROUND.CoVu.Document.follower_session_key!="")
		{
			/*var copy_friend_list = BACKGROUND.CoVu.Document.copy_friend_list;
			for(var z=0; z<copy_friend_list.length; z++)
			{
				var node=this.id('lead_clone');
				node=node.cloneNode(true);
				node.style.display='block';
				if(copy_friend_list[z].status=="invite")
				{
					var picture=node.getElementsByTagName('img')
					var span=node.getElementsByTagName('span')
					picture[0].src="https://graph.facebook.com/"+copy_friend_list[z]['id']+"/picture";
					span[0].textContent=copy_friend_list[z]['name'];
					span[1].textContent=copy_friend_list[z]['status'];
					this.id('lead_container').appendChild(node);
				}			
			}*/
			CoVu.Waiting.wait();
			//this.id('screen_waiting').style.display='none';
			this.id("content_login").style.display="block";
			this.id("content_logOut").style.display="none"
			this.id("screen_default").style.display="block";
			this.id("lead_main").style.display='block';
			this.id('home_Header').style.display="block";
			
			this.id("Login_footer").style.display='none';
			this.id("fb_button").style.display='none';
			this.id("f_n_container").style.height="429px";
			this.id("covu_friends_container").style.height=395-(this.id("lead_main").offsetHeight);
			this.id("f_n_container").style.backgroundImage = "url(img/friendlist_container.png)";
			this.id("screen_default").style.opacity=1;
			document.getElementById("mydiv").style.display='none';
			this.showNotification(true);
		}
		else
		{
		    CoVu.Waiting.wait();
			this.id('join_code').value="";
			this.id("screen_default").style.display="block";
			this.id("sign_button").style.display="none";
			this.id("logout_button").style.display="block";
			this.id("join_code").focus();
			this.id('screen_waiting').style.display='none';
			this.id('leadInfoFollowerList').className = 'slide down';
			//this.id('follower').style.backgroundImage="url(img/viewers.png)";
			this.id("invite-container").style.display='none';
			this.id('home_Header').style.display="block";
			this.id("Login_footer").style.display='block';
			this.id("content_login").style.display="block";
			this.id("content_logOut").style.display="none";
			this.id("fb_button").style.display='none';
			this.id("lead_main").style.display='none';
			this.id("f_n_container").style.height="369px";
			this.id("covu_friends_container").style.height="330px";
			this.id("f_n_container").style.backgroundImage = "url(img/friendlist_container369.png)";
			
			this.id("notification_main").style.display="block";
			this.id("coviewed_main").style.display="block";
			this.id("screen_default").style.opacity=1;
			document.getElementById("mydiv").style.display='none';
			if (BACKGROUND.CoVu.Document.local_storage==false)
				{
				this.id('email-id').textContent=BACKGROUND.CoVu.Document.email_id;
				}
			else
				{
				this.id('email-id').textContent=localStorage["email_id"];
				}
		}
		
		this.id("invite_button").style.display='none';
		//this.id('version').textContent=BACKGROUND.CoVu.Plugin.VersionInfo();

	},
	
	showpicturee : function()
	{
		if(BACKGROUND.CoVu.FacebookDoc.id_FB!='')
		{
			this.id('large_profile_image').src="https://graph.facebook.com/"+BACKGROUND.CoVu.FacebookDoc.id_FB+"/picture";
			this.id('facebook_user_name').textContent=BACKGROUND.CoVu.FacebookDoc.FBname;
			//this.id('covu_friends_container_online').innerHTML='';
			//this.id('covu_friends_container_offline').innerHTML='';
		}
		else
		{
			this.id('facebook_user_name').textContent="Guest";
			this.id('large_profile_image').src="img/avatar.png";
		}
	},
	
	Covu_friend :function ()
	{
		if(this.id("covu_friends_container").style.display=='none')
		{
			this.id("covu_friends_container").style.display='block';
			
			//this.id("FB_friend").style.display='none';
			//this.id("offline_friend").style.display='none';
		}
		else
		{
			this.id("covu_friends_container").style.display='none';
			
			
		}
	},
	
	FBLogin : function ()
	{
		BACKGROUND.CoVu.Plugin.createTab();
		BACKGROUND.CoVu.Plugin.updateTab('http://'+BACKGROUND.CoVu.Config.covu_website+"/login");
	},
	
	SortByName : function (x,y) 
	{
      return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
    },
	
	showfriends : function()
	{
		this.id("screen_default").style.opacity=1;
		if(document.getElementById("mydiv"))
				document.getElementById("mydiv").style.display='none';
		if(BACKGROUND.CoVu.Document.FrendVar==false)	
		{
			this.id('covu_friends_container_online').innerHTML='';
			this.id('covu_friends_container_offline').innerHTML='';
			this.id('lead_container').innerHTML='';
		}
		if(BACKGROUND.CoVu.FacebookDoc.friend_list.length>=10)
		{
			this.id('covu_friends_container_online').style.width="285px";
			this.id('covu_friends_container_offline').style.width="285px";
			this.id('covu_friends').style.width="284px";
		}
		
		copy_friend_list=BACKGROUND.CoVu.FacebookDoc.friend_list;
		hush_arr={};
		copy_friend_list.sort(this.SortByName);
		online_friends = BACKGROUND.CoVu.FacebookDoc.friends_online;
		//online_friends.sort(this.SortByName);
		invited_friend=BACKGROUND.CoVu.FacebookDoc.invited_friend_list;
		follower_list=BACKGROUND.CoVu.Document.follower_list;
		//var recent_arr='';
		var leader;
		var recent_index=0;
		
		// Initialiy all friends offline
		for(var i=0;i<copy_friend_list.length;i++)
		{
			hush_arr[copy_friend_list[i].id]=[copy_friend_list[i].id, copy_friend_list[i].name, "offline"];
			//this.abc.push({b:{id: CoVu.Document.friend_list[i]["id"], name: CoVu.Document.friend_list[i]["name"], status: 'offline'}});
		}
		
				//Differiate online and offlines
		
			for(var a=0; a<online_friends.length; a++)
			{
				var b = online_friends[a];
				hush_arr[b][2]="online";
				
				/*for(var i=0;i<copy_friend_list.length; i++)
				{
					var b = online_friends[a]; 
					if(b==copy_friend_list[i]['id'])
					{
						copy_friend_list[i].status="online";
						
					}
					else if(copy_friend_list[i].status!="online")
					{
						 copy_friend_list[i].status="offline";
					}	
				}*/	
			}
			for(var a=0; a<invited_friend.length; a++)
			{
				var b = invited_friend[a]['id'];
					hush_arr[b][2]="invited";				
			}
			for(var a=0; a<follower_list.length; a++)
			{
				var b = follower_list[a]['id'];
				if(b==null || b=="null")
				{
					var node1=this.id('lead_clone');
					node1=node1.cloneNode(true);
					node1.style.display='block';
					var picture=node1.getElementsByTagName('img')
					var span=node1.getElementsByTagName('span')
					picture[0].src="img/avatar.png";
					span[0].textContent="Guest";
					span[1].textContent="CoViewer";
					node1.id="Guest"+a;
					this.id('lead_container').appendChild(node1);
				}
				else
				{
					for(var i=0;i<invited_friend.length;i++)
					{
						if(invited_friend[i].id==b)
						{
							BACKGROUND.CoVu.FacebookDoc.invited_friend_list.splice(i,1);
						}
					}
					
					if(hush_arr[b])
					{
						hush_arr[b][2]="CoViewer";
					}
					else
					{
						var node1=this.id('lead_clone');
						node1=node1.cloneNode(true);
						node1.style.display='block';
						var picture=node1.getElementsByTagName('img')
						var span=node1.getElementsByTagName('span')
						picture[0].src="img/avatar.png";
						span[0].textContent="Guest";
						span[1].textContent="CoViewer";
						node1.id="Guest";
						this.id('lead_container').appendChild(node1); 
					}
				}	
				
			}
			
			if(BACKGROUND.CoVu.Document.leader_id.id)
			{
				var b = BACKGROUND.CoVu.Document.leader_id.id;
				if(b=="Guest")
				{
					var node1=this.id('lead_clone');
					node1=node1.cloneNode(true);
					node1.style.display='block';
					var picture=node1.getElementsByTagName('img')
					var span=node1.getElementsByTagName('span')
					picture[0].src="img/avatar.png";
					span[0].textContent="Guest";
					span[1].textContent="Leading";
					node1.id="Guest";
					this.id('lead_container').appendChild(node1);
					
					var searchInfollowmode = BACKGROUND.CoVu.FacebookDoc.recent_arr.search(BACKGROUND.CoVu.FacebookDoc.FBname);
					
					if(searchInfollowmode==-1)
					{
						BACKGROUND.CoVu.FacebookDoc.recent_arr="Guest,";
						BACKGROUND.CoVu.FacebookDoc.recent_arr+=BACKGROUND.CoVu.FacebookDoc.FBname+",";	
					}
					
					//BACKGROUND.CoVu.FacebookDoc.recent_arr="Guest,";
					//BACKGROUND.CoVu.FacebookDoc.recent_arr+=BACKGROUND.CoVu.FacebookDoc.FBname+",";					
				}
				else if(hush_arr[b])
				{				
					hush_arr[b][2]="Leading";
					
					var searchInfollowmode = BACKGROUND.CoVu.FacebookDoc.recent_arr.search(BACKGROUND.CoVu.FacebookDoc.FBname);
					
					if(searchInfollowmode==-1)
					{
						BACKGROUND.CoVu.FacebookDoc.recent_arr=hush_arr[b][1]+",";
						BACKGROUND.CoVu.FacebookDoc.recent_arr+=BACKGROUND.CoVu.FacebookDoc.FBname+",";
					}
					
					//BACKGROUND.CoVu.FacebookDoc.recent_arr=hush_arr[b][1]+",";
					//BACKGROUND.CoVu.FacebookDoc.recent_arr+=BACKGROUND.CoVu.FacebookDoc.FBname+",";
				}
				else
				{
						var node1=this.id('lead_clone');
						node1=node1.cloneNode(true);
						node1.style.display='block';
						var picture=node1.getElementsByTagName('img')
						var span=node1.getElementsByTagName('span')
						picture[0].src="img/avatar.png";
						span[0].textContent="Guest";
						span[1].textContent="Leading";
						node1.id="Guest";
						this.id('lead_container').appendChild(node1);
						BACKGROUND.CoVu.FacebookDoc.recent_arr="Guest,";
						BACKGROUND.CoVu.FacebookDoc.recent_arr+=BACKGROUND.CoVu.FacebookDoc.FBname+",";							
				}
					
			}
			
			
			if(BACKGROUND.CoVu.Document.leader_session_key)
			{
				var searchIn = BACKGROUND.CoVu.FacebookDoc.recent_arr.search(BACKGROUND.CoVu.FacebookDoc.FBname);
				if(searchIn==-1)
				{
					BACKGROUND.CoVu.FacebookDoc.recent_arr=BACKGROUND.CoVu.FacebookDoc.FBname+",";
				}
				
			}
	//	this.id("covu_friends_container_online").removeChild(parent_node);
		for(var kk=0;kk<BACKGROUND.CoVu.FacebookDoc.friend_list.length;kk++)
		{
			var node=this.id('covu_friends');
			node=node.cloneNode(true);
			node.style.display='block';
			if(hush_arr[copy_friend_list[kk]['id']][2]=="online")
			{

						var picture=node.getElementsByTagName('img');
						picture[2].src="https://graph.facebook.com/"+hush_arr[copy_friend_list[kk]['id']][0]+"/picture";
						picture[0].style.display="block";
						picture[1].style.display="none";
						node.id=hush_arr[copy_friend_list[kk]['id']][0];
						node.getElementsByTagName("span")[0].textContent=hush_arr[copy_friend_list[kk]['id']][1];
						node.setAttribute('userid', hush_arr[copy_friend_list[kk]['id']][0]);
						this.id('covu_friends_container_online').appendChild(node);
						node.addEventListener('dblclick', covu_lead_listen);
						node.addEventListener("mouseover", show_covu_buttonE, false);
						node.addEventListener("mouseout", hide_covu_buttonE, false);
			}
			else if(hush_arr[copy_friend_list[kk]['id']][2]=="offline")
			{
					var picture=node.getElementsByTagName('img');
					picture[2].src="https://graph.facebook.com/"+hush_arr[copy_friend_list[kk]['id']][0]+"/picture";
					picture[0].style.display="none";
					picture[1].style.display="block";
					node.getElementsByTagName("span")[0].textContent=hush_arr[copy_friend_list[kk]['id']][1];
					node.setAttribute('userid', hush_arr[copy_friend_list[kk]['id']][0]);
					node.onmouseover='';
					node.ondblclick='';
					node.style.cursor="default";
					this.id('covu_friends_container_offline').appendChild(node);
			}
			else if(hush_arr[copy_friend_list[kk]['id']][2]=="invited")
			{
				var node1=this.id('lead_clone');
				node1=node1.cloneNode(true);
				node1.style.display='block';
					var picture=node1.getElementsByTagName('img')
					var span=node1.getElementsByTagName('span')
					picture[0].src="https://graph.facebook.com/"+hush_arr[copy_friend_list[kk]['id']][0]+"/picture";
					span[0].textContent=hush_arr[copy_friend_list[kk]['id']][1];
					span[1].textContent="Reinvite";
					span[1].setAttribute('useridinvite', hush_arr[copy_friend_list[kk]['id']][0]);
					span[1].addEventListener("click", reinvite, false);
					span[2].textContent=hush_arr[copy_friend_list[kk]['id']][2];
					node1.id=hush_arr[copy_friend_list[kk]['id']][0];
					this.id('lead_container').appendChild(node1);
					
			}
			else if(hush_arr[copy_friend_list[kk]['id']][2]=="CoViewer")
			{
				var node1=this.id('lead_clone');
				node1=node1.cloneNode(true);
				node1.style.display='block';
					var picture=node1.getElementsByTagName('img')
					var span=node1.getElementsByTagName('span')
					picture[0].src="https://graph.facebook.com/"+hush_arr[copy_friend_list[kk]['id']][0]+"/picture";
					span[0].textContent=hush_arr[copy_friend_list[kk]['id']][1];
					span[1].textContent="";
					span[2].textContent=hush_arr[copy_friend_list[kk]['id']][2];
					node1.id=hush_arr[copy_friend_list[kk]['id']][0];
					if(follower_list.length>0)
					{
						var searchInrecent = BACKGROUND.CoVu.FacebookDoc.recent_arr.search(hush_arr[copy_friend_list[kk]['id']][1]);
						if(searchInrecent==-1)
						{
							BACKGROUND.CoVu.FacebookDoc.recent_arr+=hush_arr[copy_friend_list[kk]['id']][1]+',';
						}	
					}
					
					this.id('lead_container').appendChild(node1);
					
			}
			else if(hush_arr[copy_friend_list[kk]['id']][2]=="Leading")
			{
				var node1=this.id('lead_clone');
				node1=node1.cloneNode(true);
				node1.style.display='block';
					var picture=node1.getElementsByTagName('img')
					var span=node1.getElementsByTagName('span')
					picture[0].src="https://graph.facebook.com/"+hush_arr[copy_friend_list[kk]['id']][0]+"/picture";
					span[0].textContent=hush_arr[copy_friend_list[kk]['id']][1];
					span[1].textContent="";
					span[2].textContent=hush_arr[copy_friend_list[kk]['id']][2];
					//leader=hush_arr[copy_friend_list[kk]['id']][1];
					node1.id=hush_arr[copy_friend_list[kk]['id']][0];
					this.id('lead_container').appendChild(node1);
					
			}
			
		}
		var offHeightLead=this.id("lead_main").offsetHeight;
		var offHeighttabs=this.id("tabs").offsetHeight;
		var offHeightFooter=this.id("Login_footer").offsetHeight;
			//BACKGROUND.CoVu.Plugin.customalert(offHeightLead);
			//BACKGROUND.CoVu.Plugin.customalert(offHeighttabs);
			//BACKGROUND.CoVu.Plugin.customalert(offHeightFooter);
			this.id("covu_friends_container").style.height=429-(offHeightLead+offHeighttabs+offHeightFooter+7) ;
			//var he=this.id("covu_friends_container").style.height;
			//BACKGROUND.CoVu.Plugin.customalert("friendHeight  " + this.id("covu_friends_container").style.height);
		var recent=BACKGROUND.CoVu.FacebookDoc.recent_arr;
		// Show recent history
		this.id('clone_recent').textContent=recent.substr(0,recent.length-1);
		this.id('clone_recent').title=recent.substr(0,recent.length-1);
		
		//var covu_friends=new Array();
	   /*  var covu_friends=new Array();
		 var online_friends=new Array();
		 var copy_friend_list;
		 
		 var len = BACKGROUND.CoVu.Document.friend_list.length;
		 var copyarr = new Array(len);
		 
	     covu_friends = BACKGROUND.CoVu.Document.friend_list;
		 online_friends = BACKGROUND.CoVu.Document.friends_online;
		 copy_friend_list = BACKGROUND.CoVu.Document.copy_friend_list;
		
		
		
		var container_child_online = this.id('covu_friends_container_online').childNodes;
		var container_child_offline = this.id('covu_friends_container_offline').childNodes;
		var container_length_online = container_child_online.length;
		var container_length_offline = container_child_offline.length;
		var co=0;
		
		//Differiate online and offlines
		
			for(var a=0; a<online_friends.length; a++)
			{
				for(var i=0;i<copy_friend_list.length; i++)
				{
					var b = online_friends[a]; 
					if(b==copy_friend_list[i]['id'])
					{
						copy_friend_list[i].status="online";
						
					}
					else if(copy_friend_list[i].status!="online")
					{
						 copy_friend_list[i].status="offline";
					}	
				}	
			}
		
		if(container_length_online==0 && container_length_offline==0)
				{
				
					if(online_friends.length==0)
					{
						for(var z=0; z<copy_friend_list.length; z++)
						{
							var node=this.id('covu_friends');
								node=node.cloneNode(true);
								node.style.display='block';
								
								var picture=node.getElementsByTagName('img')
								picture[2].src="https://graph.facebook.com/"+copy_friend_list[z]['id']+"/picture";
								picture[0].style.display="none";
								picture[1].style.display="block";
								node.getElementsByTagName("span")[0].textContent=copy_friend_list[z]['name'];
								node.setAttribute('userid', copy_friend_list[z]['id']);
								this.id('covu_friends_container_offline').appendChild(node);
							
						}
					}
					else
					{
						//Display online friends
		
						for(var kk=0; kk<copy_friend_list.length; kk++)
						{
							var node=this.id('covu_friends');
							node=node.cloneNode(true);
							node.style.display='block';

							if(copy_friend_list[kk].status=="online")
							{
								var picture=node.getElementsByTagName('img');
								picture[2].src="https://graph.facebook.com/"+copy_friend_list[kk]['id']+"/picture";
								picture[0].style.display="block";
								picture[1].style.display="none";
								node.getElementsByTagName("span")[0].textContent=copy_friend_list[kk]['name'];
								node.setAttribute('userid', copy_friend_list[kk]['id']);
								this.id('covu_friends_container_online').appendChild(node);
							}
							else if(copy_friend_list[kk].status=="offline")
							{
								var picture=node.getElementsByTagName('img');
								picture[2].src="https://graph.facebook.com/"+covu_friends[kk]['id']+"/picture";
								picture[0].style.display="none";
								picture[1].style.display="block";
								node.getElementsByTagName("span")[0].textContent=covu_friends[kk]['name'];
								node.setAttribute('userid', covu_friends[kk]['id']);
								this.id('covu_friends_container_offline').appendChild(node);
							}
						}
					
					}
				}
				else
				{
					/*for(var j=0; j<covu_friends.length; j++)
					{
						for(var s=0; s<container_child.length; s++)
						{
							if(covu_friends[j]['id']==container_child[s].getAttribute("userid"))
							{	
								c0=0;
								break;
							}
							else
							{
								co++;
							}
						}
						if(co.length==container_child.length)
						{
							var node=this.id('covu_friends');
							node=node.cloneNode(true);
							node.style.display='block';
						
							var picture=node.getElementsByTagName('img')
							picture[2].src="https://graph.facebook.com/"+covu_friends[j]['id']+"/picture";
							picture[0].style.display="none";
							picture[1].style.display="block";
							node.getElementsByTagName("span")[0].textContent=covu_friends[j]['name'];
							node.setAttribute('userid', covu_friends[j]['id']);
							this.id('covu_friends_container').appendChild(node);
						}
					}*/
				//}
	},
	
		
	covu_lead : function (elem, lead) 
	{	
		var parent_node;
		var userid ;
		if(lead)
		{
			parent_node= elem;
			userid = elem.getAttribute("userid")
		}
		else
		{
			 parent_node = elem.parentNode;
			 userid = parent_node.getAttribute("userid");
		
		}
		var copy_friend_list = BACKGROUND.CoVu.FacebookDoc.copy_friend_list;
		for(var b=0; b<copy_friend_list.length; b++)
		{
			if(copy_friend_list[b].id==userid)
			{
				BACKGROUND.CoVu.FacebookDoc.copy_friend_list[b].status="invite";
			}
		}
		BACKGROUND.CoVu.FacebookDoc.pushInvitedFriends(userid);
		this.id("covu_friends_container_online").removeChild(parent_node);
		BACKGROUND.CoVu.FacebookDoc.invite_user_id=userid;
		if(BACKGROUND.CoVu.Document.leader_session_key=='' && BACKGROUND.CoVu.Document.follower_session_key=='')
		{
			CoVu.Popup.startLead(true);
		}	
		else
			BACKGROUND.CoVu.FacebookBack.notify_friends(userid);
		
		
	},
	show_covu_button : function (elem)
	{
		elem.style.backgroundImage = "url(img/hover.png)";
		var pic = elem.getElementsByTagName('img');
		pic[3].src="img/CoVu_button.png";
		pic[3].style.display="block";
		//this.id("covu_img").style.display="block";
	},
	hide_covu_button : function (elem)
	{
		elem.style.backgroundImage = "url(img/friend_tab.png)";
		var pic = elem.getElementsByTagName('img');
		pic[3].src="";
		pic[3].style.display="none";
		//this.id("covu_img").style.display="block";
	},
	
	showNotification : function(toogle)
	{
		
		if(!toogle)
		{
			toogle=false;
		}
	    CoVu.FacebookPopup.display_notification(BACKGROUND.CoVu.FacebookDoc.Notification_count);
		if(this.id("frnd_large").style.display=="block" && toogle==false)
		{
			this.id("frnd_large").style.display="none";
			this.id("frnd_small").style.display="block";
			this.id("notification_small").style.display="none";
			this.id("notification_large").style.display="block";
			this.id("covu_friends_container").style.display="none";
			this.id("notification_main").style.display="block";
			this.id("frds_notification").textContent="";
			this.id("coviewed_main").style.display="block";
		    this.id("lead_main").style.display='none';
			this.id("CoViewed_container").style.display="block";
		   if (BACKGROUND.CoVu.Document.leader_session_key!="" || BACKGROUND.CoVu.Document.follower_session_key!="")
		   {
				this.id("recent_main").style.display='block';
		   }
		   else
		   {
				this.id("recent_main").style.display='none';
		   }
			
		}
		else
		{
			this.id("frnd_large").style.display="block";
			this.id("frnd_small").style.display="none";
			this.id("notification_small").style.display="block";
			this.id("notification_large").style.display="none";
			this.id("covu_friends_container").style.display="block";
			this.id("notification_main").style.display="none";
			this.id("coviewed_main").style.display="block";
			this.id("notify_box").style.display="none";
		   if (BACKGROUND.CoVu.Document.leader_session_key!="" || BACKGROUND.CoVu.Document.follower_session_key!="")
		   {
				this.id("lead_main").style.display='block';
				this.id("recent_main").style.display='block';
		   }
		   else
		   {
				this.id("lead_main").style.display='none';
				this.id("recent_main").style.display='none';
		   }
			
		}
	},
	
	
	
	showFollowerCount : function()
	{
		this.id('leadInfoFollowCount').textContent=BACKGROUND.CoVu.Document.follower_list.length;
	},
	showNotificationCount : function()
	{
		if(BACKGROUND.CoVu.FacebookDoc.Notification_count.length==0)
		{
			this.id("frds_notification").textContent="";
			this.id("notify_box").style.display="none";
		}
		else
		{
	  
			this.id("notify_box").style.display="block";
			this.id('frds_notification').textContent=BACKGROUND.CoVu.FacebookDoc.Notification_count.length;
		}
	},
	
	display_notification : function(data)
	{
	    
		var node=this.id('notification');
		
		while (node.hasChildNodes()) 
		{
    		node.removeChild(node.lastChild);
		}
		if(data)
		{
		   
			
			for(var i=0;i<data.length;i++)
			{
				
				elem=this.id('notify_clone').cloneNode(true);
					
					elem.id=data[i]['id'];
					elem.getElementsByTagName("img")[0].src="https://graph.facebook.com/"+data[i]['id']+"/picture";
					elem.getElementsByTagName("span")[0].textContent=BACKGROUND.CoVu.FacebookDoc.search(data[i]['id']);
					elem.getElementsByTagName("img")[1].setAttribute('code', data[i]['join_code']);
					elem.getElementsByTagName("img")[1].addEventListener("click", notify_follow, false);
					elem.getElementsByTagName("img")[2].addEventListener("click", notify_cancel, false);
					elem.style.display='block';
					
					//node.appendChild(elem);
					node.insertBefore(elem, node.firstChild);
					
			}
				
		}
		
	},
	
	notify_cancel : function(elem)
	{
		var nodeID=elem.id;
		
		this.id("notification").removeChild(elem);
		for(var i=0;i<BACKGROUND.CoVu.FacebookDoc.Notification_count.length;i++)
		{
				
			if(BACKGROUND.CoVu.FacebookDoc.Notification_count[i].id==nodeID)
			{
				BACKGROUND.CoVu.FacebookDoc.Notification_count.splice(i,1);
				break;
			}
		}
		BACKGROUND.CoVu.Plugin.cancelNotification();
		BACKGROUND.CoVu.Plugin.badge_notification();
	},
	
	notify_follow : function(elem)
	{
		parent = elem.parentNode;
		nodeID = parent.id;
		if(BACKGROUND.CoVu.Document.leader_session_key=='' && BACKGROUND.CoVu.Document.follower_session_key=='')
		{
			
			var code = elem.getAttribute("code");
			//this.id("notification").style.display="none";
			BACKGROUND.CoVu.Background.Follow(code,false);
			for(var i=0;i<BACKGROUND.CoVu.FacebookDoc.Notification_count.length;i++)
			{
				if(BACKGROUND.CoVu.FacebookDoc.Notification_count[i].id==nodeID)
				{
					BACKGROUND.CoVu.FacebookDoc.Notification_count.splice(i,1);
					
				}
			}
			BACKGROUND.CoVu.Plugin.cancelNotification();
			BACKGROUND.CoVu.Plugin.badge_notification();
		}
		else
		{
			BACKGROUND.CoVu.Plugin.customalert("You are already in a session");
			BACKGROUND.CoVu.Plugin.cancelNotification();
			BACKGROUND.CoVu.Plugin.badge_notification();
		}
	}
	
	
	
	
	
}

/*window.onload = function() {

		
		if(BACKGROUND.CoVu.Document.leader_session_key!="")
		{	
			CoVu.Popup.showHome();
			CoVu.FacebookPopup.showpicturee();
			CoVu.FacebookPopup.showfriends();
			CoVu.FacebookPopup.history();
			CoVu.FacebookPopup.showNotificationCount();
			return;
		
		}
		else if(BACKGROUND.CoVu.Document.follower_session_key!="")
		{
			CoVu.Popup.showHome();
			CoVu.FacebookPopup.showpicturee();
			CoVu.FacebookPopup.showfriends();
			CoVu.FacebookPopup.history();
			CoVu.Popup.setFollowUrl()
			CoVu.FacebookPopup.showNotificationCount();
			return;
		}
		else if(BACKGROUND.CoVu.Document.lead_progress==true)
		{
			CoVu.Waiting.wait();
			CoVu.FacebookPopup.showpicturee();
			CoVu.FacebookPopup.showfriends();
			CoVu.FacebookPopup.history();
			CoVu.FacebookPopup.showNotificationCount();
			return;
		}
		else if(BACKGROUND.CoVu.Document.login_progress==true)
		{
			CoVu.Waiting.wait();
			//CoVu.Popup.showHome();
			return;
		}
		else
		{	
		   // CoVu.FacebookPopup.history();
			CoVu.Popup.showHome();
			//CoVu.FacebookPopup.showpicturee();
			//CoVu.FacebookPopup.showfriends();
			//CoVu.FacebookPopup.showNotificationCount();
			//CoVu.Popup.showLiteHome();
		}	
	

}*/		


