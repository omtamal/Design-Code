$(function() {
  // mentoringBubbleClick();
  setInterval(function(){articleJello();}, 4000);
  designBGstuff();
  smoothScroll(300);
  mobileNav();
});

function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}

function designBGstuff() {
  // grab hover
  $('.design-img-link').hover(function(){
    // change color
    $(this).parent().parent().css('background-color', $(this).data('color'));
  }, function(){
    // back to normal color
    $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
  });

}

function articleJello() {
  var randNum = Math.floor(Math.random() * $('.article-thumb').length) +1

  $('.article-thumb').eq(randNum).addClass('is-emph').siblings().removeClass('is-emph');
}

// function mentoringBubbleClick() {

//   // click something
//   // get its distance from the top of its parent
//   // move everything to that the perfect distance (240) - items distance
//   // add class of is-open on it, so it pop's the balloon

//   $('.face').on('click',function() {
//     var $this = $(this),
//         faceTop = $this.position().top,
//         vertMath = -1 * (faceTop - 230),
//         faceLeft = $this.position().left,
//         leftMath = 0 - faceLeft;

//     if($(window).width() > 640) {
//       $this.parent().css('top', + vertMath +'px');
//     } else {
//       if($this.hasClass('back-btn')) {
//         mentoringNarrowStart();
//       } else {
//         $this.parent().css('left', + leftMath +'px');
//       }
//     }
//     if(!$this.hasClass('back-btn')){
//       $this.addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
//     }
//   });

// }



$(window).scroll(function() {
  youtubeVidScroll();
  // startMentoring();
  startArticles();
});

function youtubeVidScroll() {
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position','center -'+ wScroll +'px');
  //console.log(wScroll);
}

function startArticles() {
  var wScroll = $(window).scrollTop();

  if($('section.articles').offset().top - $(window).height()/2 < wScroll) {
    $('.article-thumb').each(function(i){
      setTimeout(function(){
        $('.article-thumb').eq(i).addClass('is-visible');
      }, 300 * i);
    });
  }
}

// function startMentoring() {

//   var wScroll = $(window).scrollTop();

//   if($('section.mentoring').offset().top - $(window).height()/2 < wScroll) {
//     if($(window).width() > 640) {
//       $('.face-wrap').addClass('launched');
      
//       if(!$('.face').hasClass('has-bubble-open')){
//         setTimeout(function(){
//           $('.face:nth-child(3)').addClass('has-bubble-open');
//         }, 400);
//       }
//     } else {
//       mentoringNarrowStart();
//     }
//   }
// };

// function mentoringNarrowStart() {
//   $('.face-wrap').css({
//     'top': '300px',
//     'left': '0px'
//   });
//   $('.face').first().addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
// }

// function mentoringWideStart() {
//   $('.face-wrap').css({
//     'top': '0px',
//     'left': '0px'
//   });
//   $('.face:nth-child(3)').addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
// // }

// $(window).resize(function() {
//   if($(window).width() > 640){
//     mentoringWideStart();
//   } else {
//     mentoringNarrowStart();
//   }
// });

