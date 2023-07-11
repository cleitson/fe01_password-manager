type FormProp = {
  handleShow: () => void;
};

function Form({ handleShow }: FormProp) {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={ onSubmit }>
      <label htmlFor="nameService">
        Nome do serviço
        <input type="text" id="nameService" />
      </label>
      <label htmlFor="Login">
        Login
        <input type="text" id="Login" />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" id="password" />
      </label>
      <label htmlFor="Url">
        URL
        <input type="text" id="Url" />
      </label>
      <button>Cadastrar</button>
      <button onClick={ handleShow }>Cancelar</button>
    </form>
  );
}

export default Form;
