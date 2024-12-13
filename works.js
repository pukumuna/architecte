//Récupération des pièces eventuellement stockées dans le localStorage
let works = window.localStorage.getItem('works');

if (works === null) {
    // Récupération des works depuis l'API
    const works = await fetch("http://localhost:5678/api/works").then(pieces => pieces.json()); // Fusionner
    //const reponse = await fetch('http://localhost:5678/api/works/');
    //works = await reponse.json();
    
    // Transformation des works en JSON (sérialiser)
    const valeuWrorks = JSON.stringify(works);
    // Stockage des informations dans le localStorage (sorte de sauvegarde light)
    window.localStorage.setItem("works", valeurWorks);
} else {
    works = JSON.parse(works);
}
console.log("works : " + works);
for (let i=o; i<works.length; i++) {
    const work = works[i];
    const gallerie = document.querySelector(".gallery");

    const figure = document.createElement("figure");
    const image  = document.createElement("img");
    const caption = document.createElement("figcaption");
    image.src=work.image;
    image.alt=work.image; 
    caption.innerText=works.image;

}