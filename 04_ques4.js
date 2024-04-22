const products = [
    {name: "Laptop", price: 120000},
    {name: "Mobile", price: 70000},
    {name: "Laptop Bag", price: 20000},
    {name: "Watch", price: 20000},
    {name: "Mobile Charger", price: 1500}
];
function maxValue()
{
    let max=Number.MIN_VALUE,min=Number.MAX_VALUE;
    let name1,name2;
    for(let abc of products)
    {
        if(abc.price>max)
        {
            max=abc.price;
            name1 = abc.name;
        }
        if(abc.price<min)
        {
            min=abc.price;
            name2 = abc.name;
        }
    }
    console.log("The product with maximum amount is "+name1+" which is priced at Rs. "+max);
    console.log("The product with minimum amount is "+name2+" which is priced at Rs. "+min);
}
maxValue();