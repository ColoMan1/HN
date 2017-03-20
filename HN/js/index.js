
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
		var $index = $li.index(this);
		console.log($index);
		if( $index == 1){
			$('.three_wenzi p').addClass('animated bounceInLeft');
			console.log($index)
		};
	});

})









