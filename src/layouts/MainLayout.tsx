import { Outlet } from 'react-router-dom';
import { Box } from '@mantine/core';
import Header from '@/components/Header/Header';

export default function MainLayout() {
  return (
    <>
      <Header />
      <Box px={20}>
        <Outlet />
      </Box>
    </>
  );
}
