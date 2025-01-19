function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        
        if (input.startsWith('pet_') && input.length >= 6) {
            // Check if character after 'pet_' is a number (digit)
            let numberChar = input[4];
            
            // Check if the next character is alphanumeric
            let alphaChar = input[5];
            
            if (!isNaN(numberChar) && // Check if it's a number
                ((alphaChar >= 'a' && alphaChar <= 'z') || // Check if lowercase
                 (alphaChar >= 'A' && alphaChar <= 'Z') || // Check if uppercase
                 !isNaN(alphaChar))) {                     // Check if number
                result = 'Valid Input 🟢';
            } else {
                result = 'Invalid Input 🔴';
            }
        } else {
            result = 'Invalid Input 🔴';
        }
    
        document.getElementById('result').innerText = result;
}