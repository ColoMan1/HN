
$(function(){
	var $a = $('.cantent_box ul li a');
	var $box = $('.bigbox .brand_cantent_box');
	$box.eq(0).show().siblings().hide();
	$a.click(function(){
		$(".cantent_box ul li a:first-child").removeClass("active_a");
		var $index = $a.index(this);
		console.log($index);
    	$box.eq($index).show(500).siblings().hide(500);
	});
})


$(function(){
	var $span = $('#nav_ul span');
	var $li = $('#nav_ul li');
	$li.click(function(){
		$span.removeClass('span_active');
		var $index = $li.index(this);
		console.log($index);
		$span.eq($index).addClass('span_active').siblings().removeClass('span_active');
	})
	  
})

$(function(){
	var $li = $('.yuan_box ul li');

	$($li).click(function(event) {
		$('.home_animated1').removeClass('animated flip');
		$('.home_animated2').removeClass('animated swing');
		$('.home_animated3').removeClass('animated bounceInLeft');
		$('.home_animated4').removeClass('animated lightSpeedIn');
		$('.home_animated5').removeClass('animated bounceInLeft');
		$('.home_animated6').removeClass('animated lightSpeedIn');
		$('.home_animated7').removeClass('animated rotateInDownLeft');
		$('.home_animated8').removeClass('animated rotateInDownRight');
		$('.home_animated9').removeClass('animated rotateInDownLeft');
		$('.home_animated10').removeClass('animated rotateInDownRight');
		$('.home_animated11').removeClass('animated wobble');
		
		var $index = $li.index(this);
		console.log($index);
		if( $index == 1){
			$('.home_animated1').addClass('animated flip');
			$('.home_animated2').addClass('animated swing');

		};
		if($index == 2){
			$('.home_animated3').addClass('animated bounceInLeft');
			$('.home_animated4').addClass('animated lightSpeedIn');
			$('.home_animated5').addClass('animated bounceInLeft');
			$('.home_animated6').addClass('animated lightSpeedIn');			
		};
		if( $index == 3){
			$('.home_animated7').addClass('animated rotateInDownLeft');			
			$('.home_animated8').addClass('animated rotateInDownRight');			
			$('.home_animated9').addClass('animated rotateInDownLeft');			
			$('.home_animated10').addClass('animated rotateInDownRight');			
		};
		if($index == 4){
			$('.home_animated11').addClass('animated wobble');
		};
	});

})









