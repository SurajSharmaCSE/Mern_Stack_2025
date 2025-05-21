class person 
{
    constructor(name,age)
    {
        this.name = name;
        this.age  = age;
    }

    showDetails(){
        return this.name;
    }
}

class personChild extends person
{
    constructor()
    {
        super('Steve');
    }
}

person1 = new personChild();
console.log( person1.showDetails() );