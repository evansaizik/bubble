import { Heading } from '@chakra-ui/react';
import classes from './Signup.module.css';
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { useState } from 'react';

const Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = useState('password');

  const togglePasswordVisibility = () => {
    if (passwordVisibility === 'password') setPasswordVisibility('text');
    else {
      setPasswordVisibility('password');
    }
  };

  return (
    <>
      <Heading className={classes.heading}>Sign Up</Heading>
      <section className={classes.container}>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            className={classes.input}
            placeholder="John Doe"
            id="name"
            type="text"
          />
          <label htmlFor="name">Email:</label>
          <input
            className={classes.input}
            placeholder="johndoe@email.com"
            id="email"
            type="email"
          />
          <label htmlFor="password">Password:</label>
          <div className={classes.password}>
            <input
              className={classes.input}
              placeholder="********"
              id="password"
              type={`${passwordVisibility}`}
            />
            {passwordVisibility === 'password' ? (
              <EyeOpenIcon
                className={classes.hide}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <EyeNoneIcon
                className={classes.hide}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <label htmlFor="confirm">Confirm Password:</label>
          <input
            className={classes.input}
            placeholder="********"
            id="confirm"
            type="password"
          />
          <button className={classes.submit}>Sign Up</button>
        </form>
      </section>
      <div className={classes.navigate}>
        <Link href="login">To login page</Link>
      </div>
    </>
  );
};

export default Signup;
