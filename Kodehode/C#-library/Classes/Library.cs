class Library
{
    // Data field
    List<Book> books;
    // Set data in field (Constuctor)
    public Library()
    {
        books = new List<Book>();
    }

    // Methods - what we can do with objects
    public void AddNewBook(Book newBook)
    {
        books.Add(newBook);
    }

    // List out all the books
    public List<Book> ListAvailableBooks()
    {
        return books;
    }

    public Book? LendBook(string title)
    {
        Book? book = books.Find((book) =>
        {
            if (book.Title == title)
            {
                return true;
            }
            else
            {
                return false;
            }
        });
        return book;
    }
}


