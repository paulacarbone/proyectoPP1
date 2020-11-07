const listadoImg=document.querySelector("#listImagenes");
const input=document.querySelector("#buscador");
console.log(input.value);

async function buscarImagenes(){
    const url=`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=89d3dbb59427a0bf0af2f0edb644b387;`;
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


