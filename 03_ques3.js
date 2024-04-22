const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },
    
];
function checkList(arr)
{
    let count = 0;
    for(let abc of students)
    {
        if(abc.name===arr)
        {
            if(abc.marks>90)
            {
                count++;
                console.log("Congratulations "+abc.name+"! You have cleared the exam");
            }
            else
            {
                count++;
                console.log("Sorry ! you have not cleared the exams.");
            }
        }
    }
    if(count===0)
    {
        console.log("Invalid User !!!");
    }
}
checkList("Mithun");
checkList("Prabir");
checkList("Someone");
