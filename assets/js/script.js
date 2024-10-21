$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});


// Key Highlights
$(document).ready(function() {
  // Show first content by default
  $('.content').first().addClass('active');
  $('.tab').first().addClass('active');

  // Handle tab click
  $('.tab').on('click', function() {
      var tabId = $(this).data('tab');

      // Remove active class from all tabs and contents
      $('.tab').removeClass('active');
      $('.content').removeClass('active');

      // Add active class to clicked tab and corresponding content
      $(this).addClass('active');
      $('#' + tabId).addClass('active');
  });
});