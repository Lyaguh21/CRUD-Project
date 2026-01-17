import { Badge, Box, Divider, Flex, Group, Modal, Text } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { IPost } from '@/entities/post/model/type';
import { selectOpenCheckPostModal, selectSelectedPost } from '@/entities/view/model/viewSelectors';
import { setOpenCheckPostModal } from '@/entities/view/model/viewSlice';

export default function CheckPostModal() {
  const dispatch = useAppDispatch();
  const selectedPost: IPost | null = useAppSelector(selectSelectedPost);
  const opened = useAppSelector(selectOpenCheckPostModal);

  const handleClose = () => {
    dispatch(setOpenCheckPostModal(false));
  };

  if (!selectedPost) {
    return null;
  }

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Просмотр поста"
      size="lg"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      {/* <LoadingOverlay visible={false} zIndex={1000} overlayProps={{ radius: 'sm', blur: 1 }} /> */}

      <Box mb="md">
        <Text size="xl" fw={700} c="blue" mb="sm">
          {selectedPost?.title}
        </Text>
        <Divider />
      </Box>

      <Box mb="md">
        <Text size="lg" fw={600} mb="xs">
          Контент
        </Text>
        <Text c="dimmed">{selectedPost.content}</Text>
      </Box>

      <Divider my="md" />

      <Group mb="md">
        <Badge color="cyan" variant="filled" size="lg">
          Категория: {selectedPost.category.name}
        </Badge>
        {selectedPost.tags.map((tag) => (
          <Badge key={tag.id} color="grape" variant="light">
            {tag.name}
          </Badge>
        ))}
      </Group>

      <Flex justify="space-between" align="center">
        <Text size="sm" c="dimmed">
          Создано: {new Date(selectedPost.created_at).toLocaleDateString()}
        </Text>
        <Text size="sm" c="dimmed">
          Обновлено: {new Date(selectedPost.updated_at).toLocaleDateString()}
        </Text>
      </Flex>
    </Modal>
  );
}
