(function( window, undefined ) {
var SAWebEvents = {
		fire : function (eventName , params){
		$(document).trigger( eventName , params);
	},
	on : function (eventName , callback){
		$(document).on( eventName , function(e , data){
			callback(data);
		});
	}	
};

//Expose SAWebEvents to the global object
window.SAWebEvents = window.$.SAWebEvents = SAWebEvents;
})(window);
