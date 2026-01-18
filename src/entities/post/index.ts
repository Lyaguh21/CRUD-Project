export type { ICategory, ICreatePost, IPost, ITag, IUpdatePost } from './model/type';
export {
  postApi,
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostQuery,
  useGetPostsQuery,
  useUpdatePostMutation,
} from './api/postApi';
