import { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Camera, Send } from 'iconsax-react';
import { useEditPostMutation } from '../../src/api/postSlice';

const EditPostBox = ({ post, setPost, postId, editBox, showEditBox }) => {
  const [media, setMedia] = useState(null);
  const [editPost] = useEditPostMutation();

  const submitHandler = async (postId) => {
    if (!post && !media) return;

    const formData = new FormData();
    formData.append('media', media);
    formData.append('post', post);

    const inputValue = { postId, formData };

    await editPost(inputValue);

    setMedia(null);
  };

  return createPortal(
    <InputGroup
      w={'inherit'}
      margin={'auto'}
      position={'fixed'}
      top={'50%'}
      display={editBox ? 'flex' : 'none'}
    >
      <Input
        id={'edit-input'}
        bg={'white'}
        as='textarea'
        border={'2px solid #D2DED5'}
        borderRadius={'20px'}
        resize={'none'}
        _focus={{ borderColor: 'white' }}
        py={'5px'}
        width={'100%'}
        h={{ base: '80px', md: '100px' }}
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <InputRightElement mx={'20px'} mt={{ base: '35px', md: '55px' }}>
        <label htmlFor='files'>
          <Camera />
        </label>
        <Box display={'none'}>
          <input
            id='files'
            type={'file'}
            onChange={(e) => setMedia(e.target.files[0])}
          />
        </Box>
        <IconButton
          w={'30px'}
          h={'30px'}
          ml={'10px'}
          borderRadius={'50%'}
          bg={'transparent'}
          _hover={{ bg: 'transparent' }}
          icon={<Send />}
          onClick={() => {
            submitHandler(postId);
            showEditBox((prev) => !prev);
          }}
        />
      </InputRightElement>
    </InputGroup>,
    document.getElementById('portal')
  );
};

export default EditPostBox;
