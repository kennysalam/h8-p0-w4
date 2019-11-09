function urutkanAbjad(str) {
  var temp = str.split('');
  temp.sort();
  var output = '';
  for (var i = 0; i < temp.length; i++) {
      output += temp[i];
  }
  return output;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'