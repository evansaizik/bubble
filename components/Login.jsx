import { useState } from 'react';
import { useRouter } from 'next/router';
import { Heading } from '@chakra-ui/react';
import { useLoginMutation } from '../src/api/userSlice';
import classes from './Login.module.css';
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Login = () => {
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, isError, isSuccess, error, isLoading }] =
    useLoginMutation();

  const togglePasswordVisibility = () => {
    if (passwordVisibility === 'password') setPasswordVisibility('text');
    else {
      setPasswordVisibility('password');
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password) return;
    await login({ email, password });

    setEmail('');
    setPassword('');
  };

  if (isSuccess) {
    localStorage.setItem('accessToken', data.accessToken);
    router.replace('/feeds');
  } else if (isError) {
    console.log(error)
  }

  return (
    <>
      <Heading className={classes.heading}>Log In</Heading>
      <section className={classes.container}>
        <form>
          <label htmlFor='email'>Email:</label>
          <input
            className={classes.input}
            placeholder='johndoe@email.com'
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password:</label>
          <div className={classes.password}>
            <input
              className={classes.input}
              placeholder='********'
              id='password'
              type={`${passwordVisibility}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <button className={classes.submit} onClick={onSubmitHandler}>
            Login
          </button>
        </form>
      </section>
      <div className={classes.navigate}>
        <p>
          forgot password? <Link href='password'>Click here</Link>
        </p>
        <Link href='/'>Back to Sign up page</Link>
      </div>
    </>
  );
};

export default Login;
