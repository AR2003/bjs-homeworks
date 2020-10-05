function getResult(a,b,c){
    let D = b ** 2 - 4 * a * c;
    if (D<0) {
      return [];
    } else if ( D == 0) {
      return ([-b / 2 * a]); 
    } else {
      return ([((-b + Math.sqrt(D)) / 2 * a),((-b - Math.sqrt(D)) / 2 * a)]);	
    }    
}

function getAverageMark(marks){
    let averageMark = 0;
    
    if (marks.length == 0) {
    	return 0;
    } else if (marks.length > 5) {
    	console.log("Количество оценок превышает 5 и будет сокращено")
    	marks = marks.slice(0,5);
    }

    for (let i = 0; i < marks.length; i++) {
    	averageMark += marks[i];       	  	
    }

    return averageMark/marks.length;
}

function askDrink(name,dateOfBirthday){
   // let d = new Date();
   // currentYear = d.getFullYear();
   // yearOfBorn = dateOfBirthday.getFullYear();
    
    if ((new Date().getFullYear() - dateOfBirthday.getFullYear()) < 18) {
    	return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);    	
    } else {
    	return (`Не желаете ли олд-фэшн, ${name}?`);
    }    
}