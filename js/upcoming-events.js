var cartas = [];
var textSearch="";
var fechaActual = "2022-01-01";
var checkboxSelected = [];

async function datosApi(){
    await fetch("https://amazing-events.herokuapp.com/api/events")
    .then(response=>response.json())
    .then(json=>cartas=json)
    console.log(cartas.events)
    imprimircheckbox()
  
  var filtrarCheckbox = document.querySelectorAll("input[type=checkbox]");
  
  filtrarCheckbox.forEach(check => check.addEventListener("click", (evento) =>{
     let checked = evento.target.checked

      if(checked){
          checkboxSelected.push(evento.target.value)
          filtradocombinado()
          console.log(checkboxSelected)
          
      }else{
          checkboxSelected = checkboxSelected.filter(uncheck => uncheck !== evento.target.value) 
          filtradocombinado()
          console.log(checkboxSelected)
      }
    }))
    filtradocombinado()
}
         datosApi()
  
  function imprimircheckbox(){ 
  var guardarcategorias = "";
  var categoriascheck = cartas.events.map(evento => evento.category);
  const sinduplicados = new Set(categoriascheck);
  var arraysinduplicados = [...sinduplicados];
  
  arraysinduplicados.forEach(evento =>{
      guardarcategorias +=  
                            `
                             <fieldset>
                                <label>
                                   <input type="checkbox" name="category" value="${evento}">
                                   ${evento}
                                </label>
                             </fieldset>
                            ` 
    })
    document.getElementById("mis-checkbox").innerHTML=guardarcategorias;
    var id = 1
    cartas.events.map(evento =>evento.id = id++)
  }

  var buscar = document.getElementById("buscador")
  buscar.addEventListener("keyup",(evento)=> {
      textSearch = evento.target.value
      filtradocombinado()
  })
  
function filtradocombinado(){
    let datos = []
    if(checkboxSelected.length > 0 && textSearch != ""){
        checkboxSelected.map(selected => {
            datos.push(...cartas.events.filter(evento=> evento.name.toLowerCase().includes(textSearch.trim().toLowerCase())
            && evento.category == selected))
        })
    }
    else if(checkboxSelected.length > 0 && textSearch === ""){
        checkboxSelected.map(selected => datos.push(...cartas.events.filter(evento=>evento.category == selected)))
    }
    else if(checkboxSelected.length == 0 && textSearch !== "") {
      datos.push(...cartas.events.filter(selected => selected.name.toLowerCase().includes(textSearch.trim().toLowerCase())))
   }
    else{ datos.push(...cartas.events)} 
    
    displaycardsevents(datos)
    }
    datosApi()
function displaycardsevents(parametro){
    var templateHtml = ""; 
    if(parametro.length !== 0){
        for (var i = 0; i < parametro.length; i++) {
            if (parametro[i].date > fechaActual){  
                templateHtml += `<div class="card">
                <div class="contenedor-img-js">
                    <img class="img-card-js" src="${parametro[i].image}" alt="imagen">
                </div>
                <div class="card-body">
                     <h2 class="card-text"> ${parametro[i].name}</h2>
                     <p class="card-text">Fecha:${parametro[i].date}</p> 
                </div>
                <div class="parte-inferior-card">
                    <p>Price:$${parametro[i].price}</p>
                    <a href="../description-of-images.html?id=${parametro[i].id}" class="ver-mas">See more</a>
                </div>
             </div>
             `}
    }
     document.querySelector('#carta').innerHTML = templateHtml
      }
      else{
        document.querySelector('#carta').innerHTML = `<p>Adjust the search, that event was not found</p>`
      }
      }


  










// function displaycardsevents(){ 
//     var templateHtml = ""
//     var fechaActual="2022-01-01"
//     const card = document.querySelector("#carta")

//       for(i=0; i < data.eventos.length; i++){
//         if (data.eventos[i].date > data.fechaActual){
//             var data1 = data.eventos[i].date;
         
//         var cartaItem = document.createElement("card");


//       cartaItem.innerHTML = templateHtml += 
//                                             `<div class="card">
//                                                 <div class="contenedor-img-js">
//                                                     <img class="img-card-js" src="${data.eventos[i].image}" alt="imagen">
//                                                 </div>
//                                                 <div class="texto32">
//                                                      <h2 class="card-text"> ${data.eventos[i].name}</h2>
//                                                      <p class="card-text">Fecha:${data.eventos[i].date}</p> 
//                                                 </div>
//                                                 <div class="parte-inferior-card">
//                                                     <p class="card-text">Price:$${data.eventos[i].price}</p>
//                                                     <a href="./description-of-images.html" class="ver-mas">See more</a>
//                                                 </div>
//                                              </div>
//                                              `
//       card.appendChild(cartaItem);
//       card.classList.add("mis-cartas")
//      }
//     }
//     document.querySelector('#carta').innerHTML = templateHtml
// }
// displaycardsevents();