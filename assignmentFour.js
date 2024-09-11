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


// function sendNotification(email) {

//     const atRate = email.split("@");
//     const userName = atRate[0];
//     const domainName = atRate[1];


//     if(userName === "" || domainName ==="" || email.indexOf("@")=== -1){
//         return "Invalid Email";
//     }
    
//     return userName + " sent you an email from "+domainName
//     }
//     console.log(sendNotification("shafriki.cse@gmail.com"));
//     console.log(sendNotification("@gmail.com"));
//     console.log(sendNotification("shafriki.cse@"));
//     console.log(sendNotification("shafriki.csegmail.com"));


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
    console.log(checkDigitsInName("shimul2300"));
    console.log(checkDigitsInName("shimul"));
    console.log(checkDigitsInName(["raj"]));