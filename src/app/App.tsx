import '@mantine/core/styles.css';

import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { HomePage } from '@/features/posts/Home.page';
import { store } from './store/store';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </MantineProvider>
  );
}
