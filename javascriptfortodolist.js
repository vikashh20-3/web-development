// const todoList = ['wash hand', 'make dinner'];
const todoList = [{
    name: 'wash hand',
    duedate: '2024-01-23'
}, {
    name: 'make dinner',
    duedate: '2024-01-26'
}];

renderTodoList();
function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        // const todo = todoList[i];
        const todoObject = todoList[i];
        console.log(todoObject)
        const { name, duedate } = todoObject;
        // const html = `<p>${todo}</p> <button onclick="todoList.splice(${i},1)>Delete</button>`;
        const html = `<p>${name} ${duedate} <button onclick="deleteTodo(${i})">Delete </button> </p>`;
        todoListHTML += html;

        // console.log(todoListHTML);
    }
    // console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    // console.log(todoListHTML)
}

function addTodo() {
    const nameinputElement = document.querySelector('.js-name-input')
    const dateinputElement = document.querySelector('.js-date-input')
    const name = nameinputElement.value;
    const duedate = dateinputElement.value;
    todoList.push(
        {
            name: name,
            duedate: duedate
        }
    );
    console.log(todoList);
    nameinputElement.value = '';
    dateinputElement.value = '';
    renderTodoList();
}

function deleteTodo(i) {
    todoList.splice(i,1)
    renderTodoList();
}