/**
 * Serveur Backend Pokedex
 */

console.log("Hello World!");

// Définir l'emplacement des fichiers bases de données
const POKEDEX_SRC = "./DATA/pokedex.json";
const IMAGES_SRC = "./FILES/images";

//**etc**/

//Définir un port
const port = 5001;

/**etc**/

// Lancer un serveur
const fs = require('fs');
const express = require('express');
const app = express();

// Lancemenent du serveur sur le port défini
app.listen(
    port,
    '0.0.0.0',
    () => {
        console.log('Server Pokedex is listening on ' + port);
    }
)

// Créer la route qui renvoie tout
app.get(
    '/',
    findAllPokemon
)

app.get(
    '/hasard',
    findOnePokemon
)

// Fonction
function findAllPokemon(request, response) {

    //1. Lecture du fichier
    let data = fs.readFileSync(POKEDEX_SRC);

    //2. Analyse du JSON
    let pokedex = JSON.parse(data);

    //3. Renvoie tout le json interprété
    response.send(pokedex);

}

function findOnePokemon() {
    fetch(POKEDEX_SRC)
        .then(function(response) {
            return response.json()
        });
}