$(document).ready(function () {
 
    /*** Scroll do menu ***/

    $("#topo ul li a[href*='#']").click(function(e){
		e.preventDefault(); 
		var target = $(this).attr("href");
		
		if($(target).length != 0){
			$("html, body").stop().animate({
				scrollTop: $(target).offset().top -50
			}, 1000);
		}
		
		var larguraTela = $(window).width();
		if(larguraTela < 670){
			$("#topo .menu").slideToggle(1000);
		}
		
		return false;
    });
    
    /*** Botao do Play ***/

    $('#musicas .bloco').mouseover(function () {

        var hover = 0

        if (hover == 0) {
            $(this).append('<i class="fa-solid fa-play play"></i>');
            hover = 1;     
        }

        if (hover == 1) {
            $(this).mouseout(function (){
               $('#musicas .bloco i').remove();
            })
        }    
    });

    /*** Sub-menu Carousel ***/
    
    slider = $('#artistas').find(".slider");
        slider.owlCarousel({
        items : 2,
        loop: true,
        mouseDrag: false,
        nav: false,
        dots: false,
        margin: 30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            850: {
                items:3
            },
            1000:{
                items:3
            },
            1500:{
                items: 3
            }
        }  
    });	
    
    /*** Botoes Next e Prev***/
    
    $('#artistas').find(".next-menu").click(function(){
        slider.trigger('next.owl.carousel');
    });

    $('#artistas').find(".prev-menu").click(function(){
        slider.trigger('prev.owl.carousel');
    });	     

});