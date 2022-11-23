const serverAddress = 'http://localhost:8000';
const collection = 'todoItems';

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/${collection}`);
  const todoItems = response.json();

  return todoItems;
};

const TodoItemsService = {
  fetchAll,
};

export default TodoItemsService;
