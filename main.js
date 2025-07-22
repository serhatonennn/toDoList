const addForm = document.getElementById("addForm");
const input = document.querySelector('input[name="addToDo"]');
const todoList = document.getElementById("todoList");


addForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const taskText = input.value;
    const newitem = document.createElement("div");

    if (taskText === "") {
        alert("Boş Girilemez.");
    } else {
        const taskId = `taskDone${Date.now()}`;
        newitem.className = "list-group-item d-flex justify-content-between align-items-center text-l text-danger";
        newitem.innerHTML = `
    <span>${taskText}</span>
    <div class="d-flex align-items-center gap-2">
        <input type="checkbox" class="btn-check" id="${taskId}" autocomplete="off">
        <label class="btn btn-outline-success btn-sm" for="${taskId}">Tamamlandı</label>
        <button class="btn btn-outline-danger btn-sm delete-btn">Sil</button>
    </div>
`;
        input.value = "";
        todoList.appendChild(newitem);
    }
});


todoList.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest(".list-group-item").remove();
    }
});

todoList.addEventListener("change", function(e) {
    if (e.target.type === "checkbox") {
        const listItem = e.target.closest(".list-group-item");
        const span = listItem.querySelector("span");

        span.classList.toggle("text-success", e.target.checked);
        span.classList.toggle("text-decoration-line-through", e.target.checked);
    }
});

document.getElementById("clearAll").addEventListener("click", function() {
    const list = document.getElementById("todoList") || document.querySelector(".list-group");
    list.innerHTML = "";
});