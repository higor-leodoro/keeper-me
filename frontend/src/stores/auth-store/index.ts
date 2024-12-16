import { create } from "zustand";

type loggedUserData = {
  name: string;
  lastName: string;
  email: string;
};

type AuthStoreProps = {
  loggedUserData: loggedUserData;
  loading: boolean;
  isAuthenticated: boolean;
  singIn: (email: string, password: string) => void;
};

const useAuthStore = create<AuthStoreProps>((set) => ({
  loggedUserData: {
    name: "",
    lastName: "",
    email: "",
  },
  loading: false,
  isAuthenticated: false,
  singIn: async (email, password) => {},
}));
