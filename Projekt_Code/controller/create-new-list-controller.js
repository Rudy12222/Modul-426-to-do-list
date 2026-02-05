/**
 * TO DO: Add functionalities:
 * - add list items to form
 * - create new to-do-list
 */

// Select the form and input fields
const form = document.getElementById("create-new-list-form"); 
const titleInput = document.getElementById("new-list-title"); 
const itemInput = document.getElementById("new-list-item");   
const dateInput = document.getElementById("new-list-due-date"); 

// Select the "New Tasks" button
const newTasksButton = document.getElementById("new-tasks-button");

// Initially hide the form
form.style.display = "none";

// Show the form when the button is clicked
newTasksButton.addEventListener("click", function() {
    form.style.display = "block"; // Show form
    newTasksButton.style.display = "none"; // Hide button
});

// Array to store all lists in this session
const toDoLists = [];

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const title = titleInput.value.trim(); 
    const item = itemInput.value.trim();   
    const date = dateInput.value;          

    // Validation
    if (!title || !item || !date) {
        alert("Please fill in all fields!");
        return;
    }

    if (title.length < 3 || title.length > 100) {
        alert("Title must be between 3 and 100 characters.");
        return;
    }

    if (item.length > 500) {
        alert("Description cannot exceed 500 characters.");
        return;
    }

    // Check if list already exists
    let list = toDoLists.find(l => l.title === title);
    if (!list) {
        list = { title: title, items: [] };
        toDoLists.push(list);
    }

    // Add new item
    list.items.push({ name: item, dueDate: date });

    // Display lists
    displayLists();

    form.reset();
});

// Display all lists
function displayLists() {
    let container = document.getElementById("lists-preview");
    if (!container) {
        container = document.createElement("div");
        container.id = "lists-preview";
        document.body.appendChild(container);
    }
    container.innerHTML = "";

    toDoLists.forEach(list => {
        const listTitle = document.createElement("h3");
        listTitle.textContent = list.title;
        container.appendChild(listTitle);

        const ul = document.createElement("ul");
        list.items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} (due: ${item.dueDate})`;
            ul.appendChild(li);
        });
        container.appendChild(ul);
    });
}
