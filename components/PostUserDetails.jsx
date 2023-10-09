import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const PostUserDetails = ({ time, name }) => {
  return (
    <Flex w='100%' h='60px' mb='10px' gap={4}>
      <Avatar name={name} />
      <Box>
        <Text fontWeight='bold'>{name}</Text>
        <Text as='small'>{`Posted ${new Date(time).toLocaleDateString('en-US', {
          dayPeriod: 'long',
        })}`}</Text>
      </Box>
    </Flex>
  );
};

export default PostUserDetails;
