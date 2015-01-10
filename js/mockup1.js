function toggleNav(){
	$('#navbar #navbuttons').toggleClass('selected');
}

function showPage(page){
	$('.page').hide();
	$('#'+page).show();
	$('#navbar a').removeClass('selected');
	$('#navbar #nav_'+page).addClass('selected');
	$('#navbar #navbuttons').removeClass('selected');
}

function init(){
	$('#navbar #navbuttons li a').click(function(){
		var page = $(this).attr('id').replace('nav_','');
		showPage(page);
	})
}

$(document).ready(init);