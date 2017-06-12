$(document).ready(function(){

  $(".cities").change(function() {
    choiceCities = $(this).val();

    if(choiceCities == "choiceLima"){
      $(.'photoSpace').html('<img src="assets/peru/JoselynInga.JPG">')
    }
});
