import { useEffect, useState } from "react";

import useAuthStore from "@/stores/auth-store";
import model from "./model";

export default function useViewModel() {
  const { loggedUserData } = useAuthStore();
  const [selectedRange, setSelectedRange] = useState<"30" | "60" | "90">("30");
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState("$ 0.00");
  const [transactions, setTransactions] = useState([]);

  const getDateRange = (days: number) => {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(endDate.getDate() - days);

    return {
      startDate: startDate.toISOString().split("T")[0].replace(/-/g, "/"),
      endDate: endDate.toISOString().split("T")[0].replace(/-/g, "/"),
    };
  };

  const [dateRange, setDateRange] = useState(getDateRange(30));

  const handleSelectRange = (range: "30" | "60" | "90") => {
    setSelectedRange(range);
    setDateRange(getDateRange(Number(range)));
  };

  useEffect(() => {
    getBalance();
    getTransactions();
  }, [dateRange]);

  const getBalance = async () => {
    try {
      setLoading(true);
      const response = await model.getTotalBalance(loggedUserData.token);
      if (response.balance) {
        console.log(response);
        setBalance(response.balance);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getTransactions = async () => {
    try {
      setLoading(true);
      const response = await model.getTransactions(
        loggedUserData.token,
        dateRange.startDate,
        dateRange.endDate
      );
      if (response.transactions) {
        setTransactions(response);
      }
    } catch (error) {
      console.error("Erro ao buscar transações:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    selectedRange,
    dateRange,
    handleSelectRange,
    loading,
    balance,
    transactions,
  };
}
