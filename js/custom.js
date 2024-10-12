
$("#Header").load("layout/header.html");
$("#Footer").load("layout/footer.html");
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dropdownMenuButton');
  const toggleSign = document.getElementById('toggle-sign');

  // Listen for Bootstrap dropdown events to handle toggle sign
  dropdownButton.addEventListener('show.bs.dropdown', function () {
    toggleSign.textContent = '-';
  });

  dropdownButton.addEventListener('hide.bs.dropdown', function () {
    toggleSign.textContent = '+';
  });

  const tabButtons = document.querySelectorAll('.dropdown-item');

  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      const targetTabContent = document.querySelector(this.getAttribute('data-bs-target'));

      // Deactivate all tabs and content
      document.querySelectorAll('.dropdown-item').forEach(item => item.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(tabContent => tabContent.classList.remove('show', 'active'));

      // Activate the clicked tab and corresponding content
      this.classList.add('active');
      targetTabContent.classList.add('show', 'active');
    });
  });
});

// Wait for the DOM to load
// document.addEventListener('DOMContentLoaded', function () {
//   const dropdownButton = document.getElementById('dropdownMenuButton');
//   const toggleSign = document.getElementById('toggle-sign');

//   // Listen for dropdown toggle event
//   dropdownButton.addEventListener('click', function () {
//     // Toggle the plus/minus sign based on the dropdown state
//     if (dropdownButton.getAttribute('aria-expanded') === 'true') {
//       toggleSign.textContent = '-';
//     } else {
//       toggleSign.textContent = '+';
//     }
//   });
// });



// document.addEventListener('DOMContentLoaded', function () {
//   const tabButtons = document.querySelectorAll('.dropdown-item');

//   tabButtons.forEach(button => {
//     button.addEventListener('click', function () {
//       const targetTabContent = document.querySelector(this.getAttribute('data-bs-target'));

//       // Deactivate all tabs and content
//       document.querySelectorAll('.dropdown-item').forEach(item => item.classList.remove('active'));
//       document.querySelectorAll('.tab-pane').forEach(tabContent => tabContent.classList.remove('show', 'active'));

//       // Activate the clicked tab and corresponding content
//       this.classList.add('active');
//       targetTabContent.classList.add('show', 'active');
//     });
//   });
// });


/////////////////// product +/-
$(document).ready(function () {
  $('.num-in span').click(function () {
    var $input = $(this).parents('.num-block').find('input.in-num');
    if ($(this).hasClass('minus')) {
      var count = parseFloat($input.val()) - 1;
      count = count < 1 ? 1 : count;
      if (count < 2) {
        $(this).addClass('dis');
      } else {
        $(this).removeClass('dis');
      }
      $input.val(count);
    } else {
      var count = parseFloat($input.val()) + 1
      $input.val(count);
      if (count > 1) {
        $(this).parents('.num-block').find(('.minus')).removeClass('dis');
      }
    }

    $input.change();
    return false;
  });

});
// product +/-


document.addEventListener('DOMContentLoaded', function () {
  const searchField = document.querySelector('.search-field');

  searchField.addEventListener('focus', function () {
    this.style.backgroundImage = 'none'; // Hide image on focus
  });

  searchField.addEventListener('blur', function () {
    this.style.backgroundImage = 'url(../images/search.png)'; // Show image on blur
  });
});



document.querySelectorAll('.dropdown-toggle').forEach(item => {
  item.addEventListener('click', event => {
    const dropdown = item.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    item.classList.toggle('active'); // Toggle active class
  });
});


// blogslider start
$('.program_slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
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
  ]
});

// blogslider start


// blogslider start
$('.feature_slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
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
  ]
});

// blogslider start
$('.seller-slide').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 3,
  slidesToScroll: 1,
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
      breakpoint: 600,
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
  ]
});

// blogslider end
$('.test-slide').slick({
  dots: true,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
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
      breakpoint: 600,
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
  ]
});
// product slider jas start

// blogslider start
$('.banner_slider').slick({
  dots: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});

// blogslider end
// Testi slider start
$(".testi-slider").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoPlay: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 1100,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      autoPlay: true,
      infinite: true,
      dots: false,
    },
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      autoPlay: true,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      autoPlay: true,
      slidesToScroll: 1,
      dots: false,
    },
  },
  ],
});

// Testi slider end
// product slider jas start

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
// product slider jas end

// simple slick slider start
$(".tab_slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1
});

// simple slick slider end

// wow animation js

$(function () {
  new WOW().init();
});


// responsive menu js

$(function () {
  $('#menu').slicknav();
});




// slick slider in tabs js end