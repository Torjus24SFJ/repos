// class Library
// {
//     List<Book> books;

//     public Library()
//     {
//         books = new List<Book>();
//     }

//     public void addBook(Book newBook)
//     {
//         books.Add(newBook);
//     }

//     public List<Book> listBook()
//     {
//         return books;
//     }

//     public Book? lendBook(string title)
//     {
//         Book? book = books.Find((book) =>
//         {
//             if (book.Title == title)
//             {
//                 return true;
//             }
//             else
//             {
//                 return false;
//             }
//         });
//         return book;
//     }
// }