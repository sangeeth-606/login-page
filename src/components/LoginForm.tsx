import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { Eye, EyeOff } from 'lucide-react';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.800', 'white');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Box
      w={['90%', '80%', '50%', '40%']}
      p={8}
      borderRadius="lg"
      boxShadow="xl"
      bg={bgColor}
      color={textColor}
    >
      <VStack spacing={6}>
        <Heading size="xl">Welcome Back</Heading>
        <Text color={useColorModeValue('gray.600', 'gray.300')}>
          Please enter your details to sign in
        </Text>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={4} align="stretch">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                size="lg"
                borderRadius="md"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  size="lg"
                  borderRadius="md"
                />
                <InputRightElement h="full">
                  <IconButton
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                    icon={showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    size="sm"
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              w="100%"
              mt={4}
            >
              Sign In
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};