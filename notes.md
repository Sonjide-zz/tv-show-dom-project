//You can edit ALL of the code here
/*

Level 100 - Minimal features:
All episodes must be shown    =    how ?
For each episode, AT LEAST following must be displayed:  forEach /// for loop
the episode's name            = 
the season number             =
the episode number            =
the episode's medium-sized image
the episode's summary text
You should combine season number and episode number into an episode code:
Each part should be zero-padded to two digits.
Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.
Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing.

************** read it line by line, what is each line doing exactly ****************
*/

function setup() {
  const allEpisodes = getAllEpisodes();// this takes the function getAllEpisodes and gives it a newVariable name allEpisodes
  makePageForEpisodes(allEpisodes);  // makePageForEpisodes is the name of the function below, it takes allEpisodes and passes it in as a parameter
  console.log(makePageForEpisodes(allEpisodes));
}


function makePageForEpisodes(episodeList) {   //this function will get all the elements from js episodes.js file
  const rootElem = document.getElementById("root");

/*
rootElem.textContent = `Got ${episodeList.length} episode(s)`;
*/

// let movieEpisodes = document.querySelectorAll();
// let image = document.querySelectorAll();
// let url = document.querySelectorAll();

let divEp = document.createElement("div");
let divImg = document.createElement("div");
let divPara = document.createElement("div");
let episodeTitle = document.createElement("h1");
let movieContent = document.createElement("p");
let movieImage = document.createElement("src");  //??? is this correct property name

//outer div - now has 3 divs for all the content
rootElem.appendChild(divEp);
rootElem.appendChild(divImg); 
rootElem.appendChild(divPara);

//parent divs have now appended to children - h1, img src, p elements
divEpisode.appendChild(episodeTitle);
divImage.appendChild(movieImage);
divParagraph.appendChild(movieContent);





}

-need a grey background - css
-div contains several divs to allow more control, setting a min-width, using css grid - 12/4 = 3md class
-construct one container with three divs
rootDiv holds all the divs, elements, movie info
divEpisodeName              - h1      - ${episode name + number} 
divImage                    - img   - url
divParagraph                - p       - paragraph

Q: How do I get the object.values into an array ?
.... from a function without a name?
Use repl.
forEach
 
https: //www.javascripttutorial.net/es6/javascript-template-literals/
https://www.youtube.com/watch?v=YsPqjYGauns&t=928s 

