// Immediately Invoked Finction Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
})();

//console.log(chai)

// unnamed iffe
( (name) => {
    console.log(`DB Connected Two ${name}`);
} )('kunal')