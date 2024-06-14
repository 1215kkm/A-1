//슬라이드
setInterval(function(){
    $('.slide ul').animate({marginLeft:-1200}, 1000, function(){
        $('.slide ul li:first').appendTo($('.slide ul'));
        $('.slide ul').css({marginLeft:0})
    })
}, 2000);



/* 공지사항, 갤러리 */
$('.boardbox h2').eq(1).click(function(){
    $('.gallery').show();
    $('.notice').hide();
    $('.boardbox h2').eq(1).addClass('on').siblings().removeClass()
})
$('.boardbox h2').eq(0).click(function(){
    $('.gallery').hide();
    $('.notice').show();
    $('.boardbox h2').eq(0).addClass('on').siblings().removeClass()
})



//팝업
$('.notice li:first').click(function(){
    $('.popup').show();
})
$('.popup button').click(function(){
    $('.popup').hide();
})