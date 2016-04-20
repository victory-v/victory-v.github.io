$(function(){



    //fancybox
    $(".js-fancybox").fancybox();
    $(".js-fancybox-customer").fancybox({
      helpers : { 
      overlay: {
        css: {'background-color': 'rgba(32,61,113,0.6)'} // or your preferred hex color value
       } },
       closeBtn: false
    });



$(".js-about-slider").owlCarousel({
        nav: true,
        loop: true,
        items:1,
        responsive: false,
        autoHeight:true
    })

$('.js-slider').owlCarousel({
    thumbs: true,
    thumbImage: true,
    thumbContainerClass: 'owl-thumbs',
    thumbItemClass: 'owl-thumb-item',
    items:1,
    animateOut: 'fadeOut',
    mouseDrag: false,
    navSpeed: 100,
smartSpeed:100,
  });



//spinner
$(".js-spinner-up, .js-spinner-down").on("click", function() {

    var button = $(this);
    var oldValue = button.parents('.js-spinner').find("input").val();

    if (button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
        } else {
          if (oldValue > 0) {
            var newVal = 1;
          } else {
            newVal = 0;
          }
        }
        button.parents('.js-spinner').find("input").val(newVal);
});


// Tabs

  $('.js-tabs-panel:not(.visible)').hide(0);

  $('.js-tabs-menu').delegate('li:not(.current)', 'click', function() {
    $(this).addClass("current").siblings().removeClass("current");
    $(this).closest('.js-tabs').find('.js-tabs-panel').hide(0).eq($(this).index()).fadeIn(240);
  });



//to top

  var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки


  $(window).scroll(function() { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      
      if ($(this).scrollTop() > top_show) {$('#top').fadeIn();}
      else {$('#top').fadeOut();}
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });



//переключение информации в контактах
$('.js-city').click(function(){
                var city=$(this).attr('data-city');
                $('.js-contacts__list').each(function(){
                    var id = $(this).attr("data-city");
                    if(city===id){
                        $(this).addClass('active');
                        $('.contacts__info h2').html(city);
                    }else{
                        $(this).removeClass('active');
                    }
                });
            });




//filter

$('.js-checkbox').change(function(){
  $(this).closest('label').toggleClass('active');
});
$('.js-radio').change(function(){
  $('.js-radio').each(function(){
    $(this).closest('label').removeClass('active');
  });
  $(this).closest('label').addClass('active');
});

$('.js-checkbox').each(function(){
    if($(this).prop("checked")===true){
        $(this).closest('label').addClass('active');
    }
});
$('.js-radio').each(function(){
    if($(this).prop("checked")===true){
        $(this).closest('label').addClass('active');
    }
});


// Catalog Menu

  $('.catalog-menu>li>ul>li>ul').each(function(){
    $(this).parent().addClass("includes");
    $(this).toggle();
    $(this).parent().prepend('<span class="catalog-arr" data-status="down"></span>');
  });
  var interes=400;

  $(document).on("click", ".catalog-arr",  function(){
      if ($(this).attr('data-status')=='down'){
          $(this).attr('data-status', "up");
          $(this).parent().toggleClass("active");
      }
      else{
        $(this).attr('data-status', "down");
        var ob = $(this).parent();
        setTimeout(function() { ob.toggleClass("active"); }, 300)


      }

      $(this).parent().find('ul').eq(0).toggle(interes, function() {});
      interes=400;


  });
});
