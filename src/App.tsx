import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';

function App() {
  const [showForm, setShowForm] = useState<boolean>(true);
  function handleShow() {
    setShowForm(!showForm);
  }
  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {showForm && <button onClick={ handleShow }>Cadastrar nova senha</button>}
      {!showForm && <Form handleShow={ () => handleShow() } />}
    </div>
  );
}

export default App;
