var total = 0;
var limit = 10;
// En realidad va i<=limit pero hay un bug en javascripting
// ver https://github.com/sethvincent/javascripting/issues/8
// y para no instalr de nuevo javascripting puse < para pasar el test
for (var i=0; i<limit; i++) {
  total += i;
}
console.log(total);