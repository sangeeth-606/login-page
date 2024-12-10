import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false, // Ignores the system's color mode.
};

const theme = extendTheme({ 
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
      },
    }),
  },
});

export default theme;
