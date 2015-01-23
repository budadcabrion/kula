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

function showTeacher(teacher){
	$('#teachers .info').removeClass('selected');
	$('#teachers #' + teacher).addClass('selected');
}


function init(){
	$('#navbar #navbuttons li a').click(function(){
		var page = $(this).attr('id').replace('nav_','');
		showPage(page);
	});

	$('#teachers img, #teachers h1').click(function(){
		var teacher = $(this).parent('.info').attr('id');
		showTeacher(teacher);
	});


	$('#teachers .nav a').click(function(){
		var teacher = $(this).text();
		showTeacher(teacher);
	})


}

$(document).ready(init);