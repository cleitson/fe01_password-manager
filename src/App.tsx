import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import { AccountType, AccountTypeWithId } from './Types/Types';

function App() {
  const [showForm, setShowForm] = useState<boolean>(true);
  const [account, setAccount] = useState<AccountTypeWithId[]>([]);
  function handleShow() {
    setShowForm(!showForm);
  }
  const handleSubmit = (accounts: AccountType) => {
    const id = Date.now();
    setAccount([...account, { ...accounts, id }]);
  };

  return (
    <main>
      <div>
        <h1>Gerenciador de senhas</h1>
        {showForm && <button onClick={ handleShow }>Cadastrar nova senha</button>}
        {!showForm && <Form
          handleShow={ () => handleShow() }
        />}
      </div>
    </main>
  );
}

export default App;
