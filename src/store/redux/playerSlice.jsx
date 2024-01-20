import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTrack: null,
  currentTrackList: [],
  trackList: [],
  isShaffling: false,
  pulsatingPoint: false,
  favoritesTrack: [],
  categoryTrackId: [],
  searchTrack: '',
  trackInfo: null,
  filterAuthors: [],
  filterGenres: [],
  filterSort: { sort: 'По умолчанию' },
  activeLinkOnFilters: false
 }

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    //Перемешивание массивов в случайном порядке
    toggleIsShaffling: (state) => {
      state.playedTacks = [];
      state.isShaffling = !state.isShaffling;
    },
    setCurrentTrackList: (state, action) => {
      state.currentTrackList = action.payload;
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload;
    },
    //пустой массив для перемешивания
    setTrackList: (state, action) => {
      state.trackList = action.payload;
    },
    //переключение трека вперед, с перемешиванием
    playNextTrack: state => {
      if (state.isShaffling) {
        state.playedTacks.push(state.currentTrack);
        state.currentTrack = state.currentTrackList[Math.floor(Math.random() * state.currentTrackList.length)];
        return;
      }

      const currentIndex = state.currentTrackList.findIndex(track => track.id === state.currentTrack.id);

      if (currentIndex === -1 || currentIndex === state.currentTrackList.length - 1) {
        return;
      }

      state.currentTrack = state.currentTrackList[currentIndex + 1];
    },
    //переключение трека назад, с перемешиванием
    playPreviousTrack: state => {
      if (state.isShaffling) {
        if (state.playedTacks.length === 0) {
        return;  
        }
        state.currentTrack = state.playedTacks.pop();
        return;
        }

      const currentIndex = state.currentTrackList.findIndex(track => track.id === state.currentTrack.id);
      if (currentIndex === -1 || currentIndex === 0) {
        return;
      }
      state.currentTrack = state.currentTrackList[currentIndex - 1];
    },
    //пульсирующая точка
    setPulsatingPoint: (state, action) => {
      state.pulsatingPoint = action.payload;
    },
    //любимые треки
    setFavoritesTrack: (state, action) => {
      state.favoritesTrack = action.payload;
    },
    //выбор массива по катеогрии
    setCategoryTrackId: (state, action) => {
      state.categoryTrackId = action.payload;
    },
    //поиск трека
    setSearchTrack: (state, action) => {
      state.searchTrack = action.payload;
    },
    //сортировка по датам
    setFilterSort: (state, action) => {
      state.filterSort.sort = action.payload
    },
    
    //фильтр по добавлению исполнителю
    setFilterAuthors: (state, action) => {
      state.filterAuthors.push(action.payload);
    },
    
    //фильтр по удалению исполнителя
    setDeleteFilterAuthors: (state, action) => ({
      ...state,
      filterAuthors: state.filterAuthors.filter(
        (author) => author !== action.payload,
        ),
    }),
    
    //фильтр по добавлению жанра
    setFilterGenres: (state, action) => {
      state.filterGenres.push(action.payload);
    },
    
    //фильтр по удалению жанра
    setDeleteFilterGenres: (state, action) => ({
      ...state,
      filterGenres: state.filterGenres.filter(
        (genre) => genre !== action.payload,)
    }),
    
    //активная / не активная ссылка на фильтре при выборе
    setActiveLinkOnFilters: (state, action) => {
      state.activeLinkOnFilters = action.payload
    }
  }
});

export const {  
  toggleIsShaffling,
  setCurrentTrackList,
  setCurrentTrack, 
  setTrackList, 
  playNextTrack, 
  playPreviousTrack, 
  setPulsatingPoint,
  setFavoritesTrack,
  setCategoryTrackId,
  setSortTrackFilter,
  setSearchTrack,
  setFilterSort,
  setFilterAuthors,
  setDeleteFilterAuthors,
  setFilterGenres,
  setDeleteFilterGenres,
  setActiveLinkOnFilters
 } = playerSlice.actions;

export default playerSlice.reducer;