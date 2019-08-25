var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
    });
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
    $button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  // return the whole repository
  function getAll() {
    return repository;
  }

  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function(e) {
      console.error(e);
    });
  }

  // exposed public functions
  return {
    add: add,
    addListItem: addListItem,
    getAll: getAll,
    getTextColor: getTextColor,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

var $pokemonList = document.querySelector('.pokemon-list');

// append each pokemon of the repository to the function addListItemp
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
