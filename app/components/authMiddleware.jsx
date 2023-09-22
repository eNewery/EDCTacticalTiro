"use client"
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export const authMiddleware = (WrappedComponent) => {
  const AuthenticatedRoute = (props) => {
    const router = useRouter();
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/LoginPage');
      }
    });
    return <WrappedComponent {...props} />;
  };
  return AuthenticatedRoute;
};
