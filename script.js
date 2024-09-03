function validateSyntax() {
    
    let input = document.getElementById('petInput').value; //variable is created to store the user input//
    // Validation logic goes here
    let RegEx = /^pet_[A-Z 0-9]+$/i; //needs variable for Regex, no numeric values//
    let result = ''; // Placeholder for validation result
    

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        //else staement, if input correct then valid else if input inncorrect then invalid

        if (RegEx.test(input)) {// if regular expression matches then correct
            result = "Correct Syntax input"

        }
        else {// else result in inncorrect syntax if regular expression does not match
            result = "Inncorrect Syntax input"

        }

            document.getElementById('result').innerText = result;
}


