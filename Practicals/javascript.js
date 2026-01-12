// // String (Immutable)
// let srt = "cezanne";
// for(let i of srt){
//     srt[i] = "C";
// }
// srt[0] = "C";
// console.log(srt);
// console.log(0==false);
// // console.log(0===false);
// console.log(null===undefined);
// console.log(0==false)
// console.log(0==false)
//.Sum of even numbers in array using recursion

// function evenSum(arr){
//     if(arr.length === 0)  return 0;
//     if(arr[0]%2 === 0) return arr[0] + evenSum(arr.slice(1))
//     else return evenSum(arr.slice(1));
// }

// console.log(evenSum([1,2,3,4,5,6,7,8,9,10],0));

// let arr = [
//   [1,2,3,4,5],
//   [6,7,8,9,10],
//   [11,12,13,14,15],
//   [16,17,18,19,20],
//   [21,22,23,24,25],
// ];
// //print this 1,5,10,15,20,21,16,11,6,2,3,7,8,12 etc

// function printDesign(arr){
//     let flag = true;
//     for(let i=0; i<arr.length; i++){
//         if(flag){
//             for(let j=0; j<arr.length; j++){
//             console.log(arr[j][i]); 
//             }
//             flag=false;
//             continue;
//         }
        
//         if(!flag){
//             for(let j=arr.length-1; j>=0; j--){
//             console.log(arr[j][i]); 
//             }
//             flag=true;
//             continue;
//         }
//     }
// }
// // hahahah kand pidicheeeee.......
// printDesign(arr);
// find the gcd of 2 numbers 

// function GCD(a,b){
//     if( a || b === 0 ) return "no common diviser found";
//     let res = 1;
//     let limit = (a>b) ? b : a;
//     for(let i=limit; i>0; i--){
//         if( a % i === 0 && b % i === 0 ){
//             res = i;
//             break;
//         } 
//     }
//     return  res;
// }
// console.log(GCD(1,0))

// let srt = 'hello world cdcdcd cdcdc'

// function threeSpace(srt){
//     let count = 0;
//     for(let i of srt){
//         if(count === 3) break;
//         if(i===" ") count++;
//     }
//     return (count===3) ? true : false;
// }

// abhinav 
// achu 
// basim 
// habil 
// shibi 
// ashmi 
// salva 
// nivin 
// suraya 




// flatern an array using recursion


// let arr = [1,2,3,[23,43,54,],[1,[23,12,42,]]];

// function flaternArray(arr){
//     let res = [];
//     for(let item of arr){
//          if(Array.isArray(item)){
//             res = res.concat(flaternArray(item));
//          }else{
//             res.push(item);
//          }
//     }
       
//    return res;
// }

// console.log(flaternArray(arr));


// linked list

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LL {
    constructor(){
        this.head = null;
    }
    insert(val){
        let newNode  = new Node(val);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){            
            current = current.next;
        }
        current.next = newNode;
        return;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.val)
            current = current.next;
        }
    }
    findMiddle(){
        let fast = this.head;
        let slow = this.head;

        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow.val;
    }
}
let ll = new LL();
ll.insert(9);
ll.insert(3);
ll.insert(4);
ll.insert(2);
// ll.insert(7);
ll.insert(5);
// ll.insert(5);
// ll.print();
console.log(ll.findMiddle());














