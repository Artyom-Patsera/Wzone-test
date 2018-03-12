$(document).ready(function() {


	var pp = $('.show-p');
	pp.click(function() {
		var id = $(this).attr('for-data');
		$(".popup-bg").show(),
		$(id).show(300);
	});

    $('.close').click(function() {
    	$('.wrap-popup, .popup-bg').hide();
    	$('.popup-bg').hide(1000);

    });

	var $activeH = $('.top-menu a') 
	$activeH.click(function() {
		$activeH.removeClass('active')
		$(this).toggleClass('active')
	});

	var $activeA = $('.form_menu a') 
	$activeA.click(function() {
		$activeA.removeClass('active-form-m')
		$(this).toggleClass('active-form-m')
	});

	var $activeF = $('.wrap-top-f .mod-btt') 
	$activeF.click(function() {
		$activeF.removeClass('active-btt-f')
		$(this).toggleClass('active-btt-f')
	});

	var tab = $('.wrap-top-f a');
	tab.click(function() {
		var id = $(this).attr('for-data');
		$(".wrap-center-f ").removeClass('active-tab'),
		$(id).addClass('active-tab');
	});

	$('.menu-trigger').click(function() {
        $('.nav ul').slideToggle(400, function() {
            if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });


    

});

$('#enter').validate({
    	debag: true,
    	rules: {

    		email: {
    			required: true,
    			email: true
    		},

    		pass: {
    			required: true,
    			minlength: 4
    		},

    		search: {
    			required: true,
    			minlength: 2
    		},
    	},
    	messages: {

    		email: {
    			required: "Поле Email обезательно для заполнения",
    			email: "Не корректный Email"
    		},

    		pass: {
    			required: "Поле Пароль обезательно для заполнения",
    			minlength: "Минимальное количество символов 4 "
    		},

    		search: {
    			
    			minlength: "Минимальное количество символов 2 ",
    		},
    	} 
    });

	$('#form-s').validate({
    	debag: true,
    	rules: {

    		search: {
    			required: true,
    			minlength: 2
    		},
    	},
    	messages: {

    		search: {
    			
    			minlength: "Минимальное количество символов 2 ",
    			required: 'Минимальное количество символов 2'
    		},	
    	} 
    });
      
  });