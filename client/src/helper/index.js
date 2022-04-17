export function formatTime(num) {
  if (Number.isNaN(num) || num === undefined) return '00:00'
  
  let seconds = num;
  let minutes = Math.floor(seconds / 60);
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds -= minutes * 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `${minutes}:${seconds}`;
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

export function isMyPlaylist(playlist) {
  return playlist?.owner === 'You' && playlist?.title === 'My Favorite Tracks'
}
