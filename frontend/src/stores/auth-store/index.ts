import { create } from "zustand";
import api from "@/services/api";

type loggedUserData = {
  name: string;
  lastName: string;
  email: string;
  token: string;
};

type AuthStoreProps = {
  loggedUserData: loggedUserData;
  loading: boolean;
  isAuthenticated: boolean;
  singIn: (email: string, password: string, rememberUser?: boolean) => void;
};

const useAuthStore = create<AuthStoreProps>((set) => ({
  loggedUserData: {
    name: "",
    lastName: "",
    email: "",
    token: "",
  },
  loading: false,
  isAuthenticated: false,
  singIn: async (email, password, rememberUser) => {
    try {
      set({ loading: true });
      const { data } = await api.post("/auth/login", {
        email: email,
        password: password,
      });
      if (data) {
        set({
          loggedUserData: {
            ...data.user,
            token: data.token,
          },
          isAuthenticated: true,
        });
        set({ loading: false });
      }
      set({ loading: false });
    } catch (error) {
      set({ loading: false });
      console.log(error);
    }
  },
}));

export default useAuthStore;
