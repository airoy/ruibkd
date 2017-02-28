// JavaScript Document
$(function(){
	var sx=0
	var mytop=100
	//角标
	$('.banner ol li').mouseover(function(e) {
		mytop++
		var index=$(this).index()
        $(this).addClass('cur').siblings().removeClass()
		$('.banner ul li').eq(index).css({zIndex:mytop}).hide().fadeIn()
    });

	var timer=null
	function autoplay(){
		sx++
		mytop++
		if(sx>2){sx=0}
		$('.banner ol li').eq(sx).addClass('cur').siblings().removeClass()
		$('.banner ul li').eq(sx).css({zIndex:mytop}).hide().fadeIn()
	}
	timer=setInterval(autoplay,2000)
	
	//menunav展示模块
	$('.menunav li').hover(function(e) {
        $(this).children().show().siblings().hide()
    },function(){
    	$(this).children().hide()
    });

})

$(function(){
	var timer1=null;
	var sx=0;
	var num=0
	//鼠标单击情况
	$('.gamepic .right').click(function(e) {
		num++
		if(num>7){num=0}
		$('.gamepic ul').stop().animate({left:num*-81},500)
		sx=num
    });
	$('.gamepic .left').click(function(e) {
		num--
		if(num<0){num=7}
		$('.gamepic ul').stop().animate({left:num*-81},500)
		sx=num
    });
	
	
	
	timer1=setInterval(autoplay,2000)//自动播放
	function autoplay(){
		sx++
		if(sx>7){sx=0}
		$('.gamepic ul').stop().animate({left:sx*-81},500)
	}

	//鼠标移上停止定时器模块
	$('.gamepic').hover(function(e) {
        //停止自动播放，清除定时器；
		clearInterval(timer1)
		$('.gamepic span').stop().fadeTo(500,0.5)
    },function(e){
		clearInterval(timer1)
		timer1=setInterval(autoplay,2000)
        $('.gamepic span').fadeOut()
    });	
	
})

$(function(){
	$('.footer h2').click(function(e) {
        $(this).hide().siblings().show()
		$(this).parent().siblings().children('div').hide()
		$(this).parent().siblings().children('h2').show()
    });
})








