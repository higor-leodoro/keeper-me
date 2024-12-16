import api from "@/services/api";

type Payload = {
  name: string;
  lastName: string;
  email: string;
  password: string;
};

const model = {
  async createUser(payload: Payload) {
    console.log(payload);

    const { data } = await api.post("/user", {
      name: payload.name,
      lastName: payload.lastName,
      email: payload.email,
      password: payload.password,
    });
    return data;
  },
};

export default model;
