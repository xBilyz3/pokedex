var repository = [
  // first pokemon
  {
    name: 'Bulbasaur',
    height: 7,
    types: ['grass', 'poisen']
  },
  // second pokemon
  {
    name: 'Charmander',
    height: 12,
    types: ['fire']
  },
  // third pokemon
  {
    name: 'Squirtle',
    height: 4,
    types: ['water']
  },
];

repository.forEach(function(pokemonDetail) {
  document.write('<h1>' + pokemonDetail.name + '</h1>');
  document.write('<p>' + pokemonDetail.height) + '</p>';
  if (pokemonDetail.height > 11) {
    document.write(' - Wow, that\’s big!');
  }
  var type = pokemonDetail.types;
  type.forEach(function(pokemonType) {
    document.write('<div ' + 'class="' + pokemonType + '" > ' + pokemonType + ' </div>');
  });
});
