export interface ICooperative {
  cpf: string;
  cpfIsRegularized: boolean;
  name: string;
  accounts: Array<AccountInfo>
}

export interface AccountInfo {
  accountNumber: string;
  title: string;
  subTitle: string;
}
