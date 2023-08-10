"use client"
import { authMiddleware } from '../components/authMiddleware';

const ProtectedPage = () => {
  return (
    <div>
      <h2>Acá vas a poder administrar todos los cursos y productos de la tienda.</h2>
    
    </div>
  );
};

export default authMiddleware(ProtectedPage);