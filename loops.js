// RUBY CONDITIONALS
// if x > 50
//   puts "High number"
// elsif x < 25
//   puts "Low number"
// elsif x == 31
//   puts "My favorite number"
// else
//   puts "Medium number"
// end

// JAVASCRIPT CONDITIONALS:
// var x = 1313131;
// if (x > 50) {
//   console.log("hello there");
//   console.log("High number");
// } else if (x < 25) {
//   console.log("Low number");
// } else if (x === 31) {
//   console.log("My favorite number");
// } else {
//   console.log("Medium number");
// }



// RUBY EQUALITY CHECK:
// 5 == 5  # true
// 5 == "5"  # false
// 5 != "5"  # true

// JAVASCRIPT EQUALITY CHECK:
// 5 == 5 // true
// 5 == "5" // true
// 5 === "5" // false
// 5 !== "5" // true
// 5 != "5" // false



// RUBY FALSEY:
// puts "WAT" if false
// puts "WAT" if nil

// JAVASCRIPT FALSEY
// if (false) { console.log("WAT"); }
// if (null) { console.log("WAT"); }
// if (undefined) { console.log("WAT"); }
// if (0) { console.log("WAT"); }
// if ("") { console.log("WAT"); }
// if (NaN) { console.log("WAT"); }



// RUBY RANDOM NUMBER
// rand(1..10)

// JAVASCRIPT RANDOM NUMBER
// Math.floor((Math.random() * 10) + 1);



// RUBY WHILE LOOPS
// i = 0
// text = ""
// while i < 10
//   text = text + " The number is " + i
//   i += 1
// end
// puts text

// JAVASCRIPT WHILE LOOPS
// var i = 0;
// var text = "";
// while (i < 10) {
//     text = text + " The number is " + i;
//     i++;
// }
// console.log(text);



// RUBY FOR LOOP
// for i in 0...10
//   puts i
// end

// JAVASCRIPT FOR LOOP
// var j = 15;
// for (var i = 20; i >= j; i--) {
//   console.log(i);
// }
//
// Logical equivalent of the above for loop:
// var i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }
//
// What the above for loop means in English:
// for(let's set an arbitrary variable called i to be set to 0;
// let's continue running the loop as long as i is less than 10;
// each time the loop runs, increase i by 1.)
// Essentially, this is a loop running 10 times, and in each pass through,
// i will be increased by 1. It starts at 0, and ends at 9.



// RUBY EACH THROUGH ARRAY
// words = ["apple", "banana", "carrot", "date", "escarole", "fig", "gourd", "hmm", "igloo", "jam", "kazoo", "lamp", "mouse"];
// words.each do |word|
//   puts word
// end

// JAVASCRIPT EACH THROUGH ARRAY
// var words = ["apple", "banana", "carrot", "date", "escarole", "fig", "gourd", "hmm", "igloo", "jam", "kazoo", "lamp", "mouse"];
// for (var i = 0; i < words.length; i++) {
//   console.log(words[i]);
// }

// var array = [{name: "Foo"}, {name: "Bar"}];

// console.log(array[0]["name"]);

var pets = ["Dog", "cat", "bird"];

console.log(pets.indexOf(0));