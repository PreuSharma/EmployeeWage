------> UC1 - Attendance Check:

We start by generating a random value (0 or 1) to check if the employee is present or absent.
If the value is 1, the employee is present; 
otherwise, they are absent.

This is done by the checkAttendence() function.


------> UC2 - Working Hours:

Once the employee is present, we calculate how many hours they worked.
The employee can work 0, 4 (part-time), or 8 (full-time) hours, based on another random value.
The workingHours() function returns the working hours.


------> UC3 - Daily Wage Calculation:

Using the workingHours() value, we calculate the daily wage.
The wage is simply the hours worked multiplied by the hourly rate (20 in this case).


------> UC4 - Monthly Wage Calculation:

We calculate the monthly wage by iterating for 20 days (working days).
For each day, we check attendance, calculate working hours, and then calculate the daily wage.
After adding up all daily wages and working hours, we get the total monthly wage.


------> UC5 - Monthly Wage with Conditions:

In this case, we calculate the monthly wage, but with a limit on working days (20 days) and hours (160 hours).
We stop once either 20 days or 160 hours are completed.