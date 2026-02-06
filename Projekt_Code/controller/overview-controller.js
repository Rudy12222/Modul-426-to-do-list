document.addEventListener("DOMContentLoaded", renderLists);

function renderLists() {
    const container = document.getElementById("display-list-box");
    container.innerHTML = "";

    let found = false;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let list;

        try {
            list = JSON.parse(localStorage.getItem(key));
        } catch {
            continue;
        }

        // Validate this is one of YOUR todo lists
        if (
            !list ||
            !Array.isArray(list.items) ||
            !list.due_date ||
            !list.created_at
        ) {
            continue;
        }

        found = true;

        const listDiv = document.createElement("div");
        listDiv.className = "todo-list";

        listDiv.innerHTML = `
            <h3>${key}</h3>
            <p><strong>Due:</strong> ${list.due_date}</p>
            <ul>
                ${list.items.map(item => `<li>${item}</li>`).join("")}
            </ul>
            <small>Created: ${list.created_at}</small>
        `;

        container.appendChild(listDiv);
    }

    if (!found) {
        container.innerHTML = "<p>No lists saved yet.</p>";
    }
}
