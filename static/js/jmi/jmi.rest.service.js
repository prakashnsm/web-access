(function($) {
	
	$(document).ajaxStart(function () {
	    $('body').css('cursor', 'wait');
	});

	$(document).ajaxComplete(function () {
	    $('body').css('cursor', 'auto');
	});

	function defaultErrorCallback(jqXHR, exception) {
		if (jqXHR.status === 0) {
			alert('Not connect.\n Verify Network. URL: ' + jqXHR.origUrl);
		} else if (jqXHR.status == 404) {
			alert('Requested page not found. [404]" URL: ' + jqXHR.origUrl);
		} else if (jqXHR.status == 500) {
			alert('Internal Server Error [500].');
		} else if (exception === 'parsererror') {
			alert('Requested JSON parse failed.');
		} else if (exception === 'timeout') {
			alert('Time out error.');
		} else if (exception === 'abort') {
			alert('Ajax request aborted.');
		} else {
			alert('Uncaught Error.\n' + jqXHR.responseText);
		}
	}

	$.serviceRequestData = function(reqServicePath, reqData, sucessCallBack, async) {
		var options = {
				type : 'POST',
				url : reqServicePath,
				cache : false,
				async: async,
				data : reqData,
				success : sucessCallBack,
				error : defaultErrorCallback
			};
			$.ajax(options);
	};
	
	$.serviceRequestJSON = function(reqServicePath, reqData, sucessCallBack) {
		var options = {
			type : 'POST',
			url : reqServicePath,
			cache : false,
			data : reqData,
			success : sucessCallBack,
			error : defaultErrorCallback
		};
		$.ajax(options);
	};

})(jQuery);
