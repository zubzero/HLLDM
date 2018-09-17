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
    };
})(jQuery);
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
    	constrainWidth: true
    });
  });
// Cambiar tamaño de la fuente
jQuery.noConflict();

// Cambiar texto a menu de apoya
document.getElementById('boton_apoyame').innerHTML = '¿Desea apoyar la app?';
// Cambiar fondo
    var fondo = localStorage.getItem('fondos');
    var letra_tamano = localStorage.getItem('tamano');
    console.log(fondo);
    if (fondo === 'universo') {
        var images = ['uni1.jpg', 'uni2.jpg', 'uni3.jpg', 'uni4.jpg', 'uni5.jpg', 'uni6.jpg', 'uni7.jpg', 'uni8.jpg', 'uni9.jpg', 'uni10.jpeg', 'uni11.jpeg', 'uni12.jpeg'];
        (function($){
            $('.fondo').css({'background-image': 'url(img/fondos/' + images[Math.floor(Math.random() * images.length)] + ')'});
            $('.himno .cnt, .himno i, .himno .just, .himno .right, .himno .left').css({'color': '#fff'});
            $('.himno .azul, .himno .nblu').css({'color': '#62b0ff'});
            $('.himno .cnt, .himno i, .himno .just, .himno .right, .himno .left').css({'text-shadow': '2px 2px 2px rgba(0, 0, 0, 1)'});
            $('.himno .cnt, .himno .just, .himno .right, .himno .left').css({'zoom': letra_tamano});
        })(jQuery);
    }
    if (fondo === 'ldm') {
        var images = ['ldm1.jpg', 'ldm2.jpg', 'ldm3.jpg', 'ldm4.jpg', 'ldm5.jpg', 'ldm6.jpg', 'ldm7.jpg'];
        (function($){
            $('.fondo').css({'background-image': 'url(img/fondos/' + images[Math.floor(Math.random() * images.length)] + ')'});
            $('.himno .cnt, .himno i, .himno .just, .himno .right, .himno .left').css({'text-shadow': '2px 2px 2px rgba(255, 255, 255, 1)'});
            $('.himno .cnt, .himno .just, .himno .right, .himno .left').css({'zoom': letra_tamano});
        })(jQuery);
    };
    if (fondo === 'nat') {
        var images = ['nat1.jpg', 'nat2.jpg', 'nat3.jpg', 'nat4.jpg', 'nat5.jpg', 'nat6.jpg', 'nat7.jpg', 'nat8.jpg'];
        (function($){
            $('.fondo').css({'background-image': 'url(img/fondos/' + images[Math.floor(Math.random() * images.length)] + ')'});
            $('.himno .cnt, .himno i, .himno .just, .himno .right, .himno .left').css({'text-shadow': '2px 2px 2px rgba(255, 255, 255, 1)'});
            $('.himno .cnt, .himno .just, .himno .right, .himno .left').css({'zoom': letra_tamano});
        })(jQuery);
    };
    if (fondo === 'claro') {
        var images = ['liso1.jpg', 'liso2.jpg', 'liso3.jpg', 'liso4.jpg', 'liso5.jpg', 'liso6.jpg', 'liso7.jpg', 'liso8.jpg'];
        (function($){
            $('.fondo').css({'background-image': 'url(img/fondos/' + images[Math.floor(Math.random() * images.length)] + ')'});
            $('.himno .cnt, .himno i, .himno .just, .himno .right, .himno .left').css({'text-shadow': '2px 2px 2px rgba(255, 255, 255, 1)'});
            $('.himno .cnt, .himno .just, .himno .right, .himno .left').css({'zoom': letra_tamano});
        })(jQuery);
    };
    if (fondo === 'text') {
        var images = ['text1.jpg', 'text2.jpg', 'text3.jpg', 'text4.jpg', 'text5.jpg', 'text6.jpg', 'text7.jpg', 'text8.jpg'];
        (function($){
            $('.fondo').css({'background-image': 'url(img/fondos/' + images[Math.floor(Math.random() * images.length)] + ')'});
            $('.himno .cnt, .himno i, .himno .just, .himno .right, .himno .left').css({'text-shadow': '2px 2px 2px rgba(255, 255, 255, 1)'});
            $('.himno .cnt, .himno .just, .himno .right, .himno .left').css({'zoom': letra_tamano});
        })(jQuery);
    };
    if (fondo === 'nada') {
        (function($){
            $('.himno .cnt, .himno .just, .himno .right, .himno .left, .himno .nblu').css({'zoom': letra_tamano});
        })(jQuery);
    };