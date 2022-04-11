export function formatTime(seconds) {
  if (Number.isNaN(seconds)) return '00:00'
  let minutes = Math.floor(seconds / 60);
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds -= minutes * 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `${minutes}:${seconds}`;
}

export function formatMillisecondsToSeconds(milliseconds) {
  return Number.isNaN(milliseconds) ? '00:00' : Math.round(milliseconds / 1000);
}

export function getImageUrl(item) {
  try {
    return item?.thumbnails[0]?.url || item?.thumbnails?.url
  } catch (err) {
    console.log(err)
  }
}