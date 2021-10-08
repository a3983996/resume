$(document).ready(function(){
    $('.list').on('click',function(e){
        e.preventDefault();
        $('body').toggleClass('menu-show');
    });
});

$(document).ready(function(){
    $('input[type=checkbox]').click(function(){
        $('.cartnum').text($('input[type=checkbox]:checked').length);
        if($(this).attr('checked')){
            $("."+this.id).attr("src","image/like_w.png")
        }else{
            $("."+this.id).attr("src","image/heart_w.png")
        }
    });

});


  
// $(document).ready(function(){
//   $('.list').on('click',function(e){
//       $('body').addClass('.menu-show');
//   });
// });

// $(document).ready(function(){
//   $('.list').click(function(e){
//       $('body').removeClass('.menu-show');
//   });
// });
