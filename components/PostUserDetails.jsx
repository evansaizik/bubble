import { Avatar, Box, Divider, Flex, Text } from '@chakra-ui/react';

const PostUserDetails = () => {
  return (
    <Flex w='100%' h='60px' mb='10px' gap={4}>
      <Avatar />
      <Box>
        <Text fontWeight='bold'>Kelly</Text>
        <Text as='small'>Posted 2 hours ago</Text>
      </Box>
    </Flex>
  );
};

export default PostUserDetails;
