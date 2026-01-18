import { Box, ScrollArea } from '@mantine/core';
//* fixed
import CheckPostModal from './components/CheckPostModal';
import CreatePostModal from './components/CreatePostModal';
import UpdatePostModal from './components/UpdatePostModal';
import Header from './sections/Header';
import PostsList from './sections/PostsList';

export default function HomePage() {
  return (
    <>
      <Box px={20}>
        <Header />
        <ScrollArea w="100%" h="90vh">
          <PostsList />
        </ScrollArea>
      </Box>

      <CheckPostModal />
      <CreatePostModal />
      <UpdatePostModal />
    </>
  );
}
