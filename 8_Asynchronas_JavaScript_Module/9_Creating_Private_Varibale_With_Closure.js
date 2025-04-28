let myfunction = (function(){
  let name = '' //private

  getName = function(){
    return name;
  }

  setName = function(newName){
    name = newName;
  }

  return{
    getName : getName,
    setName : setName
  }
}())

myfunction.setName('Martin');
console.log(myfunction.getName());

