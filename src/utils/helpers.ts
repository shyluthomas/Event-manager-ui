export type tokenResponse = {
  token: string | null;
};
const helpers = {
  getAuthToken: (): tokenResponse => {
    const token = sessionStorage.getItem("accessToken");
    if (!token) return { token: null };
    else return { token };
  },
  setAuthToken: (data: string): boolean => {
    try {
      sessionStorage.setItem("accessToken", data);
      return true;
    } catch (e) {
      console.log("Token set failed", e);
      return false;
    }
  },
};

export default helpers;
