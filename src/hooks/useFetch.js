import React, { useEffect, useState } from "react";
import { api } from "../api/api";

export const useFetch = (id) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  const getFetch = async () => {
    try {
      setState({ ...state, loading: true });
      const response = await api.get(`/quotes/${id}`);
      const data = response.data;
      setState({ ...state, data, loading: false });
    } catch (e) {
      setState({ ...state, error: e.message, loading: false });
    }
  };
  useEffect(() => {
    getFetch();
  }, [id]);
  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
};
