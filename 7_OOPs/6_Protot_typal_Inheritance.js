let person1 = {
   name : 'Adam',
   age : 25,
   showDetails : function(){
    console.log(`name: ${this.name}, age: ${this.age}`);
   }
}

let person2 = {
    name : "Steve"
}

person2.__proto__ = person1
person2.showDetails();