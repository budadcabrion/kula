function log(t){
	console.log(t);
}

function toggleNav(){
	$('#navbar #navbuttons').toggleClass('selected');
}

function showPage(page){
	log(page);
	$('.page').hide();
	$('.page.'+page).show();
	$('#navbar a').removeClass('selected');
	$('#navbar #nav_'+page).addClass('selected');
	$('#navbar #navbuttons').removeClass('selected');

	$('.page.'+page).removeClass('single').show();
	$('.page.'+page+' .selected').removeClass('selected');
}

function showTeacher(teacher){
	$('.teachers .item').removeClass('selected');
	$('.teachers #' + teacher).addClass('selected');
	$('.teachers').addClass('single');
	log(teacher);

}


function init(){

	doAspectRatio();

	$('#navbar #navbuttons li a').click(function(){
		log('what');
		var page = $(this).attr('id').replace('nav_','');
		showPage(page);
	});
/*
	$('.teachers img, #teachers h1').click(function(){
		var teacher = $(this).parent('.info').attr('id');
		showTeacher(teacher);
	});
*/
	$('.teachers a').click(function(){
		var teacher = $(this).find('.item').attr('id');
		log(teacher);
		if ($('.teachers #' + teacher).hasClass('selected')){
			window.location.href="#teachers";
			showPage('teachers');
			return false;
		}else {
			showTeacher(teacher);
		}
	});

}

$(document).ready(init);


function doAspectRatio(){
	$('*[class^="ar"]').each(function(){
		c = $(this);
		//p = $('<div class="ar-wrapper"></div>').attr('class','ar-wrapper-'+c.attr('class'));
		//c.attr('class','ar-inside').wrapAll(p);

		//$clamp(c[0], {clamp:'auto'});
  		//clamp(c[0], 5);
	});
}
