// todo list
const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

const saveToDos = () => {
  window.localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const paintToDo = (newToDo) => {
  const li = document.createElement('li');
  const button = document.createElement('button');

  li.id = newToDo.id;
  button.innerText = '❌';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `input-${newToDo.id}`;
  if (newToDo.done) {
    checkbox.checked = newToDo.done;
    li.className = 'done';
  }

  const label = document.createElement('label');
  label.htmlFor = checkbox.id;
  label.innerText = newToDo.text;

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const deleteToDo = (li) => {
  if (!li) return;
};

const handleToDoSubmit = (event) => {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    id: Date.now().toString(),
    text: newToDo,
    done: false,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
};

const handelListItem = (event) => {
  console.dir(event.target);
  const target = event.target;
  const li = target.closest('li');
  if (!li) return;
  if (target.nodeName === 'INPUT') {
    const index = toDos.findIndex(({ id }) => id === li.id);
    toDos[index].done = li.classList.toggle('done');
    saveToDos();
  } else if (target.nodeName === 'BUTTON') {
    li.remove();
    toDos = toDos.filter(({ id }) => id !== li.id);
    saveToDos();
  }
};

toDoForm.addEventListener('submit', handleToDoSubmit);
toDoList.addEventListener('click', handelListItem);

const savedToDos = window.localStorage.getItem(TODOS_KEY);
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
