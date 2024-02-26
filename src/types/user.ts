export type User = {
  name: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
  language: string;
  phone: string;
  address: string;
  sex: string;
  dob: string;
  roleId?: number;
};

export type UserResponse = {
  status: string;
  user: User;
};

export type UserAction = {
  payload: User;
  type: string;
};

export type APIResponse = {
  status: number;
  statusText: string;
};

export type LoginUser = {
  username: string;
  password: string;
};

export type ModalProps = {
  status: boolean;
  message: string;
};
