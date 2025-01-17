  document.addEventListener('DOMContentLoaded', function () {
    var options = {
      strings: ['<div class="text-light">Hello, World!</div>', 'This is <span class="text-light">Mohamed Hany</span> Portfoilio'],
      typeSpeed: 50,  // typing speed in milliseconds
      backSpeed: 25,  // backspacing speed in milliseconds
      loop: true      // loop the animation
    };

    var typed = new Typed('#typed-output', options);
  });


  $(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    // Function to handle scroll events
    function handleScroll() {
      var element = $('#skillsSection')[0];

      if (isElementInViewport(element)) {
        // Add the 'animated' class when the element is in the viewport animate__delay-1s
        $(element).addClass('animate__animated animate__zoomInDown');
      }
    }

    // Attach the handleScroll function to the scroll event
    $(window).on('scroll', handleScroll);

    // Trigger the handleScroll function on page load to check initial state
    handleScroll();
  });



