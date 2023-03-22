import { Box, Text, Flex, Grid, GridItem } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import {
  AvatarIcon,
  EnvelopeOpenIcon,
  HomeIcon,
  BellIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import classes from './MainLayout.module.css';

const MainLayout = ({ children }) => {
  return (
    <Box className={classes.container}>
      <Box className={classes['sidebar-left']}>
        <Text>sidebar</Text>
      </Box>
      <Box className={classes.feed}>
        {children}
        <Grid
          as='section'
          w='100%'
          h='50px'
          bg='gray.400'
          templateColumns={'repeat(4, 1fr)'}
          display={{ base: 'grid', md: 'none' }}
          position='fixed'
          bottom={'0'}
        >
          {/* Navigation Buttons */}
          <Flex alignItems='center' justifyContent='center'>
            <Link href='/feeds' className={classes.link}>
              <Icon h='30px' w='30px' as={HomeIcon} />
              <small>Home</small>
            </Link>
          </Flex>

          <Flex justifyContent='center' alignItems='center'>
            <Link className={classes.link} href='/messages'>
              <Icon h='30px' w='30px' as={EnvelopeOpenIcon} />
              <small>Messages</small>
            </Link>
          </Flex>

          <Flex justifyContent='center' alignItems='center'>
            <Link className={classes.link} href='/friends'>
              <Icon h='30px' w='30px' as={AvatarIcon} />
              <small>Friends</small>
            </Link>
          </Flex>

          <Flex justifyContent='center' alignItems='center'>
            <Link className={classes.link} href='/notifications'>
              <Icon h='30px' w='30px' as={BellIcon} />
              <small>Notifications</small>
            </Link>
          </Flex>
        </Grid>
      </Box>
      <Box className={classes['sidebar-right']}>
        <Text>drawer</Text>
      </Box>
    </Box>
  );
};

export default MainLayout;
