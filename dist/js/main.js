let windowSize = $(window).width();

if(windowSize <1370) {
  $(document).ready(function(){

    $('.container').slick({
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        responsive: [
       {
          breakpoint: 1370,
          settings: {
            slidesToShow: 1,
            infinite: false,
          }
    
        }]
    });
  });
};

