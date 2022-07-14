import axios from "axios";
import { useState, useRef } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Button from "./Button";
import Container from "./Container";
import Input from "./Input";

const trim = (str: string) => str.trim();

const AddToDo = () => {
  const { mutate } = useSWR("/api/todos");
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<any>(null);

  const handleTodo = async (e) => {
    if (e.type === "keyup" && e.key === "Enter") {
      trim(e.target.value) && addTodo(e.target.value);
    }
    if (e.type === "click") {
      trim(ref.current?.value) && addTodo(ref.current.value);
    }
  };

  const addTodo = async (todo: string) => {
    setIsLoading(true);
    const res = await axios.post("/api/todos", {
      todo,
    });
    const { data } = res;
    if (data.status) {
      ref.current.value = "";
      setIsLoading(false);
      mutate();
    }
  };

  return (
    <ResponsiveContainer>
      <Input
        placeholder="New Task"
        onKeyUp={(e) => {
          handleTodo(e);
        }}
        ref={ref}
      />
      <Button
        loading={isLoading}
        onClick={(e) => {
          handleTodo(e);
        }}
      >
        Add Todo
      </Button>
    </ResponsiveContainer>
  );
};

const ResponsiveContainer = styled(Container)`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

export default AddToDo;
