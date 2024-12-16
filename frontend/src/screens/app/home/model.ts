import api from "@/services/api";

const model = {
  async getTotalBalance(token: string) {
    const { data } = await api.get("/transactions/balance", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },

  async getTransactions(token: string, startDate?: string, endDate?: string) {
    const { data } = await api.get("/transactions/period", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
      },
    });
    return data;
  },
};

export default model;
