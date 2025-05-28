import { useState } from 'react';
import { Button, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CreatePostModal from '@/components/Posts/CreatePostModal';
import Posts from '@/components/Posts/Posts';
import { Post } from '@/Interfaces';

export function HomePage() {
  const [openedCreate, { open, close }] = useDisclosure(false);
  const [posts, setPosts] = useState<Post[]>([]);
  return (
    <>
      <Text size="xl" ta="center" fw={600}>
        Посты
      </Text>
      <Flex py={5}>
        <Button onClick={open}>Создать</Button>
      </Flex>

      <Posts posts={posts} setPosts={setPosts} />

      <CreatePostModal opened={openedCreate} close={close} setPosts={setPosts} />
    </>
  );
}
