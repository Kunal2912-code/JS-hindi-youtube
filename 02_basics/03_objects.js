// Singleton 
 
const mySym = Symbol("key1")

 const Jsuser = {
    name:"Kunal",
      [mySym]: "mykey1",
               age :"18",
    location : "Pune",
     Email : "kunal@google.com",
      isloggedIn : false,
       LastLoginDay : ["Monday","Saturday"]
 }

//  console.log(Jsuser.Email);
//   console.log(Jsuser["Email"]);
//     console.log(Jsuser[mySym]);


    Jsuser.Email = "kunal@g.com"
    //Object.freeze(Jsuser)
    Jsuser.Email = "kunal@micro.com"

    //console.log(Jsuser);

    Jsuser.greeting = function(){
        console.log("Hello Js User");
    }

    Jsuser.greetingtwo = function(){
        console.log(`Hello Js User,${this.name}`);
    }

    console.log(Jsuser.greeting());
        console.log(Jsuser.greetingtwo());




 