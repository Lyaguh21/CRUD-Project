import { Button, Flex, LoadingOverlay, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { useCreatePostMutation } from '@/entities/post/api/postApi';
import { selectOpenCreatePostModal } from '@/entities/view/model/viewSelectors';
import { setOpenCreatePostModal } from '@/entities/view/model/viewSlice';

export default function CreatePostModal() {
  const [createPost, { isLoading }] = useCreatePostMutation();
  const dispatch = useAppDispatch();
  const opened = useAppSelector(selectOpenCreatePostModal);

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

  const handleClose = () => {
    dispatch(setOpenCreatePostModal(false));
    form.reset();
  };

  const onSubmit = () => {
    createPost(form.values);
    dispatch(setOpenCreatePostModal(false));
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
        <LoadingOverlay
          visible={isLoading}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 1 }}
        />
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
            <Button type="submit">Создать</Button>
          </Flex>
        </form>
      </Modal>
    </>
  );
}
