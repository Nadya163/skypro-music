import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentTrack: null,
    trackList: [],
    playedTacks: [],
    isShaffling: false,
    pulsatingPoint: false,
    favoritesTrack: [],
   },
  reducers: {
    toggleIsShaffling: (state) => {
      state.playedTacks = [];
      state.isShaffling = !state.isShaffling;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
      console.log('current track:', state.currentTrack);
    },
    setTrackList: (state, action) => {
      state.trackList = action.payload;
      console.log('track list:', state.trackList);
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
        if (state.playedTacks.length === 0) {
        return;  
        }
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
    },
    setFavoritesTrack: (state, action) => {
      state.favoritesTrack = action.payload;
    },
  }
});

export const {  
  toggleIsShaffling, 
  setCurrentTrack, 
  setTrackList, 
  playNextTrack, 
  playPreviousTrack, 
  setPulsatingPoint,
  setFavoritesTrack
 } = playerSlice.actions;

export default playerSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const playerSlice = createSlice({
//   name: 'player',
//   initialState: {
//     currentTrack: null,
//     trackList: [],
//     playedTacks: [],
//     isShaffling: false,
//     pulsatingPoint: false,
//     favoritesTrack: [],
//   },
//   reducers: {
//     toggleIsShaffling: (state) => {
//       state.playedTacks = [];
//       state.isShaffling = !state.isShaffling;
//     },
//     setCurrentTrack: (state, action) => {
//       state.currentTrack = action.payload;
//     },
//     setTrackList: (state, action) => {
//       state.trackList = action.payload;
//     },
//     playNextTrack: state => {
//       if (state.isShaffling) {
//         state.playedTacks.push(state.currentTrack);
//         state.currentTrack = state.trackList[Math.floor(Math.random() * state.trackList.length)];
//       console.log(state.currentTrack);
//       console.log(state.trackList);
//         return;
//       }

//       const currentIndex = state.trackList.findIndex(track => track.id === state.currentTrack.id);

//       if (currentIndex === -1 || currentIndex === state.trackList.length - 1) {
//         return;
//       }

//       state.currentTrack = state.trackList[currentIndex + 1];
//     },
//     playPreviousTrack: state => {
//       if (state.isShaffling) {
//         if (state.playedTacks.length === 0) {
//         return;  
//         }
//         state.currentTrack = state.playedTacks.pop();
//         console.log(state.playedTacks);
//         return;
//         }

//       const currentIndex = state.trackList.findIndex(track => track.id === state.currentTrack.id);
//       if (currentIndex === -1 || currentIndex === 0) {
//         return;
//       }
//       state.currentTrack = state.trackList[currentIndex - 1];
//     },
//     setPulsatingPoint: (state, action) => {
//       state.pulsatingPoint = action.payload;
//     },
//     setFavoritesTrack: (state, action) => {
//       state.favoritesTrack = action.payload;
//     },
//   }
// });

// export const {  
//   toggleIsShaffling, 
//   setCurrentTrack, 
//   setTrackList, 
//   playNextTrack, 
//   playPreviousTrack, 
//   setPulsatingPoint,
//   setFavoritesTrack
//  } = playerSlice.actions;

// export default playerSlice.reducer;

