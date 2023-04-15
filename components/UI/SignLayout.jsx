import { Grid, GridItem, Text } from '@chakra-ui/react';
import Link from 'next/link';
import classes from './SignLayout.module.css';
import happyPeople from '../../src/Assets/happyPeople.jpg';
import crowd from '../../src/Assets/crowd.jpg';

const SignLayout = ({ children }) => {
  return (
    <section className={classes.grid}>
      <div className={classes.griditem} pt={{ base: '70px' }} colSpan={{ md: '1', lg: '2' }}>
        {children}
        <Text fontWeight="600" fontSize="1.5rem">
          or
        </Text>
        <Link
          href=""
          className={ classes.link
          }
        >
          continue with Google
        </Link>
      </div>
      <GridItem display={{ base: 'none', md: 'block' }}></GridItem>
    </section>
  );
  // return (
  //   <Grid
  //     w="full"
  //     padding="10px"
  //     gap="20px"
  //     // backgroundImage={`url(${happyPeople})`}
  //     align={'center'}
  //     templateColumns={{
  //       base: '1fr',
  //       md: 'repeat(2, 1fr)',
  //       lg: 'repeat(5, 1fr)',
  //     }}
  //   >
  //     <GridItem
  //       pt={{ base: '70px' }}
  //       colSpan={{ md: '1', lg: '2' }}
  //     >
  //       {children}
  //       <Text fontWeight="600" fontSize="1.5rem">
  //         or
  //       </Text>
  //       <Link
  //         href=""
  //         style={{
  //           background: 'white',
  //           display: 'inline-block',
  //           marginTop: '10px',
  //           padding: '10px',
  //           fontSize: '1.5rem',
  //           marginBottom: '30px',
  //         }}
  //       >
  //         continue with Google
  //       </Link>
  //     </GridItem>
  //     <GridItem display={{ base: 'none', md: 'block' }}></GridItem>
  //   </Grid>
  // );
};

export default SignLayout;
