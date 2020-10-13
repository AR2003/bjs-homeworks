
function calculateTotalMortgage(percent, contribution, amount, date) {
          
	"use strict";

	// проверка и по возможности преобразование введенных данных в число c использованием отдельной функции
	let numberedPercent = checkTypeNumber(percent);
	let numberedContribution = checkTypeNumber(contribution);
	let numberedAmount = checkTypeNumber(amount);

	if  (numberedPercent == "typeError") {
       return(`Параметр ставка кредита(percent) содержит неправильное значение ${percent}`);
         
 	}
    
    
	if  (numberedContribution == "typeError") {
       return(`Параметр сумма первоначального взноса(contribution) содержит неправильное значение ${contribution}`);
         
 	}      

    
	if  (numberedAmount == "typeError") {
       return(`Параметр сумма кредита(amount) содержит неправильное значение ${amount}`);
         
 	}     

 	  numberedPercent = numberedPercent/12/100;    
    let calculationPeriod = (date.getFullYear() - new Date().getFullYear())*12 - new Date().getMonth() + date.getMonth();  
    let totalMortgage =  (numberedAmount - numberedContribution)*(numberedPercent + (numberedPercent)/((Math.pow(1+numberedPercent,calculationPeriod)-1)))*calculationPeriod;
    
    console.log(totalMortgage.toFixed(2));
    return Number(totalMortgage.toFixed(2));
    	
        
}

function getGreeting(name) {
    let greeting = ''; 	
		greeting = `Привет, мир! Меня зовут ${((String(name)=="null")||(String(name)=="undefined")||(name.trim().length==0))? "Аноним" : name}`;
	  console.log(greeting);
    return greeting;
   
}

function checkTypeNumber(inputParameter) {
  if (isNaN(Number(inputParameter)) == true)  {
      return("typeError");        
    } else  {
      return Number(inputParameter);
    }
    
	if (typeof(Number(inputParameter)) === "number")  {
       return Number(inputParameter); 
    } 
    return("typeError")  
}