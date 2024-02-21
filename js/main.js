
$(function () {
 
    // 緩慢回到頁面最上方的按鈕
    $('#gotop').click(function () {
   
     var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
     $body.animate({
      scrollTop: 0
     }, 600);
   
     return false;
   
    });
   
    // 點擊超連結，緩慢滾動到錨點
    $("a.anchor").click(function () {
     console.log($(this).attr("href"))
   
     var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
   
     $body.animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
     }, {
      duration: 800,
      easing: "swing"
     });
   
     return false;
   
    });
   
});


// ------- wow.js + animate.css ----------


new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
}).init();


var menuVue = new Vue({
    el: '#menu',
    data(){
        return {
            burgerActive: false,
            list: [
                {
                    url: 'index.html', title: '個人介紹',
                    icon: 'icon-home', en: 'HOME',
                },
                {
                    url: 'portfolio.html', title: '作品一覽',
                    icon: 'icon-portfolio', en: 'PROTFOLIO',
                },
                // {
                //     url: 'note.html', title: '學習筆記',
                //     icon: 'icon-note', en: 'NOTE',
                // },
            ],
        }
    }
});