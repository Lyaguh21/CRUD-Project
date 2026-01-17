import { Box } from '@mantine/core';
import CheckPostModal from './components/CheckPostModal';
import Header from './components/Header';
import PostsList from './components/PostsList';
import CreatePostModal from './components/CreatePostModal';
import UpdatePostModal from './components/UpdatePostModal';

export function HomePage() {
  return (
    <>
      <Box px={20}>
        <Header />
        <PostsList />
      </Box>

      <CheckPostModal />
      <CreatePostModal />
      <UpdatePostModal />
    </>
  );
}
