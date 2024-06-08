 // Aquí tu código

 const boton = document.getElementById("agregar");
 const lista = document.getElementById("lista");
 

 

 boton.addEventListener("click", function () {
    let input = prompt("introduce un nuevo elemento: ");
    let newElement = document.createElement("li");
    lista.append(newElement);
    newElement.innerHTML = input;
    
    
})