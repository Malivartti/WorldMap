export function formatTime(type, num) {
  let seconds;
  if (Number.isNaN(num)) return '00:00'
  if (type === "milliseconds") {
    seconds = Math.round(num / 1000);
  } else {
    seconds = num;
  };

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

export function isFavorite(items, data, chosenId){
  return items.some((item) => item[chosenId] === data);
}