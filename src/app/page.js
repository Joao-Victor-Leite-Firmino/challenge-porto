'use client'

import { useState } from 'react';
import styles from './LoginPage.module.css';
import Link from 'next/link';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'usuario' && password === 'senha') {
      alert('Login bem sucedido!');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className={styles.container}>
    <img src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
      <h1>Login</h1>
      <form className={styles.form} onSubmit={handleLogin}>
        <label htmlFor="username">CPF:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <Link href="/Home">
        <input type="submit" value="Login" />
        </Link>
      </form>
      <Link href="/Cadastro">
      <p>Ainda não tem cadastro? Cadastre-se aqui</p>
      </Link>
    </div>
  );
};

export default LoginPage;
