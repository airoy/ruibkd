$(function(){
	
((//go_top
	function(){
		$(window).scroll(function(e) {
			var numh=$(window).height()
			var nump=$(window).scrollTop()

            if(nump>numh){
            	$('#go_top').show()
			}else{
            	$('#go_top').hide()
			}
        });
		$('#go_top span').hover(function(e) {
            $(this).html('返回顶部').removeClass('go_t')
        },function(e) {
            $(this).html('').addClass('go_t')
        });
		$('#go_top').click(function(e) {
            $('html,body').animate({scrollTop:0},500)
        });
		
		
	}
)());
	
	
((//搜索框鼠标移上出现下拉列表
	function(){
		$('.xiala i').hover(function(e) {
			$(this).children().show()
			
		},function(e) {
			$(this).children('ul').hide()
		})
		$('.xiala i ul li').mouseover(function(){
			$(this).addClass('baobei').siblings().removeClass()
		});
		$('.xiala i ul li').click(function(e) {
			var num1=$(this).html()
			$('.xiala i span').html($(this).html())
        });
	
	}
)());


((//head_nav
	function(){
		$('#head_nav li').hover(function(e) {
			$(this).children('.d2').show()
		},function(e) {
			$(this).children('.d2').hide()
		});
		var num2=$('#head_nav').offset().top
		$(window).scroll(function(e) {
			var num1=$(window).scrollTop()
			if(num1>num2){
				$('#head_nav').css('position','fixed').css({top:0,zIndex:20})
			}else{
				$('#head_nav').css('position','static')
			}
			
		});

		
	}
)());


((//二级菜单
	function(){
		$('.left_nav ul li').hover(function(e) {
			$(this).children('.box2').children('.left_nav_n').show()
			$(this).children('.tao').css({'border-right':'1px solid #fff'})
			$(this).siblings().children('.tao').css('border-right','1px solid #E6E6E6')
		},function(e) {
			$(this).children('.box2').children('.left_nav_n').hide()
			$(this).children('.tao').css('border-right','1px solid #E6E6E6')
			
		});

	}
)());


((//banner部分特效
	function(){
		//banner
		var num1=0;
		var num2=100;
		var timer=null;
		var sport=1000;

		//角标
		$('.jiantou ol li').mouseover(function(e) {
			num2++;
			var index=$(this).index();
			$(this).stop().addClass('dianji').siblings().stop().removeClass();
			$('.bg_banner li').eq(index).css('zIndex',num2).hide().fadeIn(sport);
			num1=index;
		});
		//定时器动画+鼠标移上banner出现左右箭头+鼠标移上动画停止
		function move(){
			num2++;
			num1++;
			if(num1>7){num1=0}
			$('.jiantou ol li').stop().eq(num1).addClass('dianji').siblings().stop().removeClass();
			$('.bg_banner li').eq(num1).css('zIndex',num2).hide().fadeIn(sport);
		}
		timer=setInterval(move,5000)
		$('.jiantou,.bg_banner').hover(function(e) {
			clearInterval(timer);
			$('.jiantou span').fadeIn();
		},function(){
			clearInterval(timer);
			timer=setInterval(move,5000);
			$('.jiantou span').fadeOut();
		});
		//左右箭头移动图片和角标
		$('.jiantou .right').click(function(e) {
			num1++;
			num2++;
			if(num1>7){num1=0}
			$('.jiantou ol li').eq(num1).stop().addClass('dianji').siblings().stop().removeClass();
			$('.bg_banner li').eq(num1).css('zIndex',num2).hide().fadeIn(sport);
	
		});
		$('.jiantou .left').click(function(e) {
			num1--;
			num2++;
			if(num1<0){num1=7}
			$('.jiantou ol li').eq(num1).stop().addClass('dianji').siblings().stop().removeClass();
			$('.bg_banner li').eq(num1).css('zIndex',num2).hide().fadeIn(sport);
	
		});
	
	}
)());


((//footer部分动画
	function(){
		var num1=0;
		var timer=null;
		timer=setInterval(dong,1000)
		function dong(){
			num1++;
			if(num1>2){
				num1=0
				clearInterval(timer)
				$('.copy_c ul').css('top',0+'px')
				timer=setInterval(dong,1000)
			};
			if(num1>3){
				num1=0
			clearInterval(timer)
			}
			$('.copy_c ul').animate({top:num1*-30},500)
		}
		
		

	
	
	}
)());








})


