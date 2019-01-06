$(function (){
   $('.nav_bar_item').mouseover(function (){
      $('.nav_bar_item > div > .sub_menu:visible').hide();
      $(this).find('> div > .sub_menu').show(); 
   });
   
   $('.sub_menu_item').mouseover(function (){
      $('.sub_menu_item > div > .sub_menu:visible').hide();
      $(this).find('> div > .sub_menu').show(); 
   });
   
   
   isSideBarHidden = true;
   $('.menu_icon img').click(function (){
       if(isSideBarHidden){
           $('.nav_bar').css('width','0px');
           $('.nav_bar').show();
           $('.nav_bar').animate({
                width: '290px'
            }, 500);
            isSideBarHidden = false;
       }
        else{
            isSideBarHidden = true;
            $('.nav_bar').animate({
                width: '0px'
            }, 500, function (){
                $('.nav_bar').hide();
            });
        }
       
   });
});