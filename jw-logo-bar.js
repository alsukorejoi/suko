var jwLogoBar = {addLogo: function (playerInstance) {
var playerContainer = playerInstance.getContainer();
var logoToolTip = $('<div></div>')
	.addClass('player-tooltip')
	.html('Movie Anime Sub Indonesia');
var logoDiv = $('<a></a>')
	.addClass('jw-icon jw-icon-inline jw-button-color jw-reset jw-logo-bar')
	.css('background-image', 'url('+playerInstance.getConfig().logo.logoBar+')')
	.append(logoToolTip)
	.attr('href', playerInstance.getConfig().logo.link)
	.attr('target', playerInstance.getConfig().logo.target='_blank');
$(playerContainer).find('.jw-controlbar-right-group .jw-icon-fullscreen').before(logoDiv);
}}