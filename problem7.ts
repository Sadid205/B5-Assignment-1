
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day:Day):string{
    if (day===Day.Saturday || day===Day.Sunday){
        return "Weekend"
    }else {
        return "Weekday"
    }
}

const output1 = getDayType(Day.Monday);  
const output2 = getDayType(Day.Sunday); 
console.log(output1)
console.log(output2)