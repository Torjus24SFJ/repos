using System.Reflection;

class Book 
{
    public string Title;
    public string Author;
    public DateTime Published;

    //Contructor
    public Book(string title, string author, DateTime published) {
        Title = title;
        Author = author;
        Published = published;
    }
}