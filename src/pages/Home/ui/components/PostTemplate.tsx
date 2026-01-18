import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { Badge, Button, Card, Group, Text } from '@mantine/core';
import { IPost, useDeletePostMutation } from '@/entities/post';
import { setOpenCheckPostModal, setOpenEditPostModal, setSelectedPost } from '@/entities/view';
//* fixed
import { useAppDispatch } from '@/shared/lib';

interface PostTemplateProps {
  post: IPost;
}

export default function PostTemplate({ post }: PostTemplateProps) {
  const [deletePost] = useDeletePostMutation();
  const dispatch = useAppDispatch();

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <Card shadow="sm" padding="lg" radius="md" withBorder style={{ marginBottom: '1rem' }}>
        <Card.Section withBorder inheritPadding py="xs">
          <Group justify="space-between">
            <Text fw={700} size="lg" c="blue">
              {post.title}
            </Text>
            <Group gap="xs">
              <Button
                variant="light"
                color="blue"
                size="xs"
                onClick={() => {
                  dispatch(setSelectedPost(post));
                  dispatch(setOpenCheckPostModal(true));
                }}
              >
                <IconEye />
              </Button>
              <Button
                variant="light"
                color="green"
                size="xs"
                onClick={() => {
                  dispatch(setSelectedPost(post));
                  dispatch(setOpenEditPostModal(true));
                }}
              >
                <IconEdit />
              </Button>
              <Button variant="light" color="red" size="xs" onClick={() => deletePost(post.id)}>
                <IconTrash />
              </Button>
            </Group>
          </Group>
        </Card.Section>

        <Text mt="sm" c="dimmed" size="sm">
          {post.content}
        </Text>

        <Group mt="md" mb="xs">
          <Badge color="cyan" variant="light">
            Category: {post.category.name}
          </Badge>
          {post.tags.map((tag) => (
            <Badge key={tag.id} color="grape" variant="light">
              {tag.name}
            </Badge>
          ))}
        </Group>

        <Text size="xs" c="dimmed">
          Edited on: {new Date(post.updated_at).toLocaleDateString()}
        </Text>
        <Text size="xs" c="dimmed">
          Posted on: {new Date(post.created_at).toLocaleDateString()}
        </Text>
      </Card>
    </motion.div>
  );
}
