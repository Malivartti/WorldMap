export function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds -= minutes * 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `${minutes}:${seconds}`;
}