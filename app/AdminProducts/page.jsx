"use client"
import { useContext, useState } from 'react';
import { authMiddleware } from '../components/authMiddleware';
import { MiContexto } from '../components/context';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
const ProtectedPage = () => {
  const context = useContext(MiContexto)
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleUpload = async () => {
    

      const storage = getStorage();
      const storageRef = ref(storage, `images/${image.name}`);
      
      await uploadBytes(storageRef, image);
      
      const url = await getDownloadURL(storageRef);
      setImageUrl(url);
      const productsCollection = collection(db, 'products');
    
     const productData = {
       name: productName,
       description: productDescription,
       images: imageUrl
     };
    
     try {
       await addDoc(productsCollection, productData);
       console.log('Producto agregado correctamente');
     } catch (error) {
       console.error('Error al agregar el producto:', error);
     }

  context.setIsCreate(true)
  };
  
  return (

<div className='adminPageProducts'>
{context.isCreate === true ? <button className="adminPageCoursesCreateBtn" onClick={() => context.setIsCreate(false)}>Añadir Producto</button> : <div>
      <h1>Subir Producto con Imágenes a Firestore</h1>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <textarea
        placeholder="Descripción del producto"
        value={productDescription}
        onChange={(e) => setProductDescription(e.target.value)}
      />

      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Subir Imagen</button>
    </div>}

{context.products.length > 0 ? context.products.map(item => (
  <div>{item.name}<img src={item.images} alt="" /> </div>
  )) : <div>No hay productos disponibles o hubo un problema en la carga.</div>}
    </div>
  );
};

export default authMiddleware(ProtectedPage);