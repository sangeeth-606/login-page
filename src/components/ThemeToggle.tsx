
import { IconButton, useColorMode } from '@chakra-ui/react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      onClick={toggleColorMode}
      position="fixed"
      top={4}
      right={4}
      size="lg"
      variant="ghost"
    />
  );
};