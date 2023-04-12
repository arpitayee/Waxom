$(function(){
  $('.counterup').counterUp({
    delay: 50,
    time: 2000
});

$('.post-gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow:".fa-angle-left",
  nextArrow:".fa-angle-right",
});

})
