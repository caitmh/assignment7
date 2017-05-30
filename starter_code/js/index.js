$(document).ready(function(){

	$('#hamburger-menu').click(showNav);

	function showNav() {
		$('#page-header nav').toggle();
	}

});