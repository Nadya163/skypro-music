import { createSlice } from '@reduxjs/toolkit';

const timeSlice = createSlice({
  name: 'time',
  initialState: {
    timeInSeconds: 0,
  },
  reducers: {
    updateTime: (state, action) => {
      state.timeInSeconds = action.payload;
    },
  },
});

export const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed()}`;
}

export const { updateTime } = timeSlice.actions;
export default timeSlice.reducer;