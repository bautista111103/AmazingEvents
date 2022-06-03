var cartas = [];
let templateHtml = "";

async function datosApi(){
    await fetch("https://amazing-events.herokuapp.com/api/events")
    .then(response=>response.json())
    .then(json=>cartas=json)

    var idEvento = 1;
    cartas.events.map(evento =>evento.id = idEvento++)
    var id = location.search.split("?id=").filter(Number)
    // console.log(location)
    // console.log(location.search)
    // console.log(id)
    var selectedId = Number(id[0])
    // console.log(selectedId)
    var event =cartas.events.find((event) =>{
        return event.id == selectedId
    })
     
    templateHtml += `<div class="card-detalles">
                               <div class="contenedor-img-detalles">
                                   <img class="img-detalles" src="${event.image}" alt="imagen">
                               </div>
                               <div class="descripcion-detalles">
                                     <div class="card-body-detalles">
                                         <div class="titulo-card-detalles">
                                            <h2 class="texto-detalles"> ${event.name}</h2>
                                         </div>
                                            <p class="texto-detalles">DESCRIPTION:${event.description}</p>
                                            <p class="texto-detalles">PLACE:${event.place}</p> 
                                            <p class="texto-detalles">CAPACITY:${event.capacity}</p>
                                            <p class="texto-detalles">ASSISTANCE:${event.assistance}</p>
                                            <p class="texto-detalles">PRICE:$${event.price}</p>
                                       </div>
                                </div>
                     </div>
                    `   
             document.querySelector('#carta').innerHTML = templateHtml}
             datosApi()
