// Array Data Structure

// Array Traversing

//  let arr = [1,2,3,4,5,6];
//  for(let i =0; i<arr.length; i++){
//      document.write(`Array ${i} is ${arr[i]} <br>`)

//  }

// let arr = [1,2,3,24,5,6]

// function getElement(){
//        let el = document.getElementById("el").value;
//        if(el<arr.length && typeof parseInt(el) == "number"){
//               alert(arr[el])
//        false

//        }
//        else{
//               alert("Enter the valid number")
//        }
// }

// Insertion Element in the array

// let data = [ 20,30,50,10,80];
// let newEl = 70;
// let position = 4;
// console.log("Before ->", data);

// function addElement() {
//   let data = [20, 30, 50, 10, 80];
//   let newEl = document.getElementById("nl").value;
//   newEl = parseInt(newEl);
//   let position = document.getElementById("PI").value;
//   console.log("Before -> ", data);
//   for (let i = data.length - 1; i >= 0; i--) {
//     if (i >= position) {
//       data[i + 1] = data[i];
//       if (i == position) {
//         data[i] = newEl;
//         false
//       }
//     }
//   }
//   console.log("After-> ", data);
// }

// let data1 = [20, 30, 50, 10, 80];
// console.log(data1);
// data1.splice(4,0, 500)
// console.log(data1);
// data1.unshift(50)
// console.log(data1);

// Delete Element in the array

// function deleteElement(){
//        let arr = [10,20,30,40, 80, 90]
//        let position = document.getElementById("pi").value;
//        position = parseInt(position)
//        for(i =position; i<arr.length; i++){
//               arr[i] = arr[i+1];
//        }
//        arr.length = arr.length-1
//        console.log(arr);

// }

// Searching in Array

function findIndex() {
  let arr = [10, 20, 30, 40, 80, 90];
  let element = document.getElementById("pi").value;
  let index;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == element) {
      index = i;
      break;
    }
  }
  console.log(index);
}
