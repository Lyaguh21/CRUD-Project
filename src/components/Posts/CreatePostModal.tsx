import { useState } from 'react';
import { Button, Flex, LoadingOverlay, Modal, TextInput } from '@mantine/core';
import { createPost, fetchPosts } from '@/api/posts';

export default function CreatePostModal({
  opened,
  close,
  setPosts,
}: {
  opened: boolean;
  close: () => void;
  setPosts: any;
}) {
  const [info, setInfo] = useState({ title: '', content: '', categoryId: 1, tag: [2, 3] });
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setInfo({ title: '', content: '', categoryId: 1, tag: [2, 3] });
    close();
  };

  const Submit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await createPost({
        titlePost: info.title,
        contentPost: info.content,
        category: info.categoryId,
        tags: info.tag,
      });
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleClose}
        title="Создание поста"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 1 }} />
        <form onSubmit={Submit}>
          <Flex gap={10} direction="column">
            <TextInput
              placeholder="Название"
              value={info.title}
              onChange={(e) => setInfo({ ...info, title: e.target.value })}
            />
            <TextInput
              placeholder="Контент"
              value={info.content}
              onChange={(e) => setInfo({ ...info, content: e.target.value })}
            />
            <Button type="submit">Создать</Button>
          </Flex>
        </form>
      </Modal>
    </>
  );
}
