import { useEffect, useState } from 'react';
import { Button, Flex, LoadingOverlay, Modal, TextInput } from '@mantine/core';
import { detailedFetchPosts, fetchPosts, updatePost } from '@/api/posts';

export default function UpdatePostModal({
  opened,
  close,
  setPosts,
  checkId,
}: {
  opened: boolean;
  close: () => void;
  setPosts: any;
  checkId: number;
}) {
  const [info, setInfo] = useState({ title: '', content: '', categoryId: 1, tag: [2, 3] });
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
        }));
      } catch (err) {
        console.error('Failed to load post:', err);
      } finally {
        setLoading(false);
      }
    };

    loadInfo();
  }, [checkId]);

  const Submit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      await updatePost(info, checkId);
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      handleClose();
    }
  };

  const handleClose = () => {
    close();
  };
  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Редактирование поста"
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
          <Button type="submit">Обновить</Button>
        </Flex>
      </form>
    </Modal>
  );
}
