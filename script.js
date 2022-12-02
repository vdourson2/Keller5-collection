const collection = [
    {
        name : "Ashes in the Snow",
        group : "Mono",
        album : "Hymn to the Immortal Wind - 2009",
        style : [
            "neoclassical",
            "post rock",
        ],
        picture : "./assets/mono2.jpg",
        lien :"https://open.spotify.com/track/6ieH021IWLGOGifX0FUzsM",
    },
    {
        name : "Lonely Day",
        group : "System Of A down",
        album : "Hypnotize - 2005",
        style : [
            "heavy metal",
            "hard rock",
        ],
        picture : "./assets/lonely_day.png",
        lien :"https://open.spotify.com/track/1VNWaY3uNfoeWqb5U8x2QX",
    },
    {
        name : "Quand je marche",
        group : "Ben Mazué",
        album : "Paradis - 2020",
        style : [
            "Chanson française",
        ],
        picture : "./assets/mazue.jpg",
        lien :"https://open.spotify.com/album/6GTWw6zDBUcYagcL36pknb",
    },
    {
        name : "You Don't Know",
        group : "Milow",
        album : "Milow - 2009",
        style : [
            "Acoustic",
            "Pop rock",
        ],
        picture : "./assets/milow.jpg",
        lien :"https://open.spotify.com/track/6dMQuOXNGWXlSXesJvfUgd",
    },
    {
        name : "Verona",
        group : "Muse",
        album : "Will of the people - 2022",
        style : [
            "Alternative Rock",
        ],
        picture : "./assets/muse.jpg",
        lien :"https://open.spotify.com/track/35E8of4u0B5PI8o4Hy0tWq",
    },
    {
        name : "A Letter To Elise",
        group : "The Cure",
        album : "Wish - 1992",
        style : [
           "Alternative Rock",
           "New Wave",
           "Pop Rock",
        ],
        picture : "./assets/cure.jpg",
        lien : "https://open.spotify.com/track/4MvfmPViTS2nNe4GevK62r",
    },
    {
        name : "Guinea Pig",
        group : "Girls in Hawai",
        album : "Nocturne - 2017",
        style : [
            "Ballad",
        ],
        picture : "./assets/girls_in_hawai.jpg",
        lien :"https://open.spotify.com/track/3SfAHUPkjCLTwi23IbyLXA",
    },
    {
        name : "Mirror",
        group : "Loic Nottet",
        album : "Selfocracy - 2017",
        style : [
            "Indie Pop",
        ],
        picture : "./assets/nottet.jpg",
        lien :"https://open.spotify.com/track/60d7tazuuyrx3FiU30eRja",
    },
    {
        name : "Easy Come Easy Go",
        group : "Alice On The Roof",
        album : "Higher - 2016",
        style : [
            "Synth-pop",
        ],
        picture : "./assets/alice.jpg",
        lien :"https://open.spotify.com/album/4PDJk3Rk0ESXWGsHsAs5zm",
    },
    {
        name : "Conjouring",
        group : "IAMDDB",
        album : "Hoodrich Vol.3 - 2017",
        style : [
            "Trap",
        ],
        picture : "./assets/iamddb.jpg",
        lien :"https://open.spotify.com/track/2STP1Ow0iAeiSglnQmhWnP",
    },
];

console.log(collection);

for (let i=0;i<collection.length;i++){
    
    //création de la balise div, et ajout du noeu à l'arbre
    let racine = document.querySelector("main");
    let divGenerale = document.createElement("div");
    racine.appendChild(divGenerale);
    
    //création de la balise img et de son attribut src, et ajout du noeud à l'arbre
    let image = document.createElement("img");
    image.src = collection[i].picture;
    image.alt = "Couverture chanson"
    divGenerale.appendChild(image);

    //création de la balise div, et ajout du noeud à l'arbre
    let divIntérieure = document.createElement("div");
    divGenerale.appendChild(divIntérieure);

    //création de la balise ul et de ses éléments, et ajout des noeuds à l'arbre
    let liste = document.createElement("ul");
    divIntérieure.appendChild(liste)
    for (let j=0;j<collection[i].style.length;j++){
        let elem = document.createElement("li");
        let st = document.createTextNode(collection[i].style[j]);
        elem.appendChild(st);
        liste.appendChild(elem);
    }
    //création de la balise h2, de son texte, et ajout des 2 noeuds à l'arbre
    let song = document.createElement("h2");
    let textSong = document.createTextNode(collection[i].name);
    song.appendChild(textSong);
    divIntérieure.appendChild(song);
   
    //création de la balise h3, de son texte, et ajout des 2 noeuds à l'arbre
    let group = document.createElement("h3");
    let textGroup = document.createTextNode(collection[i].group);
    group.appendChild(textGroup);
    divIntérieure.appendChild(group);
   
    //création de la première balise p, de son texte, et ajout des 2 noeuds à l'arbre
    let album =document.createElement("p");
    let textAlbum = document.createTextNode(collection[i].album);
    album.appendChild(textAlbum);
    divIntérieure.appendChild(album);
   
    //création de la deuxième balise p, de son texte, et ajout des 2 noeuds à l'arbre
    //let annee = document.createElement("p");
    //let textAnnee = document.createTextNode(collection[i].releaseYear);
    //annee.appendChild(textAnnee);
    //divIntérieure.appendChild(annee);
    
     //création de la balise a et de ses attributs,
     //et ajout des 2 noeuds à l'arbre
    let lienSpot = document.createElement("a");
    lienSpot.href = collection[i].lien;
    lienSpot.target = "_blank";
    divIntérieure.appendChild(lienSpot);

    //Création de la balise img et de ses attributs, 
     //et ajout du noeud à l'arbre
     let spotify = document.createElement("img");
     spotify.src = "./assets/spotify.png";
     spotify.alt = "Spotify";
     lienSpot.appendChild(spotify);
}
