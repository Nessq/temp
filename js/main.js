// declare func header scroll
function scrollHandler(elem, y) {
   const el = document.querySelector(elem);

   return (e) => {
      if (window.scrollY > y) el.classList.add('scrolled');
      else el.classList.remove('scrolled');
   }
   
}




window.addEventListener('DOMContentLoaded', () => {
   
   const headerScroll = scrollHandler('.header', 0);
   window.addEventListener('scroll', headerScroll);


   const swiper = new Swiper('.main-slider', {
      speed: 400,
      spaceBetween: 100,
      navigation: {
         nextEl: '.main-slider .swiper-button-next',
         prevEl: '.main-slider .swiper-button-prev',
       },
     
       scrollbar: {
         el: '.main-slider .swiper-scrollbar',
       },
    });

});