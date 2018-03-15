$(document).ready(function(){

    var totalItems = $('.swiper-card').length-1;
    var first = 0;
    var last = totalItems;
    var current =last;

    // Swipe event: to the right [accept meeting]
    $(".swiper-card").on("swiperight",function()
    {
        $(this).addClass('action-meet').delay(800).fadeOut(100);
        if ( $(this).is(':last-child') ) 
        {
            $('.swiper-card:nth-child(1)').removeClass('action-meet action-pass').fadeIn(300);
        }
        else
        {
            $(this).next().removeClass('action-meet action-pass').fadeIn(400);
        }
        current = $(this).index();
    });  

    // Swipe event: to the left [cancel meeting]
    $(".swiper-card").on("swipeleft",function(){
        $(this).addClass('action-pass').delay(800).fadeOut(1);

        if ( $(this).is(':last-child') ) {
            $('.swiper-card:nth-child(1)').removeClass('action-pass action-meet').fadeIn(300);
        } else {
            $(this).next().removeClass('action-pass action-meet').fadeIn(400);
        } 
        current = $(this).index();
    });

    // Click event: meet button
    $('.meet-button').click(function()
    {
        if(current >= totalItems)
            current = 0;
        else
            current+=1;
        $(".swiper-card").parent().children().eq(current).trigger('swiperight');
    });

    // Click event: pass button
    $('.pass-button').click(function()
    {
        if(current >= totalItems)
            current = 0;
        else
            current+=1;
        $(".swiper-card").parent().children().eq(current).trigger('swipeleft');
    });
    
});