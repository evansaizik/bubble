import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import classes from './SignLayout.module.css';
import ProtectedRoute from '../ProtectedRoute';

const SignLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <section className={classes.grid}>
        <div
          className={classes.griditem}
          pt={{ base: '70px' }}
          colSpan={{ md: '1', lg: '2' }}
        >
          {children}
          <Text fontWeight='600' fontSize='1.5rem'>
            or
          </Text>
          <Link href='' className={classes.link}>
            continue with Google
          </Link>
        </div>
      </section>
    </ProtectedRoute>
  );
};

export default SignLayout;
