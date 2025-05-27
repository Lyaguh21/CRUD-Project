import { useState } from 'react';
import { title } from 'process';
import { Button, Flex, Modal, TextInput } from '@mantine/core';
import { createPost } from '@/api/posts';
import { API } from '@/helpers';

export default function CreatePostModal({ opened, close, setPosts, posts }) {
  const [info, setInfo] = useState({ title: '', content: '', categoryId: 1, tag: [2, 3] });
  const handleClose = () => {
    setInfo({ title: '', content: '', categoryId: 1, tag: [2, 3] });
    close();
  };

  const Submit = (event) => {
    event.preventDefault();
    try {
      createPost({
        titlePost: info.title,
        contentPost: info.content,
        category: info.categoryId,
        tags: info.tag,
      });
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={handleClose}
      title="Создание поста"
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
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
  );
}
