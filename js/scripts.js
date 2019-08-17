var pokemonRepository = (function() {

// contains all pokemons
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
  function add(pokemonObject) {
    if (typeof pokemonObject === 'object' && (Object.keys(pokemonObject) === 'name' || 'height' || 'types')) {
      repository.push(pokemonObject);
    }
  }

  // pokemon types change font color
  function getTextColor(pokemonType) {
    return ' <div ' + 'class="' + pokemonType + '" >' + pokemonType + '</div>';
  }

	//
	function showDetails(pokemon) {
		console.log(pokemon.name);
	}

	// create pokemon button inside of an unordered list
  function addListItem(pokemon) {
  	// create <li> element
    var $listItem = document.createElement('li');

		// create a button that contains inside the <li> an shows the pokemon name
    var $button = document.createElement('button');
    $button.innerText = pokemon.name;
    $button.classList.add('pokemon-button');

   	// append the button to the <li>
    $listItem.appendChild($button);
    // append the <li> to the unordered list
    $pokemonList.appendChild($listItem);

   	// add an event listener to each button that logs pokemon name to the console
		$button.addEventListener('click', function (event) {
		showDetails(pokemon);
 });
}

  // return the whole repository
  function getAll() {
    return repository;
  }

  // exposed public functions
  return {
    add: add,
    addListItem: addListItem,
    getAll: getAll,
    getTextColor: getTextColor,
    showDetails: showDetails
  };
})();

var repository = pokemonRepository.getAll();

var $pokemonList = document.querySelector('.pokemon-list');

// append each pokemon of the repository to the function addListItem
repository.forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
