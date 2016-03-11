$(function(){

	//Dropdown Menu
  $(".nav__items li>ul").each(function(){
    $(this).closest('li').find('a').eq(0).after('<span class="nav-arr"></span>');
    $(this).closest('li').addClass('nav__item-container');
  });
	
	



	//Sale counter

	time=$("#actDate").text();
    
      time=time.split(" ");
      time=time[0].split(",");
    
  var note = $('#note');
    ts = new Date(time[2], parseInt(time[1])-1, time[0]),
    newYear = true;
    ts=ts.getTime();
    
    
  $('#countdown').countdown({
    timestamp : ts,
    callback  : function(days, hours, minutes, seconds){
      
      var message = "";
      
      message += "Дней: " + days +", ";
      message += "часов: " + hours + ", ";
      message += "минут: " + minutes + " и ";
      message += "секунд: " + seconds + " <br />";
      
      if(newYear){
        message += "";
      }
      else {
        message += "";
      }
      
      note.html(message);
    }
  });
   $(".countDays").append("<p>дней</p>");
   $(".countHours").append("<p>часов</p>");
   $(".countMinutes").append("<p>минут</p>");
   $(".countSeconds").append("<p>секунд</p>");


// Tabs

  $('.js-tabs-panel:not(.visible)').hide(0);

  $('.js-tabs-menu').delegate('li:not(.current)', 'click', function() {
    $(this).addClass("current").siblings().removeClass("current");
    $(this).closest('.js-tabs').find('.js-tabs-panel').hide(0).eq($(this).index()).fadeIn(240);
  });



// Contacts

$('.contacts__group').click(function(){
    $('.contacts__group').toggleClass('contacts__group--active');
    $('.contacts__items').removeClass("contacts__items--active");

    if($('#dealers').hasClass('contacts__group--active')){
      $('.contacts__choose').attr("style", "display: inline;");
      $('#contacts-2').addClass("contacts__items--active");
      $('#js-header1').attr("style", "display: none;");
      $('#js-header2').attr("style", "display: block;");
      $('#js-deal-with-them').attr("style", "display: inline;");
    }
    else {
      $('.contacts__choose').attr("style", "display: none;");
      $('#contacts-1').addClass("contacts__items--active");
       $('#js-header1').attr("style", "display: block;");
      $('#js-header2').attr("style", "display: none;");
      $('#js-deal-with-them').attr("style", "display: none;");
    }
});

$('.contacts__choose').click(function(){
    $('.contacts__choose-items').addClass("display");
    return false; 
});


$(document).click( function(event){
      if( $(event.target).closest('.contacts__choose-items').length ) 
        return;
      $('.contacts__choose-items').removeClass("display");
      event.stopPropagation();
    });

});