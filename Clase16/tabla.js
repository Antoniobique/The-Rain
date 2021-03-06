// Lista de planetas y sus imágenes
let planetas = [
    {nombre:"Mercurio", diametro:4879,imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1200px-Mercury_in_color_-_Prockter07_centered.jpg "},
    {nombre:"Venus", diametro:12104,imagen:"https://ichef.bbci.co.uk/news/640/cpsprodpb/CEAA/production/_114360925_jaxa-isas-akatsuki-project-team.jpg"},
    {nombre:"Tierra", diametro:12756,imagen:"https://dam.ngenespanol.com/wp-content/uploads/2019/05/Tierra-Espacio.png"},
    {nombre:"Marte", diametro:6792,imagen:"https://i.blogs.es/0585c9/marte8k/1366_2000.jpg "},
    {nombre:"Júpiter", diametro:142984,imagen:"https://www.ecestaticos.com/image/clipping/d0d127b5b80c69905e744d76a836d4c8/un-planeta-doble-que-no-se-ve-desde-la-edad-media-el-fenomeno-unico-de-jupiter-y-saturno.jpg"},
    {nombre:"Saturno", diametro:120536,imagen: "https://www.rcinet.ca/es/wp-content/uploads/sites/4/2020/12/saturno-635x357.jpg"},
    {nombre:"Urano", diametro:51118,imagen:"https://www.astrobio.net/images/galleryimages_images/Gallery_Image_8386.jpg"},
    {nombre:"Neptuno", diametro: 49528, imagen:"https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg"}
]
// Creo una variable que haga referencia a la tabla
// QuerySelector selecciona un elemento del html, usando los selectores de css.
let tabla = document.querySelector('#planetas')
// console.log(tabla)
function llenarTabla() {
// Voy a llenar la tabla añadiendo las filas necesarias
let contenidoTabla = '<tr><th>Nombre</th><th>Diámetro</th><th>Imagen</th></tr>'
for (planeta of planetas){
    contenidoTabla = contenidoTabla + `<tr><td>${planeta.nombre}</td><td>${planeta.diametro}</td>
    <td><img width="500px" src="${planeta.imagen}" alt=""></td></tr>`
}
// A la tabla le asigno el contenido que creamos
tabla.innerHTML = contenidoTabla;
}
// variable que corresponde al formulario
let form= document.querySelector("form");
function addPlanet(){
    console.log="Ahora voy a añadir un planeta con los siguientes datos";
    let nombreNuevo= document.querySelector("input[name=nombre]").value
    let diametroNuevo= parseFloat(document.querySelector("input[name=diametro]").value)
    let urlNuevo= document.querySelector("input[name=urlImagen]").value
    //con los datos ingresados por el ususario voy a añadir un planeta en la lista de planetas
    //crear planeta nuevo
    let planetaNuevo={nombre:nombreNuevo, diametro:diametroNuevo, imagen:urlNuevo}
    console.log(planetaNuevo)
    //añado a la lista
    planetas.push(planetaNuevo)
    //generar de nuevo la tabla
     llenarTabla();
    // hace que no se actualice la página
    return false;
}

form.onsubmit= addPlanet

// para borra un planeta
let formBorrar= document.querySelector("#formularioDelete")
function deletePlanet(){
    let nombrePlanetaABorrar= document.querySelector("#formularioDelete input[name=nombre]").value
    console.log=("Ahora voy a borrar un planeta");
    console.log(nombrePlanetaABorrar)

    // determinar la posición del elemento a borrar en el array
    let aBorrar= planetas.findIndex(planeta => planeta.nombre == nombrePlanetaABorrar)
    // si el elemento no existe  ostrarle un mensaje al ususario
    if(aBorrar==-1) alert("Planeta no encontrado")
    //borrar el elemneto en el array
    // en la posición aBorrar deseo borrar un elemento
    planetas.splice(aBorrar,1)
    //generar de nuevo la tabla
    llenarTabla();
    // hace que no se actualice la página
    return false;
}
formBorrar.onsubmit= deletePlanet;
llenarTabla()
