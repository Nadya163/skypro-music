export const selectorTrackList = (state) => state.track.trackList;
export const selectorCurrentTrack = (state) => state.track.currentTrack;
export const selectorCurrentTrackIndex = (state) => state.track.trackList.findIndex((el) => el.id === state.track.currentTrack);
export const selectorIsShaffling = (state) => state.track.isShaffling;
export const selectPulsatingPoint = (store) => store.track.pulsatingPoint;
export const selectorTimeInSeconds = (state) => state.time.timeInSeconds;
export const selectorFavorites = (state) => state.track.favoritesTrack;

