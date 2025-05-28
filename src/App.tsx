import '@mantine/core/styles.css';

import { Box, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Box>
        <Router />
      </Box>
    </MantineProvider>
  );
}
