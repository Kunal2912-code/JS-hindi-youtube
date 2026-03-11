const user = {
    username:"kunal",
    price:"999",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

        //console.log(this);

        // function chai(){
        //     let username = "Kp"
        //     console.log(this);
        // }

    //   const  chai = function(){
    //      let username = "Kp"
    //     console.log(this);
    //   }

        const  chai = ()  => {
         let username = "Kp"
        console.log(this.username);
      }


//chai ()

