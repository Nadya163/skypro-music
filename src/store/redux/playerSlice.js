import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentTrack: null,
    trackList: [],
    playedTacks: [],
    isShaffling: false,
    pulsatingPoint: false,
  },
  reducers: {
    toggleIsShaffling: (state) => {
      state.playedTacks = [];
      state.isShaffling = !state.isShaffling;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    setTrackList: (state, action) => {
      state.trackList = action.payload;
    },
    playNextTrack: state => {
      if (state.isShaffling) {
        state.playedTacks.push(state.currentTrack);
        state.currentTrack = state.trackList[Math.floor(Math.random() * state.trackList.length)];
      console.log(state.currentTrack);
      console.log(state.trackList);
        return;
      }

      const currentIndex = state.trackList.findIndex(track => track.id === state.currentTrack.id);

      if (currentIndex === -1 || currentIndex === state.trackList.length - 1) {
        return;
      }

      state.currentTrack = state.trackList[currentIndex + 1];
    },
    playPreviousTrack: state => {
      if (state.isShaffling) {
        console.log(state.isShaffling);
        state.currentTrack = state.playedTacks.pop();
        console.log(state.playedTacks);
        return;
      }

      const currentIndex = state.trackList.findIndex(track => track.id === state.currentTrack.id);
      if (currentIndex === -1 || currentIndex === 0) {
        return;
      }
      state.currentTrack = state.trackList[currentIndex - 1];
    },
    setPulsatingPoint: (state, action) => {
      state.pulsatingPoint = action.payload;
    }
  }
});

export const { toggleIsShaffling, setCurrentTrack, setTrackList, playNextTrack, playPreviousTrack, setPulsatingPoint } = playerSlice.actions;

export default playerSlice.reducer;

export const selectorTrackList = (state) => state.track.trackList;
export const selectorCurrentTrack = (state) => state.track.currentTrack;
export const selectorCurrentTrackIndex = (state) => state.track.trackList.findIndex((el) => el.id === state.track.currentTrack);
export const selectorIsShaffling = (state) => state.track.isShaffling;
export const selectPulsatingPoint = (store) => store.track.pulsatingPoint;