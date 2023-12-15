import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./redux/playerSlice"
import timeReducer from "./redux/timeSlice";
import { fetchAllTracks, fetchUsersToken } from "../apiServece";

export const store = configureStore({
  reducer: {
    track: playerReducer,
    time: timeReducer,
    // auth: authReducer,
    [fetchUsersToken.reducerPath]: fetchUsersToken.reducer,
    [fetchAllTracks.reducerPath]: fetchAllTracks.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(fetchUsersToken.middleware)
    .concat(fetchAllTracks.middleware)
  
})

export default store;
