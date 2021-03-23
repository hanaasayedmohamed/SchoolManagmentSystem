export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  token: string;
  authenticationType: string,
  isAuthenticated: boolean;
  ExpireOn: Date
}

