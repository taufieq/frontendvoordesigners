/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


/* bron --> sanne */
/*comments zelf verwoord*/

/* maak localstorage leeg bij openen van pagina / refreshen van pagina*/
localStorage.clear();

/* maak een variabele aan met een lege array*/
var favorites = [];

/*maak de buttons wakke, laa ze luisteren naar of ze aangeklikt worden*/
var buttons = document.querySelectorAll("ol button");


/*voor elke button die geklikt wordt, voer funcite voegPlaatjeAanFavoritesToe uit*/
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", voegPlaatjeAanFavoritesToe);
}


function voegPlaatjeAanFavoritesToe(event) {
    console.log(event);

    /* dit is nog zwarte magie voor me (target gedeelte) - event is gewoon de handeling van klikken */
    /*klikbaar maken*/
    var deButton = event.target;

    /*kijk naar zusterelement die voor de button komt*/
    var hetPlaatje = deButton.previousElementSibling;

    /*kijk naar de src van het plaatje*/
    var deSrcVanHetPlaatje = hetPlaatje.src;


    /* zet de src van het plaatje in de array favorites*/
    favorites.push(deSrcVanHetPlaatje);

    /* maak van de array een string (local storage leest alleen strings uit)*/
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
