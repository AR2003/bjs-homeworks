 /*
	Кратко о работе с функциями:
	1) Значения в скобках - это аргументы, которые мы получаем в момент вызова функции. Их и надо присваивать требуемым в заданиях переменным.
	2) После ключевого слова return вместо комментария необходимо написать переменную либо выражение с ответом.
	3) console.log() прописывать не обязательно, т.к. команда return уже означает вывод результата работы функции.
 */

function averageMark(a, g, p) {
 /*
  так как явно не указано количество оценок по каждому предмету - предполагаем неопределенное количество
  средняя оценка по трем предметам считается на основании не общего количества всех оценок, а на основании средних по каждому предмету     
 */

	let algebra = String(a);
	let geography = String(g);
	let physics = String(p);
	let avrAlgebra = 0;
	let avrGeography = 0; 
	let avrPhysics = 0;


	for (let i = 0; i < algebra.length; i++ ) {
		avrAlgebra = avrAlgebra + Number(algebra[i]); 
	}     
	avrAlgebra = avrAlgebra/algebra.length;  

    for (let i = 0; i < geography.length; i++ ) {
		avrGeography = avrGeography + Number(geography[i]); 
	}     
	avrGeography = avrGeography/geography.length;

    for (let i = 0; i < physics.length; i++ ) {
		avrPhysics = avrPhysics + Number(physics[i]); 
	}     
	avrPhysics = avrPhysics/physics.length;	 

       
	return ((avrAlgebra+avrGeography+avrPhysics)/3);
}

function sayHello(userName) {
	
    let myName = userName;
    let message = `Привет, мир! Меня зовут ${myName}`
    
	return message;
}

function calculateFormula() {
    
	let x = 2;
	let y = 22;
	let z = 0;

	result = x * y + 5 * z + x - 1; 
    
    return result;
}
