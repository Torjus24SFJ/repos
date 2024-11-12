using System.Reflection;

class Book 
{
    string? Title;
    string? Author;
    DateTime Published;

    //Contructor
    public Book(string title, string author, DateTime published) {
        Title = title;
        Author = author;
        Published = published;
    }
}