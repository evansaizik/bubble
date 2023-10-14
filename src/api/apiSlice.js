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
    localStorage.removeItem('loggedInUser');
    window.location.replace('/login');
  }

  if (result?.error?.status === 403) {
    localStorage.removeItem('accessToken');

    // Works on only desktop browsers
    // const refreshToken = await baseQuery('/users/refresh', api, {
    //   method: 'GET',
    //   credentials: 'include',
    // });

    // works on both mobile and desktop browsers
    const fetchRefreshToken = await fetch(
      'https://bubble-fg8r.onrender.com/api/v1/users/refresh',
      {
        credentials: 'include',
      }
    );

    const refreshToken = await fetchRefreshToken.json();
    console.log(refreshToken);

    if (refreshToken?.accessToken) {
      localStorage.setItem('accessToken', refreshToken.accessToken);

      result = await baseQuery(args, api, extraOptions);
    } else if (
      refreshToken?.error?.status === 403 ||
      refreshToken?.error?.status === 401
    ) {
      localStorage.removeItem('loggedInUser');
      window.location.replace('/login')
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
