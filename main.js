function valor(){
    const personaje = document.querySelector('input').value

    if(isNaN(personaje)){
        alert("Valor no valido, introduce un nunmero entre 1 y 57")
    }

    else {
    let link = `https://www.breakingbadapi.com/api/characters/${personaje}`
    console.log(link)
 

    buscar(link)}
}

function buscar(link) {
fetch(link)
    .then(response => response.json())

    .then(data => {
        let caja = document.getElementById('caja')
            caja.innerHTML = `<h1><a href="#" id="ancla">${data[0].name}</a></h1>`;
        let ancla = document.getElementById('ancla')
        ancla.addEventListener('click', () => goToDetail(data))   
    })
}

function guardar_localstore(data) {
    let character = data
    localStorage.setItem("character",  JSON.stringify(character))
   
    
}

function goToDetail(data){
    
    guardar_localstore(data)
    
    event.preventDefault()
   
    window.location = "datos.html"
}


let personajeOk = JSON.parse(localStorage.getItem("character"))
console.log(personajeOk)
if(personajeOk !== null) {
    localStorage.removeItem("character")
    
fetch(`https://www.breakingbadapi.com/api/characters/${personajeOk[0].char_id}`)
.then(datos => datos.json())
.then(personajeOk => {

    caja2.innerHTML =`
    <img src='${personajeOk[0].img}' width=350px/>
    <p>Nombre: ${personajeOk[0].name}</p>
    <p>Apodo: ${personajeOk[0].nickname}</p>
    <p>temporadas en las que aparece: 
    ${personajeOk[0].appearance.map(x=> x)}
    </p>
    <p>Interpretado por: ${personajeOk[0].portrayed}</p>
    `

    console.log(personajeOk)
})
.catch(error => console.log(error));


}