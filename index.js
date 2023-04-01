/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(arr){
    return{
        firstName:arr[0],
        familyName:[1],
        title:[2],
        payPerHour:[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}
function createEmployeeRecords(arr){
    let obj=[]
    for(let record of arr){
        obj.push(createEmployeeRecord(record))
    }
    return obj
}
function createTimeInEvent(time){
    //her we are turning YYYY-MM-DD HHMM into y-m-d,h by using split(' ')
    let newTime=time.split(' ')
    let obj={type:"TimeIn", hour:parseInt(newTime[1]), date:newtime[0]}
    this.timeInEvents.push(obj)
    return this
}
function createTimeOutEvent(time){
    //her we are turning YYYY-MM-DD HHMM into y-m-d,h by using split(' ')
    let newTime=time.split(' ')
    let obj={type:"TimeOut", hour:parseInt(newTime[1]), date:newtime[0]}
    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(date){
    let timeinobj=this.timeInEvents.find(dateobj=>dateobj.date===date).hour
    let timeoutobj=this.timeInEvents.find(dateobj=>dateobj.date===date).hour

    return (timeoutobj-timeinobj)/100
}

function wagesEarnedOnDate(date){
    return hourseWorkedOnDate.call(this, date)*this.payPerHour
}
function findEmployeeByFirstName(arr,str){
    let found= arr.find(rc=>rc.firstName===str)
 return found
}

function calculatePayroll(collection) {
    let payroll = 0;
    for (let employee of collection) {
      payroll += allWagesFor(employee);
    }
    return payroll;
  }