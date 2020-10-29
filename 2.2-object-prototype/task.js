
 String.prototype.isPalindrome = function() {	
   let str =  this.replace(/\s+/g, '').toLowerCase();
   let backStr = "";
   for (let i=this.length; i>=0; i--) {
      backStr += str.substr(i,1);
     }
     if (str == backStr) { return true 
      } else {
     	return false
     }
   } 


function getAverageMark(marks) {
  let averageMark = 0;	
  for (let i=0; i < marks.length; i++) {
     averageMark += marks[i];
  }	
  if (marks.length == 0) {
  	return averageMark;
  } else {
  	return Math.round(averageMark/marks.length);
  }
}


function checkBirthday(birthday) {
	let now = new Date();	
	birthday = (new Date(Number(birthday.substr(0,4)),Number(birthday.substr(5,2))-1,Number(birthday.substr(8,2))));
	let numberOfBigFebruary = 0;

	// расчет количестве високосных годов(месяцев февраль с 29 днями, находящихся между датой рождения и текущей датой)
    for (i = birthday.getFullYear(); now.getFullYear() >= i; i++)  {
    	if (((i % 4 == 0) && (i % 100 !== 0)) || ((i % 4 == 0) && (i % 100 == 0) && (i % 400 == 0))) {
           numberOfBigFebruary++; 
    	}
      }


     if (birthday.getMonth() > 2) {
     	numberOfBigFebruary--;
        } 

    if (now.getMonth() < 3) {
     	numberOfBigFebruary--;
        }

     let diff = (now.getTime() - birthday.getTime())/(24 * 3600 * 1000) + numberOfBigFebruary
     if (diff / 365 > 18) {
     	return true
     } else {
     	return false
     }

    

}