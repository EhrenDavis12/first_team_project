var boxShadow = anime({
    targets: '.box-shadow',
    boxShadow: [
      {value: ['10px -10px 10px 0 currentColor', '10px 10px 20px 0 currentColor']},
      {value: '-10px 10px 30px 0 currentColor'},
      {value: '-10px -10px 20px 0 currentColor'},
      {value: '10px -10px 10px 0 currentColor'},
      {value: '0px 0px 0px 0 currentColor'}
    ],
    loop: false,
    easing: 'linear'
  });


  
 /*  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
    } else {
      $('nav').removeClass('shrink');
    }
  }); */




// You can also pass an optional settings object
// below listed default settings
AOS.init({
    // Global settings
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  
    // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });