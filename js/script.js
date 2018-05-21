var ua = navigator.userAgent;
var device;
$(function () {
  if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
    device = "sp";
  } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
    device = "tablet";
  } else {
    device = "pc";
  }
});

$(window).load(function(){
  headerMenu();
  if ($('#index').length) {
    casestudySlider();
    if(device == "pc") {
      heroVideo();
    };
  };
});

function headerMenu() {
  $("#menu").click(function(){
    if($("#header").hasClass("active")) {
      $("#header").removeClass("active");
    } else {
      $("#header").addClass("active");
    }
  });
}

function heroVideo() {
  var video = document.getElementById('heroVideo'),
      current;
  
  function videocurrent(){
    current = video.currentTime * 10;
    current = Math.round(current);
    current = current / 10;
    
    if(current < 3.8) {
      $("[data-copy]").attr("data-copy" ,"1");
    } else if (current < 6.9) {
      $("[data-copy]").attr("data-copy" ,"2");
    } else if (current < 10) {
      $("[data-copy]").attr("data-copy" ,"3");
    } else {
      $("[data-copy]").attr("data-copy" ,"4");
    }
    setTimeout(videocurrent, 200);
  };
  videocurrent();
}

function casestudySlider() {
  var ww;
  var options;
  var slider;
  var log;
  var now;
  var tbBreak = '1024';
  var spBreak = '640';

  function setup() {
    ww = $(window).innerWidth();
    if (tbBreak <= ww) {
      options = {
        auto: false,
        infiniteLoop: true,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 2,
        slideWidth: '100px',
        controls: true,
        pager: false,
        oneToOneTouch: true,
        hideControlOnEnd: false,
        onSliderLoad: function(n) {
          n++;
          $('#casestudySlider').children('li[data-num="' + n + '"]').addClass('active');
          $('#casestudySlider').children('li[data-num="' + (n + 1) + '"]').addClass('active');
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
          newIndex++;
          $('#casestudySlider').children('li').removeClass("active");
          $('#casestudySlider').children('li[data-num="' + (newIndex * 2) + '"]').addClass('active');
          $('#casestudySlider').children('li[data-num="' + (newIndex * 2 - 1) + '"]').addClass('active');
        }
      };
    } else if (tbBreak > ww && spBreak < ww ) {
      options = {
        auto: false,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: '100px',
        controls: true,
        pager: false,
        oneToOneTouch: true,
        hideControlOnEnd: false,
        onSliderLoad: function(n) {
          n++;
          $('#casestudySlider').children('li[data-num="' + n + '"]').addClass('active');
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
          newIndex++;
          $('#casestudySlider').children('li').removeClass("active");
          $('#casestudySlider').children('li[data-num="' + newIndex + '"]').addClass('active');
        }
      };
    } else {
      options = {
        auto: false,
        infiniteLoop: true,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: '100px',
        controls: true,
        pager: false,
        oneToOneTouch: true,
        hideControlOnEnd: false,
        onSliderLoad: function(n) {
          n++;
          $('#casestudySlider').children('li[data-num="' + n + '"]').addClass('active');
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
          newIndex++;
          $('#casestudySlider').children('li').removeClass("active");
          $('#casestudySlider').children('li[data-num="' + newIndex + '"]').addClass('active');
        }
      };
    }
  };


  setup();
  slider = $('#casestudySlider').bxSlider(options);

  var timer = false;
  $(window).resize(function () {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      setup();
      slider.reloadSlider(options);
    }, 200);
  });
};

$(function(){
  $('.projectDetail-lists').magnificPopup({
    delegate: 'a', 
    type: 'image',
    gallery: {
      enabled:true
    }
  });
});

$(document).ready(function() {
  $('nav ul li a').each(function() {
    var activeUrl = location.pathname.split("/")[1];
    var $href = $(this).attr('href').split("/")[1];
    if ($href == activeUrl ) {
      $(this).parent().addClass("is-active");
    }
  });
});

$(window).on('load scroll', function(){
  var bt = $("#anchor").offset().top;
  var ds = 0;
  ds = $(this).scrollTop();
  if (bt-92 <= ds) {
    $(".anchor").addClass('fix');
  } else if (bt+92 >= ds) {
    $(".anchor").removeClass('fix');
  }
});


$(function(){
  $('a[href^=#]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});
