import Image from 'next/image';
import {
  Box,
  Button,
  Divider,
  Grid,
  Text,
  Icon,
  HStack,
} from '@chakra-ui/react';
import feedsData from '../src/utils/feedsData';
import {
  ChatBubbleIcon,
  HeartIcon,
  HeartFilledIcon,
  PaperPlaneIcon,
} from '@radix-ui/react-icons';
import PostUserDetails from './PostUserDetails';
import PostEngagements from './PostEngagements';
import { useState } from 'react';
import CommentBox from './CommentBox';

const FeedsList = () => {
  const [liked, setLiked] = useState(false);
  const [commentBox, setCommentBox] = useState(false);

  return (
    <Box as='ul' w={{ base: '90%', md: '100%' }}>
      {feedsData.map((post) => (
        <Box
          key={post.id}
          id={post.id}
          as='li'
          mb='40px'
          w='100%'
          listStyleType='none'
        >
          <PostUserDetails time={post.postedAt} name={post.name} />
          <Image src={post.image} alt='photo' width='100%' height='100%' />
          <br />
          <Text
            w='100%'
            h='fit-content'
            maxH='50px'
            whiteSpace='wrap'
            overflow='hidden'
          >
            {post.post}
          </Text>
          <PostEngagements
            likes={post.likes}
            comments={post.comments}
            shares={post.shares}
          />
          {!commentBox && (
            <Box as='section'>
              <Grid templateColumns={'repeat(3, 1fr)'}>
                <Button
                  bg='transparent'
                  _hover={{ bg: 'none' }}
                  onClick={() => setLiked((prev) => !prev)}
                >
                  <HStack>
                    <Icon
                      w='20px'
                      h='20px'
                      color={liked ? 'red' : 'black'}
                      as={liked ? HeartFilledIcon : HeartIcon}
                    />
                    <Text>like</Text>
                  </HStack>
                </Button>
                <Button
                  bg='transparent'
                  _hover={{ bg: 'none' }}
                  onClick={() => setCommentBox((prev) => !prev)}
                >
                  <HStack>
                    <Icon w='20px' h='20px' as={ChatBubbleIcon} />
                    <Text>comment</Text>
                  </HStack>
                </Button>
                <Button bg='transparent' _hover={{ bg: 'none' }}>
                  <HStack>
                    <Icon
                      transform='rotate(-40deg) translateY(1px) translateX(6px)'
                      w='20px'
                      h='20px'
                      as={PaperPlaneIcon}
                    />
                    <Text>share</Text>
                  </HStack>
                </Button>
              </Grid>
            </Box>
          )}
          {commentBox && <CommentBox sendMessage={setCommentBox} />}
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default FeedsList;
