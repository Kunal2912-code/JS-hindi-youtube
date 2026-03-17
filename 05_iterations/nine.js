const mynums = [1,2,3]

// const mytotal=  mynums.reduce(function (acc,currentvalue) {
//     console.log(`acc: ${acc} and currentvalue: ${currentvalue} `);
//     return acc + currentvalue
// }, 0 )


const mytotal =  mynums.reduce(  (acc, currentvalue) => acc + currentvalue ,0 )

console.log(mytotal);

const shoppingcart = [
    {
        itemname:"js course",
        price:"199",
    },
    {
        itemname:"cs course",
        price:"299",
    },
    {
        itemname:"python course",
        price:"399",
    },
]

const priceToPay = shoppingcart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);