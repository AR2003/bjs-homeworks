class AlarmClock {
	constructor() {	   	
      this.alarmCollection = [];
      this.timerId = undefined;
	}

	addClock(timer,fn,id) {
	 if (id == undefined) {
       throw new Error(`Невозможно идентифицировать будильник. Параметр id не передан`)
	 }	
     if ((this.alarmCollection > 0) && (this.alarmCollection.some(alarm => alarm.alarmId == id) == true)) {
     	console.error("Будильник с таким ID уже существует")
     }

    this.alarmCollection.push(
    	{alarmId: id,
    	 time: timer,
    	 callback: fn });   

	}

	removeClock(id) { 
		let numberElementsBefore = this.alarmCollection.length;
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.alarmId !== id)
        if (this.alarmCollection.length > numberElementsBefore) {return true}; 
        return false; 
	}

	getCurrentFormattedTime() {
		let currentFormattedTime = new Date(); 
		return String(currentFormattedTime).substr(16,5);
	// альтернативное форматирование времени	
    //       return (String(currentFormattedTime.getHours()).length ==2) ?  String(currentFormattedTime.getHours()) : ("0"+String(currentFormattedTime.getHours()))+":"+
	// (String(currentFormattedTime.getMinutes()).length ==2) ?  String(currentFormattedTime.getMinutes()) : ("0"+String(currentFormattedTime.getMinutes())) 

	}

	// checkClock() {
	// 	this.alarmCollection.forEach(item => {let currentTime = this.getCurrentFormattedTime();
	// 	    if (currentTime == item.time)	{
	// 	  	item.callback();
	// 	    }
	// 	} )	
	// } 
    
    
	start () {

	function checkClock(th) {
		th.alarmCollection.forEach(item => {let currentTime = th.getCurrentFormattedTime();
		    if (currentTime == item.time)	{
		  	item.callback();
		    }
		} )	
	} 
		
		if (this.timerId == undefined) {
			this.timerId = setInterval(() => checkClock(th), 5000)
		}
		
	}

    stop () {
    	if (this.timerId !== undefined) {
			clearTimeout(this.timerId);
			this.timerId = undefined;
		}

	}	

	printAlarms() {
		console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`);
		this.alarmCollection.forEach(item => {console.log(`Будильник №${item.alarmId} заведен на ${item.time}`)} ); 
	}

	clearAlarms() {
		this.alarmCollection = [];
		if (this.timerId !== undefined) {
			clearTimeout(this.timerId);			
			this.timerId = undefined;
		}
	}

}	

let phoneAlarm = new AlarmClock();
phoneAlarm.addClock("22:43",()=>console.log("Пора вставать"),1); 
phoneAlarm.addClock("22:43",()=>console.log("Давай, вставай уже!"),2);
phoneAlarm.addClock("22:44",()=>console.log("Иди умываться"),3);
phoneAlarm.printAlarms();
phoneAlarm.clearAlarms();
phoneAlarm.printAlarms();


testTime = phoneAlarm.getCurrentFormattedTime(new Date());
phoneAlarm.addClock(testTime,()=>console.log("Пора вставать"),1); 
phoneAlarm.addClock(testTime,()=>console.log("Давай, вставай уже!"),2);
phoneAlarm.addClock(testTime,()=>console.log("Иди умываться"),3);
phoneAlarm.start();
phoneAlarm.printAlarms();