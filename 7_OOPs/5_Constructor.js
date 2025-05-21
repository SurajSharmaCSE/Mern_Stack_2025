function car(brand, model, color)
{
    this.Brand = brand
    this.Model = model
    this.Color = color

    this.drive = function(){
        console.log("I'm driving"+this.Model);
    }
}

let car1 = new car('BMW','XS','white') // this -> {}
let car2 = new car('Mercedes','S class','Red') // this -> {}

console.log(car1);
console.log(car2);

// call Function 
car1.drive();



