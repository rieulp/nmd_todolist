// todo list
const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const saveToDos = () => {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const paintToDo = (newToDo) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newToDo.id;
    // button.innerText = "❌";
    const i = document.createElement("i");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    button.appendChild(i);
    span.innerText = newToDo.text;

    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);

    button.addEventListener("click", deleteToDo);
}

const deleteToDo = (event) => {
    const li = event.target.parentElement;
    li.remove();
    toDos =  toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveToDos();
}

const handleToDoSubmit = (event) => {
    event.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(),
        text: newToDo,
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = window.localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}