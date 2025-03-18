$(".menu-icon").click(function(e) {
  e.preventDefault();
  $(".menu-icon").toggleClass("menuicon");
  $(".sidebar").toggleClass("active1");
  $(".sidenav li a").toggleClass("anchor");
  $(".sidenav li").toggleClass("lislide");
  $(".logo span").toggleClass("headspan");
  $(".logo").toggleClass("lm");
});

$('.sidenav li').click(function(){
    $(".sidenav li").removeClass("active");
    $(this).addClass("active");
});