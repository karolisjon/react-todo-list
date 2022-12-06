const serverAddress = 'http://localhost:8000';
const collection = 'todoItems';

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/${collection}`);
  const todoItems = response.json();

  return todoItems;
};

const fetchOne = async (id) => {
  const response = await fetch(`${serverAddress}/${collection}/${id}`);
  const todoItem = response.json();

  return todoItem;
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
};

const complete = async (id, state) => {
  const response = await fetch(`${serverAddress}/${collection}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ isComplete: state}),
  });

  const data = await response.json();

  return data;
}

const TodoItemsService = {
  fetchAll,
  fetchOne,
  create,
  remove,
  complete
};

export default TodoItemsService;
