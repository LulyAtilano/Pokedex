$(document).ready(function(){
    $('.sidenav').sidenav();
    jsonAllPokemons();
});

$('#search-button').click(function() {
  //console.log("se busca pokemon");
  var searchPokemon = $('#search-input').val();
  //jsonAllPokemons(searchPokemon);  
});

function jsonAllPokemons() {
  $.ajax({
    url: 'https://pokeapi.co/api/v2/pokedex/1',
    type: 'GET',
  })
  .done(function(response) {
    //console.log(response.pokemon_entries);
    printPokemons(response.pokemon_entries);
  })
  .fail(function(){
    console.log("error");
  });
};

function printPokemons(pokemons) {
    pokemons.forEach(function(pokemon) {
      let plantilla_pokemon = fillTemplate(pokemon.entry_number, pokemon.pokemon_species.name);
      $('#section-pokemons').append(plantilla_pokemon);
    });

  /* Guardar en el contenedor main  */
  
};

function fillTemplate(number, name ){
  let img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+number+".png";
  return `<div data-id="${number}" class="card col s4 l4">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src="${img}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4"> ${name} <i class="material-icons right">more_vert</i></span>
          </div>`
}

/*`<div data-id="${number}" class="card col s4 l4">
  <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${img}">
  </div>
  <div class="card-content">
      <span class="card-title activator grey-text text-darken-4"> ${name} <i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
  </div>
  <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
  </div>
</div>`;
console.log(templateCard);*/