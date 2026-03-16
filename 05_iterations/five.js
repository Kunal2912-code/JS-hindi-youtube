// For Each loop

const coding = ["js", "ruby", "Cpp", "python"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "JS"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "PY"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )