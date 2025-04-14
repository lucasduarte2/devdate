// src/index.js

const formatDate = {
    // Get the day of the week for a given date
    getDayOfWeek: (date) => {
      try {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const d = new Date(date);
        if (isNaN(d.getTime())) throw new Error('Invalid date');
        return days[d.getDay()];
      } catch (error) {
        return error.message;
      }
    },
  
    // Add days to a date and return the new date in 'yyyy-mm-dd' format
    addDays: (date, days) => {
      try {
        const d = new Date(date);
        if (isNaN(d.getTime())) throw new Error('Invalid date');
        d.setDate(d.getDate() + days);
        return d.toISOString().split('T')[0];
      } catch (error) {
        return error.message;
      }
    },
  
    // Calculate the difference in months between two dates
    timeBetweenMonths: (startDate, endDate) => {
      try {
        const start = new Date(startDate);
        const end = new Date(endDate);
        if (isNaN(start.getTime()) || isNaN(end.getTime())) throw new Error('Invalid date');
        const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        return Math.abs(months);
      } catch (error) {
        return error.message;
      }
    },
  
    // Get the number of days in a given month of a specific year
    daysInMonth: (year, month) => {
      try {
        const days = new Date(year, month, 0).getDate();
        return days;
      } catch (error) {
        return error.message;
      }
    },
  
    // Check if a date is a weekend (Saturday or Sunday)
    isWeekend: (date) => {
      try {
        const d = new Date(date);
        if (isNaN(d.getTime())) throw new Error('Invalid date');
        const day = d.getDay();
        return day === 0 || day === 6; // 0: Sunday, 6: Saturday
      } catch (error) {
        return error.message;
      }
    },
  
    // Full date in format: dd/mm/yyyy
    longDate: () => {
      try {
        const now = new Date();
        return `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
      } catch (error) {
        return error.message;
      }
    },
  
    // Short date in format: dd/mm/yy
    shortDate: () => {
      try {
        const now = new Date();
        return `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear().toString().slice(-2)}`;
      } catch (error) {
        return error.message;
      }
    },
  
    // Full date with time in format: yyyy-mm-dd hh:mm:ss
    fullDate: () => {
      try {
        const now = new Date();
        return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      } catch (error) {
        return error.message;
      }
    },
  
    // Only the hours: hh:mm
    hourOnly: () => {
      try {
        const now = new Date();
        return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
      } catch (error) {
        return error.message;
      }
    },
  
    // Hours and minutes: hh:mm:ss
    hourAndMinutes: () => {
      try {
        const now = new Date();
        return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
      } catch (error) {
        return error.message;
      }
    },
  
    // Calculate the difference in days between two dates
    timeBetweenDates: (startDate, endDate) => {
      try {
        const parseDate = (dateString) => {
          const [day, month, year] = dateString.split('/');
          const parsedDate = new Date(`${year}-${month}-${day}`);
          if (isNaN(parsedDate.getTime())) throw new Error('Invalid date format');
          return parsedDate;
        };
  
        const start = parseDate(startDate);
        const end = parseDate(endDate);
  
        const timeDifference = end - start;
        const daysDifference = timeDifference / (1000 * 3600 * 24);
  
        if (isNaN(daysDifference)) throw new Error('Invalid date format');
        return Math.abs(Math.round(daysDifference)).toString();
      } catch (error) {
        return error.message;
      }
    },
  
    // Calculate the difference between two times in hours, minutes, and seconds (for European time zones)
    timeBetweenHours: (startTime, endTime) => {
      try {
        const parseTime = (timeString) => {
          const [hours, minutes, seconds] = timeString.split(':').map(Number);
          if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) throw new Error('Invalid time format');
          return hours * 3600 + minutes * 60 + seconds; // Convert to seconds
        };
  
        const start = parseTime(startTime);
        const end = parseTime(endTime);
  
        if (start === 'Invalid time format' || end === 'Invalid time format') throw new Error('Invalid time format');
  
        let timeDifference = end - start;
  
        // Adjust for time crossing midnight
        if (timeDifference < 0) {
          timeDifference += 24 * 3600; // Add 24 hours in seconds
        }
  
        const hoursDifference = Math.floor(timeDifference / 3600);
        const minutesDifference = Math.floor((timeDifference % 3600) / 60);
        const secondsDifference = timeDifference % 60;
  
        // Adjust for European time zones (e.g., Central European or Portugal)
        const options = { timeZone: 'Europe/Lisbon', hour12: false };
        const timeFormat = new Intl.DateTimeFormat('en-GB', options);
        const adjustedStartTime = new Date();
        adjustedStartTime.setHours(hoursDifference, minutesDifference, secondsDifference);
  
        return `${adjustedStartTime.getHours().toString().padStart(2, '0')}:${adjustedStartTime.getMinutes().toString().padStart(2, '0')}:${adjustedStartTime.getSeconds().toString().padStart(2, '0')}`;
      } catch (error) {
        return error.message;
      }
    }
  };
  
  module.exports = formatDate;
  