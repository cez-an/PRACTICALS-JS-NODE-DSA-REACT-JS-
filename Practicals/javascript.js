// // String (Immutable)
// // let srt = "cezanne";
// // for(let i of srt){
// //     srt[i] = "C";
// // }
// // srt[0] = "C";
// // console.log(srt);
// // console.log(0==false);
// // console.log(0===false);
// // console.log(null===undefined);
// // console.log(0==false)
// // console.log(0==false)
// // .Sum of even numbers in array using recursion

// // function evenSum(arr){
// //     if(arr.length === 0)  return 0;
// //     if(arr[0]%2 === 0) return arr[0] + evenSum(arr.slice(1))
// //     else return evenSum(arr.slice(1));
// // }

// // console.log(evenSum([1,2,3,4,5,6,7,8,9,10],0));

// // let arr = [
// //   [1,2,3,4,5],
// //   [6,7,8,9,10],
// //   [11,12,13,14,15],
// //   [16,17,18,19,20],
// //   [21,22,23,24,25],
// // ];
// //print this 1,5,10,15,20,21,16,11,6,2,3,7,8,12 etc

// // function printDesign(arr){
// //     let flag = true;
// //     for(let i=0; i<arr.length; i++){
// //         if(flag){
// //             for(let j=0; j<arr.length; j++){
// //             console.log(arr[j][i]);
// //             }
// //             flag=false;
// //             continue;
// //         }

// //         if(!flag){
// //             for(let j=arr.length-1; j>=0; j--){
// //             console.log(arr[j][i]);
// //             }
// //             flag=true;
// //             continue;
// //         }
// //     }
// // }
// // hahahah kand pidicheeeee.......
// // printDesign(arr);
// // find the gcd of 2 numbers

// // function GCD(a,b){
// //     if( a || b === 0 ) return "no common diviser found";
// //     let res = 1;
// //     let limit = (a>b) ? b : a;
// //     for(let i=limit; i>0; i--){
// //         if( a % i === 0 && b % i === 0 ){
// //             res = i;
// //             break;
// //         }
// //     }
// //     return  res;
// // }
// // console.log(GCD(1,0))

// // let srt = 'hello world cdcdcd cdcdc'

// // function threeSpace(srt){
// //     let count = 0;
// //     for(let i of srt){
// //         if(count === 3) break;
// //         if(i===" ") count++;
// //     }
// //     return (count===3) ? true : false;
// // }

// // abhinav
// // achu
// // basim
// // habil
// // shibi
// // ashmi
// // salva
// // nivin
// // suraya

// // flatern an array using recursion

// // let arr = [1,2,3,[23,43,54,],[1,[23,12,42,]]];

// // function flaternArray(arr){
// //     let res = [];
// //     for(let item of arr){
// //          if(Array.isArray(item)){
// //             res = res.concat(flaternArray(item));
// //          }else{
// //             res.push(item);
// //          }
// //     }

// //    return res;
// // }

// // console.log(flaternArray(arr));

// // linked list

// // class Node {
// //     constructor(val){
// //         this.val = val;
// //         this.next = null;
// //     }
// // }

// // class LL {
// //     constructor(){
// //         this.head = null;
// //     }
// //     insert(val){
// //         let newNode  = new Node(val);
// //         if(!this.head){
// //             this.head = newNode;
// //             return;
// //         }
// //         let current = this.head;
// //         while(current.next){
// //             current = current.next;
// //         }
// //         current.next = newNode;
// //         return;
// //     }
// //     print(){
// //         let current = this.head;
// //         while(current){
// //             console.log(current.val)
// //             current = current.next;
// //         }
// //     }
// //     findMiddle(){
// //         let fast = this.head;
// //         let slow = this.head;

// //         while(fast && fast.next){
// //             fast = fast.next.next;
// //             slow = slow.next;
// //         }
// //         return slow.val;
// //     }
// // }
// // let ll = new LL();
// // ll.insert(9);
// // ll.insert(3);
// // ll.insert(4);
// // ll.insert(2);
// // ll.insert(7);
// // ll.insert(5);
// // ll.insert(5);
// // ll.print();
// // console.log(ll.findMiddle());

// // create a ll

// // class Node {
// //   constructor(val) {
// //     this.val = val;
// //     this.next = null;
// //   }
// // }

// // class LL {
// //   constructor() {
// //     this.head = null;
// //   }
// //   insert(val) {
// //     let newNode = new Node(val);
// //     if (!this.head) {
// //       this.head = newNode;
// //       return;
// //     }
// //     let current = this.head;
// //     while (current.next) {
// //       current = current.next;
// //     }
// //     current.next = newNode;
// //     return;
// //   }

// //   print() {
// //     let current = this.head;
// //     while (current) {
// //       console.log(current.val);
// //       current = current.next;
// //     }
// //   }
// //   findMiddle() {
// //     let fast = this.head;
// //     let slow = this.head;

// //     while (fast.next && fast.next.next) {
// //       slow = slow.next;
// //       fast = fast.next.next;
// //     }

// //     return slow.val;
// //   }
// //   insertFirst(val) {
// //     let newNode = new Node(val);
// //     newNode.next = this.head;
// //     this.head = newNode;
// //   }

// //   nthPositionAdd(pos, val) {
// //     let newNode = new Node(val);
// //     let current = this.head;
// //     let prev = null;
// //     let index = 1;

// //     if (pos === 1) {
// //       this.insertFirst(val);
// //       return true;
// //     }

// //     while (current) {
// //       if (index === pos) {
// //         prev.next = newNode;
// //         newNode.next = current;
// //         return true;
// //       }
// //       prev = current;
// //       current = current.next;
// //       index++;
// //     }
// //     return false;
// //   }
// //   deleteFromBegining() {
// //     let current = this.head;
// //     this.head = current.next;
// //     current.next = null;
// //   }

// //   deleteFromLast() {
// //     let current = this.head;
// //     let prev = null;
// //     while (current.next) {
// //       prev = current;
// //       current = current.next;
// //     }
// //     prev.next = null;
// //   }
// //   deleteNthpos(pos) {
// //     let index = 1;
// //     let current = this.head;
// //     let prev = null;
// //     if (pos === 1) {
// //       current.next = this.head.next;
// //       this.head = current.next;
// //       return;
// //     }
// //     while (current.next) {
// //       if (index === pos) {
// //         prev.next = current.next;
// //         return;
// //       }
// //       prev = current;
// //       current = current.next;
// //       index++;
// //     }
// //     if (index === pos) {
// //       prev.next = null;
// //     }
// //   }
// // }

// // [2,nxt][3,nxt][5,nxt]

// // let ll = new LL();

// // ll.insert(99);
// // ll.insert(21);
// // ll.insert(34);
// // ll.insert(62);
// // ll.insert(79);
// // ll.insert(["sdasdasd"]);
// // ll.deleteFromLast()
// // ll.deleteNthpos(1)
// // ll.deleteFromBegining()
// // ll.insert(53);
// // ll.insert(29);
// // ll.insert(29);
// // console.log(ll.nthPositionAdd(-1,999999))
// //  ll.insertFirst(9999)
// // ll.print();
// // console.log(ll.findMiddle())
// //
// // frequency of an array using map and object
// // let arr = [9,10,8,3,4,2,4,2,11,45,3,7];

// // function frequencyOBJ(arr){
// //     let obj = {};
// //     for (let i = 0; i < arr.length; i++) {
// //          obj[arr[i]] = (obj[arr[i]] || 0) +1;
// //     }
// //     console.log(obj)
// // }

// // function frequencyMAP(arr) {
// //     let map = new Map();
// //     for (let i = 0; i < arr.length; i++) {
// //         map.set(arr[i],(map.get(arr[i]) || 0) +1 )
// //     }
// //     console.log(map)
// // }

// // frequencyOBJ(arr)
// // frequencyMAP(arr)

// // flatern multidimentional array
// // let arr = [1, 2, [3, 4, 43], 3, [34, 43, [23, 2, 1, 3]]];

// // function flaternArray(arr) {
// //   let res = [];
// //   for (const item of arr) {
// //     if (Array.isArray(item)) {
// //       res.push(...flaternArray(item));
// //     } else {
// //       res.push(item);
// //     }
// //   }
// //   return res;
// // }
// // console.log(flaternArray(arr));

// // Merge Sort

// // function mergeSort(arr) {
// //   if (arr.length <= 1) return arr;
// //   const mid = Math.floor(arr.length / 2);
// //   const left = mergeSort(arr.slice(0, mid));
// //   const right = mergeSort(arr.slice(mid));
// //   return merge(left, right);
// // }

// // function merge(left, right) {
// //   let res = [];
// //   let i = 0;
// //   let j = 0;
// //   while (i < left.length && j < right.length) {

// //     if (left[i] < right[j]) {
// //       res.push(left[i]);
// //       i++;
// //     } else {
// //       res.push(right[j]);
// //       j++;
// //     }
// //   }

// //   while (i < left.length) {
// //     res.push(left[i]);
// //     i++;
// //   }
// //   while (j < right.length) {
// //     res.push(right[j]);
// //     j++;
// //   }
// // //   console.log(res)
// //   return res;
// // }

// let arr = [9, 10, 8, 3, 4, 2, 4, 2, 11, 45, 3, 7];
// console.log(mergeSort(arr));

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// function merge(left, right) {
//   let res = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       res.push(left[i++]);
//     } else {
//       res.push(right[j++])
//     }
//   }

//   while(i<left.length){
//     res.push(left[i++]);
//   }

//   while(j<right.length){
//     res.push(right[j++])
//   }
//   return res;

// }

// const object = {
//     name:'cezanne',
// }

// const arr = [0,1, 2, 3, 0, 6, 0, 8, 10];
// function moveZeros(arr){
//     let point = 0;
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i]===0){
//             [arr[point],arr[i]]=[arr[i],arr[point]];
//             point++;
//         }
//     }
//     return arr;
// }
// console.log(moveZeros(arr));

// let srt = 'hello world';
// count of unique vowels no inbuilt methods
// function uniqueVovels(srt){
//     let vovels = ['a','e','i','o','u'];
//     let arr = srt.split('');
//     let seen = {};
//     let count = 0;
    
//     for(let i =0; i<arr.length; i++){
//         for(let j=0; j<vovels.length; j++){
//             if(arr[i]===vovels[j]){
//                  if(seen[arr[i]]){
//                     seen[arr[i]] = seen[arr[i]] + 1;
//                     continue;
//                  }else{
//                      seen[arr[i]] = 1;
//                      continue;
//                  }
//             }
//         }
//         }
//         console.log(seen)
        
//         // for(let i in seen){
//         //     if(seen)
//         // }
// }
// uniqueVovels(srt)
// // // // amount each user has spend
// let arr = [
//   {
//     id: 1,
//     user: 'Rahul',
//     items: [
//       { name: 'Laptop', qty: 1, price: 50000 },
//       { name: 'Mouse', qty: 1, price: 700 },
//     ],
//   },
//   {
//     id: 2,
//     user: 'Vijay',
//     items: [
//       { name: 'Phone', qty: 1, price: 20000 },
//       { name: 'Case', qty: 2, price: 200 },
//     ],
//   },
//   {
//     id: 3,
//     user: 'Meera',
//     items: [
//       { name: 'Tablet', qty: 1, price: 15000 },
//       { name: 'Cover', qty: 1, price: 500 },
//     ],
//   },
//   {
//     id: 4,
//     user: 'Anita',
//     items: [
//       { name: 'Headphones', qty: 1, price: 3000 },
//       { name: 'Charger', qty: 1, price: 800 },
//     ],
//   },
//   { id: 5, user: 'Karan', items: null },
// ]

// // //   {
// // //     id: 1,
// // //     user: 'Rahul',
// // //     items: [
// // //       { name: 'Laptop', qty: 1, price: 50000 },
// // //       { name: 'Mouse', qty: 1, price: 700 },
// // //     ],
// // // }
// // // { id: 5, user: 'Karan', items: null },
// // // name of the user and amount

//   function findTotalSpend(arr){
//       let data = {};
//       for(let i=0;  i< arr.length; i++){
//           let spend = 0;
          
//           if(arr[i].items==null) {
//               data[arr[i].user] = 0;
//               continue;
//           }
          
//           for(let k=0; k<arr[i].items.length; k++){
//               spend+=arr[i].items[k].price;
//           }
//           data[arr[i].user]=spend;
//       }
//       return data;
//   }
// console.log(findTotalSpend(arr));
// // merge sort
// // let arr = [2,3,1,3,5,2,5,7,8,9,23];
// // // let arr = [2];
// // function mergeSort(arr){
// //     if(arr.length<=1) return arr;
// //     const mid = Math.floor(arr.length/2);
// //     const left = mergeSort(arr.slice(0,mid));
// //     const right = mergeSort(arr.slice(mid));
// //     //  console.log(left,right)
// //     return merge(left,right);
// //  }
 
// // function merge(left,right){
// //     console.log(left,right)
// //     let res = [];
// //     let i=0;
// //     let j=0;
    
// //     while(i<left.length && j<right.length){
// //         if(left[i]<right[j]){
// //             res.push(left[i]);
// //             i++;
// //         }else{
// //             res.push(right[j]);
// //             j++;
// //         }
// //     }
    
// //     while(i<left.length){
// //         res.push(left[i]);
// //         i++;
// //     }
// //     while(j<right.length){
// //         res.push(right[j])
// //     }
// //     conosle.log("fff",res);
// // }

// // console.log(mergeSort(arr));

// // // reverse a string using recursion
// let srt = 'cezannep'
// // // // let srt = 'c'
// function reverseString(str){
    
//     if(str.length<=1) return str;
//     return reverseString(str.slice(1)) + str[0]
// }
// console.log(reverseString(srt));