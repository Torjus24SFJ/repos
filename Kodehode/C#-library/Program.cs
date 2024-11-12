// Les av bruker input

// Console.WriteLine("Write something: ");
// string? userInput = Console.ReadLine();

// Ekko tilbake det bruker skriver

// Console.WriteLine("Echo " + userInput);




bool runProgram = true;
while (runProgram)
{
    // Find out what userinput is
    Console.WriteLine("Do you want to lend or return?");
    string? userInput = Console.ReadLine();

    // Lend out a book
    if (userInput == "lend")
    {
        Console.WriteLine("Lending a book");
    }
    // Return book
    else if (userInput == "return")
    {
        Console.WriteLine("Returning a book");
    }
    else if (userInput == "exit")
    {
        runProgram = false;
    }
}


