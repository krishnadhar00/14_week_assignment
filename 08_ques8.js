function calculateRemainingDays(name)
{
    const dateTime = new Date();
    const event1 = new Date(name);
    let timeDifference = dateTime - event1;
    let dayDifference = Math.ceil(timeDifference/(1000*3600*24));
    console.log(dayDifference);
}
const eventDate = '2023-08-31';
calculateRemainingDays(eventDate);
