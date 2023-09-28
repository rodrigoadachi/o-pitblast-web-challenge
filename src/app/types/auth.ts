import { Dispatch, SetStateAction } from "react";

export type AuthContextProps = {
  user: iAuth | null;
  setUser: (user: iAuth | null) => void;
  setLogin: (user: iUserlogin) => void;
  forgetPassword: (email: iForgot) => void;
  logout: () => void;
  loading: boolean;
  error: string | undefined;
  forgotSuccess: boolean;
  clearSuccess: () => void;
  forgotError: string | null;
  clearError: () => void;
  menuShow: boolean;
  setMenuShow: Dispatch<SetStateAction<boolean>>;
};
