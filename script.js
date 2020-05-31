//You can edit ALL of the code here
/*
Level 100 - Minimal features:
All episodes must be shown   
For each episode, AT LEAST following must be displayed:  forEach /// for loop
the episode's name            
the season number             
the episode number            
the episode's medium-sized image
the episode's summary text
You should combine season number and episode number into an episode code:
Each part should be zero-padded to two digits.
Example: S02E07 would be the code for the 7th episode of the 2nd season. S2E7 would be incorrect.
Your page should state somewhere that the data has (originally) come from TVMaze.com, and link back to that site (or the specific episode on that site). See tvmaze.com/api#licensing.
************** read it line by line, what is each line doing exactly ****************
*/

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  //this find the id that equal root which empty div in index.html
  const rootElem = document.getElementById("root");

  //attach a div with class of flex-container to the child of the root element
  const containerElm = document.createElement("div");
  //the parent "container" refers to grid.css container
  containerElm.classList.add("container");
  rootElem.appendChild(containerElm);
  //then append another div called "row" from the grid.css which will use flex-box to display the tv-cards either in a row/column div
  const rowElm = document.createElement("div");
  rowElm.classList.add("row");
  containerElm.appendChild(rowElm);

  episodeList.forEach((episode) => {
    //console.log(episode);

    //concatinate title - S01E01 - using interpolation
    const epiSeasonNumber = `${episode.name} - S0${episode.season}E0${episode.number}`;
    console.log(epiSeasonNumber);

    const image = episode.image.medium;
    console.log(image);

    //episode summary - remove all the <p></p> tags inside the text using regex snippet
    //source - https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
    const summary = episode.summary.replace(/(<([^>]+)>)/gi, "");
    console.log(summary);

    const template = `<div class="col-12 sm-col-6 md-col-4 lg-col-3">
    <div class="episodeDiv">
                <div class="episodeTitle">
                    <h5>${epiSeasonNumber}</h5>
                </div>
                <div class="imageUrl">
                    <img src=${image}>
                </div>
                <div class="summary">
                    <p>${summary}</p>
                </div>
            </div> 
            </div>`;

    //then we are going to use the row element instead of the root element
    //rootElem.innerHTML = template;
    rowElm.innerHTML = rowElm.innerHTML + template;
    //console.log(rowElm.innerHTML);
    //innerHTML -  https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML
  });
}

window.onload = setup;

//grid.css
//grid.css important note - 4 level of div construction for your content
// 1st div - outer container
// 2nd div - flex-box row
// 3rd div - column-width div - this is where you decide how many tv-shows you can see on the screen
// div - for all the contents - this is where you put all the content of the tv-show
// see example https://codepen.io/sonjide/pen/jObjMZg - if you remove each layer you will find that the content will be modified or not look as you intended

// now fix styling for the div so they are 4 in a row - this is now solved
// look at how to use.filter to filter episodes
// outcome of second task is to only show the episodes which have the word“ game” in the name(or series)
