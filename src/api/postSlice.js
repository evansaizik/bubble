import { apiSlice } from './apiSlice';

export const extendedPostApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: '/posts',
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      }),
      providesTags: (result, error, arg) =>
        result?.data?.posts
          ? [
              { type: 'Posts', id: 'LIST' },
              ...result.data.posts.map((post) => ({
                type: 'Posts',
                id: post._id,
              })),
            ]
          : [],
    }),
    getAPost: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'GET',
      }),
      providesTags: (result) =>
        result ? [{ type: 'Posts', id: result.data.post._id }] : [],
    }),
    createAPost: builder.mutation({
      query: (val) => ({
        url: '/posts',
        method: 'POST',
        body: val,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Posts', id: arg._id }],
    }),
    reactToPost: builder.mutation({
      query: (val) => ({
        url: `/posts/${val.postId}/reaction`,
        method: 'PATCH',
        body: val,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Posts', id: arg.id }],
    }),
    editPost: builder.mutation({
      query: (post) => ({
        url: `/posts/${post.id}`,
        method: 'PATCH',
        body: post,
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Posts', id: arg.id }],
    }),
    deletePost: builder.mutation({
      query: (id) => ({ url: `/posts/${id}`, method: 'DELETE' }),
      invalidatesTags: (result, error, arg) => [{ type: 'Posts', id: arg.id }],
    }),
  }),
});

export const {
  useGetAllPostsQuery,
  useGetAPostQuery,
  useCreateAPostMutation,
  useReactToPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = extendedPostApi;
