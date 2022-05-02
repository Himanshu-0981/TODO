const inputField = document.querySelector('.input-field');
const todoBtn = document.querySelector('.add-todo');
const todoContainer = document.querySelector('.todo-container');

todoBtn.addEventListener('click',()=>{
    let para = document.createElement('p');
    para.textContent = inputField.value.toUpperCase()
    todoContainer.prepend(para);
    inputField.value = ""

    todoContainer.addEventListener('click',()=> todoContainer.style.textDecoration = "line-through");
    todoContainer.addEventListener('dblclick',()=>todoContainer.remove());
})



















