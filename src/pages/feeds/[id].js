import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import {
  Box,
  Text,
  Grid,
  Button,
  HStack,
  Icon,
  UnorderedList,
  ListItem,
  GridItem,
} from '@chakra-ui/react';
import PostUserDetails from '../../../components/PostUserDetails';
import PostEngagements from '../../../components/PostEngagements';
import feedsData from '../../utils/feedsData';
import {
  HeartFilledIcon,
  HeartIcon,
  PaperPlaneIcon,
} from '@radix-ui/react-icons';
import CommentBox from '../../../components/CommentBox';
import Comments from '../../../components/UI/Comments';
import comments from '../../utils/comments';

const PostId = () => {
  const router = useRouter();
  const [liked, setLiked] = useState(false);
  const [commentBox, setCommentBox] = useState(false);
  const postId = router.query.id;
  const post = feedsData.find((post) => post.id === postId);

  return (
    <Box px={'10px'} mt={'10px'}>
      <Box mb='40px' w='100%' listStyleType='none'>
        <PostUserDetails time={post?.postedAt} name={post?.name} />
        <Box>
          {post?.image && (
            <Grid gap={2} mb={'15px'}>
              {post.image.map((image, i) => (
                <GridItem key={i}>
                  <Image
                    priority={true}
                    src={image}
                    alt='photo'
                    width='100%'
                    height='100%'
                  />
                </GridItem>
              ))}
            </Grid>
          )}
          <Text
            id={post?.id}
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
        </Box>
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
          <UnorderedList listStyleType={'none'} mt={'10px'}>
            {comments.map((comment) => (
              <ListItem key={comment.id}>
                <Comments comment={comment} />
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
      <Box position={'sticky'} w={'100%'} bottom={'0'}>
        <CommentBox commentBox={commentBox} showCommentBox={setCommentBox} />
      </Box>
    </Box>
  );
};

export default PostId;