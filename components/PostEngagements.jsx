import { Grid, Icon, Box, Text, Flex } from '@chakra-ui/react';
import { ChatBubbleIcon, HeartFilledIcon, PaperPlaneIcon } from '@radix-ui/react-icons';

const PostEngagements = () => {
  return (
    <Grid w='35%' my='10px' templateColumns='repeat(3, 1fr)'>
      <Flex gap='5px'>
        <Text as='small'>30</Text>
        <Icon color='red' as={HeartFilledIcon} />
      </Flex>
      <Flex gap='5px'>
        <Text as='small'>22</Text>
        <Icon as={ChatBubbleIcon} />
      </Flex>
      <Flex gap='5px'>
        <Text as='small'>8</Text>
        <Icon
          transform='rotate(-40deg) translateY(0px) translateX(0px)'
          w='15px'
          h='15px'
          as={PaperPlaneIcon}
        />
      </Flex>
    </Grid>
  );
};

export default PostEngagements;
