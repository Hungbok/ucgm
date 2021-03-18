$(document).ready(function() {

  var $panel = $(".popup_panel");

  var $panelContents = $panel.find(".popup_contents");

  $("#btn_popup_open").on("click", function(e) {

      // 팝업 가운데 설정(가로)
      if ($panelContents.outerWidth() < $(document).width()) {
          $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
      } else {
          $panelContents.css("left", "0px");
      }

      // 팝업 가운데 설정(세로)
      if ($panelContents.outerHeight() < $(document).height()) {
          $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2 + "px");
      } else {
          $panelContents.css("top", "0px");
      }

      // 레이어 팝업 열기
      $panel.fadeIn();
  });

  $("#btn_popup_open1").on("click", function(e) {

      // 팝업 가운데 설정(가로)
      if ($panelContents.outerWidth() < $(document).width()) {
          $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
      } else {
          $panelContents.css("left", "0px");
      }

      // 팝업 가운데 설정(세로)
      if ($panelContents.outerHeight() < $(document).height()) {
          $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2 + "px");
      } else {
          $panelContents.css("top", "0px");
      }

      // 레이어 팝업 열기
      $panel.fadeIn();
  });

  $("#btn_popup_open2").on("click", function(e) {

      // 팝업 가운데 설정(가로)
      if ($panelContents.outerWidth() < $(document).width()) {
          $panelContents.css("margin-left", "-" + $panelContents.outerWidth() / 2 + "px");
      } else {
          $panelContents.css("left", "0px");
      }

      // 팝업 가운데 설정(세로)
      if ($panelContents.outerHeight() < $(document).height()) {
          $panelContents.css("margin-top", "-" + $panelContents.outerHeight() / 2 + "px");
      } else {
          $panelContents.css("top", "0px");
      }

      // 레이어 팝업 열기
      $panel.fadeIn();
  });

  // 팝업 닫기 이벤트 정의
  $("#btn_popup_close").on("click", popupClose);

  function popupClose(e) {

      $panel.fadeOut();

      // 이벤트 기본 동작 중단
      e.preventDefault();
  }
});

  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }