export function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds -= minutes * 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `${minutes}:${seconds}`;
}

export function formatMillisecondsToSeconds(milliseconds) {
  return Math.round(milliseconds / 1000);
}

export function getImageUrl(item){
  return item?.thumbnails?.url || item?.thumbnails?.[0].url
}