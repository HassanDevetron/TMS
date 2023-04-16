export type ResetUserPasswordConfig = {
  senderAddress: string;
  feDomainUrl: string;
  passwordResetCodeLength: number;
};

export type UserToken = {
  token: string;
  expirationDate: string;
};

export const enum HandleType {
  VALIDATE_USER_LOGIN = 'VALIDATE_USER_LOGIN',
  VALIDATE_USER_SIGNUP = 'VALIDATE_USER_SIGNUP',
  VALIDATE_USER_FORGOT_PASSWORD = 'VALIDATE_USER_FORGOT_PASSWORD',
}
