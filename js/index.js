let requisicao = []
const filme = ['tt1853728', "tt0361748", "tt4010884", "tt3460252", "tt0110912", "tt0266697", "tt1028528", "tt0119396", "tt0113101", "tt0112740", "tt1077258", "tt0105236"]

for (let i = 0; i < filme.length; i++) {

  $.ajax({
    url: `http://www.omdbapi.com/?i=${filme[i]}&apikey=875516c3`,
    success: function (response) {
      let obj = response
      requisicao.push(obj)
    }
  });

}







