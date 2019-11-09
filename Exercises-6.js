function digitPerkalianMinimum(angka) {
    var temp = [];
    for (var i = 1; i <= angka; i++) {
        for (j = 1; j <= angka; j++) {
            if (i * j === angka) {
              temp.push(String(i) + String(j));
            }
        }
    }
    var digitMinimum = temp[0].length;
    for (var j = 0; j < temp.length; j++) { 
        if (temp[j].length < digitMinimum) {
            digitMinimum = temp[j].length;
        }
    }
    return digitMinimum;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2