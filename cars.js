class Vehicle
{
    // constructor to pass in three arguments (make, model, year)
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Information method to output arguments to console
    Information(){
       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

let myVehicle = new Vehicle("VW", "Golf", 2000); // create instance of Vehicle
let vInfo = myVehicle.Information(); // invoke method to output information

class Cars extends Vehicle // extend/inherit parent Vehicle
{
    // constuctor to pass four arguments (make, model, year, doors)
    constructor(make, model, year, doors){
        super(make, model, year); // super to get arguments from parent Vehicle
        this.doors = doors;
    }

    // Information method to output arguments to console
    Information(){
        super.Information(); // super to invoke Information method from parent Vehicle
        console.log(`Doors: ${this.doors}`);
    }
}

let myCar = new Cars ("VW", "Polo", 2020, 4); // create instance of Cars
let cInfo = myCar.Information(); // invoke method to output information