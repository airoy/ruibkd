// JavaScript Document
$(function(){
	var snum=0;
	var timer=null;
	var position=0;
	
	
	//鼠标滚屏
	$('#content>div').eq(snum).removeClass('out').siblings().addClass('out');    //添加类和删除类
	$(document).mousewheel(function(e,d){
		clearTimeout(timer);
		timer=setTimeout(fn,300);
		
		function fn(){
			snum-=d;//创造数据
			if(snum > 4){ snum=4;}
			if(snum < 0){ snum=0;}
			
			$('#content').stop().animate({top: -snum*100+'%' },1000);//屏幕的工作
			$('nav li').eq(snum).addClass('current').siblings().removeClass();    //导航的工作
			$('#content>div').eq(snum).removeClass('out').siblings().addClass('out');    //添加类和删除类
				
						
			//page2 站点展示动画
			if(snum==1){
				$('.page2 article').css('margin-top','-600px').stop().animate({marginTop:'-190px'},5000,'easeOutElastic')
			}
			
			
			//page3 左右模块动画
			if(snum==2){
				$('.page3 .left').css('margin-left','-1200px').stop().animate({marginLeft:'-574px'},2000,'easeOutBounce')
				$('.page3 .right').css('margin-left','1841px').stop().animate({marginLeft:'-64px'},2000,'easeOutBounce')
			}

		}
	});

	//导航的单击模块
	$('nav li').click(function(e) {
        var index=$(this).index();
		$(this).addClass('current').siblings().removeClass();//导航的工作
		$('#content').stop().animate({top: -index*100+'%' },1000);//屏幕的工作
		snum=index;//同步工作
		$('#content>div').eq(snum).removeClass('out').siblings().addClass('out');    //添加类和删除类
			
		//page2 站点展示动画
		if(snum==1){
			$('.page2 article').css('margin-top','-600px').stop().animate({marginTop:'-190px'},5000,'easeOutElastic');
		}
				
		//page3 左右模块动画
		if(snum==2){
			$('.page3 .left').css('margin-left','-1200px').stop().animate({marginLeft:'-574px'},2000,'easeOutBounce');
			$('.page3 .right').css('margin-left','1841px').stop().animate({marginLeft:'-64px'},2000,'easeOutBounce');
		}
   
   
    });
	
	//导航的移上模块
	$('nav li').hover(function(e) {
		$(this).addClass('current').siblings().removeClass();//角标的工作
    });
	
	//背景移动
	setInterval(function(){
		position-=1;
		$('#content>div').eq(snum).css({'background-position':50+'%'  +position+'px'}).siblings().css({'background-position':50+'%'  +0});
	},80)


});

	//page2
$(function(){
	var timer1=null;
	var sx=0;
	var num=0;
	//鼠标单击情况
	$('.page2 article .right').click(function(e) {
		num++;
		if(num>2){num=0;}
		$('.page2 article ul').stop().animate({left:num*-838},500);
		sx=num;
    });
	$('.page2 article .left').click(function(e) {
		num--;
		if(num<0){num=2}
		$('.page2 article ul').stop().animate({left:num*-838},500);
		sx=num;
    });
	
	
	
	timer1=setInterval(autoplay,2000);//自动播放
	function autoplay(){
		sx++;
		if(sx>2){sx=0}
		$('.page2 article ul').stop().animate({left:sx*-838},500);
	}

	//鼠标移上停止定时器模块
	$('.page2 article').hover(function(e) {
        //停止自动播放，清除定时器；
		clearInterval(timer1);
		$('.page2 article span').stop().fadeTo(500,0.5)
    },function(e){
		clearInterval(timer1);
		timer1=setInterval(autoplay,2000);
        $('.page2 article span').fadeOut();
    });	
	
});


/*page4*/
$(function(){
	$('.page3 .left dl').hover(function(e) {
		var index=$(this).index();
		$('.page3 .left ul').show();
		$('.page3 .left ul li').eq(index).stop().animate({width:'687px'},500);
    },function(){
		$('.page3 .left ul').hide();
		$('.page3 .left ul li').stop().animate({width:'0'},500);
    });
	
	
	$('.page3 .right dl').hover(function(e) {
		var index=$(this).index();
		$('.page3 .right ul').show();
		$('.page3 .right ul li').eq(index).stop().animate({width:'679px'},500)        
    },function(){
		$('.page3 .right ul').hide();
		$('.page3 .right ul li').stop().animate({width:'0'},500)  
    });
});

/*page4*/
$(function(){
	
	$('.page4 article div ul li').click(function(e) {
		var index=$(this).index();
		$('.page4 ol').fadeIn();
        $('.page4 ol li').eq(index).fadeIn().siblings().hide();
		$('.page4 footer').fadeTo(500,0.7);
    });
	$('.page4 article div p').click(function(e) {
		$('.page4 p').fadeIn();
		$('.page4 footer').fadeTo(500,0.7);
    });
	
	$('.page4 footer i').click(function(e) {
        $('.page4 ol,.page4 footer,.page4>p').fadeOut();
    });
	
	//音乐开关
	var kg=true;
	$('nav span').click(function(e) {
		if(kg==true){
			$('audio').get(0).pause();
			$('nav span').addClass('switch');
			kg=false;
        }else{
            $('audio').get(0).play();
			$('nav span').removeClass();
			kg=true;
        }
    });
	
	
})








