import { 
    createApi, fetchBaseQuery
 } from '@reduxjs/toolkit/query/react'

export const fetchUsersToken = createApi({
  reducerPath: 'fetchUsersToken',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://skypro-music-api.skyeng.tech'}),
  endpoints: (builder) => ({
    getToken: builder.mutation({
      query: ({ email, password }) => ({
        url: '/user/token/',
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
    }),
    getTokenRefresh: builder.mutation({
      query: () => ({
        url: '/user/token/refresh/',
        method: "POST",
        body: JSON.stringify({
          refresh: `Bearer ${localStorage.getItem('refresh')}`
        }),
        headers: {
          "content-type": "application/json",
        },
      })
    })
  })
})

export const fetchAllTracks = createApi({
  reducerPath: 'fetchFavoriteTracks',
  tagTypes: ['FavoriteTrack', 'Track'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://skypro-music-api.skyeng.tech'}),
  endpoints: (builder) => ({
    getAllMusic: builder.query({
      query: () => `/catalog/track/all/`,
      providesTags: (result) => result
        ? [
          ...result.map(({ id }) => ({ type: 'FavoriteTrack', id })),
          { type: 'FavoriteTrack', id: 'LIST' },
        ]
        : [{ type: 'FavoriteTrack', id: 'LIST' }]
    }),
    getFavoriteTracksAll: builder.query({
      query: () => ({
        url: 'catalog/track/favorite/all/',
        method: "GET",
      }),
      providesTags: (result) => result
        ? [
          ...result.map(({ id }) => ({ type: 'FavoriteTrack', id })),
          { type: 'FavoriteTrack', id: 'LIST' },
        ]
        : [{ type: 'FavoriteTrack', id: 'LIST' }]
    }),
    addFavoriteTrackID: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "POST",
      }),
      invalidatesTags: [{ type: 'FavoriteTrack', id: 'LIST' }]
    }),
    deleteFavoriteTrackID: builder.mutation({
      query: (id) => ({
        url: `catalog/track/${id}/favorite/`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: 'FavoriteTrack', id: 'LIST' }]
    }),
    getSelections: builder.query({
      query: (id) => ({
        url: `catalog/selection/${id}/`,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? [
            ...result.items.map(({ id }) => ({ type: "FavoriteTrack", id })),
            { type: "FavoriteTrack", id: "LIST" },
          ]
          : [{ type: "FavoriteTrack", id: "LIST" }],
    }),
  })
})

export const {
  useGetTokenMutation,
  useGetTokenRefreshMutation,
} = fetchUsersToken;

export const {
  useGetFavoriteTracksAllQuery,
  useAddFavoriteTrackIDMutation,
  useDeleteFavoriteTrackIDMutation,
  useGetAllMusicQuery,
  useGetSelectionsQuery
} = fetchAllTracks
