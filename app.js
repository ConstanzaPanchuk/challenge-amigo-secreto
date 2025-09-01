let listaAmigos = [];

//Función que ingresa a la lista los amigos agregados y verifica que no existan valores vacios
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo === "") {
    alert("Por favor, inserte un nombre");
  } else {
    listaAmigos.push(amigo);
    document.getElementById("amigo").value = "";
    //console.log(listaAmigos);
    mostrarListaAmigos();
  }
  return;
}

//Función que muestra la lista de amigos
function mostrarListaAmigos() {
  //obtengo el elemento lista de html y la vacio
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  //Recorro la lista y creo un elemento li para cada amigo de la lista
  for (let i = 0; i < listaAmigos.length; i++) {
    const amigo = listaAmigos[i];
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  }
  return;
}

//Función para sortear un amigo de la lista
function sortearAmigo() {
  //verificamos que la lista no este vacia
  if (listaAmigos.length === 0) {
    alert("No hay amigos ingresados para sortear");
    return;
  }

  //creo una variable que genera una posición random de la lista
  let amigoAleatorio = Math.floor(Math.random() * listaAmigos.length);

  //creo una variable que me da un nombre de la lista según la posición aleatoria de la función amigoAleatorio
  let amigoSorteado = listaAmigos[amigoAleatorio];

  //Muestro en pantalla el resultado del amigo sorteado
  document.getElementById(
    "resultado"
  ).innerHTML = `El amigo secreto es ${amigoSorteado}`;
}
