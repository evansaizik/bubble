import { Box, Text, Flex, Grid, GridItem, Heading } from '@chakra-ui/layout';
import Link from 'next/link';
import classes from './MainLayout.module.css';
import { Logout, Message, Notification, People } from 'iconsax-react';
import ProtectedRoute from '../ProtectedRoute';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const MainLayout = ({ children }) => {
  const router = useRouter();

  const logoutHandler = () => {
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('accessToken')
    router.replace('/login');
  };

  return (
    <>
      <ProtectedRoute>
        <Grid
          w={'100%'}
          position={{ md: 'sticky' }}
          px={'10px'}
          h={'50px'}
          templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }}
          bg={'blue.400'}
        >
          <GridItem colSpan={{ base: 2, md: 3 }}>
            <Link href={'/feeds'}>
              <Heading
                fontStyle={'italic'}
                _before={{ content: `"Bub"`, color: 'blue.200' }}
                color={'white'}
              >
                bles
              </Heading>
            </Link>
          </GridItem>
          <Grid
            as='section'
            w='130px'
            gap={3}
            h='50px'
            templateColumns={'repeat(4, 1fr)'}
          >
            <Flex justifyContent='center' alignItems='center'>
              <Link className={classes.link} href='/messages'>
                <Message />
              </Link>
            </Flex>

            <Flex justifyContent='center' alignItems='center'>
              <Link className={classes.link} href='/friends'>
                <People />
              </Link>
            </Flex>

            <Flex justifyContent='center' alignItems='center'>
              <Link className={classes.link} href='/notifications'>
                <Notification />
              </Link>
            </Flex>

            <Flex justifyContent='center' alignItems='center'>
              <Button className={classes.link} onClick={logoutHandler}>
                <Logout />
              </Button>
            </Flex>
          </Grid>
        </Grid>
        <Box className={classes.container}>
          <Box className={classes['sidebar-left']}>
            <Text>sidebar</Text>
          </Box>
          <Box className={classes.feed}>{children}</Box>
          <Box className={classes['sidebar-right']}>
            <Text>drawer</Text>
          </Box>
        </Box>
      </ProtectedRoute>
    </>
  );
};

export default MainLayout;
