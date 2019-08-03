var pokemonRepository = (function() {
  var repository = [
    // first pokemon
    {
      name: 'Bulbasaur',
      height: 0.7,
      types: ['grass', 'poisen']
    },
    // second pokemon
    {
      name: 'Charmander',
      height: 0.6,
      types: ['fire']
    },
    // third pokemon
    {
      name: 'Squirtle',
      height: 0.5,
      types: ['water']
    },
  ];

  // add new pokemon  when modified with the correct type of data
  // and Object.keys()of the parameter are equal to the specific keys
  function add(pokemon) {
    if (typeof pokemon === 'object' && (Object.keys(pokemon) === 'name' || 'height' || 'types')) {
      repository.push(pokemon);
    }
  }

  // pokemon types change font color
  function getTextColor(pokemonType) {
    return ' <div ' + 'class="' + pokemonType + '" >' + pokemonType + '</div>';
  }

  // return the whole repository
  function getAll() {
    return repository;
  }


  // exposed public functions
  return {
    add: add,
    getAll: getAll,
    getTextColor: getTextColor
  };
})();

pokemonRepository.add();
pokemonRepository.getAll();
pokemonRepository.getTextColor();

var repository = pokemonRepository.getAll();

repository.forEach(function(pokemonDetail) {
  document.write('<h1>' + pokemonDetail.name + '</h1>');
  document.write('height: ' + pokemonDetail.height);
  if (pokemonDetail.height > 0.6) {
    document.write(' - "Wow, that\’s big!"');
  }
  document.write('<br>')
  document.write('type:');
  var type = pokemonDetail.types;
  type.forEach(function(pokemonType) {
    document.write(pokemonRepository.getTextColor(pokemonType));
  });
});
