// Question 40

function make_album(ArtistName: string, AlbumTitle: string){
    return { ArtistName, AlbumTitle}  
}
let Album1 = make_album ("Ali","Rang -e- Muhabbat");
let Album2 = make_album ("Madad","Roshan Andhera");
let Album3 = make_album ("Ayaz","Mausam-e-Dil");

console.log(Album1);
console.log(Album2);
console.log(Album3);

// Number of trackes

function make_album2 (ArtistName: string, AlbumName: string,numberOftracks: number){
    return { ArtistName, AlbumName,numberOftracks}
}

let Album4 = make_album2 ("Ali","Dil hai",30);
let Album5 = make_album2 ("Madad","ajeeb kahani",55)
let Album6 = make_album2 ("Atif Aslam","main agar",10)

console.log(Album4);
console.log(Album5);
console.log(Album6);

