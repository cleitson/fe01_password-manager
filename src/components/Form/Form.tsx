import { useState } from 'react';

type FormProp = {
  handleShow: () => void;
};
type InitialStateProp = {
  service: string,
  login: string,
  password: string,
  url: string,
};

function Form({ handleShow }: FormProp) {
  const initialState = {
    service: '',
    login: '',
    password: '',
    url: '',
  };

  const [formData, setFormData] = useState<InitialStateProp>(initialState);
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);

  function handleChange(event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    isValid();
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData(initialState);
  };

  const { service, login, password, url } = formData;

  const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const isValidPassword: boolean = senhaRegex.test(password);

  function isValid() {
    if (service.length > 0 && login.length > 0 && isValidPassword) {
      setButtonDisable(false);
    }
  }

  return (
    <form onSubmit={ onSubmit }>
      <label htmlFor="nameService">
        Nome do serviço
        <input
          type="text"
          id="nameService"
          name="service"
          value={ service }
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="Login">
        Login
        <input
          type="text"
          id="Login"
          name="login"
          value={ login }
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          id="password"
          name="password"
          value={ password }
          onChange={ handleChange }
          required
        />
      </label>
      <label htmlFor="Url">
        URL
        <input
          type="text"
          id="Url"
          name="url"
          value={ url }
          onChange={ handleChange }
        />
      </label>
      <button disabled={ buttonDisable }>Cadastrar</button>
      <button onClick={ handleShow }>Cancelar</button>
    </form>
  );
}

export default Form;
