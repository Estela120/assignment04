//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step. Be sure to place all of your JavaScript code within an external script file:
//1 Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 
	//   ANSWER
//var ANIMAL = ANIMAL || {};


//2 Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.
//3 Directly underneath, create a new instance of the Dog class.
//   ANSWERS
//var Cat = {    //litteral notation
//        catName: "Lulu",
//        catNumberOfTeeth: 30
//    };
//
//function Dog() {   //constructor notation
//    'use strict';
//    this.dogName = dogName;
//    this.dogNumberOfTeeth = dogNumberOfTeeth;
//}
//var myDog = new Dog("Pepe", 42);


//4 Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window. 
    //   ANSWER
//var Animal = function (animalType) {
//	'use strict';
//	this.animal = animalType;
//	this.message = function () {
//		return ("The Animal has been created");
//	};
//};
//
//var animal_1 = new Animal("cat");
//
//window.console.log(animal_1.message);


//5 Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.
   //  ANSWER
//var Animal = function (animalType) {
//	'use strict';
//	this.animal = animalType;
//	this.message = function () {
//		return ("The animal " + animalType + " has been created");
//	};
//};
//	
//var myAnimal = new Animal("tiger");
//window.console.log(myAnimal.message());


//6 Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation. 
   //   ANSWER
//function Animal(aniType, aniBreed, aniColor) {
//	"use strict";
//    this.animalType = aniType;
//	this.animalBreed = aniBreed;
//	this.animalColor = aniColor;
//	this.displayAnimal = function (aniHeight, aniLength) {
//		return ("This animal is " + aniHeight + " ft tall and " + aniLength + " long ");
//    };
//}
//var myAnimal = new Animal('mammal', 'Rottweiler', 'black');
//window.console.log(myAnimal.displayAnimal(3,5));


//7 Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.
  //   ANSWER
//var p;
//var Animal = function (aniType, aniBreed, aniColor) {
//	"use strict";
//    this.animalType = aniType;
//	this.animalBreed = aniBreed;
//	this.animalColor = aniColor;
////	this.inObject = function () {
////	    for (var p in Animal) {
////        return (this.animalType, this.animalBreed, this.animalColor);
////		};
////	};
//};
//var myAnimal = new Animal('mammal', 'Rottweiler', 'black');
//
//for (var prop in myAnimal) {
//	window.console.log(prop);
//}


//8 Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.
       //   ANSWER
//function Animal(animalType, animalColor) {
//	"use strict";
//	this.aniType = animalType;
//	this.aniColor = animalColor;
//	this.speak = function () {
//		if (this.aniType === "dog") {
//			return "The " + this.aniColor + " dog is barking!";
//		} else {
//			return "The " +  this.aniColor + " cat is meowing!";
//		}
//	};
//};
//
//    var myAnimal = new Animal("dog", "black");
//    window.console.log(myAnimal.speak());


//9 Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
	//   ANSWER
//var animal = function (type) {
//	"use strict";
//	var animalType = type;
//	switch (animalType) {
//    case "dog":
//		window.console.log("This is a dog");
//		break;
//	case "cat":
//		window.console.log("This is a cat");
//		break;
//	default:
//		window.console.log("This is not an option");
//	}
//};
// 
//animal("cat");
////animal("dog");
////animal("xx");

	
//10 Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.
//The Recipe Card (15 points)	
//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
//Guacamole
//Serves: 4
//Ingredients: 
//- 3 Avocados
//- 1 Lime
//- 1 Teaspoon Salt
//- 1/2 Cup Onion
//- 3 Tablespoons Cilantro
//- 2 Diced Tomatoes
//- 1 Teaspoon Garlic
//- 1 Pinch Ground Pepper
	//ANSWER
//var words = [];
//var i = 0;
//var str = "Preheat oven to 375 degrees F. Whisk eggs and water together in a shallow dish. Combine Parmesan cheese, bread crumbs, salt, and ground black pepper in a separate shallow dish";
//var words = str.split(" ");
// // alert(words);
//
//var count = {};
//words.forEach(function (i) {
//	"use strict";
//	count[i] = (count[i] || 0) + 1;
//});
//window.console.log(words, count[i], "<\br>");


//The Reading List (15 points)
//Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.
	//   ANSWER 1 - WORKING
//var books = 
//[
// {title:"Xx1", author:"Yy1", read: true},
// {title:"Xx2", author:"Yy2", alreadyRead: true},
// {title:"Xx3", author:"Yy3", alreadyRead: false},
// {title:"Xx4", author:"Yy4", alreadyRead: true},
// {title:"Xx5", author:"Yy5", alreadyRead: false},
//]
//
//for ( var i = 0; i < books.length; i++ ){
//    if (books[i].alreadyRead){
//        console.log("You already ready " + books[i].title + " by " + books[i].author);
//    }else {
//        console.log("You did NOT read " + books[i].title + " by " + books[i].author);
//    } 
//}


//   ANSWER 2 - NOT WORKING
//var i = 0, b = 0;
//var allBooks;
//var Library = function () {
//	"use strict";
//	this.allBooks = [];
//	this.addBook = function (book) {
////			    "use strict";
//		do {
//			allBooks.push(book);
//		} while (book !== null);
//	};
//};
//
//var Books = function (bAuthor, bTitle, bRead) {
//	"use strict";
//	this.author = bAuthor;
//	this.title = bTitle;
//	this.read = bRead;
//	this.bookRead = function () {
//        do {
//	        if (this.read === "true") {
//		        window.console.log("You read this book :" + this.author + " " + this.title);
//	        } else {
//		        window.console.log("You did NOT read this book: " + this.author + " " + this.title);
//	        }
//        } while (Library !== "");
//    };
//};
//
//allBooks = new Library();
////allBooks = new Books();
//
//var book1 = new Books("Xx1", "Yy1", "true"),
//	book2 = new Books("Xx2", "Yy2", "true"),
//	book3 = new Books("Xx3", "Yy3", "false"),
//	book4 = new Books("Xx4", "Yy4", "true"),
//	book5 = new Books("Xx5", "Yy5", "false");
//
//allBooks.addBook(book1);
//allBooks.addBook(book2);
//allBooks.addBook(book3);
//allBooks.addBook(book4);
//allBooks.addBook(book5);
//
//window.console.log(allBooks.bookRead);
