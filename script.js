function firstNonRepeatedChar(str) {
 // Write your code here
	// Create an empty object to store character frequencies
    const charFrequency = {};

    // Iterate through the string to count character frequencies
    for (const char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Iterate through the string to find the first non-repeated character
    for (const char of str) {
        if (charFrequency[char] === 1) {
            return char; // Return the first non-repeated character
        }
    }

    return null; // Return null if no non-repeated character is found
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
