import Image from 'next/image';
import { Grid, GridItem } from '@chakra-ui/react';

const FeedsLayout = ({ post }) => {
  const imageList = post.media;

  const imageFormat = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'webp',
    'bmp',
    'tiff',
    'ico',
    'heic',
    'avif',
    'svg',
  ];

  return (
    <Grid
      mb={'15px'}
      gap={2}
      templateColumns={imageList.length > 1 ? 'repeat(2, 1fr)' : '1fr'}
    >
      {imageList.map((image, i) =>
        imageFormat.includes(image.split('.')[1]) ? (
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
          <video
            key={i}
            controls={true}
            // muted
            // autoPlay
            // loop
            playsInline
            style={{
              width: '100%',
              aspectRatio: 4 / 3,
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source
              src={`https://res.cloudinary.com/dgl66man1/video/upload/v1697731304/${image}`}
              type='video/mp4'
            ></source>
            Unsupported video format
          </video>
          /* <video
            key={i}
            src={`https://res.cloudinary.com/dgl66man1/video/upload/v1697731304/${image}`}
            controls={true}
            style={{
              width: '100%',
              aspectRatio: 4 / 3,
              height: '100%',
              objectFit: 'cover',
            }}
          /> */
        )
      )}
    </Grid>
  );
};

export default FeedsLayout;
