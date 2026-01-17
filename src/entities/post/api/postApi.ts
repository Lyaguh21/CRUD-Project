import { baseApi } from '@/shared/api/baseApi';
import { ICreatePost, IPost, IUpdatePost } from '../model/type';

export const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<IPost[], void>({
      query: () => '/posts',
      transformResponse: (response: { data: IPost[] }) => response.data,
      providesTags: (result) =>
        Array.isArray(result)
          ? [
              ...result.map((post) => ({ type: 'Posts' as const, id: post.id })),
              { type: 'Posts' as const, id: 'LIST' },
            ]
          : [{ type: 'Posts' as const, id: 'LIST' }],
    }),

    getPost: build.query<IPost, number>({
      query: (id) => `/posts/${id}`,
      providesTags: (_result: IPost | undefined, _error: any, id: number) => [
        { type: 'Posts' as const, id },
      ],
    }),

    createPost: build.mutation<IPost, ICreatePost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: [{ type: 'Posts' as const, id: 'LIST' }],
    }),

    updatePost: build.mutation<IPost, { id: number; post: IUpdatePost }>({
      query: ({ id, post }) => ({
        url: `/posts/${id}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: post,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'Posts' as const, id }],
    }),

    deletePost: build.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Posts' as const, id: 'LIST' }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
