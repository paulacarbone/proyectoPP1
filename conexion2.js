Access-Control-Allow-Origin

const listadoImg=document.querySelector("#listImagenes");
const input=document.querySelector("#buscador");
console.log(input.value);

async function buscarImagenes(){
    //const url=`https://thesimpsonsquoteapi.glitch.me/quotes?count=${input.value}`;
    const url=`https://superheroapi.com/api/10158830644866950/character-id/1`;
    const data=await fetch(url);
    console.log(data);
    const response=await data.json();
    console.log(response);
    const lista=response;
    console.log(lista);
    lista.forEach(element => {
        let div=document.createElement("div");
        div.innerHTML=` <h1>${element.character}</h1> 
                        <img  src=${element.image}></img>
                        </a>`
        let button = document.createElement("button");
        button.addEventListener("onClick", function(){
        });

        div.appendChild(button);
        listadoImg.appendChild(div);

    });
}


