export interface User {
  email: string;
  password: string;
}

export interface FormFieldPayload<K = any, V = any> {
  key: K;
  value: V;
}
export interface UserDetail {
  firstName: string;
  lastName: string;
  picture: string;
}

export interface UserAuth {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}
