let busca = document.getElementById('pesquisa');
let resultados = document.getElementById('resultado');
let tituloBusca = document.getElementById('titulo');
let resultadosBusca = document.getElementById('resultadosBusca')

busca.addEventListener('input', ()=>{
    tituloBusca.innerHTML = `Você pesquisou por: ${busca.value}`;
    tituloBusca.style.display = "flex";
    if(pesquisa.value == ''){
      tituloBusca.style.display = "none";
    }
    else{
      pegaFilme(busca.value)
    }     
})

async function pegaFilme (filme){
    let url = `https://www.omdbapi.com/?s='${filme}'&apikey=875516c3`;
    await fetch(url).then( resul => resul.json()).then(data =>{
       if(data.Search != undefined){
        resultadosBusca.innerHTML = criaFilmes(data.Search);     
       }
    })
}

function criaFilmes(array){
    var html = ''
    array.forEach(el => {
        let tipo = el.Type.toUpperCase() 
        let ano = el.Year
        let tit = el.Title
        console.log(el)
        html += `<div class="filmesLista" id=${el.imdbID}> <img src=${el.Poster} id=${el.imdbID} data-title="${tit}"  data-plot="${ano}" class="movie"> <h3>${el.Title}</h3> <div class="infos"><p>${tipo}</p> <p>${ano}</p></div>  </div>`
    })
    return html
}

document.addEventListener('click', function(event){
  if(event.target.className=="movie"){
    let nome_filme=event.target.getAttribute('data-title');
    document.querySelector('.tMod').innerText = nome_filme;
    let descricao_filme=event.target.getAttribute('data-plot');
    document.querySelector('.descr').innerText = descricao_filme;
    document.querySelector('.modall').style.display = "flex"
    document.querySelector('#imgMod').src = event.target.src
  }
})

document.querySelector('.closeBtn').addEventListener('click', function(){
  document.querySelector('.modall').style.display = "none"
})
