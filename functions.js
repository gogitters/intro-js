// RUBY METHOD
// def say_hello
//   puts "Hello"
// end
// say_hello

// JAVASCRIPT FUNCTION (similar to Ruby methods, but still quite different, as you'll see later on.)
// function sayHello() {
//   console.log("Hello!");
// }
// sayHello;



// RUBY METHOD WITH PARAMETERS
// def add_two_numbers(number_one, number_two)
//   number_one + number_two
// end
// puts add_two_numbers(1, 99)

// JAVASCRIPT FUNCTION WITH PARAMETERS
// function addTwoNumbers(numberOne, numberTwo) {
//     return numberOne + numberTwo;
// }
// console.log(addTwoNumbers(1, 99));



// RUBY SCOPE
// x = "hello"
// def do_something
//   x = "Zebra"
// end
// do_something
// puts x

// JAVASCRIPT SCOPE
// var x = "hello";
// function doSomething() {
//   console.log(x);
//   var x = "Zebra";
//   // return x;
// }
// // var y = doSomething();
// console.log(doSomething());
// // console.log(x);



// JAVASCRIPT CLASSICAL DEFINITION OF FUNCTION:
// function cool() {
//   console.log("A variable can contain a function!");
// }
// cool();
// console.log(typeof cool);

// JAVASCRIPT "FIRST CLASS CITIZEN" FUNCTION
// var cool = function() {
//   console.log("A variable can contain a function!");
// };
// cool();
// console.log(typeof cool);
//
// Functions can also, therefore, be one of the properties of an object
// var car = {
//   model: "Buick",
//   year: 2004,
//   miles: 20000,
//   printMessage: function() {
//     return this.model + " has done " + this.miles + " miles";
//   }
// };
// console.log(car["model"]);
// console.log(car.year);
// console.log(car.printMessage());
// console.log(car.printMessage);



// RUBY CLASS:
// class Car
//   attr_accessor :model, :year, :miles

//   def initialize(model, year, miles)
//     @model = model
//     @year = year
//     @miles = miles
//   end

//   def print_message
//     puts "#{model} has done #{miles} miles"
//   end
// end

// civic = Car.new("Honda Civic", 2009, 20000)
// mondeo = Car.new("Ford Mondeo", 2010, 5000)
// puts civic
// puts civic.year
// puts civic.print_message

// JAVASCRIPT CONSTRUCTORS (the closest thing to Ruby classes)
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
  this.printMessage = function() {
    return this.model + " has done " + this.miles + " miles";
  };
}

var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);
var empty = new Car();
console.log(empty);
console.log(civic);
console.log(civic.year);
console.log(mondeo.year);
console.log(mondeo.printMessage());
console.log(civic.printMessage());
civic.condition = "new";
console.log(civic);
console.log(civic.condition);