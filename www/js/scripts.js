(function($){
    $(function(){
        $('.sidenav').sidenav({
        	draggable: true
        });
	    $('.tabs').tabs({swipeable: true});
        resizeTab();
        $( window ).resize(function() { resizeTab(); });
    });
    function resizeTab(){
    var maxHeight = 0;
    $('.carousel-item').each(function(){ 
         if($(this).height() > maxHeight) maxHeight = $(this).height(); 
    });
    $(".tabs-content").css('height',maxHeight+'px');
    }
    
})(jQuery);
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
    	constrainWidth: true
    });
  });
// Cambiar tamaño de la fuente
jQuery.noConflict();


// Cambiar fondo
    var fondo = localStorage.getItem('fondos');
    var letra_tamano = localStorage.getItem('tamano');
    console.log(fondo);
    if (fondo === 'oscuro') {
        var images = ['oscuro1.jpeg', 'oscuro2.jpeg', 'oscuro3.jpeg'];
        (function($){
            $('.himno').css({'background-image': 'url(img/fondos/' + images[Math.floor(Math.random() * images.length)] + ')'});
            $('.himno .cnt').css({'color': '#fff'});
            $('.himno .azul, .himno .nblu').css({'color': '#62b0ff'});
            $('.himno .cnt').css({'text-shadow': '2px 2px 2px rgba(0, 0, 0, 1)'});
            $('.himno .cnt, .himno .nblu').css({'font-size': letra_tamano});
        })(jQuery);
    }
    if (fondo === 'claro') {
        var images = ['claro1.jpeg', 'claro2.jpeg', 'claro3.jpeg'];
        (function($){
            $('.himno').css({'background-image': 'url(img/fondos/' + images[Math.floor(Math.random() * images.length)] + ')'});
            $('.himno .cnt').css({'text-shadow': '2px 2px 2px rgba(255, 255, 255, 1)'});
            $('.himno .cnt, .himno .nblu').css({'font-size': letra_tamano});
        })(jQuery);
    };
    if (fondo === 'nada') {
        (function($){
            $('.himno .cnt, .himno .nblu').css({'font-size': letra_tamano});
        })(jQuery);
    };