import Container from "components/Container";
import DarkMode from "components/DarkMode";
import List from "components/List";
import { H1 } from "components/Typography";
import type { NextPage } from "next";
import AddToDo from "components/AddToDo";

const Home: NextPage = () => {
  return (
    <Container>
      <DarkMode />
      <div>
        <H1>ToDo List</H1>
        <AddToDo />
        <List />
      </div>
    </Container>
  );
};

export default Home;
