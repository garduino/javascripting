var pets = ['cat', 'dog', 'rat'];
var limit = pets.length - 1;

for (var i=0; i <= limit; i++) {
  pets[i] = pets[i] + 's';
}

console.log(pets);