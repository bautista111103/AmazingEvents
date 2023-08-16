
var textSearch="";
var checkboxSelected = [];
var cartas = [];

async function datosApi(){
    await fetch("https://mindhub-xj03.onrender.com/api/amazing")
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
        //   console.log(checkboxSelected)
          
      }else{
          checkboxSelected = checkboxSelected.filter(uncheck => uncheck !== evento.target.value) 
          filtradocombinado()
        //   console.log(checkboxSelected)
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

function displaycardsevents(datos){
        var templateHtml = ""; 
        if(datos.length !== 0){
            for (var i = 0; i < datos.length; i++){
                templateHtml += `<div class="card">
                <div class="contenedor-img-js">
                    <img class="img-card-js" src="${datos[i].image}" alt="imagen">
                </div>
                <div class="card-body">
                     <h2 class="card-text"> ${datos[i].name}</h2>
                     <p class="card-text">Fecha:${datos[i].date}</p> 
                </div>
                <div class="parte-inferior-card">
                    <p>Price:$${datos[i].price}</p>
                    <a href="./description-of-images.html?id=${datos[i].id}" class="ver-mas">See more</a>
                </div>
             </div>
             `
        }
         document.querySelector('#carta').innerHTML = templateHtml
          }
          else{
            document.querySelector('#carta').innerHTML = `<p>Adjust the search, that event was not found</p>`
          }
       }