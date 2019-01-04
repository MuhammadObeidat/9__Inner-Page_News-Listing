$(document).ready(function() {
  // $(".main-menu").hover(function() {
  //   $(".main-menu li > .header__submenu").hide();
  //   $(this)
  //     .children(".header__submenu")
  //     .show();
  // });
  $(".main-menu li .header__submenu")
    .parent()
    .hover(function() {
      var submenu = $(this).children(".header__submenu");
      if ($(submenu).is(":hidden")) {
        $(submenu).show();
      } else {
        $(submenu).hide();
      }
    });

  $(".header__toggle").click(function() {
    $(".mobile-tablet-menu").show(250);
  });

  $(".mobile-tablet-menu__close").click(function() {
    $(".mobile-tablet-menu").hide(250);
  });
});
