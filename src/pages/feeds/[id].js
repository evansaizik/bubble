import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
import {
  HeartFilledIcon,
  HeartIcon,
  PaperPlaneIcon,
} from '@radix-ui/react-icons';
import CommentBox from '../../../components/CommentBox';
import Comments from '../../../components/UI/Comments';
import { useGetAPostQuery, useReactToPostMutation } from '../../api/postSlice';
import { useGetCommentsQuery } from '../../api/commentSlice';

const PostId = () => {
  const router = useRouter();
  const postId = router.query.id;
  const { data, isLoading, isSuccess, error } = useGetAPostQuery(postId);

  const imageFormat = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'webp',
    'bmp',
    'tiff',
    'ico',
    'heic',
    'avif',
    'svg',
  ];

  const {
    data: commentData,
    isLoading: isLoadingComment,
    isSuccess: isCommentSuccess,
    error: commentError,
  } = useGetCommentsQuery(postId);

  const post = data?.data?.post;
  const comments = commentData?.data;

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(JSON.parse(localStorage?.getItem('loggedInUser')));
  }, []);

  const likedColor = () => {
    return {
      color: post?.reaction?.find((val) => val?.user === user?._id)
        ? 'red'
        : 'black',
      value: post?.reaction?.find((val) => val?.user === user?._id)
        ? true
        : false,
    };
  };

  const [reactToPost] = useReactToPostMutation();
  const [commentBox, setCommentBox] = useState(false);

  let content;
  let commentContent;

  const togglePostReaction = async (val) => {
    const values = { postId, reactionValue: !likedColor().value };

    reactToPost(values);
  };

  if (isLoading) content = 'Loading post';
  else if (isSuccess)
    content = (
      <>
        <PostUserDetails post={post} />
        <Box>
          {post?.media && (
            <Grid gap={2} mb={'15px'}>
              {post.media.map((image, i) =>
                imageFormat.includes(image.split('.')[1]) ? (
                  <GridItem key={i}>
                    <Image
                      priority={true}
                      src={`https://res.cloudinary.com/dgl66man1/image/upload/v1697722292/${image}`}
                      alt='photo'
                      width={1000}
                      height={1000}
                      style={{ width: '100%', objectFit: 'fill' }}
                    />
                  </GridItem>
                ) : (
                  <video
                    key={i}
                    src={`https://res.cloudinary.com/dgl66man1/video/upload/v1697731304/${image}`}
                    controls={true}
                    style={{
                      width: '100%',
                      aspectRatio: 4 / 3,
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                )
              )}
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
      </>
    );
  else content = error;

  if (isLoadingComment) commentContent = 'Loading Comments';
  else if (isCommentSuccess)
    commentContent = (
      <>
        {comments.map((comment) => (
          <ListItem key={comment.id}>
            <Comments comment={comment} />
          </ListItem>
        ))}
      </>
    );
  else commentContent = commentError;

  return (
    <Box px={'10px'} mt={'10px'}>
      <Box mb='40px' w='100%' listStyleType='none'>
        {content}
        <Box as='section'>
          <Grid templateColumns={'repeat(3, 1fr)'}>
            <Button
              bg='transparent'
              _hover={{ bg: 'none' }}
              onClick={() => togglePostReaction(post?.id)}
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
            {commentContent}
          </UnorderedList>
        </Box>
      </Box>
      <Box position={'sticky'} w={'100%'} bottom={'0'}>
        <CommentBox
          postId={postId}
          commentBox={commentBox}
          showCommentBox={setCommentBox}
        />
      </Box>
    </Box>
  );
};

export default PostId;
