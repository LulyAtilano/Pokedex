$(document).ready(function(){
    $('.sidenav').sidenav();

});

$('#search-button').click(function() {
  //console.log("se busca pokemon");

  var searchPokemon = $('#search-input').val();
  console.log(searchPokemon);
})