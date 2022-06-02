export interface User {
    email: string;
    password: string;
  }

  export interface FormFieldPayload<K = any, V = any> {
    key: K;
    value: V;
  }