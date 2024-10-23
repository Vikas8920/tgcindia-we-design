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


// limited seats Form Section

$(document).ready(function () {
  // Countdown Timer in Hours:Minutes:Seconds
  var totalSeconds = 3600; // Set total seconds (1 hour = 3600 seconds)

  function updateTimer() {
      // Calculate hours, minutes, and seconds
      var hours = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var seconds = totalSeconds % 60;

      // Format time with leading zeros
      hours = (hours < 10) ? '0' + hours : hours;
      minutes = (minutes < 10) ? '0' + minutes : minutes;
      seconds = (seconds < 10) ? '0' + seconds : seconds;

      // Update the timer display
      $('#timer').html(hours + ':' + minutes + ':' + seconds);

      // Check if time is up
      if (totalSeconds <= 0) {
          clearInterval(interval);
          $('#timer').html("00:00:00");
          alert('Time is up! The offer is no longer available.');
          $('#offer-form').hide();
      }

      totalSeconds--; // Decrement the total seconds
  }

  // Run the timer function every second
  var interval = setInterval(updateTimer, 1000);

  // Close form
  $('#close-btn').click(function () {
      $('#offer-form').hide();
  });


  // form
  $("#offer-form-details").submit(function(e){
      e.preventDefault();
      let name = $("#name").val();
      let email = $("#email").val();
      let phone = $("#phone").val();
      $("#nameError").text("");
      $("#emailError").text("");
      $("#phoneError").text("");

      if(name.trim() === ""){
          $("#nameError").text("Name is required.");
          return;
      }

      if(email.trim() === ""){
          $("#emailError").text("Email is required.");
          return;
      }

      if(!isValidEmail(email)){
          $("#emailError").text("Invalid email address.");
          return;
      }

      if(phone.trim() === ""){
          $("#phoneError").text("Phone number is required.");
          return;
      }

      if(!isValidPhoneNumber(phone)){
          $("#phoneError").text("Invalid phone number.");
          return;
        }

      $("#offer-form-details").unbind('submit').submit();
  });

  function isValidEmail(email){
      let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return emailRegex.test(email);
  }

  function isValidPhoneNumber(phone){
      let phoneRegex = /^\d{10}$/;
      return phoneRegex.test(phone);
  }
});