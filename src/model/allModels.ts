export interface User {
  email: string;
  password: string;
}

export interface FormFieldPayload<K = any, V = any> {
  key: K;
  value: V;
}

export interface UserAuth {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  profilePicture: string;
  registered: boolean;
}

export interface UserDetail {
  firstName: string;
  lastName: string;
  url: string;
}

export interface Icons {
  iconNumber: number;
  icon: string;
}