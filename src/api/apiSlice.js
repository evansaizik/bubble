import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://bubble-fg8r.onrender.com/api/v1',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log('error is from point 1')
    localStorage.removeItem('loggedInUser');
    // window.location.replace('/login');
  }

  if (result?.error?.status === 403) {
    localStorage.removeItem('accessToken');

    const refreshToken = await baseQuery('/users/refresh', api, extraOptions);

    if (refreshToken?.data?.accessToken) {
      localStorage.setItem('accessToken', refreshToken.data.accessToken);

      result = await baseQuery(args, api, extraOptions);
    } else if (
      refreshToken?.error?.status === 403 ||
      refreshToken?.error?.status === 401
    ) {
      console.log('error is from here point 2')
      localStorage.removeItem('loggedInUser')
      // window.location.replace('/login')
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Posts', 'Comments'],
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
