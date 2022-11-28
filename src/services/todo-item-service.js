const serverAddress = 'http://localhost:8000';
const collection = 'todoItems';

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/${collection}`);
  const todoItems = response.json();

  return todoItems;
};

const create = async (props) => {
  const response = await fetch(`${serverAddress}/${collection}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(props),
  });

  const todoItem = await response.json();

  return todoItem;
};

const remove = async (id) => {
  await fetch(`${serverAddress}/${collection}/${id}`, {
    method: 'DELETE'
  });

  return true;
}

const TodoItemsService = {
  fetchAll,
  create,
  remove,
};

export default TodoItemsService;
