import Image from 'next/image';
import { Grid, GridItem } from '@chakra-ui/react';

const FeedsLayout = ({ post }) => {
  const imageList = post.image;
  return (
    <Grid
      mb={'15px'}
      gap={2}
      templateColumns={imageList.length > 1 ? 'repeat(2, 1fr)' : '1fr'}
    >
      {imageList.map((image, i) => (
        <GridItem key={i}>
          <Image
            id={post.id}
            priority={true}
            src={image}
            alt='photo'
            width='100%'
            height='100%'
            style={{
              objectFit: 'fill',
            }}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default FeedsLayout;
