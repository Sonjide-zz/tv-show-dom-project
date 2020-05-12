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

const rootElem = document.getElementById("root");

const template = `<div class="episode col-4">
                <div class="episodeTitle">
                    <h5>Winter is Coming - S01E01</h5>
                </div>
                <div class="imageUrl">
                    <img src="image">
                </div>
                <div class="summery">
                    <p>summery</p>
                </div>
            </div>`;

function setup() {
    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {

    episodeList.forEach(episode => {
        console.log(episode);

        //concatinate title - S01E01
        let epiSeasonNumber = `${episode.name} - 0S${episode.season}E0${episode.number }`;
        console.log(epiSeasonNumber);

        let image = episode.image.medium;
        console.log(image);

        //episode summary - remove all the <p></p> tags inside the text
        //source - https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
        let summary = episode.summary.replace(/(<([^>]+)>)/ig, "");
        console.log(summary);

    });

};


window.onload = setup;