(function($){
    $(function(){
        $('.sidenav').sidenav({
        	draggable: true
        });
	    $('.tabs').tabs({swipeable: true});
    });
})(jQuery);
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, {
    	constrainWidth: true
    });
  });