$(function () {
  $("#navbarLinksRight .search-icon").click(function () {
      $("#headerSearchDiv").toggleClass("active");
  });

  //binding navbar toggler - starts
  $(".top-header .navbar-toggler").click(function () {
      $(this).toggleClass("active");
      $("#gh_overlay").toggleClass("active");
      $("#navbarLinksMid").toggleClass("active");
  });
  $("#gh_overlay").click(function () {
      if ($(".top-header .navbar-toggler").hasClass("active")) {
          $(".top-header .navbar-toggler").click();
      }
  });
  //binding navbar toggler - ends

  // binding golbal search event - starts
  $("#headerSearchTxt").keydown(function (event) {
      if (event.keyCode == 13) {
          openIsearch();
      }
  });
  $("#headerSearchDiv a").click(function () {
      openIsearch();
  });

  $('.rotate').click(function() {
    $(this).toggleClass('down')  ;
  });

  $('#toggleBtnSubNavItem').click(function(){
     $('.asdfgh_block').slideToggle();
  });

  $('#expand-menu').bind('click', function() {
    $(this).parent().toggleClass('expand');

    $(this).parent().next().find('.left_nav_txt_hidden').toggleClass('hide_ele');
    $(this).parent().next().toggleClass('expand');

    $(this).parents().find('.tab-content').toggleClass('negative_margin');
  });

  $('#toggleBtnLeftNav').click(function(){
    $('.main_left_nav').toggleClass('hide_ele').fadeIn('3000');
  });

  $(window).resize(function(){
    if( $("#toggleBtnLeftNav").css('display') == 'none'){
      $('.main_left_nav').removeClass('hide_ele');
    }
  });

  // binding golbal search event - ends
});

function openIsearch() {
  var searchTxt = $("#headerSearchTxt").val().trim();
  if (searchTxt !== "") {
      window.open("https://isearch2.worldbank.org/search?q=" + searchTxt, "_blank");
  }
}

//$ ( document ).ready(function() {
   // $('#header_right_menu .search-form .form-group.wb_search_box').click(function() {
     // $('#search_box_blk').toggleClass('hide_ele');
  //  });

    // $('.list_expand_menu').click(function() {
    //   const ele = $(this).siblings().find('.nav-link span.left_nav_txt_hidden').toggleClass('close');


    //   // setTimeout(function(){
    //   //     ele.toggleClass('hide_ele').slideToggle('slow');;
    //   // }, 500);
    // });



//   $('#toggleBtnLeftNav').click(function(){
//     // $('.main_left_nav').toggleClass('hide_ele');
//     $('.main_left_nav').animate({
//       display: "none"
//     }, "slow", "easein" );

//   });

//    $('#toggleBtnSubNavItem').click(function(){
//     //  $('.header_block').toggleClass('hide_ele');
//     alert("Hello");
//     });



//     $('#header_content ul li a').eq(0).addClass('active');

//     $('#header_content ul li a').each(function() {
//       if($( this ).hasClass('active')){
//         $('#subHeaderItem').text($( this ).text());
//       };
//     });

//     $('#header_content ul li a').click(function(e) {
//       e.preventDefault();
//       $('#header_content ul li a').removeClass('active');
//       $(this).addClass('active');
//   });

//   $('.main_left_nav ul li a').eq(0).addClass('active');

//     $('.main_left_nav ul li a').each(function() {
//       if($( this ).hasClass('active')){
//         $('#leftNavItem').text($( this ).text());
//       };
//     });

//     $('.main_left_nav ul li a').click(function(e) {
//       e.preventDefault();
//       $('.main_left_nav ul li a').removeClass('active');
//       $(this).addClass('active');
//   });

//   $('.main_left_nav ul li a').click(function() {
//     $('#leftNavItem').text($( this ).text());
// });

//     $('.header_block ul li a').click(function() {
//         $('#subHeaderItem').text($( this ).text());
//     });



