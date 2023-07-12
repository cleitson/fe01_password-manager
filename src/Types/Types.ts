export type AccountType = {
  service: string,
  login: string,
  password: string,
  url: string,
};

export type AccountTypeWithId = AccountType & { id: string | number };
