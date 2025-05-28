import { useEffect, useState } from 'react';
import { Box, Button, Flex, LoadingOverlay, Modal, Text, TextInput } from '@mantine/core';
import { detailedFetchPosts, fetchPosts, updatePost } from '@/api/posts';

export default function CheckPostModal({
  opened,
  close,
  checkId,
}: {
  opened: boolean;
  close: () => void;
  setPosts: any;
  checkId: number;
}) {
  const [info, setInfo] = useState({
    title: '',
    content: '',
    create_at: '',
    category: {},
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadInfo = async () => {
      try {
        setLoading(true);
        const postData = await detailedFetchPosts(checkId);

        setInfo((prev) => ({
          ...prev,
          title: postData.title,
          content: postData.content,
          create_at: postData.created_at,
          category: postData.category,
        }));
      } catch (err) {
        console.error('Failed to load post:', err);
      } finally {
        setLoading(false);
      }
    };

    loadInfo();
  }, [checkId]);

  const handleClose = () => {
    close();
  };
  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Просмотр поста"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 1 }} />
      <Text>Название</Text>
      <Box bg="gray">{info.title}</Box>
      <Text>Контент</Text>
      <Box bg="gray">{info.content}</Box>

      <Text>Создано:</Text>
      <Flex gap={10}>
        <Text>{info.category.name}</Text>
        <Text>{info.create_at.slice(0, 10)}</Text>
      </Flex>
    </Modal>
  );
}
