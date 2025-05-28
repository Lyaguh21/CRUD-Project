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

export const detailedFetchPosts = async (id: number): Promise<Post> => {
  if (id === undefined) {
    throw new Error('id is undefined');
  }
  const response = await fetch(`${API}/posts/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const result = await response.json();

  if (result.data) {
    return result.data as Post;
  }

  if (result.id) {
    return result as Post;
  }

  throw new Error('Invalid post data structure');
};

export const deletePost = async (id: number): Promise<void> => {
  const response = await fetch(`${API}/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
};

export const createPost = async (info: any) => {
  const response = await fetch(`${API}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: info.title,
      content: info.content,
      category_id: info.categoryId,
      tag_ids: info.tag,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export const updatePost = async (info: any, id: number) => {
  const response = await fetch(`${API}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: info.title,
      content: info.content,
      category_id: info.categoryId,
      tag_ids: info.tag,
    }),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};
