import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import MainLayout from '../../components/UI/MainLayout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  if (
    pathname === '/feeds' ||
    pathname === '/messages' ||
    pathname === '/friends' ||
    pathname === '/notifications'
  ) {
    return (
      <ChakraProvider>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
