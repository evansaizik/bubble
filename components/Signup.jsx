import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Heading } from '@chakra-ui/react';
import classes from './Signup.module.css';
import { EyeOpenIcon, EyeNoneIcon } from '@radix-ui/react-icons';
import { useSignUpMutation } from '../src/api/userSlice';

const Signup = () => {
  const router = useRouter();
  const [passwordVisibility, setPasswordVisibility] = useState('password');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [signUp, { isLoading, data, isError, error, isSuccess }] =
    useSignUpMutation();

  const togglePasswordVisibility = () => {
    if (passwordVisibility === 'password') setPasswordVisibility('text');
    else {
      setPasswordVisibility('password');
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!name || !password || !email || !passwordConfirm) return;

    await signUp({ name, password, email, passwordConfirm });

    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  if (isSuccess) {
    localStorage.setItem('accessToken', data.accessToken);
    router.replace('/feeds');
  } else if (isError) console.log(error);

  return (
    <>
      <Heading className={classes.heading}>Sign Up</Heading>
      <section className={classes.container}>
        <form>
          <label htmlFor='name'>Name:</label>
          <input
            className={classes.input}
            placeholder='John Doe'
            id='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <label htmlFor='confirm'>Confirm Password:</label>
          <input
            className={classes.input}
            placeholder='********'
            id='confirm'
            type='password'
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button className={classes.submit} onClick={onSubmitHandler}>
            Sign Up
          </button>
        </form>
      </section>
      <div className={classes.navigate}>
        <Link href='login'>To login page</Link>
      </div>
    </>
  );
};

export default Signup;
