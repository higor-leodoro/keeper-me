import api from "@/services/api";

type Payload = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

const model = {
  async createUser(payload: Payload) {
    const { data } = await api.post("/user", { payload });
    return data;
  },
};

export default model;
