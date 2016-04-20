
/*! Scripts */

$(function() {

function ssc_init(){if(document.body){var e=document.body,s=document.documentElement,c=window.innerHeight,t=e.scrollHeight;if(ssc_root=document.compatMode.indexOf("CSS")>=0?s:e,ssc_activeElement=e,ssc_initdone=!0,top!=self)ssc_frame=!0;else if(t>c&&(e.offsetHeight<=c||s.offsetHeight<=c)&&ssc_root.offsetHeight<=c){var r=document.createElement("div");r.style.clear="both",e.appendChild(r)}ssc_fixedback||(e.style.backgroundAttachment="scroll",s.style.backgroundAttachment="scroll"),ssc_keyboardsupport&&ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,s,c,t){if(t||(t=1e3),ssc_directionCheck(s,c),ssc_que.push({x:s,y:c,lastX:0>s?.99:-.99,lastY:0>c?.99:-.99,start:+new Date}),!ssc_pending){var r=function(){for(var o=+new Date,n=0,a=0,i=0;i<ssc_que.length;i++){var l=ssc_que[i],_=o-l.start,u=_>=ssc_animtime,d=u?1:_/ssc_animtime;ssc_pulseAlgorithm&&(d=ssc_pulse(d));var f=l.x*d-l.lastX>>0,m=l.y*d-l.lastY>>0;n+=f,a+=m,l.lastX+=f,l.lastY+=m,u&&(ssc_que.splice(i,1),i--)}if(s){var p=e.scrollLeft;e.scrollLeft+=n,n&&e.scrollLeft===p&&(s=0)}if(c){var h=e.scrollTop;e.scrollTop+=a,a&&e.scrollTop===h&&(c=0)}s||c||(ssc_que=[]),ssc_que.length?setTimeout(r,t/ssc_framerate+1):ssc_pending=!1};setTimeout(r,0),ssc_pending=!0}}function ssc_wheel(e){ssc_initdone||ssc_init();var s=e.target,c=ssc_overflowingAncestor(s);if(!c||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(s,"embed")&&/\.pdf/i.test(s.src))return!0;var t=e.wheelDeltaX||0,r=e.wheelDeltaY||0;t||r||(r=e.wheelDelta||0),Math.abs(t)>1.2&&(t*=ssc_stepsize/120),Math.abs(r)>1.2&&(r*=ssc_stepsize/120),ssc_scrollArray(c,-t,-r),e.preventDefault()}function ssc_keydown(e){var s=e.target,c=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(s.nodeName)||s.isContentEditable||e.defaultPrevented||c)return!0;if(ssc_isNodeName(s,"button")&&e.keyCode===ssc_key.spacebar)return!0;var t,r=0,o=0,n=ssc_overflowingAncestor(ssc_activeElement),a=n.clientHeight;switch(n==document.body&&(a=window.innerHeight),e.keyCode){case ssc_key.up:o=-ssc_arrowscroll;break;case ssc_key.down:o=ssc_arrowscroll;break;case ssc_key.spacebar:t=e.shiftKey?1:-1,o=-t*a*.9;break;case ssc_key.pageup:o=.9*-a;break;case ssc_key.pagedown:o=.9*a;break;case ssc_key.home:o=-n.scrollTop;break;case ssc_key.end:var i=n.scrollHeight-n.scrollTop-a;o=i>0?i+10:0;break;case ssc_key.left:r=-ssc_arrowscroll;break;case ssc_key.right:r=ssc_arrowscroll;break;default:return!0}ssc_scrollArray(n,r,o),e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,s){for(var c=e.length;c--;)ssc_cache[ssc_uniqueID(e[c])]=s;return s}function ssc_overflowingAncestor(e){var s=[],c=ssc_root.scrollHeight;do{var t=ssc_cache[ssc_uniqueID(e)];if(t)return ssc_setCache(s,t);if(s.push(e),c===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<c)return ssc_setCache(s,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return ssc_setCache(s,e)}while(e=e.parentNode)}function ssc_addEvent(e,s,c){window.addEventListener(e,s,c||!1)}function ssc_removeEvent(e,s,c){window.removeEventListener(e,s,c||!1)}function ssc_isNodeName(e,s){return e.nodeName.toLowerCase()===s.toLowerCase()}function ssc_directionCheck(e,s){e=e>0?1:-1,s=s>0?1:-1,(ssc_direction.x!==e||ssc_direction.y!==s)&&(ssc_direction.x=e,ssc_direction.y=s,ssc_que=[])}function ssc_pulse_(e){var s,c,t;return e*=ssc_pulseScale,1>e?s=e-(1-Math.exp(-e)):(c=Math.exp(-1),e-=1,t=1-Math.exp(-e),s=c+t*(1-c)),s*ssc_pulseNormalize}function ssc_pulse(e){return e>=1?1:0>=e?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(e))}var ssc_framerate=150,ssc_animtime=800,ssc_stepsize=150,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=50,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document.documentElement,ssc_activeElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var e=0;return function(s){return s.ssc_uniqueID||(s.ssc_uniqueID=e++)}}(),ischrome=/chrome/.test(navigator.userAgent.toLowerCase());ischrome&&(ssc_addEvent("mousedown",ssc_mousedown),ssc_addEvent("mousewheel",ssc_wheel),ssc_addEvent("load",ssc_init));

	// Tabs

	$('.js-tabs-panel:not(.visible)').hide(0);

	$('.js-tabs-menu').delegate('li:not(.current)', 'click', function() {
		$(this).addClass("current").siblings().removeClass("current");
		$(this).closest('.js-tabs').find('.js-tabs-panel').hide(0).eq($(this).index()).fadeIn(240);
	});

	
$('.services__ul li').click(function(){
		$('.services__ul li').removeClass('services__li-active');
		$(this).closest('li').addClass('services__li-active');
	});


/*Скролл шапки*/

var go=true;
$(window).scroll(function()
  {


    if($(window).scrollTop()<=100){

      var var_s = $(window).scrollTop();
      var var_k = -100/31;
      var var_h = (var_s-(-104*var_k))/var_k;
      var_h =  parseInt(var_h);

      var var_k2 = -100/72;
      var var_h2 = (var_s-(-37*var_k2))/var_k2;
      var_h2 =  parseInt(var_h2);

      var_h3 = (var_s)/5;
       var_h3 =  parseInt(var_h3);


      $('.logo img').css("height", var_h+"px");
      $('.logo').css("bottom", var_h2+"px");
      $('.logo').css("margin-left", var_h3+"px");



    }else{
      $('.logo img').css("height","73px");
      $('.logo').css("bottom", "-35px");
      $('.logo').css("margin-left", "20px");
    }





  if ($(window).scrollTop()>67)
    {
      $("#menu").css("height", (95-($(window).scrollTop()-65))+"px");//animate({height: 70}, 300, function() {go=true;});
      $("#menu").attr("sps", "true");    
    }
    else
    {
    //  $("#menu").css("height", (95-($(window).scrollTop()-65))+"px");//animate({height: 70}, 300, function() {go=true;});
      $("#menu").css("height", "160px");
      $("#menu").attr("sps", "false");      
    }
      if ($("#menu").height()==60) $(".h1").attr("sps", "true");
      else $(".h1").attr("sps", "false");

    if ($(window).width()<1000)
    $("#menu[sps='true']").css("left", (  100-(($(window).width())/2)-$(window).scrollLeft()        )+"px");
    else if ($("#menu[sps='true']").size()>0)  $("#menu[sps='true']").css("left", "-500px");
    if ($("#menu[sps='true']").size()==0) $("#menu").css("left", "0px");





  });
  
  
  
$(window).resize(function()
{

    

    if ($(window).width()<940)
    $("#menu[sps='true']").css("left", (  45-(($(window).width())/2)-$(window).scrollLeft()        )+"px");
    else if ($("#menu[sps='true']").size()>0)  $("#menu[sps='true']").css("left", "-470px");
    if ($("#menu[sps='true']").size()==0) $("#menu").css("left", "0px");
    
});




/*Переходы по ссылкам внутри страницы*/

	$('.toorder').click(function(){
		$('html, body').animate({
                    scrollTop: $("#toorder").offset().top
		}, 1000);
	});	

	$('#tomaplink').click(function(){
		$('html, body').animate({
                    scrollTop: $("#tomap").offset().top
		}, 1000);
	});		



        $('#js-order-back').click(function(){
              $('.order__smile').attr("style", "display: none;");
              $('.order__toggle h2').attr("style", "display: block;");
              $('.order__toggle .order__form').attr("style", "display: block;");
            });
     





});