$(function(){

//слайдер как сделать заказ
function toggleIcon(that){
    $('.js-nav').addClass('toleft');
    $('.js-nav-icon').removeClass('active');
}


//кнопка "вниз"
    $(document).on('click', '.mouse', function(){
        $.fn.fullpage.moveSectionDown();
    });


    //fancybox
    $(".js-fancybox").fancybox();

    var navBlock = $('.nav-block');

//отображение меню
    $('.js-nav-icon').click(function(){
        $('.js-nav').toggleClass('toleft');
        $(this).toggleClass('active');
    });


$(window).on('load resize', function(){
    var navBlock = $('.nav-block');
//отображение меню
    if($(window).width()<768||$(window).height()<630){
        navBlock.find('.nav').addClass('toleft');
        $('.js-nav-icon').removeClass('active');
    }


var marker=true;
    if($(window).width()>=1200&&$(window).height()>=630){
        $('#fullpage').fullpage({
            anchors: ['laCherie','about', 'products', 'why-we', 'how-to-order', 'contacts'],
            menu: '#menu',
            onLeave: function(index, nextIndex, direction){
                 marker=true;
                if($(window).width()>=1200){
                    if(index == 2 && direction =='up'){
                        navBlock.attr('style', 'position: absolute');
                        marker=false;
                    }
                }
            },
            afterLoad: function(anchorLink, index){

            if(marker==false){
                return;
            }else{
                if($(window).width()>=1200){
                            if(index > 1){
                                navBlock.css('top','0');
                                navBlock.css('left','0');
                            }
                            else{
                                 navBlock.attr('style', 'position: absolute');
                            }
                }
            }
        }
        });
    }else{
        if($('main').hasClass('fullpage-wrapper')){
            if ($.fn.fullpage) {
                $.fn.fullpage.destroy('all');
                navBlock.attr('style', '');
            }
            navBlock.attr('style', '');
        }


//плавный переход к пунктам меню (вне fullPage)
        $('#toabout').click(function(){
            $('html, body').animate({
                scrollTop: ($(".about").offset().top)-37
            }, 1000);
            if($(window).width()<1400){toggleIcon(this);}
        }); 

        $('#toworks').click(function(){
            $('html, body').animate({
                scrollTop: ($(".prods").offset().top)-25
            }, 1000);
            if($(window).width()<1400){
                toggleIcon(this);
            }
          });

        $('#towhywe').click(toggleIcon, function(){
            $('html, body').animate({
                scrollTop: ($(".promo_wrapper").offset().top)-37
            }, 1000);
            if($(window).width()<1400){toggleIcon(this);}
        });

        $('#toorder1').click(function(){
            $('html, body').animate({
                scrollTop: ($(".process").offset().top)-20
            }, 1000);
            if($(window).width()<1400){toggleIcon(this);}
        });

        $('.toorder2').click(function(){
            $('html, body').animate({
                scrollTop: ($(".feedback_wrapper").offset().top)-20
            }, 1000);
            if($(window).width()<1400){
                $('.js-nav').addClass('toleft');
                $('.js-nav-icon').removeClass('active');
            }
        });

        $('#tocontacts').click(function(){
            $('html, body').animate({
                scrollTop: ($(".feedback_wrapper").offset().top)-10
            }, 1000);
            if($(window).width()<1400){toggleIcon(this);}
        });

        //при скролле
        $(window).scroll(function(){
            if($(window).scrollTop()<$('.about').offset().top-70){
                clear();
            }
            if($(window).scrollTop()>$('.about').offset().top-70){
                clear();
                $('#toabout').addClass('active');
            }
            if($(window).scrollTop()>$('.prods').offset().top-60){
                clear();
                $('#toworks').addClass('active');
            }
            if($(window).scrollTop()>$('.promo_wrapper').offset().top-80){
                clear();
                $('#towhywe').addClass('active');
            }
            if($(window).scrollTop()>$('.process').offset().top-80){
                clear();
                $('#toorder1').addClass('active');
            }
            if($(window).scrollTop()>$('.feedback_wrapper').offset().top-70){
                clear();
                $('#tocontacts').addClass('active');
            }
        });

        function clear(){
             $('.nav-item').each(function(){
                $(this).removeClass('active');
            });
        }

        //при открытии страницы
            if($(window).scrollTop()<$('.about').offset().top){
                clear();
            }
            if($(window).scrollTop()>$('.about').offset().top){
                clear();
                $('#toabout').addClass('active');
            }
            if($(window).scrollTop()>$('.prods').offset().top){
                clear();
                $('#toworks').addClass('active');
            }
            if($(window).scrollTop()>$('.promo_wrapper').offset().top){
                clear();
                $('#towhywe').addClass('active');
            }
            if($(window).scrollTop()>$('.process').offset().top){
                clear();
                $('#toorder1').addClass('active');
            }
            if($(window).scrollTop()>$('.feedback_wrapper').offset().top){
                clear();
                $('#tocontacts').addClass('active');
            }

    }

 var $sync1 = $(".js-slider"),
    $sync2 = $(".js-slider-text"),
    flag = false,
    duration = 300;

$sync1
    .owlCarousel({
        nav : true,
        navigationText:"22",
        slideSpeed : 300,
        singleItem:true,
        //loop:true,
        items:1,
        //lazyLoad:true
    })
    .on('changed.owl.carousel', function (e) {
        if (!flag) {
            flag = true;
            $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
        }
    });

$sync2
    .owlCarousel({
        nav : true,
        paginationNumbers: true,
        navigationText:"13",
        slideSpeed : 300,
        items:1,
        dots: true,
        pullDrag:false

    })
    .on('click', '.owl-item', function () {
        $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

    })
    .on('changed.owl.carousel', function (e) {
        if (!flag) {
            flag = true;
            $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
            flag = false;
        }
    });
var i = 1;
$($sync2).find('.owl-dot').each(function(){
  $(this).text(i);
  i++;
});




//слайдер с товарами
    var owloptions = {
            nav: true,
            loop: true,
            //slideBy: 2,
            dots: true,
            responsive:{
                0:{
                    items:2
                },
                1000:{
                    items:3
                },
                1200:{
                    items:4
                },
                1700:{
                    items:5
                }
            },
            onChanged: changeNum
    }

    var $owl = $("#owl-demo").owlCarousel(owloptions);

    owlResize($owl); //обновление при ресайзе

    function owlResize($owl) {
        $owl.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        $owl.find('.owl-stage-outer').children().unwrap();
        $owl.owlCarousel(owloptions);
    }

    var i = 1;
    $("#owl-demo").find('.owl-dot').each(function(){
      $(this).text(i);
      i++;
    });

    function changeNum(event){
        var num = $('.owl-dot.active').html();
        var newNum =$('#curNum').html();
        if(newNum!==num){
            $('#curNum').html(num);
        }
    }

var num = $('.owl-dot.active').html();
    var newNum =$('#curNum').html();
    if(newNum!==num){
        $('#curNum').html(num);
    }


});

});
