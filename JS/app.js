//Formos submit 
// filmu fetch
// document.querySelector('form').addEventListener('submit', (e)=>{
//     e.preventDefault();
//     fetch(`https://www.omdbapi.com/?t=${document.querySelector('input').value}&apikey=18c1a865`)
//         .then((response)=>data=response.json())
//         .then((data)=>{
//             console.log(data)
//             if(data.Title){
//                 showMovie(data);
//             }
//             else{
//                 showError(data);
//             }
//         })
// })
// const showMovie = (data)=>{
//     document.querySelector('.title').textContent=data.Title;
//             document.querySelector('.time').textContent=data.Runtime;
//             document.querySelector('.director').textContent=data.Director;
//             document.querySelector(".year").textContent=data.Year;
//             document.querySelector(".imdb").textContent=data.imdbRating;
//             document.querySelector(".other").textContent=data.Plot;
//             document.querySelector('.poster img').src=data.Poster
// }
// const showError = (data)=>{
//     document.querySelector(".table").style.display="None";
//     document.querySelector(".alert").style.display="Block";
//     document.querySelector('.alert').textContent=data.Error;
// }

// fetch vietoves
// let places = document.getElementById(places).appendChild(document.createElement('option'));
document.querySelector('.places').addEventListener('click', (e)=>{
    e.preventDefault();
    fetch(`https://api.meteo.lt/v1/places`)
        .then((response)=>data=response.json())
        .then((data)=>{
        // console.log(data)
        let datalist = document.querySelector('#places');
        for(let stotis of data){
            console.log(stotis.name);
            let places = document.createElement('option')
            places.value = stotis.name;
            places.textContent = stotis.name + " " + stotis.administrativeDivision;
            datalist.appendChild(places)
        }
    })
})
