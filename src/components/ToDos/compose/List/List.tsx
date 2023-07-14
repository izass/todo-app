import { ToDosListItem } from "../../../../design-system/ToDosListItem/ToDosListItem";
import { Container } from "./styles";

type ToDo = {
  id: string,
  name: string
}

type Props = {
  todos: ToDo[]
}

const List = ({ todos = [] }: Props) => {
  return (
    <Container>
      {todos.map((todo) => (
        <li>
          <ToDosListItem key={todo.id}>{todo.name}</ToDosListItem>
        </li>
      ))}
    </Container>
  );
};

export default List;
