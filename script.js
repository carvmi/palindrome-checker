// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Clean the string: remove non-alphanumeric characters and convert to lower case
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare the string to its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Event listener for the "Check" button
document.getElementById('check-btn').addEventListener('click', function() {
    let inputValue = document.getElementById('text-input').value.trim();
    let resultElement = document.getElementById('result');

    // Check if the input is empty
    if (inputValue === "") {
        alert("Please input a value");
    } else {
        // Check if the input is a palindrome
        if (isPalindrome(inputValue)) {
            resultElement.textContent = `${inputValue} is a palindrome`;
        } else {
            resultElement.textContent = `${inputValue} is not a palindrome`;
        }
    }
});
