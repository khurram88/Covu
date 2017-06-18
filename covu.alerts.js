var EXPORTED_SYMBOLS = [""];

CoVu.Alert={
	
	showErrorAlert : function(errorText)
	{
		$.noticeAdd({text:errorText, title: 'Just saying hi', position: 'bottom', type: 'error', stay: false});
	}

}