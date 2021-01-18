var textopalabras= document.querySelector("#palabras")
var numeropalabras=document.querySelector("#contador")


textopalabras.oninput=function(){
    var cantidad=textopalabras.value.length;
    numeropalabras.innerHTML=cantidad
    
}

    



