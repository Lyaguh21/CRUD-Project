import { useEffect, useState } from 'react';
import { Box, Button, Flex, SimpleGrid, Text } from '@mantine/core';
import { API } from '@/helpers';
import { Post } from '@/Interfaces';

export default function Posts() {
  const [posts, setPosts] = useState([]); // Инициализируем как пустой массив
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${API}/posts`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setPosts(result.data || []); // Сохраняем только массив data
      } catch (err) {
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const DeletePost = async (id: number) => {
    try {
      const response = await fetch(`${API}/posts/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  return (
    <>
      <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
        {posts.map((post: Post) => (
          <Box bg="gray" p={10} key={post.id}>
            <Flex justify="space-between" align="center">
              <Text fw={800}>{post.title}</Text>
              <Button bg="red" onClick={() => DeletePost(post.id)}>
                Delete
              </Button>
            </Flex>

            <p>{post.content}</p>
            <div>Category: {post.category.name}</div>
            <div>Tags: {post.tags.map((tag) => tag.name).join(', ')}</div>
            <time dateTime={post.created_at}>
              Posted on: {new Date(post.created_at).toLocaleDateString()}
            </time>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
}
