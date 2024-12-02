// Library library = new Library();

// Book cookWithGandalf = new Book("You Shall Not Fast: A Cookbook", "Gandalf the Grey", new DateTime(3019, 3, 25));

// library.addBook(cookWithGandalf);
// List<Book> availableBooks = library.listBook();

// bool program = true;
// while (program)
// {
//     Console.WriteLine("Type here: ");
//     string? userInput = Console.ReadLine();
//     if (userInput == "help")
//     {
//         Console.WriteLine("list -- shows all available books");
//         Console.WriteLine("lend -- lend (bookname) to borrow a book");
//         Console.WriteLine("return -- return (bookname) to return book");
//         Console.WriteLine("exit -- close program");
//     }
//     else if (userInput == "list")
//     {
//         Console.WriteLine("Here are all the books currently available: ");

//         foreach (var book in availableBooks)
//         {
//             Console.WriteLine(book.Title);
//         }
//     }
//     else if (userInput == "lend")
//     {
//         Console.WriteLine("Choose book to lend:");
//         string? wantedBookTitle = Console.ReadLine();

//         Book? bookToLend = availableBooks.FirstOrDefault(book => book.Title.Equals(wantedBookTitle, StringComparison.OrdinalIgnoreCase));

//         if (bookToLend == null)
//         {
//             Console.WriteLine("This book does not exist" + wantedBookTitle);
//         }
//         else {
//             Console.WriteLine("Lending book: " + bookToLend.Title);
//         }
//     }
//     else if (userInput == "return")
//     {
//         Console.WriteLine("Returning book");
//     }
//     else if(userInput == "exit"){
//         program = false;
//     }
// }

class Program
{
    static void Main()
    {
        List<Book> books = new List<Book> {
            new Book("Harry-Potter", "JK Rowling", new DateTime(2007, 10, 11)),
            new Book("Harry-Potter2", "JK Rowling", new DateTime(2007, 10, 11)),
            new Book("Harry-Potter3", "JK Rowling", new DateTime(2007, 10, 11))
        };

        Console.WriteLine("Available books: ");
        for (int i = 0; i < books.Count(); i++){
            Console.WriteLine($"{i + 1}. {books[i].Title} by {books[i].Author}");
        }
         Console.WriteLine("Please enter the number of the book you want to pick:");

        string? userInput = Console.ReadLine();

        if (int.TryParse(userInput, out int bookNumber))
        {
            if (bookNumber >= 1 && bookNumber <= books.Count)
            {
                Book selectedBook = books[bookNumber - 1];
                Console.WriteLine($"You have selected: {selectedBook.Title} by {selectedBook.Author}");
            }
            else
            {
                Console.WriteLine("Invalid book number. Please try again.");
            }
        }
        else
        {
            Console.WriteLine("Invalid input. Please enter a number.");
        }
    }
}
