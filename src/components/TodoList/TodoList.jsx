import Grid from '../Grid/Grid.jsx';
import GridItem from '../GridItem/GridItem.jsx';
import TodoListItem from '../TodoListItem/TodoListItem.jsx';

const TodoList = ({ items, deleteTodo, editTodo }) => {
  return (
    <Grid>
      {items.map((item, index) => (
        <GridItem key={item.id}>
          <TodoListItem
            todos={item}
            index={index}
            onDelTodo={deleteTodo}
            editTodo={editTodo}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
