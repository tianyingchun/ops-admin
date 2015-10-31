(function($) {
	// for layout configurations.
	var pageLayout;
	var config = {
		scrollToBookmarkOnLoad : false,
		defaults : {},
		north : {
			size : "auto",
			spacing_open : 0,
			closable : false,
			resizable : false
		},
		south : {
			size : "auto",
			spacing_open : 0,
			closable : false,
			resizable : false
		},
		west : {
			size : 250,
			spacing_closed : 22,
			togglerLength_closed : 140,
			togglerAlign_closed : "top",
			togglerContent_closed : "菜<BR>单<BR>列<BR>表<BR>",
			togglerTip_closed : "展开菜单列表",
			sliderTip : "展开菜单列表",
			slideTrigger_open : "mouseover"
		}
	}
	$(function() {
		// create page layout
		pageLayout = $('body').layout(config);
	});
})(jQuery);