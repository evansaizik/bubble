import { Flex, Text } from '@chakra-ui/layout';
import { Avatar, Button, Input, Box } from '@chakra-ui/react';
import { Camera, Location } from 'iconsax-react';
import FeedsList from './FeedsList';
import feedsData from '../src/utils/feedsData';

const Feeds = () => {
  return (
    /* Container */
    <Flex as={'main'} mt='4' gap={6} direction='column' alignItems='center'>
      {/* Avatar and Input */}
      <Flex
        w={{ base: '90%', md: '100%' }}
        gap={2}
        justifyContent='center'
        as={'section'}
      >
        <Avatar />
        <Input type='text' />
      </Flex>
      <Flex
        gap={4}
        w={{ base: '90%', md: '100%' }}
        justifyContent='space-between'
      >
        <Flex as={'section'} gap='30px'>
          <Flex
            as={'button'}
            direction={'column'}
            justifyContent='center'
            alignItems={'center'}
          >
            <Camera />
            <Text as='small'>Add photo</Text>
          </Flex>
          <Flex
            as={'button'}
            direction={'column'}
            justifyContent='center'
            alignItems={'center'}
          >
            <Location />
            <Text as='small'> Share location</Text>
          </Flex>
        </Flex>
        <Button bg='lightblue'>post</Button>
      </Flex>
      <Box as='ul' w={{ base: '90%', md: '100%' }}>
        {feedsData.map((post) => (
          <FeedsList key={post.id} post={post} />
        ))}
      </Box>
    </Flex>
  );
};

export default Feeds;
