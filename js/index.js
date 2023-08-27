// console.log("感");
// $(function () {
//   $("button").on("click", function () {
//     console.log("呼び出し");
//   });
// });
// $(".slide-items").slick({
//   autoplay: true, // 自動再生
//   arrows: true, // 矢印
//   dots: true,
// });
$(function () {
  $(".slider_thumb").slick({
    arrows: false,
    asNavFor: ".thumb",
  });
  $(".thumb").slick({
    asNavFor: ".slider_thumb",
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  });
  $("button").click(() => {
    $(".text").toggleClass("big");
  });

  $(".aco_box .aco_title").click(function () {
    $(this).next(".inner").slideToggle();
    // $(this).toggleClass("open");
    $(".aco_box .aco_title").not($(this)).next(".inner").slideUp();
    $(".aco_box .aco_title").not($(this)).removeClass("open");
  });
});
