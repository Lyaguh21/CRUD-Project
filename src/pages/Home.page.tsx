import { Button, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CreatePostModal from '@/components/Posts/CreatePostModal';
import Posts from '@/components/Posts/Posts';

export function HomePage() {
  const [openedCreate, { open, close }] = useDisclosure(false);
  return (
    <>
      <Text size="xl" ta="center" fw={600}>
        Посты
      </Text>
      <Flex py={5}>
        <Button onClick={open}>Создать</Button>
      </Flex>

      <Posts />

      <CreatePostModal opened={openedCreate} close={close} />
    </>
  );
}
