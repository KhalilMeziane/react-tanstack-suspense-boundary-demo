export interface IUser{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  avatarUrl: string;
  role: 'user' | 'admin' | 'moderator';
  createdAt: string; 
  lastLogin: string;
  preferences: {
    theme: 'light' | 'dark';
    language: string;
  };
};

export type ApiResponse<T> = {
  status: 'success' | 'error';
  data: T;
  message?: string;
};

export type GetUserResponse = ApiResponse<IUser>;
