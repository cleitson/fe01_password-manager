import { useState } from 'react';
import './App.css';
import { AccountType, AccountTypeWithId } from './Types/Types';
import Form from './components/Form/Form';
import lockerImage from './images/locker-img.svg';
import linkImage from './images/link-img.svg';
import trashImage from './images/trash-img.svg';

function App() {
  const initialState = {
    service: '',
    login: '',
    password: '',
    url: '',
  };
  const [showForm, setShowForm] = useState<boolean>(true);
  const [formData, setFormData] = useState<AccountType>(initialState);
  const [formDataSubmited, setFormDataSubmited] = useState<AccountTypeWithId[]>([]);
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);

  const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
  const isValidPassword: boolean = senhaRegex.test(formData.password);
  const isValidForm = () => {
    if (formData.service.length > 0 && formData.login.length > 0 && isValidPassword) {
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = Date.now();
    setFormDataSubmited([...formDataSubmited, { ...formData, id }]);
    setFormData(initialState);
    handleShow();
  };
  const handleDelete = (id:number) => {
    setFormDataSubmited(formDataSubmited.filter((user) => user.id !== id));
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
          handleSubmit={ handleSubmit }
          buttonDisable={ buttonDisable }
        />}
      </div>
      {
        formDataSubmited.length > 0 ? (formDataSubmited.map((acc) => (
          <div key={ acc.id }>
            <span>
              <img src={ lockerImage } alt={ acc.service } />
              { acc.service }
              <a href={ acc.url } target="_blank" rel="noreferrer">
                <img src={ linkImage } alt="Link do serviço" />
              </a>
            </span>
            <div>
              <p>
                <span>Login</span>
                { acc.login }
              </p>
            </div>
            <div>
              <span>Senha</span>
              <p>
                { acc.password }
              </p>
            </div>
            <div>
              <button
                data-testid="remove-btn"
                onClick={ () => handleDelete(Number(acc.id)) }
              >
                <img src={ trashImage } alt="Excluir" />
              </button>

            </div>
          </div>
        )))
          : (<p>Nenhuma senha cadastrada</p>)
      }

    </main>
  );
}

export default App;
