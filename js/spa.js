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
  //스와이프에 마우스오버 이벤트 적용
  $('.swiper-slide').on('mouseover', function(){
    swiper.autoplay.stop();
  });
  $('.swiper-slide').on('mouseout', function(){
    swiper.autoplay.start();
  });
  //스와이프
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 2000,

    slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
    centeredSlides: true,    //센터모드
    autoplay: {     //자동슬라이드 (false-비활성화)
      delay: 2500, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    
    // If we need pagination 블릿
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    /////
  });
});
