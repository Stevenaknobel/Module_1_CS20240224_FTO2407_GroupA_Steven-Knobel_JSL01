function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    //create regular expression with \w shorthand for alphanumeric
    //^pet_ must match this pattern exactly
    //+ at the end represents additional occurances of the previous element, in this case \w which is the alphanumeric
    const regex = /^pet_\w+$/;


    //validate using regular expression test
    if (regex.test(input)){
        result = "Valid Syntax"
    } else {
        result = "Invalid Syntax"
    }

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


