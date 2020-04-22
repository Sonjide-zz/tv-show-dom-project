//You can edit ALL of the code here
/*

*/

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;


let divEpisode = document.createElement("div");
let divImage = document.createElement("div");
let divParagraph = document.createElement("div");
let episodeTitle = document.createElement("h1");
let movieContent = document.createElement("p");
let movieImage = document.createElement("src");  //??? is this correct property name

//outer div - now has 3 divs for all the content
rootElem.appendChild(divEpisode);
rootElem.appendChild(divImage); 
rootElem.appendChild(divParagraph);

//parent divs have now childappended - h1, img src, p elements
divEpisode.appendChild(episodeTitle);
divImage.appendChild(movieImage);
divParagraph.appendChild(movieContent);


h1Elm.innerText = makePageForEpisodes(episodeList); 
console.log(makePageForEpisodes(episodeList));




}

/*
construct one container with three divs
div1 - holds all divs
divEpisodeName - h1
divImage - src
divParagraph - p

*/ 






window.onload = setup;
/*need a grey background - css
div contains several divs following
- <h1> episode info, 
- src = image 
- p tag movie info
*/


