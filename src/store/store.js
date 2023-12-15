import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./redux/playerSlice"

export const store = configureStore({
  reducer: {
    track: playerReducer,
  },
})

export default store;




// import { configureStore } from "@reduxjs/toolkit";
// import playerSlice from "./redux/playerSlice";


// export const store = configureStore({
//   reducer: {
//     player: playerSlice
//   }
// });