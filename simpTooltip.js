(function($) {
	$.extend({
		simpTooltip: function(options) {
			var defaults = {
				position_x: -20,
				position_y: 30,
				target: "[data-tooltip]",
				extraClass: ""
			};
			options = $.extend(defaults, options);
			var targets = $(options.target);
			var xOffset = options.position_x;
			var yOffset = options.position_y;
			targets.hover(function(e) {
				var t = $(this).attr('data-tooltip');
				$("body").append("<div id='simpTooltip' class='simpTooltip " + options.extraClass + "'>" + t + "</div>");
				$("#simpTooltip").css("top", (e.pageY - xOffset) + "px").css("left", (e.pageX + yOffset) + "px").fadeIn("fast");
			}, function() {
				$("#simpTooltip").remove();
			});
			targets.mousemove(function(e) {
				$("#simpTooltip").css("top", (e.pageY + yOffset) + "px").css("left", (e.pageX + xOffset) + "px");
			});
		}
	});
})(jQuery);