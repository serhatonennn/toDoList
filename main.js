const addForm = document.getElementById("addForm");
const input = document.querySelector('input[name="addToDo"]');
const todoList = document.getElementById("todoList");

addForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const taskText = input.value;
    const newitem = document.createElement("div");
    newitem.className = "list-group-item d-flex justify-content-between align-items-center text-l";
    newitem.innerHTML = `
        <span>${taskText}</span>
        <button class="btn btn-outline-danger btn-sm delete-btn">Sil</button>
    `;
    todoList.appendChild(newitem);
});

todoList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest(".list-group-item").remove();
    }
});

document.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN" && e.target.closest(".list-group-item")) {
        e.target.classList.toggle("text-decoration-line-through ");
    }
});

document.getElementById("clearAll").addEventListener("click", function() {
    const list = document.getElementById("todoList") || document.querySelector(".list-group");
    list.innerHTML = "";
});