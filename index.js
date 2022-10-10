/*
instructions

1. createEmployeeRecord function should take in an array as an argument containing 3 strings and a number, representing first name, family name, 
title, and pay rate per hour. 
    should return an object with keys: firstName, familyName, title, and payPerHour, as well as timeInEvents and timeOutEvents.
    timeInEvents and timeOutEvents should be empty arrays. 

2. createEmployeeRecords function takes in an array of arrays
    returns an array of objects
    Converts each nested Array into an employee record using createEmployeeRecord and accumulates it to a new Array

3. createTimeInEvent function

4. createTimeOutEvent function

5. hoursWorkedOnDate function

6. wagesEarnedOnDate funciton

7. allWagesFor function

8. calculatePayroll function
*/

/*
pseudocode

1. function createEmployeeRecord (arr) {
   
}

2. createEmployeeRecords function 

3. createTimeInEvent function

4. createTimeOutEvent function

5. hoursWorkedOnDate function

6. wagesEarnedOnDate funciton

7. allWagesFor function

8. calculatePayroll function
*/

function createEmployeeRecord (array) {
   return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
}
}

function createEmployeeRecords (array) {
    return array.map(createEmployeeRecord)
   
}

function createTimeInEvent(obj, dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    obj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date: date
    })
    return obj
}

function createTimeOutEvent(obj, dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    obj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date: date
    })
    return obj
}

function hoursWorkedOnDate (obj, dateStamp) {
    // Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
    if (obj.timeOutEvents.date === dateStamp && obj.timeInEvents.date === dateStamp) {
        hours = ((obj.timeOutEvents.hour - obj.timeInEvents.hour)/100)
    }
    return hours
}

function wagesEarnedOnDate (obj, date) {
    // call hoursWorkedOnDate on the object and date, then multiply by pay per hour
    return (hoursWorkedOnDate(obj, date) * obj.payPerHour)
}

function allWagesFor (obj) {
    // Using wagesEarnedOnDate, accumulate the value of all dates worked 
    // .reduce maybe, to accumulate the values.
}

function calculatePayroll (array) {
//.map to create a new array of totals from wagesEarnedOnDate called on each object in the array
// .reduce on the new array to reduce the totals down to one. 
    let sum = array.map(hoursWorkedOnDate()).reduce((total, wagesEarned) => {
        return total + wagesEarned
    },0)
    return sum
}
