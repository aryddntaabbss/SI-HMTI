export const stringTanpaKurung = (str) => {
  return str.replace(/\s*\(.*?\)\s*/g, '');
}

export const stringDash = (str) => {
  return str.replace(/\s/g, '-');
}