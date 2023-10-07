import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken && (router.pathname === '/' || '/login'))
      router.replace('/feeds');
    if (!accessToken) router.replace('/login');
  }, []);
  
  return <>{children}</>;
};

export default ProtectedRoute;
