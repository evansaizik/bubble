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
import {
  useDeletePostMutation,
  useEditPostMutation,
} from '../src/api/postSlice';
import TimeAgo from './TimeAgo';

const PostUserDetails = ({ postId, time, name }) => {
  const [deletePost] = useDeletePostMutation();

  const deletePostHandler = (id) => {
    deletePost(id);
  };

  return (
    <Flex justifyContent={'space-between'}>
      <Flex w='100%' h='60px' mb='10px' gap={4}>
        <Avatar name={name} />
        <Box>
          <Text fontWeight='bold'>{name}</Text>
          <Text as='small'>
            {`Posted `}
            <TimeAgo timeStamp={time} />
          </Text>
        </Box>
      </Flex>
      <Menu>
        <MenuButton h={'30px'}>
          <MoreCircle color={'gray'} />
        </MenuButton>
        <MenuList fontSize={'15px'}>
          <MenuItem icon={<Edit />}>Edit post</MenuItem>
          <MenuItem
            onClick={() => deletePostHandler(postId)}
            color={'red.600'}
            icon={<Trash />}
          >
            Delete post
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default PostUserDetails;
