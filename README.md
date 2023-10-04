# JS-Functions

A collection of JavaScript utility functions for common tasks and calculations.

## Table of Contents

- [Functions](#functions)
  - [isCenturyLeapYear](#iscenturyleapyear)
  - [formatDateAsUserFriendly](#formatdateasuserfriendly)
  - [generateRandomPasswordWithCriteria](#generaterandompasswordwithcriteria)
  - [shuffleArray](#shufflearray)
  - [isValidURL](#isvalidurl)
  - [isValidEmail](#isvalidemail)
  - [calculateGCD](#calculategcd)
  - [intToRoman](#inttoroman)
  - [findArrayIntersection](#findarrayintersection)
  - [calculateDistance](#calculatedistance)

## Functions

### isCenturyLeapYear

This function checks if a given year is a century leap year.

```javascript
function isCenturyLeapYear(year)
```

**Parameters:**
- `year` (number): The year to be checked.

**Returns:**
- `true` if the year is a century leap year, otherwise `false`.

**Usage:**

```javascript
const isLeapYear = isCenturyLeapYear(2000); // Checks if the year 2000 is a century leap year
```

### formatDateAsUserFriendly

This function formats a date as a user-friendly string in the format "Month Day, Year."

```javascript
function formatDateAsUserFriendly(date)
```

**Parameters:**
- `date` (Date): The date to be formatted.

**Returns:**
- A formatted date string.

**Usage:**

```javascript
const formattedDate = formatDateAsUserFriendly(new Date()); // Formats the current date as a user-friendly string
```

### generateRandomPasswordWithCriteria

This function generates a random password with specified criteria, including length, uppercase letters, numbers, and symbols.

```javascript
function generateRandomPasswordWithCriteria(length, includeUppercase, includeNumbers, includeSymbols)
```

**Parameters:**
- `length` (number): The length of the password.
- `includeUppercase` (boolean): Whether to include uppercase letters.
- `includeNumbers` (boolean): Whether to include numbers.
- `includeSymbols` (boolean): Whether to include symbols.

**Returns:**
- A random password that meets the specified criteria.

**Usage:**

```javascript
const password = generateRandomPasswordWithCriteria(12, true, true, false); // Generates a random password with criteria
```

### shuffleArray

This function shuffles an array using the Fisher-Yates algorithm.

```javascript
function shuffleArray(arr)
```

**Parameters:**
- `arr` (Array): The array to be shuffled.

**Returns:**
- The shuffled array.

**Usage:**

```javascript
const shuffledArray = shuffleArray([1, 2, 3, 4, 5]); // Shuffles an array using the Fisher-Yates algorithm
```

### isValidURL

This function checks if a given string is a valid URL.

```javascript
function isValidURL(url)
```

**Parameters:**
- `url` (string): The string to be checked.

**Returns:**
- `true` if the string is a valid URL, otherwise `false`.

**Usage:**

```javascript
const validURL = isValidURL('https://www.example.com'); // Checks if a string is a valid URL
```

### isValidEmail

This function checks if a given string is a valid email address.

```javascript
function isValidEmail(email)
```

**Parameters:**
- `email` (string): The email address to be checked.

**Returns:**
- `true` if the email address is valid, otherwise `false`.

**Usage:**

```javascript
const validEmail = isValidEmail('example@email.com'); // Checks if the email is valid
```

### calculateGCD

This function calculates the greatest common divisor (GCD) of two numbers.

```javascript
function calculateGCD(a, b)
```

**Parameters:**
- `a` (number): The first number.
- `b` (number): The second number.

**Returns:**
- The GCD of the two numbers.

**Usage:**

```javascript
const gcd = calculateGCD(48, 18); // Calculates the GCD of 48 and 18
```

### intToRoman

This function converts a number to its Roman numeral representation.

```javascript
function intToRoman(num)
```

**Parameters:**
- `num` (number): The number to be converted.

**Returns:**
- The Roman numeral representation of the number.

**Usage:**

```javascript
const romanNumber = intToRoman(42); // Converts the number 42 to its Roman numeral representation
```

### findArrayIntersection

This function finds the intersection of two arrays.

```javascript
function findArrayIntersection(arr1, arr2)
```

**Parameters:**
- `arr1` (Array): The first array.
- `arr2` (Array): The second array.

**Returns:**
- An array containing the intersection of the two input arrays.

**Usage:**

```javascript
const intersection = findArrayIntersection([1, 2, 3], [2, 3, 4]); // Finds the intersection of two arrays
```

### calculateDistance

This function calculates the distance between two points in 2D space.

```javascript
function calculateDistance(x1, y1, x2, y2)
```

**Parameters:**
- `x1` (number): The x-coordinate of the first point.
- `y1` (number): The y-coordinate of the first point.
- `x2` (number): The x-coordinate of the second point.
- `y2` (number): The y-coordinate of the second point.

**Returns:**
- The distance between the two points.

**Usage:**

```javascript
const distance = calculateDistance(1, 2, 4, 6); // Calculates the distance between two points
```

## License

Awkwardpy project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md)
