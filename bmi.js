class BMI 
{
    // constructor to pass in two arguments (height, weight)
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    // calculateBMI method to calculate BMI
    calculateBMI(){
        // formula to calculate BMI
        let bmi = this.weight/(this.height**2);
        return bmi; //return calculated bmi
    }
}

let myBMI = new BMI(2,90); // create instance
let calc = myBMI.calculateBMI(); // invoke method to calculate BMI
console.log(calc); // get output to console