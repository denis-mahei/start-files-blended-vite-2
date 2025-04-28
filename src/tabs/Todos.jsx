import Text from '../components/Text/Text';
import Form from '../components/Form/Form.jsx';
import TodoList from '../components/TodoList/TodoList.jsx';
import { useEffect, useState } from 'react';
import EditForm from '../components/EditForm/EditForm.jsx';

const initialTodo = [
  {
    id: '1',
    text: 'Practice more',
  },
  {
    id: '2',
    text: 'Get all tasks done on time',
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos !== null) {
      return savedTodos;
    }
    return initialTodo;
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodos = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = todoId => {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    setIsEditing(true);
    setCurrentTodo(selectedTodo);
  };

  const cancelTodo = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateTodo = text => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === currentTodo.id
          ? {
              ...todo,
              text,
            }
          : todo
      )
    );
    setIsEditing(false);
    setCurrentTodo({});
  };

  const findTodo = text => {
    return todos.some(todo => todo.text === text);
  };

  const addNewTodo = todo => {
    setTodos(prevTodos => {
      return [...prevTodos, todo];
    });
  };
  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={updateTodo}
          cancelUpdate={cancelTodo}
          defaultValue={currentTodo.text}
          findTodo={findTodo}
        />
      ) : (
        <Form onAdd={addNewTodo} />
      )}
      <TodoList
        items={todos}
        deleteTodo={deleteTodos}
        editTodo={handleEditTodo}
      />
      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos...</Text>
      )}
    </>
  );
};

export default Todos;
