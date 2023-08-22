"use client"
import Link from 'next/link';
const ProtectedPage = () => {
  setTimeout(() => {
    if (document) {
    const adminPageTitle = document.querySelector(".adminPageTitle")
      adminPageTitle.textContent = "EDC Tactical"
      adminPageTitle.classList.add("adminPageTitleAf")
    }
  }, 2000);
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

export default ProtectedPage;