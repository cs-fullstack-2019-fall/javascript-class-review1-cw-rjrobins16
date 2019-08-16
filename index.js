//
// ### Problem 1:
//
// Put the start of your program in a main function.
// Create a class for Books with name, rating, genre, and author.
// Create 3 instances of Books and put them in an array.
// Afterwards print each one in the format below:
// The book [BOOK NAME] has [RATING] stars!!!

class Book { constructor(name,rating,genre,author){
    this.name=name;
    this.rating=rating;
    this.genre=genre;
    this.author=author;
}
}


function Main() {
    let book1= new Book("To Kill a Mockingbird","4.5 stars","Fiction","A.D");
    let book2= new Book("Cinderella","G","Fairytale","R.H");
    let book3= new Book("Rupunzel","3 stars","Fairytale","R.H");

    let SummerReading=[book1,book2,book3];

    SummerReading.forEach(printEach);
    function printEach(eachElement) {
        console.log(`The book ${eachElement.name} has a rating of ${eachElement.rating}`)
    }


}

Main();