$(document).ready(function(){
    $('.sidenav').sidenav();

});

$('#search-button').click(function() {
  //console.log("se busca pokemon");

  var searchPokemon = $('#search-input').val();
  ajaxPokemon(searchPokemon);  
});

function ajaxPokemon(pokemon) {
  $.ajax({
    url: 'https://pokeapi.co/api/v2//region/{id or name}',
    type: 'GET',
    datatype: 'json',
    data: {
      api_key: ''
    }
  })
  .done(function(response) {
    console.log(response);
    //printPokemons(response.data);
  })
  .fail(function(){
    console.log("error");
  });
};

function printPokemons(data) {
  let pokemon = "";

  data.forEach(function(element) {
    pokemon = element.name;
    console.log(pokemon);
  });

  /* Guardar en el contenedor main  */
  $('#section-pokemons').append(pokemon);
};

/*let templateCard = 
  `<div class="card col s4 l4">`+
  `<div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="#">
  </div>
  <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
  </div>
  <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
  </div>
</div>`;
console.log(templateCard);*/