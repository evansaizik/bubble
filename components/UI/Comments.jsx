import { Box, Flex, Avatar, Text, Grid, GridItem } from '@chakra-ui/react';

const Comments = ({ comment }) => {
  return (
    <Box mt={'20px'}>
      <Flex
        w={{ base: '95%', md: '100%' }}
        gap={2}
        justifyContent='start'
        as={'section'}
      >
        <Avatar src={comment.photo} name={comment.name} size={{ base: 'sm', md: 'md' }} />
        <Grid>
          <GridItem>
            <Text fontSize={{ base: '13px', md: '16px' }} fontWeight={'bold'}>
              {comment.name}
            </Text>
          </GridItem>
          <GridItem p={'0'}>
            <Text fontSize={{ base: '11px', md: '16px' }}>{comment.postedAt}</Text>
          </GridItem>
        </Grid>
      </Flex>
      <Text mt={'5px'}>{comment.comment}</Text>
    </Box>
  );
};

export default Comments;
