function toggleNav(){
	$('#navbar #navbuttons').toggle();
}

function showPage(page){
	$('.page').hide();
	$('#'+page).show();
}

function init(){
	$('#navbar #navbuttons li a').click(function(){
		var page = $(this).text().replace(' ','').toLowerCase();
		showPage(page);
	})
}

$(document).ready(init);