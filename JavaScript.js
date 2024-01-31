const img = document.getElementById("img");


// fetch("https://api.giphy.com/v2/emoji?api_key=ifEY0JLh4RWc8T20UnwyzloArPRNeYdU&limit=10&offset=0")
// .then(function(response){
//   return response.json()
// })
// .then(function(response){
//   // console.log(response.data[0].images.original.url)
//   // img.setAttribute("src",response.data[0].images.original.url); //devuelve un array con varios elementos
//   console.log()
// })

// fetch('https://api.giphy.com/v1/gifs/translate?api_key=ifEY0JLh4RWc8T20UnwyzloArPRNeYdU&s=messi', {mode: 'cors'})
// .then(function(response){
//   return response.json()
// })
// .then(function(response){
//   img.setAttribute("src",response.data.images.original.url)
// })

function searchGyphy(event){
  event.preventDefault();
  let value = event.target.value.value;
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ifEY0JLh4RWc8T20UnwyzloArPRNeYdU&s=${value}`)
  .then(function(response){
    return response.json()
  })  
  .then(function(response){
    img.setAttribute("src",response.data.images.original.url)
  })
}