$(document).ready(function () {
  // Smooth scroll for nav links
  $('.nav-link').click(function (e) {
    e.preventDefault();
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 70
    }, 800);
  });
});
