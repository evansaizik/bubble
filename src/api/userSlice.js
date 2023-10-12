import { createSlice } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    name: 'Remy',
  },
});

export const extendedUserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body,
      }),
    }),
    signUp: builder.mutation({
      query: (body) => ({
        url: 'users/signup',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation({
      queryFn: async () => {
        console.log('visited');
        const log = await fetch(
          'https://bubble-fg8r.onrender.com/api/v1/users/logout'
        )
          .then(() => {
            window.location.replace(
              `${window.location.protocol}://${window.location.host}/login`
            );
            localStorage.removeItem('accessToken');
            localStorage.removeItem('loggedInUser');
          })
          .then(() => log);
      },
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation, useLogoutMutation } =
  extendedUserApiSlice;

export const userSliceActions = userSlice.actions;

export const userSliceReducer = userSlice.reducer;
