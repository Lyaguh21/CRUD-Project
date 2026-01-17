import { IconRefresh } from '@tabler/icons-react';
import { ActionIcon, Button, Flex, Text } from '@mantine/core';
import { useAppDispatch } from '@/app/store/hooks';
import { useGetPostsQuery } from '@/entities/post/api/postApi';
import { setOpenCreatePostModal } from '@/entities/view/model/viewSlice';
import AnimatedText from '@/shared/ui/AnimatedText';

export default function Header() {
  const { refetch } = useGetPostsQuery();
  const dispatch = useAppDispatch();
  return (
    <>
      <Text component="div" size="xl" ta="center" fw={600}>
        <AnimatedText text="Посты" />
      </Text>
      <Flex py={5} justify="space-between" align="center">
        <Button
          size="sm"
          onClick={() => {
            dispatch(setOpenCreatePostModal(true));
          }}
        >
          Создать
        </Button>
        <ActionIcon size="lg" onClick={refetch}>
          <IconRefresh />
        </ActionIcon>
      </Flex>
    </>
  );
}
