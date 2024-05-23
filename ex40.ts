/*Question:40
Album: write a function called maake_album with object*/



// Make function with parameter

function make_album(artist_name:string,album_title:string,tracks?: number){
    let album:{ artist:string,
               title: string,
               tracks?:number}=
{
        artist:artist_name,
        title:album_title
    }
    if(tracks !== undefined){
        album.tracks=tracks
    }
    return album;
}
// calling three functions with different values
// cearte it in variable
let album1=make_album("Atif Aslam","Album title 1");

let album2=make_album("Rahat","Album title 2");

let album3=make_album("Arijit","album title 3",10);

// print the value of o bject
console.log(album1);
console.log(album2);
console.log(album3);