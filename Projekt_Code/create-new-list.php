<?php
$page_name = "create-new-list"; // Current page identifier
include "view/header.php"; // Shared header markup
?>

<!-- Page title -->
<h1 class="page-title">Create A New ToDo-List</h1>

<!-- New todo list form -->
<form id="create-new-list-form" class="responsive-form">
    <!-- List title input -->
    <p>
        <label for="new-list-title">Enter List Title:</label>
        <input type="text" id="new-list-title" required>
    </p>

    <!-- Container for dynamic list item inputs -->
    <div id="items-container">
        <p>
            <label>Enter List Item:</label>
            <input type="text" class="new-list-item">
        </p>
    </div>

    <!-- Button to add another list item input -->
    <button type="button" id="add-item">+ Add Task</button>

    <!-- Due date input -->
    <p>
        <label for="new-list-due-date">Enter Due Date</label>
        <input type="date" id="new-list-due-date" required>
    </p>

    <!-- Submit button for the new list -->
    <button type="submit">Create New ToDo-List</button>
</form>

<!-- Page-specific controller script -->
<script src="./controller/create-new-list-controller.js"></script>

<?php include "view/footer.php"; // Shared footer markup ?>
