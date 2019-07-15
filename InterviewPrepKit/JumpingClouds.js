// check main function to validate the completed function name matches
// pop 1 from the array
// get the length array -1 which is the number of hops.

let d = [0,0,1,0,0,1,0]
let b = [0,0,0,1,0,0]

// function one(c) {
//     return c == 0;
// }

function jumpingOnClouds(c) {
    // let newArray = c.filter(one);
    let jumps = 0 ;
    for (let i = 0 ; i < c.length; i++ ){
        // if the current index + 2 is less than the length of the array and value of index+2 is equal to 0
        // increase the index
        // increase the number of jump
        console.log("outer loop:", i)
        if (i+2<c.length && c[i+2]==0){
          console.log("before:", i)
          i++
          console.log("after:", i)
        } 
        jumps++
        console.log("jumps",jumps)
    }
    return jumps -1

}

jumpingOnClouds(d)
jumpingOnClouds(b)

// jumps 1
// outer loop: 1
// before: 1
// after: 2
// jumps 2
// outer loop: 3
// jumps 3
// outer loop: 4
// before: 4
// after: 5
// jumps 4
// outer loop: 6
// jumps 5