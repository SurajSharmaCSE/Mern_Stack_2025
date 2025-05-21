// Call, Apply, Bind Functions

// 1. Call
let person1 = {
    name:'Adam',
    age:25,
}

let person2 = {
    name:"Setve",
    age:20,
}

let showDetails = function(){
    console.log( this.name+" is "+this.age+" year old " );
}

let showDetails_param = function(city,car){
    console.log(`${this.name} is ${this.age} years old , he lives in ${city} and he drives ${car}`);
}

showDetails.call(person2);
showDetails.call(person1);

// Call Use Using Paramters
showDetails_param.call(person1,"Delhi","BMW");
showDetails_param.call(person2,"Patna","Mercedes"); 

// 2. Apply
showDetails_param.apply(person2,["DelhiCity","BMW1"]);

// 3. Bind
let OutputFun = showDetails_param.bind(person2,"DelhiCitymarket","BMW3")
OutputFun();
