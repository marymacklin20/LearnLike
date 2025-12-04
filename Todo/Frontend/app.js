const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const task = input.value.trim();
    if (task === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <div>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    list.appendChild(li);
    input.value = "";

    // Delete event
    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
    });

    // Edit event
    li.querySelector(".edit").addEventListener("click", () => {
        const newTask = prompt("Edit task:", li.querySelector("span").textContent);
        if (newTask) {
            li.querySelector("span").textContent = newTask;
        }
    });
});
