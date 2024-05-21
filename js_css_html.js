$('.button').click(function(){
    $(".section-teacher2345").fadeToggle(150);
  });  

  const changeStyleButton = document.getElementById('changeStyleButton');
  const changeStyleElement = document.getElementById('changeStyleElement');
  let isStyleChanged = false;
  
  changeStyleButton.addEventListener('click', () => {
    if (!isStyleChanged) {
      changeStyleElement.style.height = '3370px'; // Меняем стиль элемента
      isStyleChanged = true;
    } else {
      changeStyleElement.style.height = '1080px'; // Возвращаем стиль обратно
      isStyleChanged = false;
    }
  });
  jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 4520) {
        jQuery('.text_nav1').addClass('text-animate');
    } else {
        jQuery('.text_nav1').removeClass('text-animate');
    }
    });
  jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 5400) {
        jQuery('.text_nav1').addClass('text-animate2');
    } else {
        jQuery('.text_nav1').removeClass('text-animate2');
    }
    });
    jQuery(window).scroll(function() {
      if (jQuery(document).scrollTop() > 5450) {
          jQuery('.logo').addClass('logo-animate');
      } else {
          jQuery('.logo').removeClass('logo-animate');
      }
      });
      const animate = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
          // если элемент появился
          if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('line-anim');
          }
        });
      });
      animate.observe(document.querySelector('.line3'));

      const observer = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
          // если элемент появился
          if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('line-anim2');
          }
        });
      });
      observer.observe(document.querySelector('.line4'));
      var $page = $('html, body');
      $('a[href*="#"]').click(function() {
          $page.animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 1000);
          return false;
      });
      const live = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
          // если элемент появился
          if (entry.isIntersecting) {
            // добавить ему CSS-класс
            entry.target.classList.add('summary1-animation');
            entry.target.classList.add('summary2-animation');
            entry.target.classList.add('summary3-animation');
            entry.target.classList.add('summary4-animation');
            entry.target.classList.add('details-anim');
            entry.target.classList.add('details-anim2');
            entry.target.classList.add('details-anim3');
            entry.target.classList.add('details-anim4');
          }
        });
      });
      live.observe(document.querySelector('.summary1'));
      live.observe(document.querySelector('.summary2'));
      live.observe(document.querySelector('.summary3'));
      live.observe(document.querySelector('.summary4'));
      live.observe(document.querySelector('.details'));
      live.observe(document.querySelector('.details2'));
      live.observe(document.querySelector('.details3'));
      live.observe(document.querySelector('.details4'));

      $(document).ready(function() {
        $(".btn").click(function() {
            var slideIndex = $(this).data("slide");
            $(".slide").hide();
            $(".slide").eq(slideIndex).show();
        });
    });
    $(document).ready(function() {
      $(".btn2").click(function() {
          var slideIndex = $(this).data("slide");
          $(".slide").hide();
          $(".slide").eq(slideIndex).show();
      });
  });
  $(document).ready(function() {
    $(".btn3").click(function() {
        var slideIndex = $(this).data("slide");
        $(".slide").hide();
        $(".slide").eq(slideIndex).show();
    });
});
$('.button-input').click(function(){
  $(".button-input-animate").fadeToggle(150);
});  
$(document).bind( 'mousewheel', function (e) { 
  var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
  e.preventDefault(); 
  e.stopPropagation(); 
  $(document.body).stop().animate( { 
       scrollTop : nt 
   } , 500 , 'easeInOutCubic' );  
} )