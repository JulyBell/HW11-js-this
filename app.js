//task 1

let counter = {
	index : 0,
	up : function(index){ return this.index += 1; },
	down : function(index){ return this.index -= 1; },
	showStep : function(index){ return this.index}
}

counter.up();
counter.up();
counter.up();
counter.up();
counter.down();
console.log(counter.showStep());

//task 2

function Calculator(){

	this.sum = function(firstNum){
		return function (secondNum){	
			return firstNum + secondNum;
		}
	}

	this.substract = function(firstNum){
		return function (secondNum){	
			return firstNum - secondNum;
		}
	}

	this.multiply = function(firstNum){
		return function (secondNum){	
			return firstNum * secondNum;
		}
	}

	this.divide = function(firstNum){
		return function (secondNum){	
			return firstNum / secondNum;
		}
	}

}

let action = new Calculator();
console.log(action.sum(4)(5));
console.log(action.substract(4)(5));
console.log(action.multiply(4)(5));
console.log(action.divide(4)(5));
