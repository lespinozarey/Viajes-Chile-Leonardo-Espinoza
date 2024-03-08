//EVENTO CLICK//

$(function(){
    $(".boton").click(function (){
    alert('El correo fue enviado correctamente');
});
})

//SELECTORES DE CLASE//

$(function(){
    $(".card-text").click(function (){
        $(".list-group-item").toggle("slow");
});
})