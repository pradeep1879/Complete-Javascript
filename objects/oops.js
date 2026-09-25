// Encapsulation
class BankAccount{
  #balance

  constructor(holderName, balance = 0){
    this.#balance = balance
    this.holderName = holderName
  }

  deposite(amount){
    this.#balance += amount
  }

  withdraw(amount){
    this.#balance -= amount
  }

  getBalance(){
    return this.#balance
  }
}

const account1 = new BankAccount("Pradeep", 100);
 account1.deposite(500);
 console.log(account1.getBalance())
 account1.withdraw(200)
 console.log(account1.getBalance())


 // Abstraction(Hide unnecessary implementation details and expose only what the user needs.)

 class BankAccount{
  #balance
  deposite(amount){
    this.#validateAmount(amount)
    this.#balance += balance
  }

  #validateAmount(amount){
    if(amount <= 0){
      throw new Error("Invalid amount")
    }
  }
 }


 // Inheritance (allows one class to reuse properties and methods from another class.)

 class Car {
  constructor(brand,color){
    this.brand = brand
    this.color = color
  }

  start(){
    console.log(`${this.brand} is starting...`)
  }

  stop(){
    console.log(`${this.brand} is stopping...`)
  }
 }

 class ElectricCar extends Car {
  constructor(brand, color, battery){
    super(brand, color)
    this.battery = battery
  }

  charging(){
    console.log(`${this.brand} is charging...`)
  }
 }

 const tesla = new ElectricCar(
  "Tesla X",
  "Space Gray",
  "100kW"
);

tesla.start()
tesla.stop()
tesla.charging()