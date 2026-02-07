// Initialize edit form after the page loads.
document.addEventListener("DOMContentLoaded", () => {
    // Read the list key from the URL query string.
    const params = new URLSearchParams(window.location.search);
    // Extract the `key` parameter value.
    const listKey = params.get("key");

    // If no key is provided, return to the overview page.
    if (!listKey) {
        // Inform the user that no list was selected.
        alert("No list selected");
        // Redirect to the overview page.
        window.location.href = "overview.php";
        // Stop further execution.
        return;
    }

    // Load the list from localStorage by key.
    const list = JSON.parse(localStorage.getItem(listKey));
    // If the list is missing, return to the overview page.
    if (!list) {
        // Inform the user that the list could not be found.
        alert("List not found");
        // Redirect to the overview page.
        window.location.href = "overview.php";
        // Stop further execution.
        return;
    }

    // Cache form and input fields.
    const form = document.getElementById("edit-list-form");
    // Cache the title input element.
    const titleInput = document.getElementById("edit-title");
    // Cache the due date input element.
    const dueDateInput = document.getElementById("edit-due-date");
    // Cache the items textarea element.
    const itemsTextarea = document.getElementById("edit-items");

    // Populate form with the current list data.
    titleInput.value = listKey;
    // Populate the due date field.
    dueDateInput.value = list.due_date;
    // Populate the items textarea with one item per line.
    itemsTextarea.value = list.items.join("\n");

    // Show the form once data is loaded.
    form.style.display = "block";

    // Save updates on submit.
    form.addEventListener("submit", e => {
        // Prevent the default form submission (page reload).
        e.preventDefault();

        // Read and normalize updated values.
        const newTitle = titleInput.value.trim();
        // Read the updated due date value.
        const dueDate = dueDateInput.value;
        // Split items into lines and normalize them.
        const items = itemsTextarea.value
            .split("\n")
            .map(i => i.trim())
            .filter(Boolean);

        // Validate required fields.
        if (!newTitle || items.length === 0) {
            // Notify the user about missing data.
            alert("Title and at least one item required");
            // Stop submission when validation fails.
            return;
        }

        // Build the updated list object.
        const updatedList = {
            ...list,
            due_date: dueDate,
            items
        };

        // If the title changed, remove the old key.
        if (newTitle !== listKey) {
            // Remove the old list entry from storage.
            localStorage.removeItem(listKey);
        }

        // Save the updated list and return to overview.
        localStorage.setItem(newTitle, JSON.stringify(updatedList));
        // Redirect to the overview page.
        window.location.href = "overview.php";
    });

    // Cancel and go back to the overview page.
    document.getElementById("cancel-edit").addEventListener("click", () => {
        // Redirect to the overview page without saving.
        window.location.href = "overview.php";
    });
});
