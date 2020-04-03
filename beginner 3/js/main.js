
/* Add active class to the current button (highlight it) */
// Lấy phần tử container
var header = document.getElementById("myDIV");
// Nhận tất cả các thẻ a có class = "post" bên trong container
var btns = header.getElementsByClassName("post");
// Lặp lại các thẻ a và thêm lớp kích hoạt vào thẻ hiện tại / đã nhấp
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
$(document).ready(function(){
  $('.post-wrapper').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:$('.next'),
    prevArrow:$('.prev')
    
  });
})