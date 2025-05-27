import { API } from '@/helpers';
import { Post } from '@/Interfaces';

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${API}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const result = await response.json();
  return result.data || result;
};

export const deletePost = async (id: number): Promise<void> => {
  const response = await fetch(`${API}/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
};

export const createPost = async ({ titlePost, contentPost, category, tags }): Promise<Post> => {
  const response = await fetch(`${API}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: titlePost,
      content: contentPost,
      category_id: category,
      tag_ids: tags,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};
