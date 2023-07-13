import { AccountType } from '../../Types/Types';

type FormProp = {
  formData: AccountType;
  handleShow: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement |
  HTMLSelectElement>) => void;
  handleSubmit:(event: React.FormEvent<HTMLFormElement>) => void;
  buttonDisable: boolean;
};

function Form(props: FormProp) {
  const { formData, handleChange, handleShow, handleSubmit, buttonDisable } = props;
  const { service, login, password, url } = formData;

  const symbolRegex = /^(?=.*[@$!%*#?&])/;
  const validSymbol:boolean = symbolRegex.test(password);
  const letterNumberRegex = /^(?=.*[a-zA-Z])(?=.*\d)/;
  const validLetterNumeber:boolean = letterNumberRegex.test(password);
  const invalidClass = 'invalid-password-check';
  const validClass = 'valid-password-check';

  return (
    <form onSubmit={ (event) => handleSubmit(event) }>
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
