import { apiSlice } from './apiSlice';

const extendedCommentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (id) => ({
        url: `/posts/${id}/comments`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) =>
        result?.data
          ? [
              { type: 'Comments', id: 'LIST' },
              ...result.data.map((comment) => ({
                type: 'Comments',
                id: comment._id,
              })),
            ]
          : [],
    }),
    addAComment: builder.mutation({
      query: ({ postId, formData }) => ({
        url: `/posts/${postId}/comments`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Posts', id: arg.id },
        { type: 'Comments', id: arg.id },
      ],
    }),
  }),
});

export const { useGetCommentsQuery, useAddACommentMutation } =
  extendedCommentApiSlice;
