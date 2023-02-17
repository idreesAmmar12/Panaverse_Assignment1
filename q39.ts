function make_album(artist:string, title:string, tracks?:number) {
    const album = {
        artist,
        title,
        tracks
    };

    if (tracks) {
        album.tracks = tracks;
    }
    return album;
};

const album1 = make_album("Eminem", "Kamikaze");
const album2 = make_album("Atif Aslam", "Doori",12);
const album3 = make_album("Easy-E", "Random",23);

console.log(album1);
console.log(album2);
console.log(album3);