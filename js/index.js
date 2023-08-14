console.log("感");
$(function () {
  $("button").on("click", function () {
    console.log("呼び出し");
  });
});
$(".slide-items").slick({
  autoplay: true, // 自動再生
  arrows: true, // 矢印
  dots: true,
});
