// almacenar nombres
let amigos = [];

// agregar amigos
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = ""; // Limpiar campo
  actualizarLista(); // Actualizar lista en HTML
}

// actualizar la lista de amigos
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// sortear un amigo
function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No hay amigos para sortear.";
    resultado.appendChild(li);
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const li = document.createElement("li");
  li.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
  resultado.appendChild(li);
}
