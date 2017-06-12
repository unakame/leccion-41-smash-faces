/*$(document).ready(function(){
  $("#cities").change(function() {
    var selectedOption = $('#cities option:selected');
    //choiceCities = $(this).val();
    if(selectedOption == "choiceLima"){
      alert("hola");
    }
    /*if(choiceCities == "choiceLima"){
       var image = $("<img src='assets/peru/AntonellaGutierrez.jpg'>")
      $(.'photoSpace').append("image");
    }
});
}*/

$(document).ready(function(){
  $('#cities').change(function(){
    var selectedOption = $('#cities option:selected');

    if(selectedOption.val() == "choiceLima"){
      var image = $("<img src='assets/peru/AntonellaGutierrez.jpg'>");
     $('.photoSpace').append(image)
    }else{
      alert("chau")
    }
  });
});
