export const normalizeMinute = (sec) => {
  return Math.floor(sec / 60)
}

export const normalizeSeconds = (sec) => {
  return sec % 60;
}
