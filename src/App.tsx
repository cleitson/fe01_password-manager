import { useState } from 'react';
import './App.css';
import { AccountType, AccountTypeWithId } from './Types/Types';
import Form from './components/Form/Form';
import Accounts from './components/Accouts/Accounts';

function App() {
  const initialState = {
    service: '',
    login: '',
    password: '',
    url: '',
  };
  const [showForm, setShowForm] = useState<boolean>(true);
  const [formData, setFormData] = useState<AccountType>(initialState);
  const [formDataSubmited, setFormDataSubmited] = useState<AccountType>(initialState);
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const { service, login, password, url } = formData;

  const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
  const isValidPassword: boolean = senhaRegex.test(password);
  const isValidForm = () => {
    if (service.length > 0 && login.length > 0 && isValidPassword) {
      setButtonDisable(false);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    isValidForm();
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormDataSubmited(formData);
    setFormData(initialState);
  };
  const handleShow = () => {
    setShowForm(!showForm);
  };

  return (
    <main>
      <div>
        <h1>Gerenciador de senhas</h1>
        {showForm && <button onClick={ handleShow }>Cadastrar nova senha</button>}
        {!showForm && <Form
          formData={ formData }
          handleShow={ handleShow }
          handleChange={ handleChange }
          onSubmit={ onSubmit }
          buttonDisable={ buttonDisable }
        />}
      </div>
      <Accounts formDataSubmited={ formDataSubmited } />
    </main>
  );
}

export default App;
