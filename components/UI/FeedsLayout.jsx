import Image from 'next/image';
import { Grid, GridItem } from '@chakra-ui/react';
import { CloudinaryVideoPlayer } from 'next-cloudinary';

const FeedsLayout = ({ post }) => {
  const imageList = post.media;

  return (
    <Grid
      mb={'15px'}
      gap={2}
      templateColumns={imageList.length > 1 ? 'repeat(2, 1fr)' : '1fr'}
    >
      {imageList.map((image, i) =>
        image.split('.')[1] === 'jpg' ? (
          <GridItem key={i}>
            <Image
              id={post.id}
              priority={true}
              src={`https://res.cloudinary.com/dgl66man1/image/upload/v1697722292/${image}`}
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
          <iframe
            src={`https://res.cloudinary.com/dgl66man1/image/upload/v1697722292/${image}`}
            controls
            style={{ width: '100%', height: '100%' }}
          ></iframe>
        )
      )}
    </Grid>
  );
};

export default FeedsLayout;
