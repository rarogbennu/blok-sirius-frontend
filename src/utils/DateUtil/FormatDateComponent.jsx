// Converts a date string to DD/MM/YYYY)
export const formatDateFrontend = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

//  Converts a date string from DD/MM/YYYY to YYYY-MM-DD
export const formatDateBackend = (dateString) => {
  const [day, month, year] = dateString.split('/');
  return new Date(`${year}-${month}-${day}`);
};

// Converts a time string to HH: mm in 24 hour format
export const formatTimeFrontend = (time) => {
  const today = new Date();
  const [hours, minutes] = time.split(':');
  today.setHours(parseInt(hours, 10));
  today.setMinutes(parseInt(minutes, 10));

  return today.toLocaleTimeString('dk-DK', { hour: '2-digit', minute: '2-digit', hour12: false });
};

// Converts a time string to an object with hours and minutes or an empty string if the input is falsy
export const formatTimeBackend = (timeString) => {
  if (!timeString) {
    return '';
  }

  const [hours, minutes] = timeString.split(':');
  return { hours, minutes };
};

// Sorts an array of events based on their date and time in chronological order
export const sortByDateTime = (events) => {
  return [...events].sort((a, b) => {
    const dateComparison = new Date(a.date) - new Date(b.date);

    if (dateComparison === 0) {
      const startTimeA = a.start_time;
      const startTimeB = b.start_time;
      const timeComparison = new Date(`1970-01-01T${startTimeA}`) - new Date(`1970-01-01T${startTimeB}`);
      return timeComparison;
    }

    return dateComparison;
  });
};