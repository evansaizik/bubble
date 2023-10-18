import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { Logout, Profile } from 'iconsax-react';
import { useLogoutMutation } from '../../src/api/userSlice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const User = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) setUser(loggedInUser);
  }, []);
  const router = useRouter();

  const [logout] = useLogoutMutation();
  const logoutHandler = () => {
    logout();
    router.replace('/login');
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('accessToken');
  };

  return (
    <>
      <Menu>
        <MenuButton>
          <Avatar
            bg={'whiteAlpha.600'}
            name={user?.name}
            src={''}
            size={'md'}
          />
        </MenuButton>
        <MenuList zIndex={10}>
          <MenuItem icon={<Profile />}>Profile</MenuItem>
          <MenuItem icon={<Logout />} onClick={logoutHandler}>
            logout
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default User;
