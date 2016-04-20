$(function(){

    //slider
    $(".js-slider").owlCarousel({
            navigation : true,
            pagination: true,
            navigationText:"22",
            slideSpeed : 300,
            items: 5,
            responsive:false
        });
    $(".js-slider-p").owlCarousel({
            navigation : true,
            pagination: true,
            navigationText:"22",
            slideSpeed : 300,
            items: 4,
            responsive:false
        });



    $('.js-tab').click(function(){
        $('.js-tab').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        var id=$(this).attr('data-id');
        $('.prod__table table').each(function(){
            $(this).addClass('hidden');
        });
        $('.prod__table table[data-id='+id+']').removeClass('hidden');
    });


    $(".js-fancybox").fancybox({
        'width':'885px',
        'height':"800px"
    });
});
