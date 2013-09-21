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
  		var $lorem = $('#lorem');
  		var $aboutpage = $('#aboutpage');
  		var $dolor = $('#dolor');
  		var $sit = $('#sit');
  		var $amet = $('#amet');
  		var $background = $('#background');
  		var $overlayipsum = $('#overlayipsum');
  		var $maingraphic = $('#maingraphic');
  		var $textgraphic = $('#textgraphic');
  		var $colorgraphic = $('#colorgraphic');
  		var $aboutbg = $('#aboutbg');
  		var $teal = $('#overlay');
  		var $pagetwo = $('#pagetwo');
  		var $midbase = $('#midbase');
  		var $graphic2 = $('#graphic2');
  		var $nextdolor = $('#nextdolor');
  		var $overlaytext = $('#overlaytext');
  		var $vidtext1 = $('#vidtext1');
  		var $vidtext2 = $('#vidtext2');
  		var $contactbg = $('#contactbg');
  		var $contactbg2 = $('#contactbg2');
  		var $schedbg1 = $('#schedbg1');
  		var $schedbg2 = $('#schedbg2');
  		var $backgroundimage = $('#backgroundimage');
  		var $bios = $('#bios');
  		var $overlaytext = $('#overlaytext');
  		var $vidtext = $('#vidtext');
  		var $nextpageblue = $('#npboutline');
  		var $npbbackground = $('#npbbackground');




  $(window).on('scroll', function() {	  
	 	var y = $(window).scrollTop(); 
	 	var yOffset = y/2;
	 	var secondOffset = y/6 -(1/6)*$midbase.offset().top;
	 	var firstOffset = y/3 -(1/3)*$pageone.offset().top;
	 	var otherOffset = y/5 -(1/5)*$aboutpage.offset().top;
	 	var nextOffset = y/6 -(1/6)*$dolor.offset().top;
	 	var schedOffset = (y/6 -(1/6)*$sit.offset().top)*2.6;
	 	var contOffset = y/6 -(1/6)*$amet.offset().top;
	 	var twoOffset = y/2 -(1/2)*$pagetwo.offset().top;
		var bkwdsOffset = y/7;
		var reverseOffset = -y/2;
		var boxreverseOffset = -y/5;
		var verynextOffset = y/10;
				

		var scale = 1 + y/100 -(1/100)*$pageone.offset().top;
		if(scale<1) {
			scale = 1
		}
		
		var nextscale = 1 + (y/100 -(1/100)*$aboutpage.offset().top)*2;
		if(scale<1) {
			scale = 1
		}

		// if(y <=79) {
		// 	$maingraphic.css('opacity','0');

		// }
		// else {
		// 	$maingraphic.css('opacity','.6');
		// }

		// if(y <=69) {
		// 	$colorgraphic.css('left','89');
		// 	$colorgraphic.css('transform', 'translateX('+ (-y*2) + 'px)'); 
		// }
		// else {
		// 	$colorgraphic.css('left','74');
		// 	$colorgraphic.css('transform', 'translateX('+ (-y) + 'px)'); 
		// }

		if(y <=59) {
			$colorgraphic.css('opacity','0');
			$maingraphic.css('opacity','0');
		}
		else {
			$colorgraphic.css('opacity','1');
			$maingraphic.css('opacity','.6');
		}

		if(y>=0 && y<992) 	{
	 		$pageone.css('background-position', '30px ' + firstOffset + 'px' );
	 		// $midbase.css('background-position', '30px ' + secondOffset + 'px' );
	 	}
	 	if(y>=53 && y<102) 	{
	 		$maingraphic.css('transform', 'rotate('+ (y * -.39 + 75) + 0 + 'deg)');
	 		$colorgraphic.css('transform', 'rotate('+ (y * -.39 + 75)  + 'deg)');
	 	}	
	 	else {
		 	$maingraphic.css('transform', 'rotate(0)');
		 	$colorgraphic.css('transform', 'rotate(0)');
	 	}
	 	// if(y>=53 && y<102) 	{
	 	// 	$colorgraphic.css('transform', 'rotate('+ (y * -.39 + 75)  + 'deg)');
	 	// 	$maingraphic.css('transform', 'rotate('+ (y * -.39 + 75) + 0 + 'deg)');
	 	// 	$colorgraphic.css('background-position', '30px ' + secondOffset + 'px' );
	 	// }
	 	// else {
		 // 	$colorgraphic.css('transform', 'rotate(0)');
		 // 	$maingraphic.css('transform', 'rotate(0)');
	 	// }
	 	 if(y>104 && y<750) 	{
	 		// $colorgraphic.css('transform', 'translateX('+ (-y/3) + 'px)');	
	 		// $maingraphic.css('transform', 'translateX('+ (-y) + 'px)');	 		
	 	}
	 	if(y<=103) 	{
	 		$maingraphic.css('left','0%');
	 	}
	 	else if (y<95) {
	 		$maingraphic.css('left','0%');
	 	}
	 	else if (y<0) {
	 		$maingraphic.css('left','0%');
	 	}
	 	else {
	 		$maingraphic.css('left','-6%');
	 	}
	 	if(y>109) 	{
	 		$maingraphic.css('transform', 'translateX('+ (-y*2) + 'px)');
	 		$colorgraphic.css('transform', 'translateX('+ (-y*2) + 'px)'); 		
	 	}
	 	
	 	// if(y>109) {
	 	// 	$colorgraphic.css('top','(y/10)' + '%');
	 	// }
	 	// else {
	 	// 	$colorgraphic.css('top','-2%');
	 	// }

	 	if(y>720 && y<1127) 	{
		 	// $lorem.css('background-position', '0px ' + secondOffset + 'px' );
		 	//$maingraphic.css('transform', 'translateX('+ y + 'px)');
		 	//$maingraphic.css('background-position', '200px ' + secondOffset + 'px' );
		 	// $graphic2.css('transform', 'translateY('+ y + 'px)');
		 	// $graphic2.css('background-position', '200px ' + secondOffset + 'px' );
		 	// $graphic2.css({opacity: (y-720)/(1127-720)});
	 	}

	 	// if(y>566 && y<1265) {
	 	// 	$background.css('background-position', '30px ' + reverseOffset + 'px' );
	 	// }
	 	
	 	if(y>1030 && y<1500) 	{
	 		// $graphic2.css({opacity: (y-1030)/(1500-1030)});
	 		
	 	}
	 	if(y>=0 && y<235) 	{
		 	
		 	// $maingraphic.css({ width : 220, height: 2000 });
		 	// $colorgraphic.css({ width : 460, height: 2680 });


	 	}
	 	if(y>559 && y<960) 	{
		 	// $pagetwo.css('transform', 'translateX('+ 20 + 'px)');
		 	// $maingraphic.css({ width : 1100, height: 900 });
		 	// $colorgraphic.css({ width : 1100, height: 900 });
	 	}
	 	if(y>250 && y<960) 	{
		 	// $graphic2.css({opacity: (y-250)/(960-250)});
		 	// $graphic2.css('transform', 'translateX('+ y + 'px)');
		 	// $maingraphic.css('transform', 'translateX('- y + 'px)');
		 	// $maingraphic.css('background-position', '-200px ' + -secondOffset + 'px' );
	 	}
	 	if(y<1061) 	{
		 	// $vidtext.css('transform', 'translateY(0px)');
	 	}
	 	if(y>400 && y<860) 	{
		 	$overlaytext.css({opacity: (y-400)/(860-400)*2});
		 	$pagetwo.css('transform', 'translateX('+ twoOffset + 'px)');
		 	$pagetwo.css({opacity: (y-400)/(860-400)*2});
	 	}
	 	if(y>1080 && y<1250) 	{
		 	// $vidtext2.html(
		 	// 	'<video width="350" height="200" autoplay="true" loop preload>' +
		 	// 	'<source src="video/rawrlogo13.mp4" type="video/mp4">' +
		 	// 	'<source src="video/rawrlogo13.webmhd.webm" type="video/webm">' +
		 	// 	'</video>');
	 	}
	 	else {
		 	$vidtext2.empty();
	 	}
	 	if(y>1483 && y<1837) 	{
		 	// $vidtext.html(
		 	// 	'<video width="500" height="80" autoplay="true" loop preload>' +
		 	// 	'<source src="video/rawrlogo13.mp4" type="video/mp4">' +
		 	// 	'<source src="video/rawrlogo13.webmhd.webm" type="video/webm">' +
		 	// 	'</video>');
	 	}
	 	else {
		 	// $vidtext.empty();
	 	}
	 	if(y>1060 && y<2202) 	{
		 	// $aboutpage.css('background-position', '0px ' + otherOffset + 'px' );
		 	// $vidtext.css('transform', 'translateY('+ ((y/3)-100) + 'px)');
		 	// $overlaytext.css({ width : 400, height: ((y*2/5)-200) });
	 	}
	 	
	 
	 	if(y>800 && y<927) 	{
		 	$teal.css({opacity: (y-800)/(1352-800)});
		 	$maingraphic.css('background-position', '200px ' + secondOffset + 'px' );
	 	}
	 	if(y>927 && y<5200) 	{
	 		// $overlaytext.delay(1000).css('height', '700px').css('opacity', (y-927)/(5200-927)*2);
	 	}
	 	if(y>1433 && y<5200) 	{
	 		$overlaytext.delay(1000).css('opacity', (y-1433)/(5200-1433)*2);
	 	}

	 
	 	if(y>1130 && y<1227) 	{
		 	$lorem.css('background-position', '0px ' + secondOffset + 'px' );
	 	}
	 	
	 	if(y>1852 && y<2360) 	{
		 	$aboutpage.css('background-position', '0px ' + yOffset + 'px' );
		 	
	 	}
	 	if(y>2854 && y<4172) 	{
	 	    $frame2.css('transform', 'translateX('+ -790 + 'px)');
	 	    $frame1.css('transform', 'translateX('+ -920 + 'px)');
	 	    //$frame1.css({ 'width : 200' + * y/2000, 'height:' + 200 * y/2000});
	 	    $frame1.css({ width : ((y/10)-80), height: ((y/10)-80)});
	 	    $frame4.css({ width : ((y/10)-90), height: ((y/10)-90)});
	 	}
	 	
	 	if(y>2454 && y<3454) 	{
	 	    $frame4.css('transform', 'translateX('+ -790 + 'px)');
	 	    $frame3.css('transform', 'translateX('+ -920 + 'px)');
	 	}
	 	
	 	if(y>2854 && y<3172) 	{
	 		$frame2.css({opacity: (y-2854)/(3172-2854)});	
	 	    $frame1.css({opacity: (y-2854)/(3172-2854)});
	 	    $frame2.css('transform', 'translateX('+ 30 + 'px)');
	 	    $frame1.css('transform', 'translateX('+ 30 + 'px)');
	 	    $frame4.css({opacity: (y-2854)/(3172-2854)});	
	 	    $frame3.css({opacity: (y-2854)/(3172-2854)});
	 	    $bios.css({opacity: (y-2854)/(3172-2854)});
	 	    $frame4.css('transform', 'translateX('+ 30 + 'px)');
	 	    $frame3.css('transform', 'translateX('+ 30 + 'px)');
	 	}
	 	if(y>=3492 && y<4200) 	{
	 	    $frame3.css('transform', 'translateX(-390px)');
	 	    $box4.css('transform', 'translateX(50px)');
	 	}
	 	if(y>3325 && y<4041) 	{
	 	    $dolor.css('background-position', '0px ' + yOffset + 'px' );
		 	$nextdolor.css({opacity: (y-3325)/(4041-3325)});
		 	$nextdolor.css('transform', 'translateX('+ y + 'px)');
	 	}
	 	if(y>2325 && y<3865) 	{
	 	   $nextpageblue.css('transform', 'rotate('+ (.003*y )  + 'deg)');
	 	    $npbbackground.css('transform', 'translateX('+ y/100 + 'px)');
	 	    $npbbackground.css('transform', 'rotate('+ (.003*y )  + 'deg)');
	 	    $npbimg2.css('transform', 'rotate(0deg)');
	 	    $npbimg1.css('transform','rotate('+ (.003*y )  + 'deg)');
	 	    $npbimg4.css('transform', 'rotate('+ (.003*y )  + 'deg)');
	 	    $npbimg3.css('transform', 'rotate('+ (.003*y )  + 'deg)');
	 	    $npbimg5.css('transform', 'rotate(0deg)');
	 	    $npbimg6.css('transform', 'rotate(0deg)');
	 	    $npbimg7.css('transform', 'rotate(0deg)');
	 	    $npbimg8.css('transform', 'rotate(0deg)');
	 	}
	 	if(y>=3869 && y<=4204) 	{
	 	    //$nextpageblue.css('transform', 'rotate('+ (-.011*y )  + 'deg)');
	 	    $nextpageblue.css('transform', 'translateX('+ y/100 + 'px)');
	 	    $nextpageblue.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	    $npbbackground.css('transform', 'translateX('+ y/100 + 'px)');
	 	    $npbbackground.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	    $npbimg2.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	    $npbimg1.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	    $npbimg4.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	    $npbimg3.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	    $npbimg5.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	    $npbimg6.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	    $npbimg7.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	    $npbimg8.css('transform', 'rotate('+ (-.003*y )  + 'deg)');
	 	}
	 	if(y>=4132 && y<=4170) 	{
	 	    $npbimg2.css({opacity: (y-4132)/(4204-4132)});
	 	    $npbimg4.css({opacity: (y-4132)/(4204-4132)});
	 	    $npbimg7.css({opacity: (y-4132)/(4204-4132)});
	 	    $npbimg7.css('transform', 'translateX(300px)');
	 	    $npbimg7.css('transform', 'scale(5)');
	 	}
	 	if(y>4170) 	{
	 	    $npbimg2.css({opacity:1});
	 	    $npbimg4.css({opacity:1});
	 	    $npbimg7.css({opacity:1});
	 	    $npbimg7.css('transform', 'translateX(300px)');
	 	    $npbimg7.css('transform', 'scale(5)');
	 	}
	 	if(y>4270) 	{
	 	    $npbimg7.css('transform', 'scale(1)');
	 	}
	 	if(y>=4203 && y<=4304) 	{
	 	    $npbimg2.css('transform', 'rotate('+ (.014*y )  + 'deg)');
	 	    $npbimg1.css('transform', 'rotate('+ (.014*y )  + 'deg)');
	 	    $npbimg4.css('transform', 'rotate('+ (.014*y )  + 'deg)');
	 	    $npbimg3.css('transform', 'rotate('+ (.014*y )  + 'deg)');
	 	    $npbimg5.css('transform', 'rotate('+ (.014*y )  + 'deg)');
	 	    $npbimg6.css('transform', 'rotate('+ (.014*y )  + 'deg)');
	 	    $npbimg7.css('transform', 'rotate('+ (.014*y )  + 'deg)');
	 	    $npbimg8.css('transform', 'rotate('+ (.014*y )  + 'deg)');
	 	    	 	}
	 	if(y>=4253 && y<4904) 	{
	 	    $npbimg8.css({opacity: (y-4253)/(4304-4253)});
	 	    $npbimg8.css('transform', 'rotate('+ (.014*y )  + 'deg)');
	 	}
	 	else {
		 	$npbimg8.css({opacity: 0});
	 	}
	 	if(y>4302 && y<4582) 	{
		 	$npbimg7.css('transform', 'rotate('+ (.4*y )  + 'deg)');
	 	}
	 	if(y>4132 && y<5092) 	{
		 	$sit.css('background-position', '0px ' + schedOffset + 'px' );
		 	$contactbg.css('transform', 'translateX('+ schedOffset + 'px)');
		 	$schedbg2.css({opacity: (y-4132)/(5092-4132)});
	 	}
	 	if(y>5092 && y<5339) 	{
		 	$amet.css('background-position', '0px ' + contOffset + 'px' );
		 	$contactbg.css('transform', 'translateX('+ schedOffset + 'px)');
	 	}
	 	
	 	$sit.css('background-position', '0px ' + yOffset + 'px' );
	 	$dolor.css('background-position', '0px ' + yOffset + 'px' );
	 	$amet.css('background-position', '0px ' + yOffset + 'px' );
	 	$backgroundimage.css('background-position', '0px ' + reverseOffset + 'px' );
	 });
  });	  