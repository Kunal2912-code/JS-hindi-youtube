

function sayMyName(){
    console.log("K");
    console.log("U");
    console.log("N");
    console.log("A");
    console.log("L");
}

//sayMyName

// function addtwonumbers(number1, number2){
// console.log(number1 + number2);
// }

function addtwonumbers(number1, number2){
    //console.log(number1 + number2);
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addtwonumbers(3, 5)

//console.log("Result:", result);


function loginUserMessage(username = "Kun"){
    if(!username){
        console.log("Please enter a username");
        return
    }
        return `${username} just logged in`
}

 console.log(loginUserMessage("sam"))