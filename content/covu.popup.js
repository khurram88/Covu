var EXPORTED_SYMBOLS = [""];

document.addEventListener('DOMContentLoaded', function () 
{
	document.getElementById('fb_button').addEventListener('click', FBLogin);
	document.getElementById('guest_case').addEventListener('click', guest_login);
	document.getElementById('host_btn_home').addEventListener('click', startLead);
	document.getElementById('lead_click').addEventListener('click', startFollow);
	document.getElementById('host_btn_footer').addEventListener('click', startLead);	
	document.getElementById('lead_click_footer').addEventListener('click', startFollow);
	document.getElementById('lead_click_footer').addEventListener('click', startFollow);
	document.getElementById('frnd_small').addEventListener('click', showNotification);
	document.getElementById('notification_small').addEventListener('click', showNotification);
	document.getElementById('lead_stop').addEventListener('click', closeLeaderSession);
	document.getElementById('join_code').addEventListener("keypress", JoinCode_Press , false);
	document.getElementById('join_code_footer').addEventListener("keypress", JoinCodeFooter_Press , false);
	//document.getElementById('covu_friends').addEventListener('dblclick', covu_lead);
	//document.getElementById('covu_img').addEventListener('click', covu_lead);
	document.getElementById('recent_stop').addEventListener('click', closeLeaderSession);
	//document.getElementById('notify_join_btn').addEventListener('click', notify_follow);
	 
	
 
  
});
function FBLogin ()
{
	CoVu.Popup.FBLogin();
}

function startLead () 
{
	CoVu.Popup.startLead(false);
}

function startFollow ()
{
	CoVu.Popup.startFollow();
}

function showNotification ()
{
	CoVu.Popup.showNotification();
}

function closeLeaderSession ()
{
	CoVu.Popup.closeLeaderSession();
}
function JoinCode_Press(e)
{
	if (e.keyCode == 13) 
	{
         CoVu.Popup.triggetClickOn("lead_click"); 
    }
}

function JoinCodeFooter_Press(e)
{ 
	if (e.keyCode == 13) 
	{
         CoVu.Popup.triggetClickOn("lead_click_footer"); 
    }
}

function guest_login()
{
	$.prompt('Are you sure to leave this session?',{
				callback: closeguestsession,
				buttons:{Ok:true,Cancel:false}, 
				prefix:'extblue'
			});
}

function closeguestsession(val)
{
	if(val==true)
	{
		closeLeaderSession();
	}	
}


CoVu.Popup={
	
   id : function(id) 
	{
		return document.getElementById(id);		
	},
	showWaiting : function ()
	{ 
		CoVu.Waiting.wait();
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
		if(BACKGROUND.CoVu.Document.login_session_key=='' && BACKGROUND.CoVu.Document.leader_session_key=='' && BACKGROUND.CoVu.Document.follower_session_key=='')
		{
			this.id('join_code').value="";
			//this.id('join_code_footer').value="";
			this.id("screen_default").style.display="block";
			this.id("content_login").style.display="none";
			this.id("content_logOut").style.display="block";
			this.id("join_code").focus();
			this.id('screen_waiting').style.display='none';
			//this.id('leadInfoFollowerList').className = 'slide down';
			//this.id('follower').style.backgroundImage="url(img/viewers.png)";
			this.id("invite-container").style.display='none';
			this.id('home_Header').style.display="block";
			this.id("Login_footer").style.display='none';
			this.id("fb_button").style.display='block';
			this.id("lead_main").style.display='none';
			
			this.id("notification_main").style.display="none";
			this.id("coviewed_main").style.display="none";
			this.id("screen_default").style.opacity=1;
			 if(document.getElementById("mydiv"))
				document.getElementById("mydiv").style.display='none';
			
		}
		
		
		else if (BACKGROUND.CoVu.Document.leader_session_key!="")
		{
			 if(document.getElementById("mydiv"))
				   document.getElementById("mydiv").style.display='none';
				   
			
			//this.id('screen_waiting').style.display='none';
			this.setLeadUrl();
			this.id("content_login").style.display="block";
			this.id("content_logOut").style.display="none"
			this.id("screen_default").style.display="block";
			this.id("lead_main").style.display='block';
			this.id('home_Header').style.display="block";
			this.id("Login_footer").style.display='none';
			this.id("fb_button").style.display='none';
			this.id("f_n_container").style.height="429px";
			//var off=this.id("lead_main").offsetHeight;
			//BACKGROUND.CoVu.Plugin.customalert(off);
			//this.id("covu_friends_container").style.height=380-(this.id("lead_main").offsetHeight);
			this.id("f_n_container").style.backgroundImage = "url(img/friendlist_container.png)";
			this.id("frnd_large").style.display="block";
			this.id("frnd_small").style.display="none";
			this.id("coviewed_main").style.display="none";
			this.id("notification_small").style.display="block";
			this.id("notification_large").style.display="none";
			this.id("covu_friends_container").style.display="block";
			this.id("screen_default").style.opacity=1;
			
			if(BACKGROUND.CoVu.Document.login_session_key=='')
				{
					//BACKGROUND.CoVu.Document.recent_arr="Guest";
					this.id('clone_recent').textContent="Guest";
					this.id('facebook_user_name').textContent="Guest";
					this.id('large_profile_image').src="img/avatar.png";
				}
				
				
			  
				   
		}
		else if(BACKGROUND.CoVu.Document.follower_session_key!="")
		{
		
			this.id("content_login").style.display="block";
			this.id("content_logOut").style.display="none"
			this.id("screen_default").style.display="block";
			this.id("lead_main").style.display='block';
			this.id('home_Header').style.display="block";
			
			this.id("Login_footer").style.display='none';
			this.id("fb_button").style.display='none';
			this.id("f_n_container").style.height="429px";
			//var off=this.id("lead_main").offsetHeight;
			//BACKGROUND.CoVu.Plugin.customalert(off);
			//this.id("covu_friends_container").style.height=380-(this.id("lead_main").offsetHeight);
			this.id("f_n_container").style.backgroundImage = "url(img/friendlist_container.png)";
			this.id("screen_default").style.opacity=1;
			if(document.getElementById("mydiv"))
				document.getElementById("mydiv").style.display='none';
				
			if(BACKGROUND.CoVu.Document.login_session_key=='')
				{
					BACKGROUND.CoVu.FacebookDoc.recent_arr="Guest";
					this.id('clone_recent').textContent="Guest";
					this.id('facebook_user_name').textContent="Guest";
					this.id('large_profile_image').src="img/avatar.png";
				}
			this.showNotification(true);
		}
		
		else
		{
			
		    CoVu.Waiting.wait();
			this.id('join_code_footer').value="";
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
			//this.id("covu_friends_container").style.height="330px";
			this.id("f_n_container").style.backgroundImage = "url(img/friendlist_container369.png)";
			this.id("recent_main").style.display='none';
			//this.id("notification_main").style.display="none";
			//this.id("coviewed_main").style.display="none";
			this.id("screen_default").style.opacity=1;
			 if(document.getElementById("mydiv"))
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
	
	showStream: function ()
	{
		if(this.id("stream").className=='stream-slide in')
		{
			this.id("stream").setAttribute("class", "stream-slide in open");
		}
		else
		{
			this.id("stream").setAttribute("class", "stream-slide in");
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
	/*SortByName : function (x,y) 
	{
      return ((x.name == y.name) ? 0 : ((x.name > y.name) ? 1 : -1 ));
    },
	*/
	
	history : function ()
	{
		//BACKGROUND.CoVu.Plugin.getHistory();
		var node=this.id('CoViewed_container');
		while (node.hasChildNodes()) 
		{
			node.removeChild(node.lastChild);
		}
		var history='';
		for(var i=0;i<10; i++)
		{
			var history_value=BACKGROUND.CoVu.Document.store_arr[i];
			if(history_value==null || history_value=="null")
			{
				break;
			}
			else
			{
				history=history_value;
				var hist=history.substr(0,history.length-1);
				var node1=this.id('CoViewed_clone');
				node1=node1.cloneNode(true);
				node1.style.display='block';
				var span=node1.getElementsByTagName('span');
				span[0].textContent=hist;
				span[0].title=hist;
				node.appendChild(node1);
			}
		}
	},
 
	past_activity : function ()
	{
		BACKGROUND.CoVu.Plugin.setLocalStorage();
	},
	
	/*sendNotification : function ()
	{
		var status=document.getElementById("covu_friends_container").childNodes;
		var j=0;
		var arr = [];
		for (var i=0; i<status.length; i++)
		{	
			if(status[i].getElementsByClassName("checkbox")[0].checked==true)
			{
				//arr[j]=document.getElementsByName("covu_friends_ab")[i].parentNode.getAttribute("userid");
				arr[j]=status[i].getAttribute("userid");
				//arr[j]=status[i].document.getElementsByClassName("covu_f")[0].getAttribute("userid");
				j++;
		}
			
			
		}
		//var aa = BACKGROUND.CoVu.Document.notification_friends;
		//BACKGROUND.CoVu.Plugin.customalert(aa.length);
		
		BACKGROUND.CoVu.Background.notify_friends(arr);
		
		
	},*/
	showNotification : function(toogle)
	{
		
			if(!toogle)
			{
				toogle=false;
			}
			CoVu.FacebookPopup.display_notification(BACKGROUND.CoVu.FacebookDoc.Notification_count);
			if(BACKGROUND.CoVu.Document.login_session_key!='')
			{
				this.history();
			}
			
			if(this.id("frnd_large").style.display=="block" && toogle==false)
			{
				//if(BACKGROUND.CoVu.Document.login_session_key!='')
				//{
					this.id("frnd_large").style.display="none";
					this.id("guest_case").style.display="none";
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
				//}
				/* else
				{
					this.id("frnd_large").style.display="none";
					this.id("guest_case").style.display="block";
					this.id("frnd_small").style.display="block";
					this.id("recent_main").style.display='none';
					this.id("notification_small").style.display="none";
					this.id("notification_large").style.display="block";
					this.id("covu_friends_container").style.display="none";
					this.id("notification_main").style.display="none";
					this.id("frds_notification").textContent="";
					this.id("coviewed_main").style.display="none"; 
					this.id("lead_main").style.display='none';
					this.id("CoViewed_container").style.display="none";
				} */
				
			}
			else
			{
				this.id("frnd_large").style.display="block";
				this.id("frnd_small").style.display="none";
				this.id("guest_case").style.display="none";
				this.id("notification_small").style.display="block";
				this.id("notification_large").style.display="none";
				this.id("covu_friends_container").style.display="block";
				this.id("notification_main").style.display="none";
				this.id("coviewed_main").style.display="none";
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
	
	showFollow : function ()
	{
		this.id("screen_waiting").style.display="none";
		//this.id("screen_follow").style.display="none";
		this.id("screen_default").style.display="none";
	    this.id('screen_lead').style.display='block';
		this.id('follower').removeAttribute("onClick");
		this.id('follower').style.cursor="default";
	},
	
	showSignin : function () 
	{	
		//alert(window['localStorage'].value);
		if (BACKGROUND.CoVu.Document.local_storage==false)
		{
			this.id("email_id").value='';
			this.id("password").value=''
			this.id("remember_password").checked=false;
			
		}
		else{
		this.id("email_id").value=localStorage["email_id"];
		this.id("password").value=localStorage["password"];
		this.id("remember_password").checked=localStorage["remember_password"];
		}
		//this.id("email_id").value='';
		//this.id("password").value='';
		this.hideAll();
		this.id("screen_waiting").style.display="none";
		this.id("screen_signin").style.display="block";
		this.id("email_id").focus();
		
	},
	
	showSignup : function () 
	{	this.id("signup-email").value='';
		this.id("signup-password").value='';
		this.id("confirm-password").value='';
		this.hideAll();
		this.id("screen_waiting").style.display="none";
		this.id("screen_signup").style.display="block";
		this.id("signup-email").focus();
	}, 
	
	signout : function()
	{	
		BACKGROUND.CoVu.Document.local_storage=false;
	    BACKGROUND.CoVu.Background.Logout();
		localStorage.removeItem('email_id');
		localStorage.removeItem('password');
		localStorage.removeItem('remember_password');
		//localStorage.clear();
	},
	
	setLeadUrl : function()
	{
		//this.id('email_url_lite').value=BACKGROUND.CoVu.Document.lite_session_url;
		
		this.id('follow_code').textContent=BACKGROUND.CoVu.Document.join_code;
		//this.id('follow_code').select();
		//this.showFollowerCount();
		
	},
	
	setFollowUrl : function ()
	{
		this.id('email_url_lite').value=BACKGROUND.CoVu.Document.lite_session_url;
		
		this.id('email_url_lite').select();
		this.id('follow_code').textContent=BACKGROUND.CoVu.Document.join_code;
		
	},
	clearLeadUrl : function()
	{
		this.id('email_url_lite').value="";
		this.id('follow_code').textContent="";
	},
	
	showFollowerCount : function()
	{
		this.id('leadInfoFollowCount').textContent=BACKGROUND.CoVu.Document.follower_list.length;
	},
	showNotificationCount : function()
	{
		if(BACKGROUND.CoVu.facebook.Notification_count.length==0)
		{
			this.id("frds_notification").textContent="";
			this.id("notify_box").style.display="none";
		}
		else
		{
	  // BACKGROUND.CoVu.Plugin.customalert(BACKGROUND.CoVu.facebook.Notification_count.length);
			this.id("notify_box").style.display="block";
			this.id('frds_notification').textContent=BACKGROUND.CoVu.facebook.Notification_count.length;
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
					elem.getElementsByTagName("span")[0].textContent=BACKGROUND.CoVu.facebook.search(data[i]['id']);
					elem.getElementsByTagName("img")[1].setAttribute('code', data[i]['join_code']);
					elem.style.display='block';
					
					node.appendChild(elem);
					
			}
				
		}
		
	},
	
	
	sendInvitation : function ()
	{  
		if (this.id('follower_email_id').value!='')
		{
			var missing_field=false;
			var regulx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
			var valid_email = id('follower_email_id').value.match(regulx);
		 	if(valid_email== null)
				{	
					this.id('follower_email_id').style.border='3px solid red';
					missing_field=true;
				} 
				else
				{
			
				BACKGROUND.CoVu.Background.sendInvitation(id('follower_email_id').value, id('invite_message').value);
				this.id("invite-container").style.display='none';
				}
		}
		
		this.id('follower_email_id').style.border='3px solid red';
			
	},
	
	
	//onForgotPasswordSubmit :function ()
//	{
//		
//		BACKGROUND.CoVu.Document.forgot_email=this.id('forgotPasswordEmail').value;
//		BACKGROUND.CoVu.Background.resetPassword(this.id('forgotPasswordEmail').value);
//		
//	},
	
	
	triggetClickOn : function(id)
	{
		this.id(id).click(); 
	},

    invite : function ()
	{
			this.id('follower_email_id').style.border='1px solid #999999';
			if(this.id("invite-container").style.display=='block')
			{
				this.id("invite-container").style.display='none';
				
			}
			else
			{
				this.id("invite-container").style.display='block';
				
			}
				this.id("follower_email_id").value='';			
	},
	
	toogleFollowerListDisplay : function() 
	{
		CoVu.Popup.showFollowers(BACKGROUND.CoVu.Document.follower_list);
         if (this.id('leadInfoFollowerList').className == 'slide down up') 
		{
          
            this.id('leadInfoFollowerList').className = 'slide down';
			//id('follower').style.backgroundImage="url(img/viewers.png)";
        }
        else 
		{
           
			this.id('leadInfoFollowerList').className = 'slide down up';
			
			//id('follower').style.backgroundImage="url(img/viewers_active.png)";
			this.id("invite-container").style.display='none';
        }
    },
	
	showFollowers : function(list)
	{
		var node=this.id('follower_container');
		
		while (node.hasChildNodes()) 
		{
    		node.removeChild(node.lastChild);
		}
		if(list)
		{
			for(var i=0;i<list.length;i++)
			{
				elem=this.id('follower_1').cloneNode(true);
				
				if(list[i]["email"]==null)
				{	
					elem.id='';
					elem.getElementsByTagName("span")[0].textContent="Guest Guest";
					elem.style.display='block';
				}
				else
				{
					
					elem.id='';
					elem.getElementsByTagName("span")[0].textContent=list[i]["email"];
					elem.style.display='block';
					
				}
					
					this.id('follower_container').appendChild(elem);
			}
		}
	},
	
	openFollowerList : function(expand)
	{
		//addFollowerItem(BACKGROUND.follower);
		this.id('leadInfoFollowerList').style.display='block';
		
	},
    
	expandFollowerList : function(expand) 
	{
        if (expand) 
		{
            setVisibile('leadInfoFollowerList', true);
            setVisibile('searchListingContainer', false);
           this.id('leadInfoFollowArrow').src = 'img/arrowDown.png';  
        }
        else 
		{
            setVisibile('leadInfoFollowerList', false);
            setVisibile('homeSearch', true);
            setVisibile('searchListingContainer', true);
           this.id('leadInfoFollowArrow').src = 'img/arrow.png';
			onLeadContainerResize2();
        }

    },
	
	startLead : function(exParam)
	{
		BACKGROUND.CoVu.FacebookDoc.recent_arr='';
		this.id('clone_recent').textContent='';
		BACKGROUND.CoVu.Document.lead_home=true;
		//BACKGROUND.CoVu.Document.lead_progress=true;
		this.clearLeadUrl();
		CoVu.Waiting.wait();
		//this.showWaiting();
		BACKGROUND.CoVu.Background.startLead(exParam);
		
	},
	
	closeLeaderSession : function()
	{
		BACKGROUND.CoVu.Document.lead_home=false;
		BACKGROUND.CoVu.Document.FrendVar=false;
		CoVu.Waiting.wait();
			if(BACKGROUND.CoVu.Document.login_session_key!="")
			{
				
				BACKGROUND.CoVu.FacebookBack.updateFriendList();
				//BACKGROUND.CoVu.Plugin.customalert("history");
				if(BACKGROUND.CoVu.FacebookDoc.recent_arr!='')
				{
					this.past_activity();
				}	
			}
		BACKGROUND.CoVu.Background.closeLeaderSession();
		this.id("recent_main").style.display="none";
	},
    startFollow : function()
    {
    	BACKGROUND.CoVu.Document.lead_progress=true;
		BACKGROUND.CoVu.Document.lead_home=true;
		//BACKGROUND.CoVu.Document.join_url=false;
		this.clearLeadUrl();
		if(BACKGROUND.CoVu.Document.login_session_key=='')
		{
			if(this.id('join_code').value!='' && this.id('join_code').value.length=='4')
			{
				var join_url=false;
				var encode_code=encodeURIComponent(this.id('join_code').value);
				CoVu.Waiting.wait();
				BACKGROUND.CoVu.Background.Follow(encode_code,join_url);
			}
		}
		else {
			if(this.id('join_code_footer').value!='' && this.id('join_code_footer').value.length=='4')
			{
				var join_url=false;
				var encode_code=encodeURIComponent(this.id('join_code_footer').value);
				CoVu.Waiting.wait();
				BACKGROUND.CoVu.Background.Follow(encode_code,join_url);
			}
		}
		BACKGROUND.CoVu.Document.lead_progress=false;	    	
    },
	
	follow : function (code)
	{
		var encode_code=encodeURIComponent(code);
		BACKGROUND.CoVu.Background.Follow(encode_code);
	},
	validateEmail : function (field_id , pwd )
	{ 	
		var missing_field=false;
		var regulx = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		 var valid_email = this.id(field_id).value.match(regulx);
		 if(valid_email== null)
				{
					BACKGROUND.CoVu.Document.lead_progress=false;
					BACKGROUND.CoVu.Plugin.customalert("Enter The Correct Email");
					missing_field=true;
				
				} 
			else if (this.id(pwd).value.length<'6')
				{
					BACKGROUND.CoVu.Document.lead_progress=false;
					BACKGROUND.CoVu.Plugin.customalert("Password Too Short");
					missing_field=true;
				}
				return missing_field;
	},
	
	
	
	
	logIn : function ()
	{			
			
		BACKGROUND.CoVu.Document.lead_progress=true;
		if(this.id('email_id').value!='' &&  this.id('password').value!='')
		{
			if(this.validateEmail('email_id', 'password'))
			return;
			
			//BACKGROUND.CoVu.Document.home_email=this.id('email_id').value;
			//BACKGROUND.CoVu.Document.password=this.id('password').value;
			this.hideAll();
			BACKGROUND.CoVu.Background.logIn(this.id('email_id').value,this.id('password').value,this.id('remember_password').checked);
		}
		else
		{
			BACKGROUND.CoVu.Document.lead_progress=false;
			BACKGROUND.CoVu.Plugin.customalert("Fill the Fields First");
		}
		
	},
	
	Signup : function()
	{	
		BACKGROUND.CoVu.Document.lead_progress=true;
		
		if(this.id('signup-email').value!='' &&  this.id('signup-password').value!='' && this.id('confirm-password').value!='')
		{
			if(this.validateEmail('signup-email', 'signup-password'))
			return;
			
			else if(this.id('signup-password').value==this.id('confirm-password').value)
			
			{
				BACKGROUND.CoVu.Document.email_id=this.id('signup-email').value;
				BACKGROUND.CoVu.Document.password=this.id('signup-password').value;
				this.hideAll();
				BACKGROUND.CoVu.Background.CreateMember(this.id('signup-email').value,this.id('signup-password').value,this.id('confirm-password').value);
			}
			else 
			{
				BACKGROUND.CoVu.Document.lead_progress=false;
				BACKGROUND.CoVu.Plugin.customalert("Password Mismatch");
			}
		
		}
		else
		{
			BACKGROUND.CoVu.Document.lead_progress=false;
			BACKGROUND.CoVu.Plugin.customalert("Fill the Fields First");
		}
		
	},

	
	activeFollowers : function()
	{
		//id("leadInfoFollowCount").innerText=BACKGROUND.followerCount;
		//addFollowerItem(BACKGROUND.follower);
		CoVu.Popup.showFollwers();
	}
	
	/*function tempLead()
	{
		BACKGROUND.tempLead();
		id('screen_lead').style.display='block';
		
		
		id("screen_default").style.display="none";
			//id('email_url_lite').select();
	}
	function stopTempFollow()
	{
		BACKGROUND.closeFollow();
					id('screen_lead').style.display='none';
			id("screen_default").style.display="block";
			id("screen_follow").style.display="none";
	}
	function stopTempLead()
	{
		//document.getElementById('email_url_lite').value="";
		BACKGROUND.lite_session_url="";
		BACKGROUND.closeLeaderSession();
					id('screen_lead').style.display='none';
			id("screen_default").style.display="block";
			id("screen_follow").style.display="none";
	}

	
	//function to hide ui elements throughout the extenstion when the user clicks outside of the focused element

	*/
}

window.onload = function() {

		if(BACKGROUND.CoVu.Document.login_session_key!="" && BACKGROUND.CoVu.Document.leader_session_key=="" && BACKGROUND.CoVu.Document.follower_session_key=="" && BACKGROUND.CoVu.Document.FrendVar==false)
		{
			CoVu.Popup.showHome();
			CoVu.Waiting.wait();
			CoVu.FacebookPopup.showNotificationCount();
		}
		else if(BACKGROUND.CoVu.Document.leader_session_key!="")
		{	
			if(BACKGROUND.CoVu.Document.FrendVar==true)	
				{
					//BACKGROUND.CoVu.Plugin.customalert("");
					BACKGROUND.CoVu.Plugin.customalert('Please check your internet connection.');
					CoVu.FacebookPopup.showfriends();
					CoVu.FacebookPopup.showpicturee();
					CoVu.Popup.showHome();
				}
				else
				{
					CoVu.Popup.showHome();
					if(BACKGROUND.CoVu.Document.login_session_key!="")
					{
						CoVu.Waiting.wait();
					}
					CoVu.FacebookPopup.showNotificationCount();
				}
			return;
		
		}
		else if(BACKGROUND.CoVu.Document.follower_session_key!="")
		{
			if(BACKGROUND.CoVu.Document.FrendVar==true)	
				{
					//BACKGROUND.CoVu.Plugin.customalert("");
					BACKGROUND.CoVu.Plugin.customalert('Please check your internet connection.');
					CoVu.FacebookPopup.showfriends();
					CoVu.FacebookPopup.showpicturee();
					CoVu.Popup.showHome();
				}
			else
			{
				CoVu.Popup.showHome();
				if(BACKGROUND.CoVu.Document.login_session_key!="")
				{
					CoVu.Waiting.wait();
				}
				CoVu.Popup.setFollowUrl()
				CoVu.FacebookPopup.showNotificationCount();
			}
			return;
		}
		/* else if(BACKGROUND.CoVu.Document.lead_progress==true)
		{
			CoVu.Waiting.wait();
			CoVu.FacebookPopup.showpicturee();
			CoVu.FacebookPopup.showfriends();
			CoVu.FacebookPopup.showNotificationCount();
			return;
		} */
		else if(BACKGROUND.CoVu.Document.login_progress==true)
		{
			CoVu.Waiting.wait();
			return;
		}
		else
		{
			
			if(BACKGROUND.CoVu.Document.FrendVar==true)	
				{
					//BACKGROUND.CoVu.Plugin.customalert("");
					BACKGROUND.CoVu.Plugin.customalert('Please check your internet connection.');
					CoVu.FacebookPopup.showfriends();
					CoVu.FacebookPopup.showpicturee();
					CoVu.Popup.showHome();
				}
		  CoVu.Popup.showHome();
		}	
	

}


