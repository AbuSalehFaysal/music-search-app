// const searchMusic = async() => {
//     const searchMusicValue = document.getElementById("search").value;
//     // console.log(searchMusicValue);
//     const url = `https://api.lyrics.ovh/suggest/${searchMusicValue}`;
//     // console.log(url);
//     const res = await fetch(url)
//     const data = await res.json()
//     displayMusic(data.data);
// }

const searchMusic = () => {
    const searchMusicValue = document.getElementById("search").value;
    // console.log(searchMusicValue);
    const url = `https://api.lyrics.ovh/suggest/${searchMusicValue}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayMusic(data.data);
        })
        .catch(error => console.log(error));

}

const displayMusic = musics => {
    // console.log(musics);\
    const musicContainer = document.getElementById("musicContainer");
    musicContainer.innerHTML = "";
    musics.forEach(music => {
        const musicdiv = document.createElement("div");
        // li.innerText = music.title;
        // musicContainer.appendChild(li);
        musicdiv.className = "single-result row align-items-center my-3 p-3"
        musicdiv.innerHTML = `
        <div class="col-md-9">
            <h3 class="lyrics-name">${music.title}</h3>
            <p class="author lead">Album by <span>${music.artist.name}</span></p>
            <audio controls>
                <source src="${music.preview}" type="audio/ogg">
            </audio>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getlyrics('${music.artist.name}', '${music.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        `
        musicContainer.appendChild(musicdiv);
        const lyricsDiv = document.getElementById("musicLyrics");
        lyricsDiv.innerText = "";
    });
}

// const getlyrics = (artist, title) => {
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
//     // console.log(url);
//     fetch(url)
//     .then(res => res.json())
//     .then (data => {
//         displayLyrics(data.lyrics);
//     })
// }

const getlyrics = async (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    // console.log(url);
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayLyrics(data.lyrics);
    } catch (error) {
        console.log(error);
    }
}

const displayLyrics = lyrics => {
    const lyricsDiv = document.getElementById("musicLyrics");
    lyricsDiv.innerText = lyrics;
}