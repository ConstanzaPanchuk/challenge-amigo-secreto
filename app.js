let listaAmigos = [];


//Función que ingresa a la lista los amigos agregados y verifica que no existan valores vacios
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo === "") {
        alert ("Por favor, inserte un nombre");
    } else {
        listaAmigos.push(amigo);
        document.getElementById('amigo').value = "";
        console.log(listaAmigos);
        mostrarListaAmigos();
    }
}

//Función que muestra la lista de amigos 
function mostrarListaAmigos (){
    //obtengo el elemento lista de html y la vacio
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    //Recorro la lista y creo un elemento li para cada amigo de la lista 
    for (let i = 0; i < listaAmigos.length; i++) {
        const amigo = listaAmigos[i];
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}


