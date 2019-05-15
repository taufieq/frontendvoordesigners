/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


/* bron --> sanne */

//JSON.parse zet de array die in een string was veranderd weer terug naar de vorm waar de array eerst in zat 

var favorites = JSON.parse(localStorage.getItem("favorites"));

for (var i = 0; i < favorites.length; i++) {

    /*maak element image aan en pak de src uit de array*/
    var newPlaatje = document.createElement("img");
    newPlaatje.setAttribute('src', favorites[i]);

    /* maak een li element aan en laat plaatje zien van kind element*/
    var newItem = document.createElement("li");
    newItem.appendChild(newPlaatje);

    /*selecteer het ol element en laat daarin de variabele newItem zien oftewel het plaatje*/
    var deLijst = document.querySelector("ol");
    deLijst.appendChild(newItem);

}
