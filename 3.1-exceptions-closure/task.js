// Задание 1


function parseCount(inputParameter) {
	let quantity = parseInt(inputParameter, 10);
		if (Number.isNaN(quantity)) {
          throw new Error("Невалидное значение");
		} 
  return quantity;
}


function validateCount(inputParameter) {	
	try { 		
		return parseCount(inputParameter);
	} catch(e) { 
		console.log("Невалидное значение");	
    return e;   
	}	
   
}


// Задание 2


class Triangle {
	constructor (a,b,c) {	 
	  if (((a+b) < c) || ((a+c) < b) || ((b+c) < a)) {
	  	throw new Error("Треугольник с такими сторонами не существует");
	  }
      this.sideA = a;
      this.sideB = b;
      this.sideC = c;   
	}
    
    getPerimeter () {   
      return(this.sideA + this.sideB + this.sideC);
    }

     getArea () {       
      let halfP = this.getPerimeter()/2;
      let S = Math.sqrt(halfP*(halfP-this.sideA)*(halfP-this.sideB)*(halfP-this.sideC));      
      return +S.toFixed(3);
    }
}


function getTriangle(a,b,c) {
	try {
	  triangleObject = new Triangle(a,b,c);
  } catch (e) {
         triangleObject = {
          getPerimeter: function() {
            return("Ошибка! Треугольник не существует"); 
          } ,
          getArea: function() {
            return("Ошибка! Треугольник не существует"); 
          }
        } 
  } 
  return triangleObject;
}

