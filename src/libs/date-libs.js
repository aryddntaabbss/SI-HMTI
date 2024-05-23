export const dateFormat = (date) => {
  let formatDate = new Date(date);
  const d = formatDate.getUTCDate();
  const m = formatDate.getUTCMonth() + 1;
  const y = formatDate.getUTCFullYear();
  const dateStr = `${d}/${m}/${y}`;

  return dateStr;
};

export const timeFormat = (time) => {
  const date = new Date(time)
  let h = date.getHours();
  let min = date.getMinutes();
  if (min.toString().length < 2) min = `0${min}`;
  if (h.toString().length < 2) h = `0${h}`;
  const timeFormat = `${h}.${min}`;

  return timeFormat 
};