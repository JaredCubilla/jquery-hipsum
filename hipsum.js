;(function($, window, document, undefined) {

	$.fn.hipsum = function(options) {
		var defaults = {
			paragraphs: 1,
			type: "hipster-latin",
			html: true
		}, 
			self = this;

		options = $.extend({}, defaults, options);

		var url = "http://hipsterjesus.com/api/?paras=" + options.paragraphs + "&type=" + options.type.toLowerCase() + "&html=" + options.html;

		$.getJSON(url, function(data){
			self.html(data.text);
		});

	};

})(jQuery, window, document);