    (function () {
     
	     var $primaryAnchors = $('ul.nav a');
	     var $page = $('html,body')
	     var $ipsumAnchor = $('ul.nav a.aboutpage');
	     var $ipsumText = $('#aboutpage p');
	     
	     
	     $primaryAnchors.click(function (event) {
	         event.preventDefault(); //ignore the default behavior that would JUMP to the section
	         
	     $page.stop(true); 
		 $page.animate({scrollTop:$($(this).attr('href')).position().top+"px"}, 1500, 'easeOutBounce');
		 
	     });
	    
	     
	     
     })(); //enclosure *annonymous.  function w. no name.  self-executing anonymous function.
     
     	
  $(document).ready(function() {
  		
  		var $pageone = $('#pageone');
  		var $pagetwo = $('#pagetwo');
  		var $lorem = $('#lorem');
  		var $loremtwo = $('#loremtwo');
  		var $background = $('#background');
  		var $mainimage = $('#mainimage');
  		var $mainimagevideo = $('#mainimage video');
  		var $maingraphic = $('#maingraphic');
  		var $textgraphic = $('#textgraphic');
  		var $colorgraphic = $('#colorgraphic');
  		var $colorgraphictwo = $('#colorgraphictwo');
  		var $colorgraphicthree = $('#colorgraphicthree');
  		var $colorgraphicfour = $('#colorgraphicfour');




  $(window).on('scroll', function() {	  
	 	var y = $(window).scrollTop(); 
	 	var yOffset = y/2;
	 	var firstOffset = y/3 -(1/3)*$pageone.offset().top;
	 	var loremOffset = y/2 -(1/2)*$lorem.offset().top;
		var bkwdsOffset = y/7;
		var reverseOffset = -y/2;
		var boxreverseOffset = -y/5;
		var verynextOffset = y/10;
				

		var scale = 1 + y/100 -(1/100)*$pageone.offset().top;
		if(scale<1) {
			scale = 1
		}
		var nextscale = 1 + (y/100 -(1/100)*$pagetwo.offset().top)*2;
		if(scale<1) {
			scale = 1
		}
		if(y <=59) {
			$colorgraphic.css('opacity','0');
			$colorgraphictwo.css('opacity','0');
			$maingraphic.css('opacity','0');
			$mainimage.css('opacity','0');
			$lorem.css('opacity','0');
		}
		else {
			$colorgraphictwo.css('opacity','1');
			$colorgraphic.css('opacity','.9');
			$maingraphic.css('opacity','1');
			$mainimage.css('opacity','1');
		}
		if(y>=0 && y<992) 	{
	 		$pageone.css('background-position', '30px ' + firstOffset + 'px' );
	 	}
	 	if(y>=53 && y<102) 	{
	 		$colorgraphictwo.css('transform', 'translateX('+ (-y*2) + 'px)'); 	
	 	}	
	 	if(y>=53 && y<102) 	{
	 		$maingraphic.css('transform', 'rotate('+ (y * -.39 + 75) + 0 + 'deg)');
	 		$colorgraphic.css('transform', 'rotate('+ (y * -.39 + 75)  + 'deg)');
	 		$colorgraphictwo.css('transform', 'rotate('+ (y * -.39 + 75)  + 'deg)'); 
	 		$colorgraphicthree.css('transform', 'rotate('+ ((y * -.39 + 75) + 90)  + 'deg)');
	 		$colorgraphicfour.css('transform', 'rotate('+ ((y * -.39 + 75) + 90) + 'deg)'); 
	 	}	
	 	else {

		 	$maingraphic.css('transform', 'rotate(0)');
		 	$colorgraphic.css('transform', 'rotate(0)');
		 	$colorgraphictwo.css('transform', 'rotate(0)');
	 	}
	 	if(y>109) 	{
	 		// $maingraphic.css('height', '3000px');
	 		$maingraphic.css('max-width', '1000px');
	 		$maingraphic.css('top', '-44%');
	 		$maingraphic.css('padding-bottom', '262%');
	 		$maingraphic.css('transform', 'translateX('+ (-y) + 'px)');
	 		$colorgraphic.css({opacity: ((1)/(y/10)*100)-1.6});
	 		$colorgraphic.css('transform', 'translateX('+ (-y) + 'px)'); 	
	 		$colorgraphictwo.css('transform', 'translateX('+ (-y) + 'px)'); 
	 		$colorgraphicthree.css('top', (-y/3)+ '%'); 	
	 		$colorgraphicfour.css('top', (-y/2)+ '%'); 	
	 		$colorgraphic.css('height', '4000px'); 		
	 	}
	 	else {
	 		$maingraphic.css('padding-bottom', '244%');
	 		$maingraphic.css('max-width', '1189px');
	 		$maingraphic.css('top', '-66%');
	 	}
	 	if(y>=190 && y<627)  {
	 		$background.css('opacity', '.8');
	 		$colorgraphicthree.css('top', (y/2)-160+ '%'); 	
	 		$colorgraphicfour.css('top', (y/2)-190+ '%'); 	
	 	}
	 	else {
	 		$background.css('transform', 'scale('+((y/50)+.7)+','+((y/50)+.7)+')');
	 	}
	 	if(y>=196 && y<495)  {
	 		$mainimage.css('transform', 'scale('+(y-860)/(189-570)+','+(y-860)/(189-570)+')');
	 		$mainimage.css('width','217%');
	 		$mainimage.css('top', '0%');
	 		$mainimage.css('filter','brightness('+5*y+')');
	 	}
	 	else if(y<189) {
	 		$mainimage.css('width','217%');
	 		$mainimage.css('top', '0%');
	 	}
	 	else {
	 		$mainimage.css('top', + y/500 + '%');
	 		$mainimage.css('filter','brightness(5)');
	 		// $mainimage.css('transform', 'scale('+(y-189)/(860-189)+','+(y-189)/(860-189)+')');
	 	}
	 	// if(y<=192&&y>=194) {
	 	// 	$mainimage.css('opacity','0');
	 	// }
	 	if (y>533) {
	 		$maingraphic.css({opacity: ((1)/(y/10)*100)-.9});
	 	}
	 	if (y>487) {
	 		$colorgraphictwo.css({opacity: ((1)/(y/10)*100)-.9});
	 	}
	 	if(y>=390) {
	 		$mainimage.css('transform', 'translateX('+ (-y/2) + 'px)'); 
	 		$mainimage.css('top', '5%');
	 		// $mainimage.css('transform', 'scale(.3487332,.3487332)');
	 	}
	 	if(y>243 && y<500)  {
	 		$colorgraphicthree.css('top', (y/2)-160+ '%'); 	
	 		$colorgraphicfour.css('top', (-y/2)+70+ '%'); 	
	 	}
	 	if(y>216) 	{
	 		$colorgraphic.css('left','40%'); 	
	 		$colorgraphictwo.css('transform', 'translateX('+ (-y) + 'px)'); 
	 		$colorgraphic.css('transform', 'translateX('+ (y/2) + 'px)'); 	
	 	}
	 	// $colorgraphic.css('left', '20%');
	 	else {
	 		$colorgraphic.css('left','66%'); 
	 		$colorgraphic.css('height', '2077px'); 
	 		
	 	}
	 	if(y>400 && y<860) 	{
		 	// $pagetwo.css({opacity: 1/(y/400)});
	 	}
	 	if(y>1300) 	{
		 	$colorgraphictwo.css('height', '0'); 
	 		$colorgraphicthree.css('height', '0'); 	
	 		$colorgraphicfour.css('height', '0'); 	
	 		$colorgraphic.css('height', '0'); 
	 	}
	 	$background.css('transform', 'scaleX('+ (y/100) + 'px)'); 
	 	$maingraphic.css('background-position', '0px ' + reverseOffset + 'px' );
	 	$background.css('background-position', '0px ' + reverseOffset + 'px' );
	 });
  });	  