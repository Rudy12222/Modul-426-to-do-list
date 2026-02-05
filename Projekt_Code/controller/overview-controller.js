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
        const mainDiv = document.querySelector("#display-list-box");
        const div = document.createElement("div");

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
        output.appendChild(mainDiv);
    }

    // If no lists were found, display a placeholder message
    if (!found) {
        output.innerHTML = "<p>No lists yet.</p>";
    }
}

/* ---------- Render lists on page load ---------- */
renderLists();