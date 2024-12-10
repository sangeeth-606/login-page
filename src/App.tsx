
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { LoginForm } from './components/LoginForm';
import { ThemeToggle } from './components/ThemeToggle';
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeToggle />
      <Flex
        minH="100vh"
        align="center"
        justify="center"
      >
        <LoginForm />
      </Flex>
    </ChakraProvider>
  );
}

export default App;