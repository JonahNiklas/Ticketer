const DateConverter = (date: Date) => {
  const days = ['MANDAG', 'TIRSDAG', 'ONSDAG', 'TORSDAG', 'FREDAG', 'LØRDAG', 'SØNDAG'];
  const months = ['JANUAR', 'FEBRUAR', 'MARS', 'APRIL', 'MAI', 'JUNI', 'JULI', 'AUGUST', 'SEPTEMBER', 'OKTOBER', 'NOVEMBER', 'DESEMBER'];
  
  date = new Date(date);
  const day = days[date.getDay()];
  const month = months[date.getMonth()];

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day}, ${date.getDate()}. ${month}, ${date.getUTCFullYear()} KL ${hours}:${minutes}`;
}

export default DateConverter;