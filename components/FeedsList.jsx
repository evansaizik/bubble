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
import { useEffect, useState } from 'react';
import CommentBox from './CommentBox';
import { useRouter } from 'next/router';
import FeedsLayout from './UI/FeedsLayout';
import { useReactToPostMutation } from '../src/api/postSlice';

const FeedsList = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  const likedColor = () => {
    return {
      color: post?.reaction.find((val) => val?.user === user?._id)
        ? 'red'
        : 'black',
      value: post?.reaction.find((val) => val?.user === user?._id)
        ? true
        : false,
    };
  };

  const router = useRouter();
  const [reactToPost] = useReactToPostMutation();
  const [liked, setLiked] = useState(likedColor().value || null);
  const [postId, setPostId] = useState('');
  const [commentBox, setCommentBox] = useState(false);

  const seeFullPost = (e) => {
    router.push(`feeds/${e.target.id}`);
  };

  useEffect(() => {
    const values = { postId, reactionValue: liked };
    if (postId) reactToPost(values);
  }, [postId, liked]);

  const togglePostReaction = async (val) => {
    setLiked((prev) => !prev);
    setPostId(val);
  };

  return (
    <Box as='li' mb='40px' w='100%' listStyleType='none'>
      <PostUserDetails
        time={post?.postedAt}
        postId={post.id}
        name={post?.user.name}
      />
      <Box id={post.id} onClick={seeFullPost}>
        {post.media.length > 0 && <FeedsLayout post={post} />}
        <Text
          id={post.id}
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
            onClick={() => togglePostReaction(post.id)}
          >
            <HStack>
              <Icon
                w='20px'
                h='20px'
                color={likedColor().color}
                as={likedColor().value ? HeartFilledIcon : HeartIcon}
              />
              <Text>like</Text>
            </HStack>
          </Button>
          <Button
            bg='transparent'
            _hover={{ bg: 'none' }}
            onClick={() => {
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
      <CommentBox
        postId={post.id}
        commentBox={commentBox}
        showCommentBox={setCommentBox}
      />
      <Divider />
    </Box>
  );
};

export default FeedsList;
