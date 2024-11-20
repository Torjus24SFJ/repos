var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

Library library = new Library();

Book martian = new Book("Martian", "Jack Black", new DateTime(2002, 10, 10));
Book foundation = new Book("Foundation", "Jane Doe", new DateTime(1940, 04, 05));
Book LordOfTheRings = new Book("Lord of the rings", "JRR Tolken", new DateTime(1954, 24, 07));
library.AddNewBook(martian);
library.AddNewBook(foundation);


app.MapGet("/book", () =>
{
  return library.ListAvailableBooks();
});

app.MapPost("/book/borrow", (BorrowRequest request) =>
{
  Book? book = library.BorrowBook(request.Title);

  if (book == null)
  {
    return Results.NotFound();
  }
  else
  {
    return Results.Ok(book);
  }
});

app.Run();
