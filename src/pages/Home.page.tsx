import { useState } from 'react';
import { Button, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AnimatedText from '@/components/motion/AnimatedText';
import CheckPostModal from '@/components/Posts/CheckPostModal';
import CreatePostModal from '@/components/Posts/CreatePostModal';
import Posts from '@/components/Posts/Posts';
import UpdatePostModal from '@/components/Posts/UpdatePostModal';
import { IPost } from '@/entities/post/type';

export function HomePage() {
  const [openedCreate, { open: openCreate, close: closeCreate }] = useDisclosure(false);
  const [openedUpdate, { open: openUpdate, close: closeUpdate }] = useDisclosure(false);
  const [openedCheck, { open: openCheck, close: closeCheck }] = useDisclosure(false);

  const [posts, setPosts] = useState<IPost[]>([]);
  const [checkId, setCheckId] = useState<number>();
  return (
    <>
      <Text size="xl" ta="center" fw={600}>
        <AnimatedText text="Посты" />
      </Text>
      <Flex py={5}>
        <Button onClick={openCreate}>Создать</Button>
      </Flex>
      <Posts
        posts={posts}
        setPosts={setPosts}
        setCheckId={setCheckId}
        openUpdate={openUpdate}
        openCheck={openCheck}
      />
      <CheckPostModal
        opened={openedCheck}
        close={closeCheck}
        setPosts={undefined}
        checkId={checkId}
      />
      <CreatePostModal opened={openedCreate} close={closeCreate} setPosts={setPosts} />
      <UpdatePostModal
        opened={openedUpdate}
        close={closeUpdate}
        setPosts={setPosts}
        checkId={checkId}
      />
    </>
  );
}
