import { AccountType } from '../../Types/Types';
import lockerImage from '../../images/locker-img.svg';
import linkImage from '../../images/link-img.svg';
import trashImage from '../../images/trash-img.svg';

type AccountsProp = {
  formDataSubmited: AccountType
};

function Accounts(prop: AccountsProp) {
  const { formDataSubmited } = prop;
  const { service, login, password, url } = formDataSubmited;
  return (
    <div>
      <div>
        <img src={ lockerImage } alt={ service } />
        { service }
        <a href={ url } target="_blank" rel="noreferrer">
          <img src={ linkImage } alt="Link do serviço" />
        </a>
      </div>
      <div>
        <p>
          Login
          {' '}
          { login }
        </p>
      </div>
      <div>
        <p>
          Senha
          {' '}
          { password }
        </p>
      </div>
      <div>
        <img src={ trashImage } alt="Excluir" />
      </div>
    </div>
  );
}

export default Accounts;
