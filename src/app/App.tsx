import '@mantine/core/styles.css';

import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { store } from '@/app/store';
import { theme } from '@/app/theme';
import { HomePage } from '@/pages/Home';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </MantineProvider>
  );
}
