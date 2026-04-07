function Student(name, age){
      this.name = name;
      this.age = age;
      this.introduceMySelf = function () {
        console.log(`My name is ${this.name} and my age is ${this.age}`)
      }

}

let s1 = new Student("MKL", 20)
let s2 = new Student("Pradeep", 22);
// console.log(s1)
// console.log(s1.introduceMySelf())
// console.log(s2.introduceMySelf())


function BankAccount(holderName, balance = 0){
        this.holderName = holderName;
        this.balance = balance;
 
}

BankAccount.prototype.deposite = function (balance){
        this.balance += balance
}
BankAccount.prototype.withdraw = function (balance){
        this.balance -= balance
}

let b1 = new BankAccount("pardeep", 100)
// console.log(BankAccount.prototype)
b1.deposite(500);
b1.withdraw(500);
// console.log(b1.holderName)
// console.log(b1.balance)



class Car {
  constructor (name, color, mileage){
    this.name = name;
    this.color = color;
    this.mileage = mileage;
  }
  start(){
    console.log(`${this.name} is starting...`)
  }
  stop(){
    console.log(`${this.name} is stoping...`)    
  }
}

let BMWCar = new Car("BMW", "Dark Blue", 10);
let auddi = new Car("AUDII", "Dark Black", 15);
// console.log(BMWCar)
// console.log(auddi)
// console.log(BMWCar.start())

/** Abstraction (hiding complexity and showing only the essential features) */
/** Encapsulation (hiding data inside objects and provide security) */

class BankAccount1{
    #balance
    constructor (holderName, balance = 199) {
      this.holderName = holderName;
      this.#balance = balance
    }
    deposite (balance){
      this.#balance += balance
    }
    withdraw (balance){
      this.#balance -= balance
    }
    set Balance(balance){
      if(isNaN(balance)){
        console.error("invalid balance");
        return;
      }
      console.log("Balance set successfully")
      this.#balance = balance
    }
    get Balance(){
      return this.#balance
  }
 
}

let myAccount = new BankAccount1("Pradeep Kumar", 1000)
let newBalance =  myAccount.deposite(500);
//console.log(myAccount.#balance) (Property '#balance' is not accessible outside class 'BankAccount1' because it has a private identifier)

myAccount.Balance = 999; // new method to get balance
console.log(myAccount.Balance)


/** Inheritance (using properties and methods from another object/class) */
/** 
 * Reuse existing code
 * Create logical relationships(is-a)
 * Reduce duplication
 * Easier maintanance and scalability
 */

class Car0 {
  constructor (brand, color){
    this.brand = brand;
    this.color = color;
  }
  start(){
    console.log(`${this.brand} is starting...`)
  }
  stop(){
    console.log(`${this.brand} is stoping...`)
  }

}

class ElectricCar extends Car0 {
  constructor(brand, color, battery){
    super(brand, color);
    this.battery = battery;
  }
  charging(){
    console.log(`${this.brand} is charing...`)
  }
}
let tesla = new ElectricCar("Tesla X", "Space Gray", "100kW")
console.log(tesla.battery)
console.log(tesla.stop())

/** Polymorphism (same method behaving differently based on the object)*/

class MediaPlayer{
  play(){
    console.log(`Play Media.`)
  }
}

class Music extends MediaPlayer {
  play(){
    console.log("Play Music.")
  }
}

class Video extends Music {
  play(){
    console.log("Play Video.")
  }
}

let MD1 = new MediaPlayer();
let MD2 = new Music();
let MD3 = new Video();
console.log(MD1.play());
console.log(MD2.play());
console.log(MD3.play());