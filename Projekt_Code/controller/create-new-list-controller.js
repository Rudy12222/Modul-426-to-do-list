// Cache DOM references used by this controller.
const form = document.getElementById("create-new-list-form");
// Cache the container that holds item inputs.
const itemsContainer = document.getElementById("items-container");
// Cache the button used to add new item inputs.
const addItemBtn = document.getElementById("add-item");
// Cache the output area for lists (reserved for future use).
const output = document.getElementById("lists-output");

// Add a new item input row when the user clicks the add button.
addItemBtn.addEventListener("click", () => {
    // Create a wrapper paragraph element for the input row.
    const p = document.createElement("p");
    // Create a label + input pair for a new list item.
    p.innerHTML = `
        <label>Enter List Item:</label>
        <input type="text" class="new-list-item">
    `;
    // Append the new input to the items container.
    itemsContainer.appendChild(p);
});

// Handle form submission for creating a new list.
form.addEventListener("submit", (e) => {
    // Prevent the default form submission (page reload).
    e.preventDefault();

    // Read the list title from the form field.
    const title = document.getElementById("new-list-title").value;
    // Read the due date value from the form field.
    const dueDate = document.getElementById("new-list-due-date").value;

    // Collect all item values, ignoring empty strings.
    const items = [...document.querySelectorAll(".new-list-item")]
        .map(i => i.value) // Extract raw input values.
        .filter(v => v.trim() !== ""); // Remove empty values.

    // Build an array of the submitted form data (unused but kept for future use).
    const formData = [title, dueDate, items];

    // Build the list object to persist.
    const newList = {
        title,
        due_date: dueDate,
        items,
        // Store creation date and time for display.
        created_at: new Date().toLocaleString()
    };

    // Save the list in localStorage using the title as the key.
    localStorage.setItem(title, JSON.stringify(newList));

    // Reset the form fields.
    form.reset();

    // Go back to the overview page after saving.
    document.location.href="overview.php"
});
