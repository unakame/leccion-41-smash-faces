$(document).ready(function(){
  $('#cities').change(function(){
    var selectedOption = $('#cities option:selected');

    if(selectedOption.val() == "choiceLima"){
      var image = $("<img src='Materiales/peru/"+ peru[Math.floor(1+Math.random()*47)].image+"'>");
     $('.photoSpace').html(image)
    }else{
      var image =$("<img src='Materiales/mexico/"+mexico[Math.floor(1+Math.random()*36)].image+"'>");
      $('.photoSpace').html(image)
    }
  });

   /*$('#answer').val(function(){
     var respuesta = $('#answer');
      respuesta.preventDefault;
     if(respuesta == "li"){
       alert ("yey");
     }
   })*/
   $( "input" )
    .keyup(function() {
      var value = $( this ).val();
    if(value=="iiiii"){
      alert ("hola");
    }
    })
      .keyup();

});
