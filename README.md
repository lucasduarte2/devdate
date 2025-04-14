# Date Formatter

A simple and clean JavaScript date formatter library that provides utility functions to work with dates and times. This library is designed for easy integration into your project and is ready for production.

## Features

- Get the day of the week for a given date
- Add or subtract days from a date
- Calculate the difference between two dates in days
- Get the number of days in a specific month
- Check if a date falls on the weekend
- Format current date and time in various formats
- Calculate the difference between two times in hours, minutes, and seconds (including time zone adjustments)

## Installation

### Using npm (Node.js)

To install the `date-formatter` library, you can use npm.

```bash
npm install date-formatter
```

### Using yarn

To install the `date-formatter` library, you can use yarn.

```bash
yarn add date-formatter
```

## Importing the Library
Once installed, you can import the library into your JavaScript project:
// Using CommonJS import (Node.js)
const formatDate = require('date-formatter');

// Or using ES6 import syntax (if your environment supports ES6 modules)
import formatDate from 'date-formatter';


## Usage
1. Get Day of the Week
To get the day of the week for a given date, you can use the getDayOfWeek function. It returns the name of the day in Portuguese (e.g., "Monday" for Monday).

```bash
const day = formatDate.getDayOfWeek('2025-04-14'); // "Monday"
console.log(day);
```
2. Add or Subtract Days
You can add or subtract days to/from a given date.

```bash
const newDate = formatDate.addDays('2025-04-14', 5); // "2025-04-19"
console.log(newDate);

const pastDate = formatDate.addDays('2025-04-14', -3); // "2025-04-11"
console.log(pastDate);
```

3. Calculate Difference Between Two Dates (in days)
To calculate the number of days between two dates:

```bash
const daysDifference = formatDate.timeBetweenDates('10/04/2025', '14/04/2025'); // "4"
console.log(daysDifference);
```

4. Check if a Date is a Weekend
To check if a specific date falls on a weekend (Saturday or Sunday):

```bash
const isWeekend = formatDate.isWeekend('2025-04-12'); // true (Saturday)
console.log(isWeekend);
```

5. Format Current Date and Time
You can use different functions to get the current date and time in various formats.

```bash
Long date format (dd/mm/yyyy)
const longDate = formatDate.longDate(); // Ex: 14/04/2025
console.log(longDate);
```

6. Short date format (dd/mm/yy)

```bash
const shortDate = formatDate.shortDate(); // Ex: 14/04/25
console.log(shortDate);
```

7. Full date with time (yyyy-mm-dd hh:mm:ss)

```bash
const fullDate = formatDate.fullDate(); // Ex: 2025-04-14 17:44:24
console.log(fullDate);
```

8. Hour only (hh:mm)

```bash
const hourOnly = formatDate.hourOnly(); // Ex: 17:27
console.log(hourOnly);
```

9. Hour and minutes (hh:mm:ss)

```bash
const hourAndMinutes = formatDate.hourAndMinutes(); // Ex: 17:27:22
console.log(hourAndMinutes);
```

10. Calculate Time Difference Between Two Hours
To calculate the difference between two times, you can use timeBetweenHours. The time is adjusted for European time zones.

```bash
const timeDifference = formatDate.timeBetweenHours('10:15:22', '12:45:03'); // Ex: "02:29:41"
console.log(timeDifference);

const timeAcrossMidnight = formatDate.timeBetweenHours('23:59:00', '00:01:00'); // Ex: "00:02:00"
console.log(timeAcrossMidnight);
```


11. Calculate Time Between Two Dates in Months
To calculate the number of months between two dates:

```bash
const monthsDifference = formatDate.timeBetweenMonths('2025-01-15', '2025-04-14'); // Ex: "3"
console.log(monthsDifference);
```

12. Get Number of Days in a Specific Month
To get the number of days in a month for a given year and month:

```bash
const daysInMonth = formatDate.daysInMonth(2025, 2); // Ex: 28 (February 2025)
console.log(daysInMonth);
```

## Example with User Input
If you'd like to take user input and format it, you can do so by accepting the date as input from the user (e.g., via a form input) and using the library's methods to format it.

```bash
const userInput = document.getElementById('dateInput').value; // Assuming user enters "2025-04-14"
const formattedDate = formatDate.getDayOfWeek(userInput);
console.log(formattedDate); // Output will be "Monday"
```

## Error Handling
The library provides built-in error handling to ensure invalid inputs are caught. For example, when calculating the difference between two dates or times:

If you pass invalid dates or times, the library will return an appropriate error message such as 'Invalid date format' or 'Invalid time format'.