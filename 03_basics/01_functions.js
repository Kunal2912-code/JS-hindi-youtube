

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

 //console.log(loginUserMessage("sam"))

 function calculateCartPrice(val1,val2,...num1){
return num1
 }
  //console.log(calculateCartPrice(200, 400, 500,2000))

  /// OBJECT 
  const user = {

    username:"kunal",
    price: 199
  }

  // PASSED in Function
  function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  }

  //handleobject(user)
  handleobject({
    username:"prasad",
    price:399
  })

  const myNewArray = [200, 400,500]

  function returnSecondValue(getArray){
    return getArray[1]
  }

  //console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200,400,500,1000]));