console.log("Welcome to Employee Wage");
const Present=1;
const Absent=0;
let isPresent=false;    
function checkAttendence()
{
    let randomValue=Math.floor(Math.random()*2);
    console.log("Random Value Selected: "+randomValue)
    if(randomValue==Present)
    {
        console.log("Employee is present");
        isPresent=true;                        
    }
    else{
        console.log("employee is absent");
    }
    console.log(isPresent)         
    return isPresent;          
}
checkAttendence();
