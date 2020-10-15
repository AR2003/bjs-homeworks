function getsolutions(a,b,c) {
	let result = {};
	let roots = [];
	let D = b ** 2 - 4 * a * c;
	result.D = D;
	if (D<0) {
	  result.roots = [];      
    } else if ( D == 0) {
      result.roots = [-b / (2 * a)]; 
    } else {
      result.roots = [(-b + Math.sqrt(D)) / (2 * a),(-b - Math.sqrt(D)) / (2 * a)];	
    }
    return result;
}

function showSolutionsMessage(a,b,c) {
  alert(`Вычисляем корни квадратного уравнения ${a}x2 + ${b}x + ${c}`);
  let result = getsolutions(a, b, c);
  alert(`Значение дискриминанта: ${result.D}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.roots.length == 0) {
  	alert("Уравнение не имеет вещественных корней");
  	console.log("Уравнение не имеет вещественных корней");
  } else if (result.roots.length == 1) {
  	alert(`Уравнение имеет один корень X1 = ${result.roots[0]}`);
    console.log(`Уравнение имеет один корень X1 = ${result.roots[0]}`);
  } else  {
  	alert(`Уравнение имеет два корня X1 = ${result.roots[0]} ,X2 = ${result.roots[1]}`);
  	console.log(`Уравнение имеет два корня X1 = ${result.roots[0]} ,X2 = ${result.roots[1]}`);
  }	 

}

  showSolutionsMessage(1,2,3);
  showSolutionsMessage(7,20,-3);
  showSolutionsMessage(2,4,2);


function getAverageScore(data) {
  let gradeBook = new Object();
  let allSubjectAverage = 0;	
  let i = 0;
  for (let subject in data) {
    gradeBook[subject] = getAverageMark(data[subject]);
    allSubjectAverage += gradeBook[subject];
    i++; 
    console.log(`${subject}: ${gradeBook[subject]}`)
  }

  if (i>0) {
  	gradeBook.average = allSubjectAverage/i;
  	console.log(`average: ${gradeBook.average}`) 
  } 
  
  console.log(gradeBook); //дублирую вывод в консоль как в задании. 
  return gradeBook;

}

function getAverageMark(marks) {
  let averageMark = 0;	
  for (let i=0; i < marks.length; i++) {
     averageMark += marks[i];
  }	
  if (marks.length == 0) {
  	return averageMark;
  } else {
  	return averageMark;
  }
}

getAverageScore ({
	algebra: [2,4,5,2,3,4],
	geometry: [2,4,5],
	russian: [3,3,4,5],
	physics: [5,5],
	music: [2,2,6],
	english: [4,4,3],
	poetry: [5,3,4],
	chemistry: [2],
	french: [4,4]
})


function getPersonData(secretData) {
	let agentName = new Object();
	agentName.firstName = getDecodedValue(secretData.aaa);
	agentName.lastName = getDecodedValue(secretData.bbb);
	return agentName;
	}


function getDecodedValue(secret) {
	if (secret == 0) {
		return "Родриго";
	} else if  (secret == 1) {
        return "Эмильо";
	}

}

console.log( getPersonData({
	aaa: 0,
	bbb: 0
}));

console.log( getPersonData({
	aaa: 1,
	bbb: 0
}));

console.log( getPersonData({
	aaa: 0,
	bbb: 1
}));

console.log( getPersonData({
	aaa: 1,
	bbb: 1
}));
