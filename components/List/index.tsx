import styled from "styled-components";
import { theme } from "styled-tools";
import useSWR from "swr";
import ListItem from "./ListItem";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Loading from "components/Icons/Loading";
import Container from "components/Container";

const List = () => {
  const { data, error } = useSWR("/api/todos");
  const [parent] = useAutoAnimate();
  const { todos } = data || [];

  return (
    <Container position="relative">
      {!error && !data && (
        <LoadingSection>
          <Loading />
        </LoadingSection>
      )}

      <ListStyled ref={parent}>
        {todos?.map(({ _id, todo, createdAt, isDone }) => (
          <ListItem
            key={_id}
            id={_id}
            text={todo}
            date={createdAt}
            isDone={isDone}
          />
        ))}
      </ListStyled>
    </Container>
  );
};

const ListStyled = styled.ul<any>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0px;
  padding: 0px;
  width: 100%;
  max-width: 964px;
  background-color: ${theme("colors.bodyBg")};
  border-radius: 6px;
  list-style: none;
  overflow: hidden;
  box-sizing: border-box;
  padding-bottom: 100px;
`;

const LoadingSection = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 100px;
`;

export default List;
