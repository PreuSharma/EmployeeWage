
console.log("==========uc1==========");
//uc1


const Present=1;   
function checkAttendence() {
    let randomValue = Math.floor(Math.random() * 2); // Generates 0 or 1
    console.log("Random Value Selected: " + randomValue);
    let isPresent = randomValue === Present; // Determines attendance
    console.log("Employee is Present: " + isPresent); // Logs the result
    return isPresent; // Returns true or false
}
//checkAttendence();





console.log("============uc2==========");
//uc2
const noTime=0;
const partTime=1;
const fullTime=2;
const wagePerHour=20;


function workingHours(isPresent)
{
    if(!isPresent) 
    {
        console.log("IS ABSENT");
        return 0;
    }
    else
    {
        let randomWorkingStatus=Math.floor(Math.random()*3);
        let working_Hours=0;
        switch(randomWorkingStatus)
        {
            case noTime:
                working_Hours=0;
                //console.log("Employee didn't work today");
                return 0;
                
            case partTime:
                working_Hours=4;
                //console.log("Employee worked Part-time today");
                return 4;

            case fullTime:
                working_Hours=8;
                //console.log("Employee worked Full-time today");
                return 8;
                    
            default:
                //console.log("Invalid working Status");  
                return 0;      
        }
    }
}
//workingHours();

console.log("=================uc3=================")
//uc3
function calculate_DailyWage(isPresent)
{
    let workHours=workingHours(isPresent);
    //console.log("WorkHours: "+workHours);
    let daily_Wage=workHours*wagePerHour;
    //console.log("Daily Wage: "+daily_Wage);
    return daily_Wage;
}
//calculate_DailyWage();



console.log("===================uc4==============");
//uc4
let WorkingDays=20;

function calculate_MonthlyWages()
{
    let totalWorkingHours=0;
    let total_MonthlyWage=0;
    for(let day=1;day<=WorkingDays;day++)
    {
        console.log("Day: " + day);
        let PresentOrNot=checkAttendence();
        let dailyHours = workingHours(PresentOrNot);
        let dailyWage = dailyHours * wagePerHour;

        totalWorkingHours += dailyHours;
        total_MonthlyWage+=dailyWage;
    }
    console.log("Total monthly wage : "+total_MonthlyWage);
    return total_MonthlyWage;
}

console.log("Attendence : "+checkAttendence());
console.log("Working Hours: "+workingHours());
console.log("Daily wage: "+calculate_DailyWage());
console.log("Monthly wage: "+calculate_MonthlyWages());
//console.log("Monthly wage: "+calculate_MonthlyWages());







console.log("=================uc5==============")
//uc5
function calculate_MonthlyWagesWithCondition() {
    let totalWorkingHours = 0;
    let total_MonthlyWage = 0;
    let day = 0;

    // Loop until either max days (20) or max hours (160) are reached
    while (day < 20 && totalWorkingHours < 160) {
        day++;
        console.log("Day: " + day);

        let PresentOrNot = checkAttendence();  // Check attendance for the day
        let dailyHours = workingHours(PresentOrNot); // Get the working hours for the day
        let dailyWage = dailyHours * wagePerHour; // Calculate the daily wage

        totalWorkingHours += dailyHours;  // Add daily hours to total working hours
        total_MonthlyWage += dailyWage;  // Add daily wage to total monthly wage

        // Logging details for each day
        console.log(`Day ${day} - Hours Worked: ${dailyHours}, Daily Wage: ${dailyWage}`);
        
    }
    return total_MonthlyWage;
}
console.log("Monthly wage with conditions (160 hours or 20 days): " + calculate_MonthlyWagesWithCondition());


