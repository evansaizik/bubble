import { Heading } from '@chakra-ui/react';
import classes from './Login.module.css';
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState('password');

  const togglePasswordVisibility = () => {
    if (passwordVisibility === 'password') setPasswordVisibility('text');
    else {
      setPasswordVisibility('password');
    }
  };

  return (
    <>
      <Heading className={classes.heading}>Log In</Heading>
      <section className={classes.container}>
        <form>
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
          <button className={classes.submit}>Login</button>
        </form>
      </section>
      <div className={classes.navigate}>
        <p>
          forgot password? <Link href='password'>Click here</Link>
        </p>
        <Link href='signup'>Back to Sign up page</Link>
      </div>
    </>
  );
};

export default Login;
