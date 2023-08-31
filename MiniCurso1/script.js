let cards = document.getElementsByClassName("card");
let audio = document.getElementById("audio-song");
let textSongClicked = document.querySelector(".text-song-clicked");

const classCardClicked = "card-clicked";
const classCardClickedSongName = "card-clicked-song-name";

textSongClicked.innerHTML = "Voce não esta escultando :(";

for (let card of cards) {
    card.addEventListener("click", function () {
        let { song_path_name } = card.dataset;

        let cardSongName = card.getElementsByTagName("p")[0];
        let cardAuthorName = card.getElementsByTagName("p")[1];

        let cardIsClicked = card.classList.contains(classCardClicked);

        // console.log(song_path_name);

        cardRemoveClass(classCardClicked);

        if (!cardIsClicked) {
            //Nao esta Clicado
            card.classList.add(classCardClicked);
            cardSongName.classList.add(classCardClickedSongName);

            let text = `Voce esta escutando:
                <p class="text-card-clicked-song-name">
                ${cardSongName.innerHTML}
                </p>
                <p class="text-card-clicked-author-name">
                ${cardAuthorName.innerHTML}
                </p>`;

            textSongClicked.innerHTML = text;
            textSongClicked.classList.add("text-card-clicked");
            textSongClicked.classList.remove("no-text-card-clicked");
            playSong(song_path_name);
        } else {
            card.classList.remove(classCardClicked);
            textSongClicked.innerHTML = "Voce não esta escultando :(";
            textSongClicked.classList.add("no-text-card-clicked");
            playSong(null, false);
        }
    });
    function playSong(songName, play = true) {
        if (play) {
            audio.src = `./songs/${songName}.mp3`;
            audio.play();
        } else {
            audio.src = "";
        }
    }

}

function cardRemoveClass(className) {
    for (let card of cards) {
        card.classList.remove(className);
        let cardSongName = card.getElementsByTagName("p")[0];
        cardSongName.classList.remove(classCardClickedSongName);
    }
}


