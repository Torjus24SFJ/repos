// dotnet new console (create new project c#)
// Les av bruker input

// Console.WriteLine("Write something: ");
// string? userInput = Console.ReadLine();

// Ekko tilbake det bruker skriver

// Console.WriteLine("Echo " + userInput);Li


Library library = new Library();

Book cookWithGandalf = new Book("You Shall Not Fast: A Cookbook", "Gandalf the Grey", new DateTime(3019, 3, 25));
Book catGuide = new Book("How to Knock Over Everything", "Whiskers the Cat", new DateTime(2023, 1, 1));
Book elfPsychology = new Book("Am I Overthinking This?", "An Elf on the Shelf", new DateTime(2020, 12, 1));
Book programmerLife = new Book("Infinite Loops and Caffeine", "Anonymous Programmer", new DateTime(2024, 5, 7));
Book gymRegret = new Book("Never Leg Day", "Skip Legman", new DateTime(2022, 4, 12));
Book procrastinator = new Book("I'll Finish This Book Tomorrow", "Pro Crastinator", new DateTime(2025, 6, 30));
Book catSecrets = new Book("The Art of the Perfect Nap", "Garfield", new DateTime(1978, 6, 19));
Book sarcasmGuide = new Book("Oh, Really?", "Dr. Sarcasm", new DateTime(2018, 9, 15));
Book alienMemoirs = new Book("Earthlings: A Field Guide", "Zorg of Planet X", new DateTime(2050, 11, 11));
Book timeTravel = new Book("Oops, Wrong Century", "Time Traveler X", new DateTime(1805, 3, 14));

// Making new books
library.AddNewBook(cookWithGandalf);
library.AddNewBook(catGuide);
library.AddNewBook(elfPsychology);
library.AddNewBook(programmerLife);
library.AddNewBook(gymRegret);
library.AddNewBook(procrastinator);
library.AddNewBook(catSecrets);
library.AddNewBook(sarcasmGuide);
library.AddNewBook(alienMemoirs);
library.AddNewBook(timeTravel);


// User input
bool runProgram = true;
while (runProgram)
{
    // Find out what userinput is
    Console.WriteLine("Do you want to lend or return?");
    string? userInput = Console.ReadLine();
    if (userInput == "list")
    {
        Console.WriteLine("Here are the available books: ");
        List<Book> availableBooks = library.ListAvailableBooks();

        foreach (var book in availableBooks)
        {
            Console.WriteLine(book.Title);
        }
    }
    // Lend out a book
    else if (userInput == "lend")
    {
        Console.WriteLine("Lending a book");
        string? wantedBookTitle = Console.ReadLine();

        if (wantedBookTitle == null)
        {
            continue;
        }

        Book? book = library.LendBook(wantedBookTitle);

        if (book == null)
        {
            Console.WriteLine("No book with title found " + wantedBookTitle);
        }
        else {
            Console.WriteLine("Lending book: " + book.Title);
        }
    }

    // Return book
    else if (userInput == "return")
    {
        Console.WriteLine("Returning a book");
    }
    // Exit
    else if (userInput == "exit")
    {
        runProgram = false;
    }
}





