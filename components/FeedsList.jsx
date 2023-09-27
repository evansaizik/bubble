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
import placeholder from '../src/Assets/placeholder.png'

const FeedsList = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentBox, setCommentBox] = useState(false);

  return (
    <Box as='li' mb='40px' w='100%' listStyleType='none'>
      <PostUserDetails time={post?.postedAt} name={post?.name} />
      {post.image && (
        <Box mb={'15px'}>
          <Image
            priority={true}
            src={post.image}
            alt='photo'
            width='100%'
            height='100%'
          />
        </Box>
      )}
      <Text
        w='100%'
        h='fit-content'
        maxH='50px'
        whiteSpace='wrap'
        overflow='hidden'
      >
        {post?.post}
      </Text>
      <PostEngagements
        likes={post?.likes}
        comments={post?.comments}
        shares={post?.shares}
      />
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
            onClick={(e) => {
              setCommentBox((prev) => !prev);
            }}
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
      <CommentBox commentBox={commentBox} showCommentBox={setCommentBox} />
      <Divider />
    </Box>
  );
};

export default FeedsList;
