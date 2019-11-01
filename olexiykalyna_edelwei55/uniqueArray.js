var arr = [1, 4, 57, 2, 65, 1, 6, 9, 3];
function unique(arr) {

    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) { // ищем, был ли он уже?
        if (i!==j){
          if (arr[j] == arr[i]) {
            arr.splice(j, 1)
          }
        }
      }
    }

  return arr;
}
alert("Массив с уникальными элементами: " + unique(arr) );
