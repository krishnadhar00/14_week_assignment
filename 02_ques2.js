function calculateTotal(...number)
{
    let sum = number.reduce(function(acc,curr)
{
    return acc+curr;
},0)
return sum;
}
let x = calculateTotal(125,20,30);
console.log("The total cart value is "+x);