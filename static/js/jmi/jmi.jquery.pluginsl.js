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
			
			function getSearchAttributes(){
				var attr = new Array;/*{0 : "title",1: ""};*/
				
				attr.push("title");
				attr.push("macId");
				attr.push("deviceid");
				attr.push("hierarchyid");
				attr.push("hierarchyname");
				attr.push("latitude");
				attr.push("longitude");
				
				return attr;
			}

			/*if($().jquery.split('.')[1] >= 8) {*/
				$.expr[':'].saweb_attribute_contains = $.expr.createPseudo(function(search) {
					return function(a) {
						var ret = false;
						var attr = getSearchAttributes();
						console.log('attr : jquery: '+$().jquery.split('.')[1]);
						console.log(a);
						console.log("search str: "+search);
						$(attr).each(function( i ,val){
							if((a.getAttribute(val) || "").toLowerCase().indexOf(search.toLowerCase())>=0){
								ret = true;
								console.log(a.getAttribute(val));
							}
						});
						return ret;
					};
				});
			/*}
			else{
				$.expr[':'].saweb_attribute_contains = function(a,i,m) {
					var ret = false;
					var attr = getSearchAttributes();
					console.log('attr : else: ');
					console.log(attr);
					console.log("search str: "+search);
					$(attr).each(function( i ,val){
						console.log(val);
						
						if((a.getAttribute(val) || "").toLowerCase().indexOf(m[3].toLowerCase())>=0){
							ret = true;
						}
					});
					return ret;
				};			
			}*/

})(jQuery);
