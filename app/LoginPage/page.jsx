"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Ajusta la ruta según tu estructura

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/AdminPage'); // Redirigir a la página protegida después del inicio de sesión exitoso
    } catch (error) {
      alert('Error during login:', error);
    }
  };

  return (
<div className="login-container">
  <h2>Iniciar Sesión</h2>
  <div className="input-container">
    <label>Correo Electrónico:</label>
    <input
      type="email"
      className="input-field"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
  </div>
  <div className="input-container">
    <label>Contraseña:</label>
    <input
      type="password"
      className="input-field"
      value={password}
      onChange={e => setPassword(e.target.value)}
    />
  </div>
  <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
</div>
  );
};

export default LoginPage;