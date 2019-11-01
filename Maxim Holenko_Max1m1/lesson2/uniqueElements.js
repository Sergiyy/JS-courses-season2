var arr = [6, 4, 4, 7, 6, 8];

function uniqElements(diffArray) {
    var n = diffArray.length;
    var k = 0;
    var sortArr = [];

    for (var i = 0; i < n; i++) {
        var j = 0;
        while (j < k && sortArr[j] !== diffArray[i]) {
            j++;
        }
        if (j == k) {
            sortArr[k++] = diffArray[i];
        }
    }

    return sortArr.sort((a, b) => a - b);
}

console.log(uniqElements(arr));
