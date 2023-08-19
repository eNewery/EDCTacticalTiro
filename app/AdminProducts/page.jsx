"use client"
import { authMiddleware } from '../components/authMiddleware';
const ProtectedPage = () => {
  return (
    <div className='adminPageProducts'>

    </div>
  );
};

export default authMiddleware(ProtectedPage);