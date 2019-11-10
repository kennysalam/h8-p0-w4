function cariModus(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var sama = false;
        for (var j = 0; j < temp.length; j++) {
            if (arr[i] == temp[j][0]) {
                temp[j].push(arr[i]);
                sama = true;
            }
        }
        if (sama == false) {
            temp.push([arr[i]]);
        }
    }
    if (temp.length == 1) {
        return -1;
    }
    var hanya1 = true;
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].length > 1) {
            hanya1 = false;
        }
    }
    if (hanya1 == true) {
        return -1;
    }
    var modus;
    for (var i = 0; i < temp.length; i++) {
        for (var j = 0; j < temp.length; j++) {
            if (temp[i].length > temp[j].length && i !== j) {
                modus = temp[i];
            }
        }
    }
    return modus[0];
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1