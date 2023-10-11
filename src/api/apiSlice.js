import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Posts', 'Comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://bubble-fg8r.onrender.com/api/v1',
    // baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      credentials: 'include',
      'Access-Control-Allow-Origin': 'https://bubble-seven.vercel.app',
      'Access-Control-Allow-Credentials': true,
    },
  }),
  endpoints: (builder) => ({}),
});
