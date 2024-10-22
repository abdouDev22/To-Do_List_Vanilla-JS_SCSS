import './style.css'


document.querySelector('#app').innerHTML = ` 
  <h1>Welcome To TO-DO-list</h1>
  <form id="todo-form">
    <input type="text" name="title" id="title" placeholder="Title" required />
    <input type="text" name="content" id="content" placeholder="Content" required />
    <button type="submit">Submit</button>
  </form>

  <div id="counter">
    <h2>To-Do List</h2>
    <ul class="todo-list" id="todo-list"></ul>
  </div>
`;

const form = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
let todos = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  const todo = {
    title,
    content,
    completed: false,
    id: Date.now(),
  };
  
  todos.push(todo);

  // Effacer la liste actuelle avant de la recréer
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${todo.title}</h3>
      <p>${todo.content}</p>
    `;
    todoList.appendChild(li);
  });

  // Réinitialiser le formulaire après la soumission
  form.reset();
});

  
