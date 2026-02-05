const taskListElement = document.getElementById("to-do-list");
const taskStatusElement = document.getElementById("task-status");
const tasksApiUrl = "api/tasks.php";

const setTaskStatus = (message, isError = false) => {
    if (!taskStatusElement) {
        return;
    }

    taskStatusElement.textContent = message;
    taskStatusElement.style.color = isError ? "#b00020" : "";
};

const createDeleteButton = (task, onDelete) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "task-delete-button";
    button.textContent = "Loeschen";
    button.addEventListener("click", async () => {
        if (button.disabled) {
            return;
        }

        button.disabled = true;
        button.textContent = "Loesche...";
        try {
            await onDelete(task);
        } catch (error) {
            button.disabled = false;
            button.textContent = "Loeschen";
            setTaskStatus(error.message, true);
        }
    });

    return button;
};

const renderTasks = (tasks, onDelete) => {
    taskListElement.innerHTML = "";

    if (!Array.isArray(tasks) || tasks.length === 0) {
        setTaskStatus("Keine Tasks vorhanden.");
        return;
    }

    setTaskStatus("");

    tasks.forEach((task) => {
        const listItem = document.createElement("li");
        listItem.dataset.taskId = task.id;

        const label = document.createElement("span");
        label.textContent = task.title || "Unnamed Task";

        listItem.appendChild(label);
        listItem.appendChild(createDeleteButton(task, onDelete));
        taskListElement.appendChild(listItem);
    });
};

const loadTasks = async () => {
    if (!taskListElement) {
        return [];
    }

    try {
        const response = await fetch(tasksApiUrl);
        if (!response.ok) {
            throw new Error("Tasks konnten nicht geladen werden.");
        }

        const payload = await response.json();
        return Array.isArray(payload.tasks) ? payload.tasks : [];
    } catch (error) {
        setTaskStatus(error.message, true);
        return [];
    }
};

const initDetailedList = async () => {
    if (!taskListElement) {
        return;
    }

    let tasks = await loadTasks();

    const handleDelete = async (task) => {
        await window.deleteTaskById(task.id);
        tasks = tasks.filter((entry) => String(entry.id) !== String(task.id));
        renderTasks(tasks, handleDelete);
    };

    renderTasks(tasks, handleDelete);
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDetailedList);
} else {
    initDetailedList();
}
