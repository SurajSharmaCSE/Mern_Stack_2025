
let person1 = {
    name:'Adam',
    age:25
}

let showDetails = function(city,state){
    console.log(this.name+" "+this.age+" "+city+" "+state);
}


// Example of Simple Bind Function
// way1
let showDetailsBind = showDetails.bind(person1,'Noida','UP');
showDetailsBind();
// way2
// let showDetailsBind = showDetails.bind(person1,'Noida');
// showDetailsBind('UP');


// Create Own Bind Function
Function.prototype.myBind = function(...args){
   let obj = this;  // take here person1 object
   params = args.slice(1);
   return function(...args2){
    obj.apply(args[0],[...params,...args2]);
   }
}

// way1
let showDetailsMyBind1 = showDetails.myBind(person1,'Lucknow','UP');
showDetailsMyBind1();
// way2
// let showDetailsMyBind1 = showDetails.myBind(person1,'Lucknow');
// showDetailsMyBind('UP');