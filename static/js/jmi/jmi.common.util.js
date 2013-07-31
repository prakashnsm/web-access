(function($) {
	  $.isBlank = function(obj){
		    return(!obj || $.trim(obj) === "");
		  };
	  $.findJSON = function(obj, key, val) {
			    var retv = [];

			    if(jQuery.isPlainOBject(obj))
			    {
			        if(obj[key] === val) // may want to add obj.hasOwnProperty(key) here.
			            retv.push(obj);

			        var objects = jQuery.grep(obj, function(elem) {
			            return (jQuery.isArray(elem) || jQuery.isPlainObject(elem));
			        });

			        retv.concat(jQuery.map(objects, function(elem){
			            return getObjects(elem, key, val);
			        }));
			    }

			    return retv;
			};
})(jQuery);
