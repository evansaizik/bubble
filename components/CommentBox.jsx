import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Camera, Send } from 'iconsax-react';

const CommentBox = ({ commentBox, showCommentBox }) => {
  return (
    <InputGroup
      w={'99%'}
      margin={'auto'}
      display={commentBox ? 'flex' : 'none'}
    >
      <Input
        as='textarea'
        border={'2px solid #D2DED5'}
        borderRadius={'20px'}
        resize={'none'}
        _focus={{ borderColor: 'white' }}
        py={'5px'}
        width={'100%'}
        h={{ base: '80px', md: '100px' }}
      />
      <InputRightElement mx={'20px'} mt={{ base: '35px', md: '55px' }}>
        <label htmlFor='files'>
          <Camera />
        </label>
        <Input id='files' type={'file'} display={'none'}></Input>
        <IconButton
          w={'30px'}
          h={'30px'}
          ml={'10px'}
          borderRadius={'50%'}
          bg={'transparent'}
          _hover={{ bg: 'transparent' }}
          icon={<Send />}
          onClick={() => showCommentBox((prev) => !prev)}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default CommentBox;
