// Question 40
function make_album(ArtistName, AlbumTitle) {
    return { ArtistName: ArtistName, AlbumTitle: AlbumTitle };
}
var Album1 = make_album("Ali", "Rang -e- Muhabbat");
var Album2 = make_album("Madad", "Roshan Andhera");
var Album3 = make_album("Ayaz", "Mausam-e-Dil");
console.log(Album1);
console.log(Album2);
console.log(Album3);
// Number of trackes
function make_album2(ArtistName, AlbumName, numberOftracks) {
    return { ArtistName: ArtistName, AlbumName: AlbumName, numberOftracks: numberOftracks };
}
var Album4 = make_album2("Ali", "Dil hai", 30);
var Album5 = make_album2("Madad", "ajeeb kahani", 55);
var Album6 = make_album2("Atif Aslam", "main agar", 10);
console.log(Album4);
console.log(Album5);
console.log(Album6);
