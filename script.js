function validateSyntax() {
    let RegEx = /^pet_{A-Za-z0-9}=$/; //needs variable for Regex, no numeric values//
    let input = document.getElementById('petInput').value; //variable is created to store the user input//
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        //else staement, if input correct then valid else if input inncorrect then invalid

        if (RegEx.test(input)) {
            result = "Correct Syntax"

        }
        else {
            result = "Inncorrect Syntax"

        }

            document.getElementById('result').innerText = result;
}


