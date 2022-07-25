const form = document.querySelector("form")

form.addEventListener("submit" , function(e){
    e.preventDefault() 
    let urlform = " https://pokeapi.co/api/v2/pokemon/" 
    let name = document.getElementById("name")
    
    urlform = urlform + this.name.value
    urlform = urlform.toLocaleLowerCase()

    const answer = document.getElementById("content")
    const image = document.getElementById("ImgPokemon")

   
    let html = ""

    fetch(urlform)
        .then(answer => answer.json())
        .then(function(data){
            console.log(data)
            html = `Name:${maiusc(data.name)}<br>`
            html = html + `Type:${maiusc(data.types[0].type.name)}`
            answer.innerHTML = html
            image.innerHTML = "<img src ='"+ data.sprites.front_default + "'> <img src ='"+ data.sprites.back_default +"'>"
        })
        .catch(function(err){
            if(err = "SyntaxError: Unexpected token N in JSON at position 0"){
                html = "pokemon not found!"
                image.innerHTML =""
            }else {
                html = "erro:"+ err
            }
            answer.innerHTML = html
        })

});

function maiusc(val){
return val[0].toUpperCase() + val.substr(1)
}

