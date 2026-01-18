import { Flex, Loader, SimpleGrid, Skeleton } from '@mantine/core';
//* fixed
import { IPost, useGetPostsQuery } from '@/entities/post';
import PostTemplate from '../components/PostTemplate';

export default function PostsList() {
  const { data: posts, isLoading, isFetching } = useGetPostsQuery();

  if (isLoading) {
    return (
      <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((i) => (
          <Skeleton h="185px" w="100%" key={i} visible />
        ))}
      </SimpleGrid>
    );
  }

  if (isFetching) {
    return (
      <Flex justify="center" align="center" w="100%" h="80vh">
        <Loader color="blue" />
      </Flex>
    );
  }

  return (
    <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
      {posts?.map((post: IPost) => <PostTemplate post={post} key={post.id} />)}
    </SimpleGrid>
  );
}
