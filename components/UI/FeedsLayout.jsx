import Image from 'next/image';
import { Grid, GridItem } from '@chakra-ui/react';

const FeedsLayout = ({ post }) => {
  const imageList = post.media;

  return (
    <Grid
      mb={'15px'}
      gap={2}
      templateColumns={imageList.length > 1 ? 'repeat(2, 1fr)' : '1fr'}
    >
      {imageList.map((image, i) =>
        image.split('.')[1] === 'jpeg' ? (
          <GridItem key={i}>
            <Image
              id={post.id}
              priority={true}
              src={`https://bubble-fg8r.onrender.com/img/${image}`}
              alt='photo'
              width={1000}
              height={1000}
              style={{
                objectFit: 'fill',
                width: '100%',
              }}
            />
          </GridItem>
        ) : (
          <video
            src={`https://bubble-fg8r.onrender.com/img/${image}`}
            controls
            style={{ width: '100%', height: '100%' }}
          />
        )
      )}
    </Grid>
  );
};

export default FeedsLayout;
