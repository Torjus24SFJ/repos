class Person {
    List<Book> Books {get; set;}
    public string FirstName {get; set;}
    public int Age {get; set;}

    public Person(string firstname, int age){
        firstname = FirstName;
        age = Age;
    }
}