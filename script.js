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


    //this find the id that equal root which empty div in html
    const rootElem = document.getElementById("root");

    episodeList.forEach(episode => {
        //console.log(episode);

        //concatinate title - S01E01 - using interpolation
        const epiSeasonNumber = `${episode.name} - S0${episode.season}E0${episode.number }`;
        console.log(epiSeasonNumber);

        const image = episode.image.medium;
        console.log(image);

        //episode summary - remove all the <p></p> tags inside the text using regex snippet
        //source - https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
        const summary = episode.summary.replace(/(<([^>]+)>)/ig, "");
        console.log(summary);

        const template = `<div class="episode col-4">
                <div class="episodeTitleAndSeason">
                    <h5>${epiSeasonNumber}</h5>
                </div>
                <div class="imageUrl">
                    <img src=${image}>
                </div>
                <div class="summary">
                    <p>${summary}</p>
                </div>
            </div>`;

        //innerHTML   https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML
        rootElem.innerHTML = rootElem.innerHTML + template;
        //console.log(rootElem.innerHTML);
    });
};


window.onload = setup;

// now fix styling for the div so they are 3 in a row
// look at how to use.filter to filter episodes
// outcome of second task is to only show the episodes which have the word“ game” in the name(or series)