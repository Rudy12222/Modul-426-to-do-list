//TO DO: Implement task deletion

// Function to delete a list
function deleteList(listTitle) {
    // Remove from localStorage
    localStorage.removeItem(listTitle);
    
    // Remove visual list element
    const listElement = document.querySelector(`[data-list-title="${listTitle}"]`);
    if (listElement) {
        listElement.remove();
    }
    
    // Show success notification
    showNotification(`List "${listTitle}" successfully deleted`);
}

// Function to create delete button for a list
function createDeleteButton(listTitle) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-list-btn';
    deleteBtn.setAttribute('data-list-title', listTitle);
    
    // Add click event listener for deletion
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        
        // Confirmation dialog before deletion
        if (confirm(`Are you sure you want to delete the list "${listTitle}"?`)) {
            deleteList(listTitle);
        }
    });
    
    return deleteBtn;
}

// Function to display notification messages
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add notification to the page
    document.body.appendChild(notification);
    
    // Auto-remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to display all lists with delete buttons
function displayAllLists() {
    const container = document.getElementById('lists-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear container
    
    // Check if there are any lists in localStorage
    if (localStorage.length === 0) {
        container.innerHTML = '<p>No lists found</p>';
        return;
    }
    
    // Get all keys from localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        
        try {
            // Parse list data from JSON
            const listData = JSON.parse(localStorage.getItem(key));
            
            // Skip if it's not a list object
            if (!listData || typeof listData !== 'object') continue;
            
            // Create list element
            const listElement = document.createElement('div');
            listElement.className = 'list-item';
            listElement.setAttribute('data-list-title', key);
            
            // Populate list content
            listElement.innerHTML = `
                <h3>${listData.title || key}</h3>
                <p>Created at: ${listData.created_at || 'Not specified'}</p>
                <p>Due date: ${listData.due_date || 'Not specified'}</p>
                <p>Number of tasks: ${listData.items ? listData.items.length : 0}</p>
            `;
            
            // Add delete button
            const deleteBtn = createDeleteButton(key);
            listElement.appendChild(deleteBtn);
            
            // Add to container
            container.appendChild(listElement);
        } catch (error) {
            console.error(`Error processing list "${key}":`, error);
        }
    }
}

// Function to delete all lists at once
function deleteAllLists() {
    if (confirm('Are you sure you want to delete ALL lists? This action cannot be undone.')) {
        localStorage.clear(); // Clear all localStorage data
        const container = document.getElementById('lists-container');
        if (container) {
            container.innerHTML = '<p>No lists found</p>';
        }
        showNotification('All lists successfully deleted');
    }
}

// Function to add "Delete All" button to the page
function addDeleteAllButton() {
    // Check if button already exists
    if (document.querySelector('.delete-all-btn')) return;
    
    const deleteAllBtn = document.createElement('button');
    deleteAllBtn.textContent = 'Delete All Lists';
    deleteAllBtn.className = 'delete-all-btn';
    
    deleteAllBtn.addEventListener('click', deleteAllLists);
    
    // Add button after the lists container
    const container = document.getElementById('lists-container');
    if (container) {
        container.parentNode.insertBefore(deleteAllBtn, container.nextSibling);
    }
}

// Function to initialize everything when page loads
function init() {
    // If lists container exists on this page, display lists
    if (document.getElementById('lists-container')) {
        displayAllLists();
        addDeleteAllButton();
        
        // Update display when localStorage changes (from other tabs/windows)
        window.addEventListener('storage', () => {
            displayAllLists();
        });
    }
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);

// Optional: Function to delete a list from the overview page
// This can be called from other parts of your application
function deleteListFromOverview(listTitle) {
    if (confirm(`Delete list "${listTitle}"?`)) {
        deleteList(listTitle);
        // Refresh the display
        displayAllLists();
    }
}