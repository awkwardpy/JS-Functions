// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

// Usage:
const sum = calculateSum([1, 2, 3, 4, 5]); // Calculates the sum of the array

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Usage:
const isEvenNumber = isEven(6); // Checks if a number is even

// Function to convert a string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Usage:
const titleCaseString = toTitleCase('hello world'); // Converts a string to title case

// Function to find the maximum value in an array
function findMaxValue(numbers) {
    return Math.max(...numbers);
}

// Usage:
const max = findMaxValue([4, 9, 2, 6, 7]); // Finds the maximum value in an array

// Function to generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// Usage:
const randomColor = getRandomColor(); // Generates a random RGB color

// Function to fetch data from an API using fetch
function fetchDataWithFetch(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
}

// Usage:
fetchDataWithFetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error(error));


// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Usage:
const isPalindromic = isPalindrome('A man, a plan, a canal, Panama'); // Checks if a string is a palindrome

// Function to format a number with commas as thousands separators
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Usage:
const formattedNumber = formatNumberWithCommas(1000000); // Formats a number with commas

// Function to generate a random password
function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}

// Usage:
const randomPassword = generateRandomPassword(12); // Generates a random password

// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Usage:
const average = calculateAverage([10, 20, 30, 40, 50]); // Calculates the average of an array of numbers

// Function to convert a temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Usage:
const fahrenheit = celsiusToFahrenheit(25); // Converts a temperature from Celsius to Fahrenheit


// Function to find the minimum value in an array
function findMinValue(numbers) {
    return Math.min(...numbers);
}

// Usage:
const min = findMinValue([4, 9, 2, 6, 7]); // Finds the minimum value in an array

// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
}

// Usage:
const uniqueArray = removeDuplicates([1, 2, 2, 3, 4, 4, 5]); // Removes duplicates from an array

// Function to generate a random integer within a given range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage:
const randomInt = getRandomInt(10, 20); // Generates a random integer between 10 and 20

// Function to check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Usage:
const isLeap = isLeapYear(2024); // Checks if a year is a leap year

// Function to truncate a string to a specified length with ellipsis
function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}

// Usage:
const truncated = truncateString('Lorem ipsum dolor sit amet', 10); // Truncates a string with ellipsis

// Function to get the current time in a specific format
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Usage:
const currentTime = getCurrentTime(); // Gets the current time in HH:MM:SS format


// Function to capitalize the first letter of each word in a string
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Usage:
const capitalizedString = capitalizeWords('hello world'); // Capitalizes the first letter of each word

// Function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

// Usage:
const circleArea = calculateCircleArea(5); // Calculates the area of a circle with a radius of 5

// Function to check if a value is within a specified range
function isInRange(value, min, max) {
    return value >= min && value <= max;
}

// Usage:
const inRange = isInRange(10, 5, 15); // Checks if 10 is within the range of 5 to 15

// Function to reverse an array in place
function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

// Usage:
const reversedArray = reverseArrayInPlace([1, 2, 3, 4, 5]); // Reverses an array in place

// Function to check if a string contains only alphanumeric characters
function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

// Usage:
const isAlphanumericString = isAlphanumeric('Hello123'); // Checks if a string is alphanumeric

// Function to generate a random UUID (Universally Unique Identifier)
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Usage:
const randomUUID = generateUUID(); // Generates a random UUID


// Function to check if a given string is a valid email address
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Usage:
const validEmail = isValidEmail('example@email.com'); // Checks if the email is valid

// Function to calculate the greatest common divisor (GCD) of two numbers
function calculateGCD(a, b) {
    if (b === 0) {
        return a;
    }
    return calculateGCD(b, a % b);
}

// Usage:
const gcd = calculateGCD(48, 18); // Calculates the GCD of 48 and 18

// Function to convert a number to its Roman numeral representation
function intToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    let result = '';
    for (const numeral of romanNumerals) {
        while (num >= numeral.value) {
            result += numeral.symbol;
            num -= numeral.value;
        }
    }
    return result;
}

// Usage:
const romanNumber = intToRoman(42); // Converts the number 42 to its Roman numeral representation

// Function to find the intersection of two arrays
function findArrayIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

// Usage:
const intersection = findArrayIntersection([1, 2, 3], [2, 3, 4]); // Finds the intersection of two arrays

// Function to calculate the distance between two points in 2D space
function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

// Usage:
const distance = calculateDistance(1, 2, 4, 6); // Calculates the distance between two points


// Function to check if a given year is a century leap year
function isCenturyLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

// Usage:
const isLeapYear = isCenturyLeapYear(2000); // Checks if the year 2000 is a century leap year

// Function to format a date as a user-friendly string
function formatDateAsUserFriendly(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Usage:
const formattedDate = formatDateAsUserFriendly(new Date()); // Formats the current date as a user-friendly string

// Function to generate a random password with specified criteria
function generateRandomPasswordWithCriteria(length, includeUppercase, includeNumbers, includeSymbols) {
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    let password = '';
    
    if (includeUppercase) {
        charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeNumbers) {
        charset += '0123456789';
    }
    if (includeSymbols) {
        charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
}

// Usage:
const password = generateRandomPasswordWithCriteria(12, true, true, false); // Generates a random password with criteria

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Usage:
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]); // Shuffles an array using the Fisher-Yates algorithm

// Function to check if a given string is a valid URL
function isValidURL(url) {
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;
    return urlPattern.test(url);
}

// Usage:
const validURL = isValidURL('https://www.example.com'); // Checks if a string is a valid URL
