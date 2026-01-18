import { useEffect } from 'react';
import { Button, Flex, LoadingOverlay, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
//* fixed
import { useAppDispatch, useAppSelector } from '@/shared/lib';
import { useUpdatePostMutation } from '@/entities/post';
import { selectOpenEditPostModal, selectSelectedPost, setOpenEditPostModal } from '@/entities/view';

export default function UpdatePostModal() {
  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const dispatch = useAppDispatch();
  const opened = useAppSelector(selectOpenEditPostModal);
  const selectedPost = useAppSelector(selectSelectedPost);

  const form = useForm({
    initialValues: {
      title: '',
      content: '',
      category_id: 1,
      tag_ids: [2, 3],
    },
    validate: {
      title: (value) => (value.length > 0 ? null : 'Поле обязательно для заполнения'),
      content: (value) => (value.length > 0 ? null : 'Поле обязательно для заполнения'),
    },
  });

  useEffect(() => {
    if (selectedPost) {
      form.setValues({
        title: selectedPost.title,
        content: selectedPost.content,
      });
    }
  }, [selectedPost]);

  const handleClose = () => {
    dispatch(setOpenEditPostModal(false));
    form.reset();
  };

  const onSubmit = () => {
    const updatedPost = {
      id: selectedPost.id,
      post: form.values,
    };
    updatePost(updatedPost);
    dispatch(setOpenEditPostModal(false));
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
      <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 1 }} />
      <form onSubmit={form.onSubmit(onSubmit)}>
        <Flex gap={10} direction="column">
          <TextInput
            placeholder="Введите название"
            label="Название"
            key={form.key('title')}
            {...form.getInputProps('title')}
          />
          <TextInput
            placeholder="Введите содержание поста"
            label="Контент"
            key={form.key('content')}
            {...form.getInputProps('content')}
          />
          <Button type="submit">Обновить</Button>
        </Flex>
      </form>
    </Modal>
  );
}
