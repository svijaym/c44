// Use Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
// link https://masai-mock-api.herokuapp.com/news/top-headlines?country=
import { navbar} from "../components/navbar.js";
let nr = document.getElementById('navbar');
nr.innerHTML = navbar();

 async function showrin()
{
    try{
        const res = await fetch('https://masai-mock-api.herokuapp.com/news/top-headlines?country=in')

        const data = await res.jason();

        appendnews()

    }
    catch(err){
        console.log(err);
    }
};
// const url = 'https://masai-mock-api.herokuapp.com/news/top-headlines?country=in'
// fetch(url)
// .then(function(res){
//     return res.jason();
// })
// .then(function(res){
//     appendnews(res.data)
// })
// .catch(function(err){
// console.log(err);
// });

function appendnews(data)
{
    data.forEach(function(el){

        let imgdiv = document.createElement('div');

        let box = document.createElement('div'); 

        let img = document.createElement('img');
        img.src = el.urlToImage;

        let heading = document.createElement('h3');
        heading.innerText = el.title;

        let description = document.createElement('p');
        description.innerText = el.description;

        imgdiv.append(img);
        box.append(heading,description);
        document.getElementById("results").append(imgdiv,box);

    });
}
