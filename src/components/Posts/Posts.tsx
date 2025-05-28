import { useEffect, useState } from 'react';
import { Box, Button, Flex, Loader, SimpleGrid, Text } from '@mantine/core';
import { deletePost, fetchPosts } from '@/api/posts';
import { Post } from '@/Interfaces';

export default function Posts({
  posts,
  setPosts,
  openUpdate,
  openCheck,
  setCheckId,
}: {
  posts: Post[];
  setPosts: any;
  openUpdate: () => void;
  openCheck: () => void;
  setCheckId: any;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const DeletePost = async (id: number) => {
    try {
      deletePost(id);
      setPosts(() => posts.filter((item) => item.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" w="100%" h="100%">
        <Loader color="blue" />
      </Flex>
    );
  }

  return (
    <>
      <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
        {posts.map((post: Post) => (
          <Box bg="gray" p={10} key={post.id}>
            <Flex justify="space-between" align="center">
              <Text fw={800}>{post.title}</Text>
              <Flex gap={10}>
                <Button
                  bg="blue"
                  w={80}
                  onClick={() => {
                    setCheckId(post.id);
                    openCheck();
                  }}
                >
                  Check
                </Button>
                <Button
                  bg="green"
                  w={80}
                  onClick={() => {
                    setCheckId(post.id);
                    openUpdate();
                  }}
                >
                  Edit
                </Button>
                <Button bg="red" onClick={() => DeletePost(post.id)} w={80}>
                  Delete
                </Button>
              </Flex>
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
