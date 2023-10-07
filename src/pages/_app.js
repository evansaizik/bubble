import { ChakraProvider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../store/store';
import MainLayout from '../../components/UI/MainLayout';
import SignLayout from '../../components/UI/SignLayout';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { pathname } = router;

  if (pathname === '/' || pathname === '/login') {
    return (
      <Provider store={store}>
        <ChakraProvider>
          <SignLayout>
            <Component {...pageProps} />
          </SignLayout>
        </ChakraProvider>
      </Provider>
    );
  }

  if (
    pathname === '/feeds' ||
    pathname === '/feeds/[id]' ||
    pathname === '/messages' ||
    pathname === '/friends' ||
    pathname === '/notifications'
  ) {
    return (
      <Provider store={store}>
        <ChakraProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ChakraProvider>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
