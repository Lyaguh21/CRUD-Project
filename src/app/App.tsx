import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import { Box, MantineProvider } from '@mantine/core';
import { HomePage } from '@/pages/Home.page';
import { theme } from './theme';
import { store } from './store/store';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <Box px={20}>
          <HomePage />
        </Box>
      </Provider>
    </MantineProvider>
  );
}
