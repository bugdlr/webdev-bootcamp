// printReverse()

function printReverse(array) {
  for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
  }
}

array1 = [1,2,3,4,5];
array2 = ["a", "b", "c"];


// isUniform()

function isUniform(array) {
  for (i = 0; i < array.length - 1; i++) {
    if(array[i] !== array[i + 1]) {
      return false;
    }
  } return true;
}

//sumArray();

function sumArray(array) {
  let total = 0;
  array.forEach(function(element) {
    total += element;
  });
  return total;
}

// max();

function max(array) {
  let highest = array[0];
  for (i = 1; i < array.length; i++) {
    if (highest < array[i]) {
      highest = array[i];
    }
  } return highest;
}


// myForEach

function myForEach(arr, func) {
  // loop through array
  for (let i = 0; i < arr.length; i++){
    // call func for each item in array
    func(arr[i]);
  }
}

colors = ["red", "orange", "yellow"]


myForEach(colors, function(color){
  console.log(color);
});
