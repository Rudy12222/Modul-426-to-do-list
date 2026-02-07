// Render saved lists once the page is ready.
document.addEventListener("DOMContentLoaded", renderLists);

function renderLists() {
    // Container where all list cards will be inserted.
    const container = document.getElementById("display-list-box");
    // Clear old content before re-rendering.
    container.innerHTML = "";

    // Track whether any valid list was found.
    let found = false;

    // Iterate over every key in localStorage.
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let list;

        try {
            // Try to parse the stored JSON for this key.
            list = JSON.parse(localStorage.getItem(key));
        } catch {
            // Skip entries that are not valid JSON.
            continue;
        }

        // Validate this is one of your todo lists.
        if (
            !list ||
            !Array.isArray(list.items) ||
            !list.due_date ||
            !list.created_at
        ) {
            // Skip unrelated or malformed entries.
            continue;
        }

        found = true;

        // Build the list card.
        const listDiv = document.createElement("div");
        listDiv.className = "todo-list";

        // Render title, due date, items, and action buttons.
        listDiv.innerHTML = `
        <h3>${key}</h3>
        <p><strong>Due:</strong> ${list.due_date}</p>
        <ul>
            ${list.items.map(item => `<li>${item}</li>`).join("")}
        </ul>
        <a href="edit-list.php?key=${encodeURIComponent(key)}">
            <button>Edit</button>
        </a>
        <a href="list-delete.php?key=${encodeURIComponent(key)}">
            <button>Delete</button>
        </a>
`;



        // Add the new card to the page.
        container.appendChild(listDiv);
    }

    // Show an empty state if nothing was found.
    if (!found) {
        container.innerHTML = "<p>No lists saved yet.</p>";
    }
}

// Navigate to the create page when the add button is clicked.
document.getElementById("addButton").addEventListener("click", () => {
    window.location.href = "create-new-list.php";
});
