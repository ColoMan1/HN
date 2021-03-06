/*
 * 
 * -------------------------------------------------------------------brand   tap切换效果
 * 
 * */
$(function(){
	var $a = $('.cantent_box ul li a');
	var $box = $('.bigbox .brand_cantent_box');
	$box.eq(0).show().siblings().hide();
	$a.click(function(){
		$(".cantent_box ul li a:first-child").removeClass("active_a");
		var $index = $a.index(this);
		console.log($index);
    	$box.eq($index).show().siblings().hide();
	});
})

/*
 * 
 * -------------------------------------------------------------------nav    导航栏选中时的样式
 * 
 * */
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
/*
 * 
 * -------------------------------------------------------------------home  主页右侧圆点点击时的动画效果
 * 
 * */
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
/*
 * 
 * -------------------------------------------------------------------home   主页滚动时的动画效果
 * 
 * */
$(function(){
	$(window).scroll(function(){
		var $st = $(this).scrollTop();
		if( $st >= 700 && $st <= 1642){
			$('.home_animated1').addClass('animated flip');
			$('.home_animated2').addClass('animated swing');
		}
		if( $st >= 1500 && $st <= 2442){
			$('.home_animated3').addClass('animated bounceInLeft');
			$('.home_animated4').addClass('animated lightSpeedIn');
			$('.home_animated5').addClass('animated bounceInLeft');
			$('.home_animated6').addClass('animated lightSpeedIn');
		}
		if( $st >= 2200 && $st <= 3142){
			$('.home_animated7').addClass('animated rotateInDownLeft');			
			$('.home_animated8').addClass('animated rotateInDownRight');			
			$('.home_animated9').addClass('animated rotateInDownLeft');			
			$('.home_animated10').addClass('animated rotateInDownRight');
		}
		if( $st > 2900){
			$('.home_animated11').addClass('animated wobble');
		}
	});
})
/*
 * 
 * -------------------------------------------------------------------news   新闻选中时的样式变化
 * 
 * */
$(function(){
	var $row = $('.news_row')
	$('.news_img_box').eq(0).attr('id','news_img_change');
	$('.news_p_change').eq(0).attr('id','news_p_change');
	$('.news_ck').eq(0).attr('id','news_span_change');
	$('.news_hx').eq(0).attr('id','news_img_change');
	
	$row.click(function(){
		var $index = $row.index(this);
		$('.news_img_box').removeAttr('id');
		$('.news_p_change').removeAttr('id');
		$('.news_ck').removeAttr('id');
		$('.news_img_box').eq($index).attr('id','news_img_change');
		$('.news_p_change').eq($index).attr('id','news_p_change');
		$('.news_ck').eq($index).attr('id','news_span_change');
		$('.news_hx').eq($index).attr('id','news_img_change');
	})
})
/*
 * 
 * -------------------------------------------------------------------register   注册页面验证是icon的变化包括颜色
 * 
 * */
$(function(){
	$('.register_test').blur(function(event) {
		if($('.icon_red').hasClass('icon_red')){
			$('.icon_red').remove();
		};
		if($('.icon_green').hasClass('icon_green')){
			$('.icon_green').remove();
		};
		var $test = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
		var $val = $('.register_test').val();
			console.log($val)
		if($test.test($val)){
			$('.register_test').after('<i class="iconfont icon_green" style="color:green;">&#xe63d;</i>')
		}else{
			$('.register_test').after('<i class="iconfont icon_red">&#xe63f;</i>')
		};
	});
})

/*
 * 
 * -------------------------------------------------------------------register   注册内部页面跳转时导航图片的颜色变换
 * 
 * */
$(function(){     
	$('.register_bottom_but').click(function(){
		$('.register_img_change1').attr('src','../images/1_1.png')
		$('.register_img_change2').attr('src','../images/2_2.png')
	})
})
/*
 * 
 * -------------------------------------------------------------------register   注册密码强度
 * 
 * */
$(function(){
	$('.input_check').focus(function(){
		$('.register_password_check').css('display','block')
	});
	$('.input_check').blur(function(event){
		$('.register_password_check').css('display','none');
		if($('.input_check').val().length < 6){
			alert('密码不能低于6位')
		}
	});
	$('.input_check').keyup(function(){    
		var $test1 = /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+){6,12}$/;   //  弱：纯数字，纯字母，纯特殊字符
		var $test2 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;   //中：字母+数字，字母+特殊字符，数字+特殊字符
		var $test3 = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;   //强：字母+数字+特殊字符
		if($test1.test($('.input_check').val())){
			console.log($('.input_check').val());
			if($test2.test($('.input_check').val())){    
				$('.password_border1').css('border','2px solid #ccc');
				$('.password_border2').css('border','2px solid yellow');
				if($test3.test($('.input_check').val())){   
					$('.password_border1').css('border','2px solid #ccc')
					$('.password_border2').css('border','2px solid #ccc')
					$('.password_border3').css('border','2px solid green')
				}else{         
					$('.password_border1').css('border','2px solid #ccc')
					$('.password_border2').css('border','2px solid yellow')
					$('.password_border3').css('border','2px solid #ccc')
				};
			}else{
				$('.password_border1').css('border','2px solid red')
				$('.password_border2').css('border','2px solid #ccc')
				$('.password_border3').css('border','2px solid #ccc')
			};
		}else{
			$('.password_border1').css('border','2px solid red')
			$('.password_border2').css('border','2px solid #ccc')
			$('.password_border3').css('border','2px solid #ccc')
		};

	});
});
/*
 * 
 * -------------------------------------------------------------------register   密码确认
 * 
 * */
$(function(){

	$($('.input_qr')).keyup(function(){
		if($('.icon_red').hasClass('icon_red')){
			$('.icon_red').remove();
		};
		if($('.icon_green').hasClass('icon_green')){
			$('.icon_green').remove();
		};
		var $val = $('.input_qr').val();
		console.log($val)
		if($('.input_check').val() == $val){
			$('.input_qr').after('<i class="iconfont icon_green" style="color:green;">&#xe63d;</i>')
		}else{
			$('.input_qr').after('<i class="iconfont icon_red">&#xe63f;</i>')
		};
	});

})

$(function(){
	$('.register_bottom_but').click(function(){
		if($('.register_input_1 .iconfont').hasClass('icon_red') && $('.register_input_4 iconfont').hasClass('icon_red')){
			$('.register_bottom_but').attr('disabled','disabled')
		}
	})
})













