// problem -1

function calculateTax(income, expenses) {
    
    if(0 <= income && 0 <= expenses && income >= expenses) {
        
        const harunHave = (income - expenses);
        const monthlyTax = (harunHave * 0.20);

        return monthlyTax;
    }
    else {
        return "Invalid Input";
    }

 }

//  console.log(calculateTax(10000, 3000));
//  console.log(calculateTax(34000, 1753));
//  console.log(calculateTax(5000, 1500));
//  console.log(calculateTax(7000, 7000));
//  console.log(calculateTax(-5000, 2000));
//  console.log(calculateTax(6000, -1500));



// problem -2


function sendNotification(email) {

    
    }