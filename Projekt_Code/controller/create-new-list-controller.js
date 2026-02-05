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

    document.location.href="overview.php"
});

