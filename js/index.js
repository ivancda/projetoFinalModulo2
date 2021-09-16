let requisicao = []
const filme = ['tt1853728', "tt0361748", "tt0137523", "tt3460252", "tt0110912", "tt0266697", "tt1028528", "tt0119396", "tt0113101", "tt0112740", "tt1077258", "tt0105236"]
let teste = $('#gridM7')


for (let i = 0; i < filme.length; i++) {

  $.ajax({
    url: `http://www.omdbapi.com/?i=${filme[i]}&apikey=875516c3`,
    success: function (response) {
      let obj = response
      $(`.movieCard`)[i].innerHTML+=`<div><img data-bs-toggle="modal" data-bs-target="#staticBackdrop" data-title="${response.Title}" data-plot="${response.Plot}"  class="movie" src="${response.Poster}"></div>`
      requisicao.push(obj)
    }
  });

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





