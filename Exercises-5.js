function ubahHuruf(kata) {
    var huruf = 'abcdefghijklmnopqrstuvwxyz';
    var output = '';
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < huruf.length; j++) {
            if (kata[i] == huruf[j]) {
                output += huruf[j + 1];
                break;
            } else if (kata[i] == 'z') {
                output += 'a';
                break;
            }
        }
    }
    return output;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu