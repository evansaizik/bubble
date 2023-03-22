import { Box, Text, Flex, Grid } from '@chakra-ui/layout';
import { Icon } from '@chakra-ui/react';
import { AvatarIcon, EnvelopeOpenIcon, HomeIcon, BellIcon } from '@radix-ui/react-icons';
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
          bg='slategray'
          templateColumns={'repeat(4, 1fr)'}
          display={{ base: 'grid', md: 'none' }}
          position='fixed'
          bottom={'0'}
        >
          {/* Navigation Buttons */}
          <Flex
            as='button'
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Icon h='30px' w='30px' as={HomeIcon} />
            <small>Home</small>
          </Flex>
          <Flex
            as='button'
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Icon h='30px' w='30px' as={EnvelopeOpenIcon} />
            <small>Messages</small>
          </Flex>
          <Flex
            as='button'
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Icon h='30px' w='30px' as={AvatarIcon} />
            <small>Friends</small>
          </Flex>
          <Flex
            as='button'
            direction='column'
            justifyContent='center'
            alignItems='center'
          >
            <Icon h='30px' w='30px' as={BellIcon} />
            <small>Notifications</small>
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
