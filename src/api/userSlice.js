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
  }),
});

export const { useLoginMutation, useSignUpMutation } = extendedUserApiSlice;

export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
