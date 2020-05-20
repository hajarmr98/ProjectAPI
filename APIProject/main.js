
const url = "https://breakingbadapi.com/api/characters"


fetch(url)
.then(datos => datos.json())
.then(data => {
    console.log(data)
})
.catch(error => console.log(error));