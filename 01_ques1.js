let names = ["Krishna","Harsh","Mithun","Rohan"];
function checkNames(arr)
{
    if(names.includes(arr))
    {
        console.log("Yes, "+arr+" is a valid user.");
    }
    else
    {
        console.log("No, "+arr+" is not a valid user.");
    }
}
checkNames("Mithun");