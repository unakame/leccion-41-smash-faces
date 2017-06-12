$(document).ready(function(){

  $(".cities").change(function() {
    choiceCities = $(this).val();

    if(choiceCities == "choiceLima"){
       var image = $("<img src='assets/peru/AntonellaGutierrez.jpg'>")
      $(.'photoSpace').append("image");
    }
});
