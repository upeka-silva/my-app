$(document).ready(function (){

 const slidData= $('.slid')
 let pointer = 0;
 


 function viewSlid(){


     slidData.removeClass('active');
     slidData.eq(pointer).addClass('active');

    // slidData.fadeOut(2000);
    // slidData.eq(pointer).fadeIn(2000);


 }


  function next(){

      pointer++;

      if(pointer>=slidData.length ){

        pointer = 0;
      }


       viewSlid();
  }


  setInterval(next,3000);


})








