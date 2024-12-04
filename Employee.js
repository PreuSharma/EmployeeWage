console.log("==========uc1==========");
// uc1 - Check Attendance

const Present = 1;   
function checkAttendence() {
    let randomValue = Math.floor(Math.random() * 2); // Generates 0 or 1
    console.log("Random Value Selected: " + randomValue);
    let isPresent = randomValue === Present; // Determines attendance
    console.log("Employee is Present: " + isPresent); // Logs the result
    return isPresent; // Returns true or false
}


console.log("============uc2==========");
// uc2 - Calculate Working Hours
const noTime = 0;
const partTime = 1;
const fullTime = 2;
const wagePerHour = 20;

function workingHours(isPresent) {
    if (!isPresent) {
        console.log("Employee is absent today");
        return 0;
    } else {
        let randomWorkingStatus = Math.floor(Math.random() * 3);
        let working_Hours = 0;
        switch (randomWorkingStatus) {
            case noTime:
                working_Hours = 0;
                console.log("Employee didn't work today");
                return 0;

            case partTime:
                working_Hours = 4;
                console.log("Employee worked Part-time today");
                return 4;

            case fullTime:
                working_Hours = 8;
                console.log("Employee worked Full-time today");
                return 8;

            default:
                console.log("Invalid working Status");
                return 0;
        }
    }
}

let isPresent = checkAttendence();
let hoursWorked = workingHours(isPresent);
console.log("Total Hours Worked: " + hoursWorked);

