import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Posts', 'Comments'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
    headers: {
      credentials: 'include',
    },
  }),
  endpoints: (builder) => ({}),
});
