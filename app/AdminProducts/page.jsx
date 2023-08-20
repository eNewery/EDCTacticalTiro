"use client"
import { useContext } from 'react';
import { authMiddleware } from '../components/authMiddleware';
import { MiContexto } from '../components/context';
const ProtectedPage = () => {
  const context = useContext(MiContexto)
  return (
    <div className='adminPageProducts'>
{context.products.length > 0 ? context.products.map(item => (
  <div>{item.title}</div>
)) : <div>No hay productos disponibles o hubo un problema en la carga.</div>}
    </div>
  );
};

export default authMiddleware(ProtectedPage);