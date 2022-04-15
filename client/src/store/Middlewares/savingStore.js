
export const savingStore = (store) => (next) => (action) => {
  const storeData = store.getState()
  const values = storeData.appValues
  const playlists = storeData.appPlaylists
  localStorage.setItem('values', JSON.stringify(values))
  localStorage.setItem('playlists', JSON.stringify(playlists))
  return next(action)
}
