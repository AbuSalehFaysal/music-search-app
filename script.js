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
}

const displayMusic = musics => {
    // console.log(musics);\
    const musicContainer = document.getElementById("musicContainer");
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
    });
}

const getlyrics = (artist, title) => {
    console.log(artist, title);
}