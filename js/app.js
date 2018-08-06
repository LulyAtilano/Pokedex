$(document).ready(function(){
    $('.sidenav').sidenav();
    jsonAllPokemons();
});


$('#search-button').click(function() {
  swal("Ooops it's not working right now!", "Come back later!", "warning");
  
  let inputPokemon = $('#search-input').val();
  console.log(inputPokemon);
  
  //let searchCard = document.querySelector("div.card");
  let searchCard = document.getElementsByName("");
  console.log(searchCard);
  
  if (inputPokemon != searchCard ) {
    //$(searchCard).addClass('hidden');
    $(searchCard).css("color", "blue");
    } 
    else  {
    //$(searchCard).removeClass('hidden');
    $(searchCard).css("color", "green");
    //swal("Houston we have a problem!", "Try typing again, please!", "warning");
  };

  $('#search-input').val('');

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
      //console.log(pokemon);     
      profilePokemon(pokemon.entry_number);
    });
};

function profilePokemon(number) {
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${number}/`,
    type: 'GET',
    crossDomain: true,
  })
  .done(function(response) {
    let ability = response.abilities[0].ability.name;
    //console.log(ability);
    //let abilityPokemon = "";
    //let abilities = response.abilities;
    //console.log(abilities);
    
    /*for (let abilityPokemon in abilities) {
      console.log( `${abilities[abilityPokemon].ability.name}`);
      //console.log(ability);
    };*/

    /*for (let i = 0; i < abilities.length; i++ ) {
     let abilityPokemon = abilities[i].ability.name;
      //console.log(abilityPokemon);
      return abilityPokemon;
    }*/

    let type = response.types[0].type.name;
    let weight = response.weight;
    let height = response.height;
    let namePokemon = response.name;
       
    let plantilla_pokemon = fillTemplate(number, namePokemon, ability, type, weight, height);
      $('#section-pokemons').append(plantilla_pokemon);
    //searchPokemon(namePokemon);
  })
  .fail(function() {
    //console.log("error cargando info de pokemons");
  });
};

function fillTemplate(number, name, ability, type, weight, height) {
  let img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+number+".png";
  return `<div data-id="${number}" class="card col s4 l3" name="${name}">
            <div class="card-image waves-effect waves-block waves-light valign-wrapper">
                <img class="activator" src="${img}">
            </div>
            <div class="card-content">
                <span class="card-title activator black-text text-darken-4 center-align"> ${name} <i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title red-text text-darken-4"> ${name} <i class="material-icons right">close</i></span>
              <h6> Ability: </h6>
              <li> ${abilityPokemon} ${ability} </li>
              <h6> Type: </h6>
              <li> ${type} </li>
              <h6> Weight / Heigth </h6>
              <li> ${weight} / ${height} </li>
            </div>
          </div>`
};

/*function searchPokemon(namePokemon) {
  return namePokemon;
}*/