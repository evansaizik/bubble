import { useState } from 'react';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Camera, Send } from 'iconsax-react';
import { useAddACommentMutation } from '../src/api/commentSlice';

const CommentBox = ({ postId, commentBox, showCommentBox }) => {
  const [addAComment, { data, error }] = useAddACommentMutation();
  const [comment, setComment] = useState('');
  const [media, setMedia] = useState(null);

  const submitHandler = async () => {
    if (!comment && !media) return;

    const formData = new FormData();
    formData.append('media', media);
    formData.append('comment', comment);

    const inputValue = { postId, formData };

    await addAComment(inputValue);

    setComment('');
    setMedia(null);
  };

  return (
    <InputGroup
      w={'100%'}
      margin={'auto'}
      display={commentBox ? 'flex' : 'none'}
    >
      <Input
        bg={'white'}
        as='textarea'
        border={'2px solid #D2DED5'}
        borderRadius={'20px'}
        resize={'none'}
        _focus={{ borderColor: 'white' }}
        py={'5px'}
        width={'100%'}
        h={{ base: '80px', md: '100px' }}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <InputRightElement mx={'20px'} mt={{ base: '35px', md: '55px' }}>
        <label htmlFor='files'>
          <Camera />
        </label>
        <input
          id='files'
          type={'file'}
          onChange={(e) => setMedia(e.target.files[0])}
          style={{ width: '0px', height: '0px' }}
        />
        <IconButton
          w={'30px'}
          h={'30px'}
          ml={'10px'}
          borderRadius={'50%'}
          bg={'transparent'}
          _hover={{ bg: 'transparent' }}
          icon={<Send />}
          onClick={() => {
            submitHandler();
            showCommentBox((prev) => !prev);
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default CommentBox;
