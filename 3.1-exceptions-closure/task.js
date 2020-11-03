// Задание 1


function parseCount(inputParameter) {
	let quantity = parseInt(inputParameter, 10);
	try { 
		if (Number.isNaN(quantity)) {
          throw new Error("Невалидное значение");
		  } 
		} 
		catch (e) {
			throw (e);
		}
	 
    return quantity;
}


function validateCount(inputParameter) {	
	try { 
		let quantity = parseCount(inputParameter);
		return quantity;
		}  catch(e) {
		 console.log("ошибка парсинга" + e);	
         return e;   
		}	
   
}


// Задание 2


class Triangle {
	constructor (a,b,c) {
	  try {	
	  if (((a+b) < c) || ((a+c) < b) || ((b+c) < a)) {
	  	throw new Error("Треугольник с такими сторонами не существует");
	  }
      this.sideA = a;
      this.sideB = b;
      this.sideC = c;
      this.validationError = false; 
      }
      catch (e) {
        this.validationError = true;
      }	
      
	}
    
    getPerimeter () { 
     if (this.validationError) {
     	return("Ошибка! Треугольник не существует");
     }	
      return(this.sideA + this.sideB + this.sideC);
    }

     getArea () { 
      if (this.validationError) {
     	return("Ошибка! Треугольник не существует");
      }	
      let halfP = this.getPerimeter()/2;
      let S = Math.sqrt(halfP*(halfP-this.sideA)*(halfP-this.sideB)*(halfP-this.sideC));      
      return +S.toFixed(3);
    }
}


function getTriangle(a,b,c) {
	try {
	  triangleObject = new Triangle(a,b,c);
      } catch (e) {

      } 
      return triangleObject;
}

