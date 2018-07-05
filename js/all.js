$(document).ready(function() {
    $('.btn_menu').on('click',  function(e){
       e.preventDefault();
       $('.nav').toggleClass('active');
   });
 });