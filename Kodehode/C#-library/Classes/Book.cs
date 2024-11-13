class Book
{
    // Data field
    public string Title;
    public string Author;
    public DateTime FirstPublish;

    // Set data in field
    public Book(string title, string author, DateTime firstPublished)
    {
        Title = title;
        Author = author;
        FirstPublish = firstPublished;
    }
}
