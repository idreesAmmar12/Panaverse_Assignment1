function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
;
var album1 = make_album("Eminem", "Kamikaze");
var album2 = make_album("Atif Aslam", "Doori", 12);
var album3 = make_album("Easy-E", "Random", 23);
console.log(album1);
console.log(album2);
console.log(album3);
