import { useState } from 'react';
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Edit, MoreCircle, Trash } from 'iconsax-react';
import { useDeletePostMutation } from '../src/api/postSlice';
import TimeAgo from './TimeAgo';
import EditPostBox from './UI/EditPostBox';

const PostUserDetails = ({ post }) => {
  const [deletePost] = useDeletePostMutation();
  const [editBox, setEditBox] = useState(false);
  const [postToEdit, setPostToEdit] = useState('');

  const deletePostHandler = (id) => {
    deletePost(id);
  };

  const toggleEditBox = () => {
    setEditBox((prev) => !prev);
    setPostToEdit(post.post);
  };

  return (
    <>
      <EditPostBox
        post={postToEdit}
        setPost={setPostToEdit}
        postId={post.id}
        editBox={editBox}
        showEditBox={setEditBox}
      />
      <Flex justifyContent={'space-between'}>
        <Flex w='100%' h='60px' mb='10px' gap={4}>
          <Avatar name={post?.user.name} />
          <Box>
            <Text fontWeight='bold'>{post?.user.name}</Text>
            <Text as='small'>
              {`Posted `}
              <TimeAgo timeStamp={post?.postedAt} />
            </Text>
          </Box>
        </Flex>
        <Menu>
          <MenuButton h={'30px'}>
            <MoreCircle color={'gray'} />
          </MenuButton>
          <MenuList fontSize={'15px'}>
            <MenuItem icon={<Edit />} onClick={toggleEditBox}>
              Edit post
            </MenuItem>
            <MenuItem
              onClick={() => deletePostHandler(post.id)}
              color={'red.600'}
              icon={<Trash />}
            >
              Delete post
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </>
  );
};

export default PostUserDetails;
