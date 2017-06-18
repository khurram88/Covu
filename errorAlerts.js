		// generic error codes
	var	ERROR_GENERIC_UKNOWN								= 0xE0100;
	var	ERROR_GENERIC_RECORD_NOT_FOUND						= 0xE0101;
	var	ERROR_GENERIC_ACCESS_DENIED							= 0xE0102;
				
		// parameter error codes
	var	ERROR_PARAMETER										= 0xE0200;
	var	ERROR_PARAMETER_MISSING								= 0xE0201;
	var	ERROR_PARAMETER_INVALID								= 0xE0202;
		
		// login error codes
	var	ERROR_LOGIN											= 0xE0300;
	var	ERROR_LOGIN_ID_PASSWORD_INVALID						= 0xE0301;
	var	ERROR_LOGIN_SUSPENDED								= 0xE0302;
/*		
		// client error codes
	const	ERROR_CLIENT										= 0xE0400;
	const	ERROR_CLIENT_PLATFORM_NOT_SUPPORTED					= 0xE0401;
	const	ERROR_CLIENT_PLATFORM_REGISTRATION_NOT_SUPPORTED	= 0xE0402;
	const	ERROR_CLIENT_NOT_REGISTERED							= 0xE0403;
		
	// member error codes
	const	ERROR_MEMBER										= 0xE0500;
	const	ERROR_MEMBER_NOT_A_FRIEND							= 0xE0501;
	const	ERROR_MEMBER_NAME_NO_AT_SIGN						= 0xE0502;
	const	ERROR_MEMBER_EMAIL_EXISTS							= 0xE0503;		
	const	ERROR_MEMBER_PASSWORD_INCORRECT						= 0xE0504;
	const	ERROR_MEMBER_PASSWORD_TOO_SHORT						= 0xE0505;
	const	ERROR_MEMBER_PASSWORD_CONFIRMATION_FAILED			= 0xE0506;
	const	ERROR_MEMBER_PROFILE_IMAGE_INVALID					= 0xE0507;
	const	ERROR_MEMBER_FRIENDSHIP_EXISTS						= 0xE0508;
		
		// covu id error codes
	const	ERROR_COVU_ID										= 0xE0600;
	const	ERROR_COVU_ID_ALREADY_EXISTS						= 0xE0601;

		//notification error codes
	const	ERROR_NOTIFICATIONS									= 0xE0700;
	const	ERROR_NOTIFICATIONS_C2DM_SERVER_UNAVAILABLE 		= 0xE0701;
	const	ERROR_NOTIFICATIONS_C2DM_AUTH_TOKEN_INVALID 		= 0xE0702;
	const	ERROR_NOTIFICATIONS_C2DM_QUOTA_EXCEEDED				= 0xE0703;
		
		// live session error codes
	const	ERROR_LIVE_SESSION									= 0xE0800;
	const	ERROR_LIVE_SESSION_CLOSED							= 0xE0801;
	const	ERROR_LIVE_SESSION_NO_URL							= 0xE0802;
	const	ERROR_LIVE_SESSION_TIMED_OUT						= 0xE0803;
	const	ERROR_LIVE_SESSION_LEADER_NOT_ACTIVE				= 0xE0804;*/
var errorAlerts={


		
	error_message :{ "message":{
		// generic error messages
			ERROR_GENERIC_UKNOWN								: 'Unknown error.',
			ERROR_GENERIC_RECORD_NOT_FOUND						: 'Record not found.',
			ERROR_GENERIC_ACCESS_DENIED							: 'Access denied.',
			
			//# parameter error messages
			ERROR_PARAMETER_MISSING								: 'Missing parameter: $1.',
			ERROR_PARAMETER_INVALID								: 'Invalid parameter: $1.',
			
			// login error messages
			ERROR_LOGIN_ID_PASSWORD_INVALID						:'Invalid login/password combination.',
			ERROR_LOGIN_SUSPENDED								:'Login suspended. $1'
}},
	
		genericError: function(doc)
		{

			var code = parseInt(doc.getElementsByTagName("code")[0].childNodes[0].nodeValue);
			if((code&0xFFF00)==ERROR_GENERIC_UKNOWN)
			{
				return 1;
				
			}
			return 0;		
		},
		getErrorMessage : function(doc)
		{
			if( this.genericError(doc))
			{
				return "Our Server was unable to process your request";
			}
			else
			{
				return doc.getElementsByTagName("message")[0].childNodes[0].nodeValue;
			}	
		},
		login: function(doc)
		{

			if( this.genericError(doc))
			{
				return "Login failed, Try to login again";
			}
			else
			{
				return doc.getElementsByTagName("message")[0].childNodes[0].nodeValue;
			}
		},
		
		signUp: function(doc)
		{
			if( this.genericError(doc))
			{
				return "Our Server was unable to process your request";
			}
			else
			{
				return doc.getElementsByTagName("message")[0].childNodes[0].nodeValue;
			}
		},
		
		registerClient: function(doc)
		{
			if( this.genericError(doc))
			{
				return "Our Server was unable to process your request";
			}
			else
			{
				return doc.getElementsByTagName("message")[0].childNodes[0].nodeValue;
			}
		},
		
		getMemberDetails: function(doc)
		{
			if( this.genericError(doc))
			{
				return "Our Server was unable to process your request";
			}
			else
			{
				return doc.getElementsByTagName("message")[0].childNodes[0].nodeValue;
			}
		},
		
		isCoVuIDAvailable : function(doc)
		{
			if( this.genericError(doc))
			{
				return "Our Server was unable to process your request";
			}
			else
			{
				return doc.getElementsByTagName("message")[0].childNodes[0].nodeValue;
			}
		},
		
		sendBlast : function(doc)
		{
			if( this.genericError(doc))
			{
				return "Our Server was unable to process your request";
			}
			else
			{
				return doc.getElementsByTagName("message")[0].childNodes[0].nodeValue;
			}	
		}
};