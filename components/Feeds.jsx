import { useState } from 'react';
import { Flex, Text } from '@chakra-ui/layout';
import { Avatar, Button, Input, Box } from '@chakra-ui/react';
import { Camera, Location } from 'iconsax-react';
import FeedsList from './FeedsList';
import {
  useGetAllPostsQuery,
  useCreateAPostMutation,
} from '../src/api/postSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { userSliceActions } from '../src/api/userSlice';

const Feeds = () => {
  const { data, error, isLoading, isSuccess, isError } = useGetAllPostsQuery();
  const [createAPost] = useCreateAPostMutation();
  const [post, setPost] = useState('');
  const [media, setMedia] = useState(null);

  const postHandler = async () => {
    if (!media && !post) return;

    const formData = new FormData();
    formData.append('post', post);
    formData.append('media', media);

    await createAPost(formData);

    setPost('');
    setMedia(null);
  };

  let content;

  if (isLoading) content = <p>Loading...</p>;
  else if (isError) content = <p>{error}</p>;
  else if (isSuccess)
    content = (
      <>
        {data.data.posts.map((post) => (
          <FeedsList key={post.id} post={post} />
        ))}
      </>
    );

  return (
    /* Container */
    <Flex as={'main'} mt='4' gap={6} direction='column' alignItems='center'>
      {/* Avatar and Input */}
      <Flex
        w={{ base: '95%', md: '100%' }}
        gap={2}
        justifyContent='center'
        as={'section'}
      >
        <Avatar />
        <Input
          type='text'
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </Flex>
      <Flex
        gap={4}
        w={{ base: '95%', md: '100%' }}
        justifyContent='space-between'
      >
        <Flex as={'section'} gap='30px'>
          <Flex
            as={'label'}
            htmlFor='media'
            direction={'column'}
            justifyContent='center'
            alignItems={'center'}
          >
            <Camera />
            <Text fontSize={'13px'}>
              Add photo
            </Text>
            <Input
              id='media'
              style={{ display: 'none' }}
              type='file'
              onChange={(e) => setMedia(e.target.files[0])}
            />
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
        <Button bg='lightblue' onClick={postHandler}>
          post
        </Button>
      </Flex>
      <Box as='ul' w={{ base: '95%', md: '100%' }}>
        {content}
      </Box>
    </Flex>
  );
};

export default Feeds;
