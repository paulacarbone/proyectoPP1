const listadoImg=document.querySelector("#listImagenes");
const input=document.querySelector("#buscador");
console.log(input.value);

async function buscarImagenes(){
   // const key="18467844-755bb86481e5df0833ad9f142";
    const url=`https://thesimpsonsquoteapi.glitch.me/quotes?count=${input.value}`;
    const data=await fetch(url);
    console.log(data);
    const response=await data.json();
    console.log(response);
    const lista=response;
    console.log(lista);
    lista.forEach(element => {
        let div=document.createElement("div");
        div.innerHTML=`
        <img  src=${element.image} class="card-img-top"></img>
        <div class="card-body">
		  <h5 class="card-title">${element.character}</h5>
		  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		  <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </a>
        `
        listadoImg.appendChild(div);

    });
}


