
Function.prototype.customCall = function(requiredObject,...args){

    const functionToExecute = this;

    requiredObject.functionToExecute = functionToExecute;

    requiredObject.functionToExecute(...args);

    delete requiredObject.functionToExecute;

}


Function.prototype.customApply = function(requiredObject,args){

    const functionToExecute = this;

    requiredObject.functionToExecute = functionToExecute;

    requiredObject.functionToExecute(...args);

    delete requiredObject.functionToExecute;

}



Function.prototype.customBind = function(requiredObject,args){

    const functionToExecute = this;

    requiredObject.functionToExecute = functionToExecute;

    requiredObject.functionToExecute(...args);

    delete requiredObject.functionToExecute;

}


Function.prototype.customBind = function(requiredObject,...args1){

    const functionToExecute = this;

    return function(...args2){
        functionToExecute.call(requiredObject,...args1,...args2);
    }

}



const parent = {
  health: 50,
  addHealth: function(num1, num2) {
    this.health += num1 + num2;
  }
}

//method borrowing

const child = {
  health: 70
}

// parent.addHealth.customCall(child, 10,20);
//  parent.addHealth.customApply(child,[13,3]);

// const myFn = parent.addHealth.customBind(child,5);
// myFn(10);

// const myFn = parent.addHealth.customBind(child);
// myFn(5,10);

const myFn = parent.addHealth.customBind(child,5,10);
myFn();

console.log(child);
