const userEmail = "k@gmail.com"
//const userEmail = []

if (userEmail){
    console.log("Got user Email");
} else{
        console.log("Don't have user Email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy Values
// "0", 'false', " ",  [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10 
// val1 = undefined ?? 15
val1 = null ?? 5 ?? 10 


console.log(val1);

// Terniary operator

//condition ? true : false

const iceprice  = 100
iceprice <= 80 ? console.log("less than 80") : console.log("more than 80")