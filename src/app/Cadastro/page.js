// pages/CadastroPage.js
'use client'
import { useState } from 'react';
import styles from '../CadastroPage.module.css';

const CadastroPage = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [veiculo, setVeiculo] = useState('');
  const [peso, setPeso] = useState('');
  const [placa, setPlaca] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
    } else {
      alert('Cadastro bem sucedido!');
      // Aqui você pode adicionar a lógica para enviar os dados para o servidor
      // ou para onde quer que você esteja armazenando os dados de cadastro.
    }
  };

  return (
    <div className={styles.container}>
        <img src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
      <h1>Cadastro</h1>
      <form className={styles.form} onSubmit={handleCadastro}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        /><br /><br />
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        /><br /><br />
        <label htmlFor="veiculo">Veículo:</label>
        <input
          type="text"
          id="veiculo"
          name="veiculo"
          value={veiculo}
          onChange={(e) => setVeiculo(e.target.value)}
        /><br /><br />
        <label htmlFor="peso">Peso:</label>
        <input
          type="text"
          id="peso"
          name="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        /><br /><br />
        <label htmlFor="placa">Placa:</label>
        <input
          type="text"
          id="placa"
          name="placa"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        /><br /><br />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        /><br /><br />
        <label htmlFor="confirmarSenha">Confirmar Senha:</label>
        <input
          type="password"
          id="confirmarSenha"
          name="confirmarSenha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        /><br /><br />
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default CadastroPage;
