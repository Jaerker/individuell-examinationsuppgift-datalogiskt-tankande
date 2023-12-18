// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

// Jag utgår ifrån att man kallar på funktionen när man trycker på knappen, som tar in variablerna man fyllt i.
// Man kan även undvika att skriva in dricks. Den säkerställer då att siffran i alla fall är 0 (om man skulle skriva ett negativt tal) 
// och sen utför kalkylen. 
// Utmatningen är själva kalkylen endast, och inte hela strängen då jag anser man hade skrivit det utanför denna funktion.

FUNCTION SplitNote(amount, friends, tip)
    IF (amount <= 0 || friends <= 0)
        RETURN "Error: Du behöver åtminstone beräkna en positiv summa delad på ett positivt antal vänner";

    ELSE
        IF(tip <= 0)
            SET tip to 0;
    
    RETURN CALCULATE (amount * (1+tip) / friends);

END FUNCTION

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

FUNCTION play()
    SET VARIABLE dictionary = [..., ..., ...]; // Innehåller ALLA ord i det engelska språket
    SET VARIABLE endWord = "FIVE";
    SET VARIABLE currentWord = "FOUR";
    SET VARIABLE isGameOver = false;
    SET VARIABLE guesses = 0;

    WHILE (!isGameOver)
        PRINT currentWord;
        SET VARIABLE guessedWord to USER_INPUT;
        IF (guessedWord.length != currentWord.length)
            PRINT "Your guess does not match the length of the word we are playing with! Try again"
        ELSE
            IF (!dictionary.includes(guessedWord)) // IF(guessedWord does not exists in dictionary), andra kanske är mer okej, men första är så jag förstår det bäst
                PRINT "Word does not exist in dictionary, try again";
            ELSE
                IF(!IsOneLetterApart(currentWord, currentGuess))
                    PRINT "The word contains too many, or maybe no, different characters."
                ELSE
                    SET currentWord = currentGuess;
        ADD 1 TO guesses;
        IF (currentWord === endWord)
            SET isGameOver = true;

    PRINT "Congratulations! You completed the game with {guesses} guesses!"

END FUNCTION

FUNCTION IsOneLetterApart(wordOne, wordTwo)
    SET VARIABLE diffCount TO 0;

    LOOP THROUGH 0 to wordOne.length 
        IF (wordOne[INDEX] != wordTwo[INDEX])
            ADD 1 TO diffCount;

    RETURN diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt

    END FUNCTION

*/