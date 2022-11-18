$(document).ready(function(){

  // 상단 메뉴 마우스오버시_ 각 항목별 하위메뉴 슬라이드
  $(".mainMenu").mouseenter(function(){
    $(".mainMenu").removeClass("active");
    //위로 서서히 올라간 후 {display:none;}
    $(".subMenu").stop().slideUp();
    //그것(마우스갖다댄것)의 다음요소
    $(this).next().stop().slideDown();
  });
  // 하위메뉴에 마우스 갖다댈때_메인메뉴 활성유지
  $(".subMenu").mouseenter(function(){
    $(this).prev().addClass("active");
  });
  // 하위메뉴 마우스아웃시_올라간다
  $("header>nav").mouseleave(function(){
    $(".mainMenu").removeClass("active");
    $(".subMenu").stop().slideUp();
  });
  
// 왼쪽방향 자동 슬라이드
  setInterval(leftMove, 4000);
  function leftMove(){
    $("#sliding div").stop().animate({left:"-1320px"},2000,
    function(){
      $(this).append( $(this).children().first());
      $(this).css("left",0);
    });
  };





});/////end