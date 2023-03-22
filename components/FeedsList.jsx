import Image from 'next/image';
import {
  Box,
  Button,
  Divider,
  Grid,
  Text,
  Icon,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import george from '../src/Assets/george.jpg';
import pex from '../src/Assets/pex.jpg';
import andrea from '../src/Assets/andrea.jpg';
import {
  ChatBubbleIcon,
  CheckIcon,
  HeartFilledIcon,
  HeartIcon,
  PaperPlaneIcon,
} from '@radix-ui/react-icons';

const FeedsList = () => {
  return (
    <Box as='ul' w={{ base: '90%', md: '100%' }}>
      <Box as='li' mb='40px' w='100%' listStyleType='none'>
        <Image src={george} width='100%' height='100%' />
        <br />
        <Text
          w='100%'
          h='fit-content'
          maxH='50px'
          whiteSpace='wrap'
          overflow='hidden'
        >
          This is a new post I made because I was running some tests on how the
          layout should be displayed now lets see if this layout will work as
          expected
        </Text>
        <Box as='section'>
          <Grid templateColumns={'repeat(3, 1fr)'}>
            <Button bg='transparent'>
              <HStack>
                <Icon w='20px' h='20px' as={HeartIcon} />
                <Text>like</Text>
              </HStack>
            </Button>
            <Button bg='transparent'>
              <HStack>
                <Icon w='20px' h='20px' as={ChatBubbleIcon} />
                <Text>comment</Text>
              </HStack>
            </Button>
            <Button bg='transparent'>
              <HStack>
                <Icon
                  transform='rotate(-40deg) translateY(-5px) translateX(-2px)'
                  w='20px'
                  h='20px'
                  as={PaperPlaneIcon}
                />
                <Text>share</Text>
              </HStack>
            </Button>
          </Grid>
        </Box>
        <Divider />
      </Box>
      <Box as='li' mb='40px' listStyleType='none'>
        <Image src={pex} width='100%' height='100%' />
        <br />
        <Text
          w='100%'
          h='fit-content'
          maxH='50px'
          whiteSpace='wrap'
          overflow='hidden'
        >
          This is a new post I made because I was running some tests on how the
          layout should be displayed now lets see if this layout will work as
          expected
        </Text>
        <Box as='section'>
          <Grid templateColumns={'repeat(3, 1fr)'}>
            <Button bg='transparent'>
              <HStack>
                <Icon w='20px' h='20px' as={HeartIcon} />
                <Text>like</Text>
              </HStack>
            </Button>
            <Button bg='transparent'>
              <HStack>
                <Icon w='20px' h='20px' as={ChatBubbleIcon} />
                <Text>comment</Text>
              </HStack>
            </Button>
            <Button bg='transparent'>
              <HStack>
                <Icon
                  transform='rotate(-40deg) translateY(-5px) translateX(-2px)'
                  w='20px'
                  h='20px'
                  as={PaperPlaneIcon}
                />
                <Text>share</Text>
              </HStack>
            </Button>
          </Grid>
        </Box>
        <Divider />
      </Box>
      <Box as='li' mb='40px' listStyleType='none'>
        <Image src={andrea} width='100%' height='100%' />
        <br />
        <Text
          w='100%'
          h='fit-content'
          maxH='50px'
          whiteSpace='wrap'
          overflow='hidden'
        >
          This is a new post I made because I was running some tests on how the
          layout should be displayed now lets see if this layout will work as
          expected
        </Text>
        <Box as='section'>
          <Grid templateColumns={'repeat(3, 1fr)'}>
            <Button bg='transparent'>
              <HStack>
                <Icon w='20px' h='20px' as={HeartIcon} />
                <Text>like</Text>
              </HStack>
            </Button>
            <Button bg='transparent'>
              <HStack>
                <Icon w='20px' h='20px' as={ChatBubbleIcon} />
                <Text>comment</Text>
              </HStack>
            </Button>
            <Button bg='transparent'>
              <HStack>
                <Icon
                  transform='rotate(-40deg) translateY(-5px) translateX(-2px)'
                  w='20px'
                  h='20px'
                  as={PaperPlaneIcon}
                />
                <Text>share</Text>
              </HStack>
            </Button>
          </Grid>
        </Box>
        <Divider />
      </Box>
    </Box>
  );
};

export default FeedsList;
