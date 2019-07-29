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
    types: ['fire', '']
  },
  // third pokemon
  {
    name: 'Squirtle',
    height: 4,
    types: ['water', '']
  },
];

for (var i = 0; i < repository.length; i++) {
  document.write('<h1>' + repository[i].name + '</h1>');
  document.write(repository[i].height);
  // object.types = fire /font color changes red
  if (repository[i].types[0] === 'fire') {
    document.write(' <fire>' + repository[i].types[0] + '</fire>' + repository[i].types[1]);
  } else if (repository[i].types[1] === 'fire') {
    document.write(repository[i].types[0] + ', <fire>' + repository[i].types[1] + '</fire>');
    // object.types = water /font color changes blue
  } else if (repository[i].types[0] === 'water') {
    document.write(' <water>' + repository[i].types[0] + '</water>' + repository[i].types[1]);
  } else if (repository[i].types[1] === 'water') {
    document.write(repository[i].types[0] + ', <water>' + repository[i].types[1] + '</water>');
    // object.types = grass /font color changes green
  } else if (repository[i].types[0] === 'grass') {
    document.write(' <grass>' + repository[i].types[0] + '</grass>' + repository[i].types[1]);
  } else if (repository[i].types[1] === 'grass') {
    document.write(repository[i].types[0] + ', <grass>' + repository[i].types[1] + '</grass>');
    // object.types = poisen /font color changes violet
  } else if (repository[i].types[0] === 'poisen') {
    document.write(' <poisen>' + repository[i].types[0] + '</poisen>' + repository[i].types[1]);
  } else if (repository[i].types[1] === 'poisen') {
    document.write(repository[i].types[0] + ', <poisen>' + repository[i].types[1] + '</poisen>');
  } else {
    document.write(repository[i].types[0] + repository[i].types[1]);
  }
  if (repository[i].height > 11) {
    document.write(' - Wow, that\’s big!');
  }
}
