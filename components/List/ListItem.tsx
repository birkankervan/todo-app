import axios from "axios";
import Input from "components/Input";

import dayjs from "dayjs";
import { useState } from "react";
import { useSWRConfig } from "swr";

import {
  ActionWrapper,
  Checkbox,
  DateStyled,
  EditableArea,
  LabelStyled,
  ListItemStyled,
  TextStyled,
  Tooltip,
} from "./style";

type ListItemProps = {
  id: string;
  date: string;
  text: string;
  isDone: boolean;
};

const ListItem = ({ id, date, text, isDone }: ListItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { mutate } = useSWRConfig();
  const fullTime = dayjs(date).format("DD.MM.YY HH:mm").split(" ");

  const removeTodo = async (id: string) => {
    await axios.delete(`/api/todos?id=${id}`);
    mutate("/api/todos");
    mutate(`/api/todos?isDone=${isDone}`);
  };

  const toggleTodo = async (id: string) => {
    await axios.put("/api/todos", {
      id,
      isDone: !isDone,
    });
    mutate("/api/todos");
    mutate(`/api/todos?isDone=${isDone}`);
  };

  const handleEdit = async (e) => {
    if (e.key === "Enter") {
      const res = await axios.put("/api/todos", {
        id,
        todo: e.target.value,
      });
      const { data } = res;
      if (data.status) {
        mutate("/api/todos");
        mutate(`/api/todos?isDone=${isDone}`);
        setIsEditing(false);
      }
    }
  };

  return (
    <ListItemStyled>
      <input
        type="checkbox"
        id={id}
        defaultChecked={isDone}
        onChange={() => {
          toggleTodo(id);
        }}
      />
      {isEditing ? (
        <EditableArea>
          <Tooltip>Press Enter for update ToDo.</Tooltip>
          <Input
            defaultValue={text}
            onKeyUp={(e) => {
              handleEdit(e);
            }}
          />
        </EditableArea>
      ) : (
        <LabelStyled htmlFor={id}>
          <Checkbox />
          <TextStyled>{text}</TextStyled>
          <DateStyled>
            <span>{fullTime[0]}</span>
            <span>{fullTime[1]}</span>
          </DateStyled>
        </LabelStyled>
      )}
      <ActionWrapper>
        {!isEditing && (
          <div
            className="update"
            title="Update todo"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            🖍
          </div>
        )}
        {!isEditing && (
          <div
            className="remove"
            title="Remove todo"
            onClick={() => removeTodo(id)}
          >
            🗑
          </div>
        )}
      </ActionWrapper>
    </ListItemStyled>
  );
};

export default ListItem;
