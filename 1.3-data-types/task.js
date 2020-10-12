
function calculateTotalMortgage(percent, contribution, amount, date) {
          
	"use strict";

	// проверка и по возможности преобразование введенных данных в число c использованием отдельной функции
	let numberedPercent = checkTypeNumber(percent);
	let numberedContribution = checkTypeNumber(contribution);
	let numberedAmount = checkTypeNumber(amount);

	if  (numberedPercent == "typeError") {
       alert(`Параметр ставка кредита(percent) содержит неправильное значение ${percent}`);
       return;  
 	}
    
    
	if  (numberedContribution == "typeError") {
       alert(`Параметр сумма первоначального взноса(contribution) содержит неправильное значение ${contribution}`);
       return;  
 	}      

    
	if  (numberedAmount == "typeError") {
       alert(`Параметр сумма кредита(amount) содержит неправильное значение ${amount}`);
       return;  
 	}     

 	    
    let calculationPeriod = (date.getFullYear() - new Date().getFullYear())*12 - new Date().getMonth() + date.getMonth();  
    let totalMortgage =  (numberedAmount - numberedContribution)*(numberedPercent/12/100 + (numberedPercent/12/100)/((Math.pow(1+numberedPercent/12/100,calculationPeriod)-1)))*calculationPeriod;
    
    console.log(totalMortgage.toFixed(2));
    return Number(totalMortgage.toFixed(2));
    	
        
}

function getGreeting(name) {
    let greeting = ''; 
	if (typeof(name) == "string") {		
		greeting = `Привет, мир! Меня зовут ${name}`;
	} else {
		greeting = `Привет, мир! Меня зовут Аноним`;
		alert(`Привет, мир! Меня зовут Аноним`);
	}

     alert(greeting);
     console.log(greeting);
     return greeting;
   
}

function checkTypeNumber(inputParameter) {
	if (typeof(Number(inputParameter)) === "number")  {
       return Number(inputParameter); 
    } 
    return("typeError")  
}