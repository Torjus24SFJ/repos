Library library = new Library();

Book cookWithGandalf = new Book("You Shall Not Fast: A Cookbook", "Gandalf the Grey", new DateTime(3019, 3, 25));

library.addBook(cookWithGandalf);

bool program = true;
while (program)
{
    Console.WriteLine("Type here: ");
    string? userInput = Console.ReadLine();
    if (userInput == "help")
    {
        Console.WriteLine("list -- shows all available books");
        Console.WriteLine("lend -- lend (bookname) to borrow a book");
        Console.WriteLine("return -- return (bookname) to return book");
        Console.WriteLine("exit -- close program");
    }
    else if (userInput == "list")
    {
        Console.WriteLine("Here are all the books currently available: ");
        List<Book> availableBooks = library.listBook();

        foreach (var book in availableBooks)
        {
            Console.WriteLine(book.Title);
        }
    }
    else if (userInput == "lend")
    {
        Console.WriteLine("Book lending completed");
        string? wantedBookTitle = Console.ReadLine();

        if (wantedBookTitle == null)
        {
            Console.WriteLine("This book does not exist" + wantedBookTitle);
            continue;
        }
        Book? book = library.lendBook(wantedBookTitle);

        if (book == null)
        {
            Console.WriteLine("This book does not exist" + wantedBookTitle);
        }
        else
        {
            Console.WriteLine("Lending book: " + book.Title);
        }
    }
    else if (userInput == "return")
    {
        Console.WriteLine("Returning book");
    }
    else if(userInput == "exit"){
        program = false;
    }
}