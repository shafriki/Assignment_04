function calculateTax(income, expenses) {
    
    if(0 <= income && 0 <= expenses && income >= expenses) {

        return monthlyTax =(income - expenses)*0.20;
    }
    else {
        
        return "Invalid Input";
    }
 }

// console.log(calculateTax(10000,3000));
// console.log(calculateTax(34000,1753));
// console.log(calculateTax(5000,1500));
// console.log(calculateTax(7000,7000));
// console.log(calculateTax(-5000,2000));
// console.log(calculateTax(6000,-1500));


// problem -2


function sendNotification(email) {

    const atRate = email.split("@");
    const userName = atRate[0];
    const domainName = atRate[1];

    if(userName === "" || domainName ==="" || email.indexOf("@")=== -1){
        return "Invalid Email";
    }
    return userName + " sent you an email from "+domainName;
}
    console.log(sendNotification("shafriki.cse@gmail.com"));
    console.log(sendNotification("@gmail.com"));
    console.log(sendNotification("shafriki123.cse@gmail.com"));
    console.log(sendNotification("shafriki.csegmail.com"));


// problem 3
function checkDigitsInName(name) {

    if(typeof name !== "string") {
        return "Invalid Input"
       }
       else {
            for(let givenName = 0; givenName < name.length; givenName++) {
                    if(name[givenName] >= "0" && name[givenName] <= "9") {
                        return true;
                    }     
            } 
            return false;
    }
}
// console.log(checkDigitsInName("shimul2300"));
// console.log(checkDigitsInName("shimul"));
// console.log(checkDigitsInName(["raj"]));

// problem 4
function calculateFinalScore(obj) {

    let name =obj.name;
    let testScore =obj.testScore;
    let schoolGrade =obj.schoolGrade;
    let isFFamily = obj.isFFamily;

    if (typeof obj !=="object" || typeof name !=="string" || typeof testScore !=="number" || testScore < 0 || testScore > 50 || typeof schoolGrade !=="number" || schoolGrade > 30 || schoolGrade < 0 || typeof isFFamily !=="boolean") {
        return "Invalid Input";
    }
    let totalMarks = (schoolGrade + testScore);
    
    if(isFFamily === true) {
        totalMarks = totalMarks + 20;
    }
    let isAdmit = (totalMarks >= 80);
    return isAdmit;  
}

// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true })); // true
// console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false })); // false
// console.log(calculateFinalScore("hello")); // Invalid Input
// console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true })); // false

// problem 5
function waitingTime(waitingTimes , serialNumber) {
    // You have to write your code here
    if(Array.isArray(waitingTime) === false || typeof serialNumber !== "number") {
        return "Invalid Input";
    }
    }

     
    