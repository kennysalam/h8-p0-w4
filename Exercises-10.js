function changeMe(arr) {
  var identitas = {};
  if (arr.length === 0) {
      return console.log('""');
  }
  for (var i = 0; i < arr.length; i++) {
      identitas.firstName = arr[i][0];
      identitas.lastName = arr[i][1];
      identitas.gender = arr[i][2];
      if (arr[i][3] === undefined || arr[i][3] > 2019) {
          identitas.age = 'Invalid Birth Year';
      } else {
          identitas.age = 2019 - arr[i][3];
      }
      console.log(`${i + 1}. ${identitas.firstName} ${identitas.lastName}:`);
      console.log(identitas);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""