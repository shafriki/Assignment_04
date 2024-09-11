function calculateTax(income, expenses) {

    if(0 <= income && 0 <= expenses && income >= expenses) {
        return monthlyTax =(income - expenses)*0.20;
    }
    else {
        return "Invalid Input";
    }
 }





function sendNotification(email) {

    const atRate = email.split("@");
    const userName = atRate[0];
    const domainName = atRate[1];

    if(userName === "" || domainName ==="" || email.indexOf("@")=== -1){
        return "Invalid Email";
    }
    return userName + " sent you an email from "+domainName;
}





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





function waitingTime(waitingTimes , serialNumber) {
    if (typeof waitingTimes !== "object" || typeof serialNumber !== "number") {
      return "Invalid Input";
    }
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += waitingTimes[i];
    }
    let avgTime = Math.round(totalTime / waitingTimes.length);
    if (waitingTimes.length >= serialNumber - 1) {
      return 0;
    } else {
      return (serialNumber - 1 - waitingTimes.length) * avgTime;
    }
  }

    