import { ChakraProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import theme from './theme';

export function UIProvider({children}: {children: ReactNode}) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}

export default UIProvider;
