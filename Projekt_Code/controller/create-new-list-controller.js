/**
 * TO DO: Add functionalities:
 * - add list items to form
 * - create new to-do-list
 */
// Get references to the form, items container, add item button, and output area
const form = document.getElementById("create-new-list-form");
const itemsContainer = document.getElementById("items-container");
const addItemBtn = document.getElementById("add-item");
const output = document.getElementById("lists-output");

/* ---------- Add new task input ---------- */
addItemBtn.addEventListener("click", () => {
    const p = document.createElement("p");
    // Create a new paragraph with a label and input for a list item
    p.innerHTML = `
        <label>Enter List Item:</label>
        <input type="text" class="new-list-item">
    `;
    // Append the new input to the items container
    itemsContainer.appendChild(p);
});

/* ---------- Handle form submission ---------- */
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the list title and due date from the input fields
    const title = document.getElementById("new-list-title").value;
    const dueDate = document.getElementById("new-list-due-date").value;

    // Collect all list item values, ignoring empty strings
    const items = [...document.querySelectorAll(".new-list-item")]
        .map(i => i.value)
        .filter(v => v.trim() !== "");

    // Create an array of the form data (optional, not used further)
    const formData = [title, dueDate, items];

    // Create an object representing the new list
    const newList = {
        title,
        due_date: dueDate,
        items,
        created_at: new Date().toLocaleString() // store creation date/time
    };

    // Save the list in localStorage using the title as the key
    localStorage.setItem(title, JSON.stringify(newList));

    form.reset(); // Reset the form fields
    renderLists(); // Re-render all lists to include the new one
});

/* ---------- Render all saved lists ---------- */
function renderLists() {
    output.innerHTML = ""; // Clear the output area

    let found = false;

    // Loop through all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        let list;

        try {
            list = JSON.parse(value); // Try to parse the stored JSON
        } catch (e) {
            continue; // If not valid JSON, skip this entry
        }

        // Check if the stored object is a valid todo list
        if (!list || !Array.isArray(list.items) || !list.due_date) {
            continue;
        }

        found = true;

        // Create a div to display the list
        const div = document.createElement("div");
        div.className = "todo-list";

        div.innerHTML = `
            <h3>${key}</h3>
            <p><strong>Due:</strong> ${list.due_date}</p>
            <ul>
                ${list.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
            <small>Created: ${list.created_at}</small>
            <hr>
        `;

        // Append the list div to the output area
        output.appendChild(div);
    }

    // If no lists were found, display a placeholder message
    if (!found) {
        output.innerHTML = "<p>No lists yet.</p>";
    }
}

/* ---------- Render lists on page load ---------- */
renderLists();

/*-----Test----------*/