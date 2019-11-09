function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    if (arrPenumpang.length === 0) {
        return [];
    }
    var output = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: 0
        }
        var jarak = 0;
        for (var j = 0; j < rute.length; j++) {
            if (obj.naikDari === rute[j]) {
                jarak -= j
            }
            if (obj.tujuan === rute[j]) {
                jarak += j
            }
        }
        obj.bayar = jarak * 2000;
        output.push(obj);
    }
    return output;
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]