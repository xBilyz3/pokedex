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

for (var i = 0; i < repository.length; i++) {
  document.write('<h1>' + repository[i].name + '</h1>');
  document.write(repository[i].height);
  for (var t = 0; t < repository[i].types.length; t++) {
    var type = repository[i].types[t]
    document.write('<div ' + 'class="' + type + '" > ' + type + ' </div>')
  }
  if (repository[i].height > 11) {
    document.write(' - Wow, that\’s big!');
  }
}
