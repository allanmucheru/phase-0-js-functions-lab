// 1. calculateTax Function
function calculateTax(income) {
    const taxRate = 0.15; 
    return income * taxRate;
}

// 2. convertToUpperCase Function
function convertToUpperCase(str) {
    return str.toUpperCase();
}

// 3. findMaximum Function
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

// 4. isPalindrome Function
function isPalindrome(str) {
    const cleanStr = str.toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// 5. calculateDiscountedPrice Function
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100);
    return originalPrice - discountAmount;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };