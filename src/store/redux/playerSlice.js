import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentTrack: null,
    trackList: []
  },
  reducers: {
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    setTrackList: (state, action) => {
      state.trackList = action.payload;
    },
    playNextTrack: state => {
      const currentIndex = state.trackList.findIndex(track => track.id === state.currentTrack.id);
      if (currentIndex === -1 || currentIndex === state.trackList.length - 1) {
        return;
      }
      state.currentTrack = state.trackList[currentIndex + 1];
    },
    playPreviousTrack: state => {
      const currentIndex = state.trackList.findIndex(track => track.id === state.currentTrack.id);
      if (currentIndex === -1 || currentIndex === 0) {
        return;
      }
      state.currentTrack = state.trackList[currentIndex - 1];
    }
  }
});

export const { setCurrentTrack, setTrackList, playNextTrack, playPreviousTrack } = playerSlice.actions;

export default playerSlice.reducer;

export const selectorCurrentTrack = (state) => state.track.currentTrack;
