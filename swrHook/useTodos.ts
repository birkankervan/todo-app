import { useEffect, useState } from "react";
import useSWR from "swr";

const useTodos = (type = "all") => {
  const url = type === "all" ? "/api/todos" : `/api/todos?isDone=${type}`;
  const { data, error, mutate } = useSWR(url);

  return {
    todos: data?.todos,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default useTodos;
