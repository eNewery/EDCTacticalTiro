"use client"
import { authMiddleware } from '../components/authMiddleware';
import Link from 'next/link';
const ProtectedPage = () => {
  return (
    <div className='adminPageContainer'>
      <h2 className='adminPageTitle'>Acá vas a poder administrar todos los cursos y productos de la tienda.</h2>
    <div className="adminPageList">
      <Link className='adminLink' href="/AdminCourses">Cursos</Link>
      <Link className='adminLink' href="/AdminProducts">Productos</Link>
    </div>
    </div>
  );
};

export default authMiddleware(ProtectedPage);