/* function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters
    if (/^pet_\[a-zA-Z0-9]+$/.test(input)) {
        resultElement.innerHTML = "Valid Syntax." + '<span style="color: #008000; font-size: 60px;">&#x25cf;</span>';
    } else {
        resultElement.innerHTML = "Invalid Syntax" + '<span style="color: #ff4500; font-size: 60px;">&#x25cf;</span>';
    }
    document.getElementById('result').innerText = result;
}
*/
function validateSyntax() {
    let petInput = document.getElementById('petInput').value.trim();
    let regex = /^pet_\d*[a-zA-Z]+$/;
    let isValid = regex.test(petInput);
    // Validation logic goes here
    let resultElement = document.getElementById("result"); // Placeholder for validation result

    if (isValid) {
        resultElement.innerHTML = "Valid Syntax." + '<span style="color: #008000; font-size: 60px;">&#x25cf;</span>';
    } else {
        resultElement.innerHTML = "Invalid Syntax." + '<span style="color: #ff4500; font-size: 60px;">&#x25cf;</span>';
    }
}
