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
  const invalidClass = 'invalid-password-check';
  const validClass = 'valid-password-check';

  const [formData, setFormData] = useState<InitialStateProp>(initialState);
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);

  function handleChange(event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    isValidForm();
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData(initialState);
    console.log(formData);
  };

  const { service, login, password, url } = formData;

  const senhaRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
  const isValidPassword: boolean = senhaRegex.test(password);

  const symbolRegex = /^(?=.*[@$!%*#?&])/;
  const validSymbol:boolean = symbolRegex.test(password);
  const letterNumberRegex = /^(?=.*[a-zA-Z])(?=.*\d)/;
  const validLetterNumeber:boolean = letterNumberRegex.test(password);

  function isValidForm() {
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
      <div>
        <ul>
          <p>a senha deve conter:</p>
          <li className={ (password.length < 8) ? invalidClass : validClass }>
            Possuir 8 ou mais caracteres
          </li>
          <li className={ (password.length > 16) ? invalidClass : validClass }>
            Possuir até 16 caracteres
          </li>
          <li className={ (!validLetterNumeber) ? invalidClass : validClass }>
            Possuir letras e números
          </li>
          <li className={ (!validSymbol) ? invalidClass : validClass }>
            Possuir algum caractere especial
          </li>
        </ul>
      </div>
      <button disabled={ buttonDisable }>Cadastrar</button>
      <button onClick={ handleShow }>Cancelar</button>
    </form>
  );
}

export default Form;
