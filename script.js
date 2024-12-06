/*LIST CARDS*/
const listadoCartas = [
    {
        
        id: 1,
        nombre: "mi  amor",
        imagen: "./imagenes/jime1.jpeg",
        descripcion: "TOP 1:te amo ",
        url:"https://youtu.be/aFOxVm3Z9x8"
    },
    
    {
        id: 2,
        nombre: "bella",
        imagen: "./imagenes/jime3.jpg",
        descripcion: "TOP 3:te amo ",
        url:"https://youtu.be/3z4xVMDBduE"
    },
    
    {
        id: 3,
        nombre: "jimena",
        imagen: "./imagenes/jime6.jpg",
        descripcion: "TOP 6: te amo' ",
        url:"https://youtu.be/aGR8_tTaWqg"
    },
    {
        id: 4,
        nombre: "mireina",
        imagen: "./imagenes/jime7.jpg",
        descripcion: "TOP 7: te amo ",
        url:"https://youtu.be/aGR8_tTaWqg"
    },
    {
        id: 5,
        nombre: "la mejor",
        imagen: "./imagenes/jime8.jpg",
        descripcion: "TOP 8: te amo ",
        url:"https://youtu.be/aGR8_tTaWqg"
    },
]
/* Selección de los NODOS HTML (etiquetas/elementos html)*/
const contenedorCartas = document.querySelector(".listadoCartas")
/* Función que recorre el listado de las cartas */
listadoCartas.forEach(
    (carta) => contenedorCartas.innerHTML += `
    <article class="card">
        <a href=${carta.url}>
            <img src=${carta.imagen} alt="Imagen del proyecto">
        </a>
        <div class="info">
            <h2>${carta.nombre}</h2>
            <p>${carta.descripcion}</p>
        </div>
    </article>`
)



