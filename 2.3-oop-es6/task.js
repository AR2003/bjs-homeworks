
// Задание 1

class PrintEditionItem {
	constructor (name,releaseDate,pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix () {
		this.state = this.state * 1.5;	
	}

    get state() {
    	return this._state
    } 

	set state(value) {
		if (value > 100) {
			this._state = 100;			
		} else {
			this._state = value;
		}
	}    
}


const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


class Magazine extends PrintEditionItem {
	constructor (name,releaseDate,pagesCount) {
      super(name,releaseDate,pagesCount);
      this.type = "magazine"; 
	}
}


class Book extends PrintEditionItem {
	constructor (author,name,releaseDate,pagesCount) {
      super(name,releaseDate,pagesCount);
      this.author = author;
      this.type = "book"; 
	}
}

class NovelBook extends Book {
	constructor (author,name,releaseDate,pagesCount) {
      super(author,name,releaseDate,pagesCount);      
      this.type = "novel"; 
	}
}

class DetectiveBook extends Book {
	constructor (author,name,releaseDate,pagesCount) {
      super(author,name,releaseDate,pagesCount);      
      this.type = "detective"; 
	}
}

class FantasticBook extends Book {
	constructor (author,name,releaseDate,pagesCount) {
      super(author,name,releaseDate,pagesCount);      
      this.type = "fantastic"; 
	}
}

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15



// Задание 2


class Library {
  constructor (name) {
		this.name = name;
		this.books = [];				
	}
 
  addBook (book) {
    if (book.state > 30) {
    	this.books.push(book);
    } 
  }

  findBookBy (type, value) {
  	for (let i = 0; i<this.books.length; i++) {
  		if (this.books[i][type] === value) {
  			return this.books[i] 
  		}
  	}
  	return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i<this.books.length; i++) {
  		if (this.books[i].name === bookName) {
  			let givenBook = this.books[i];
  			this.books.splice(i,1);
  			return givenBook 
  		}
  	}
  	return null; 
  }

}


const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3



// Задание 3

class StudentLog {
	constructor (name) {
		this.name = name;
		this.algebra = [],
	    this.geometry = [],
	    this.russian = [],
	    this.physics = [],
	    this.music = [],
	    this.english = [],
	    this.poetry = [],
	    this.chemistry = [],
	    this.french = []				
	}

    getName ()  {
    	return this.name;
    }

    addGrade(grade, subject) {
    	for (let subjectCounter in this) {
    		if (subjectCounter == subject) {
    			if ((grade >= 1) && (grade <= 5)) {
    			  this[subject].push(grade);	
    			} else {
    				console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
    			}   
    			return this[subject].length; 			
    		}
    	}
    	console.log(`Вы пытались поставить оценку ${grade} по неизвестному предмету ${subject}.`)  
    	return null  	
    	 
    	}  

    getAverageBySubject(subject) {
    	if (!this.hasOwnProperty(subject)) {
    	   console.log(`Вы пытались получить средний балл по несуществующему предмету ${subject}.`)
    	   return null   	
    	} 
    	let marksSumma = 0; 
        for (let i = 0; i < this[subject].length; i++) {
            marksSumma += this[subject][i]; 
        }
        if (this[subject].length !== 0) {
         return marksSumma/this[subject].length
        } else {return 0
          }
    }	    


    getTotalAverage() {
      let subjectArray = ["algebra","geometry","russian","physics","music","english","poetry","chemistry","french"];
      let averageMarksSumma = 0;
      let nonZeroAverageMarks = 0;
      let averageSubjectMark = 0;
      for (let i=0 ; i < subjectArray.length; i++) {
         averageSubjectMark = this.getAverageBySubject(subjectArray[i]);
         if (averageSubjectMark !== 0) {
           averageMarksSumma += averageSubjectMark;
           nonZeroAverageMarks++;
         } 
      }
      if (nonZeroAverageMarks !==0) {
        return averageMarksSumma/nonZeroAverageMarks;
      }  
    }

}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 2

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1



const log1 = new StudentLog('Олег Петров');

log1.addGrade(2, 'algebra');
log1.addGrade(4, 'algebra');
log1.addGrade(5, 'geometry');
log1.addGrade(4, 'geometry');

console.log(log1.getAverageBySubject('geometry')); // 4.5
console.log(log1.getAverageBySubject('algebra')); // 3
console.log(log1.getAverageBySubject('math')); // 0


const log2 = new StudentLog('Олег Иванов');

log2.addGrade(2, 'algebra');
log2.addGrade(4, 'algebra');
log2.addGrade(5, 'geometry');
log2.addGrade(4, 'geometry');

console.log(log2.getTotalAverage()); // 3,75