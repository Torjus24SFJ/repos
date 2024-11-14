
// class Book 
// {
//     public string Title;
//     public string Author;
//     public DateTime Published;

//     //Contructor
//     public Book(string title, string author, DateTime published) {
//         Title = title;
//         Author = author;
//         Published = published;
//     }
// }

class Book
{
    public string Title { get; }
    public string Author { get; }
    public DateTime PublicationDate { get; }

    public Book(string title, string author, DateTime publicationDate)
    {
        Title = title;
        Author = author;
        PublicationDate = publicationDate;
    }
}