document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const listKey = params.get("key");

    if (!listKey) {
        alert("No list selected");
        window.location.href = "overview.php";
        return;
    }

    const list = JSON.parse(localStorage.getItem(listKey));
    if (!list) {
        alert("List not found");
        window.location.href = "overview.php";
        return;
    }

    const form = document.getElementById("edit-list-form");
    const titleInput = document.getElementById("edit-title");
    const dueDateInput = document.getElementById("edit-due-date");
    const itemsTextarea = document.getElementById("edit-items");

    // Populate form
    titleInput.value = listKey;
    dueDateInput.value = list.due_date;
    itemsTextarea.value = list.items.join("\n");

    // Show form
    form.style.display = "block";

    form.addEventListener("submit", e => {
        e.preventDefault();

        const newTitle = titleInput.value.trim();
        const dueDate = dueDateInput.value;
        const items = itemsTextarea.value
            .split("\n")
            .map(i => i.trim())
            .filter(Boolean);

        if (!newTitle || items.length === 0) {
            alert("Title and at least one item required");
            return;
        }

        const updatedList = {
            ...list,
            due_date: dueDate,
            items
        };

        if (newTitle !== listKey) {
            localStorage.removeItem(listKey);
        }

        localStorage.setItem(newTitle, JSON.stringify(updatedList));
        window.location.href = "overview.php";
    });

    document.getElementById("cancel-edit").addEventListener("click", () => {
        window.location.href = "overview.php";
    });
});
