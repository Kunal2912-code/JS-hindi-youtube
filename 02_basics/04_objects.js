//const tinder = new Object()
const tinderuser={}

 tinderuser.id = "123abc"
 tinderuser.name = "sam"
 tinderuser.isloggedin = false

//console.log(tinderuser);

const regularuser = {
    email: "kun@gmail.com",
    fullname: {
        username: {
            firstname: "Kunal",
            lastname: "Prasad"
        }
    }
}
// console.log(regularuser.fullname.username);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}
const obj4 = {5: "c", 6:"d"}


// const obj3 = {obj1,obj2}
//const obj3= Object.assign({}, obj1, obj2, obj4)

const obj3= {...obj1,...obj2}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "k@hma.com"
    },
    {

    },
    {

    }
]

users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('email'));

const course = {
    coursename:"js",
    price:"999",   
    courseinstructor:"kunal"
}

//course.courseinstructor

const {courseinstructor: instructor} = course 
//console.log(courseinstructor);
console.log(instructor);

{
    // name:"kunal",
    // coursename:"java string",
    // price:"free",

}