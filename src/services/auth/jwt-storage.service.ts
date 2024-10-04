export const JwtStorageService = {
  getToken: () => {
    return localStorage.getItem('accessToken');
  },
  setAccessToken: (token: string): void => {
    localStorage.setItem('accessToken', token);
  },
  getRefreshToken: () => {
    return localStorage.getItem('refreshToken');
  },
  setRefreshToken: (token: string): void => {
    localStorage.setItem('refreshToken', token);
  },
  removeToken: (): void => {
    localStorage.removeItem('accessToken');
  },
};
