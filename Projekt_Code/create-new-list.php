<?php
$page_name = "create-new-list"; // Current page identifier
include "view/header.php"; // Include header
?>

<h1 class="page-title">Create A New ToDo-List</h1>

<!-- New ToDo list form -->
<form id="create-new-list-form" class="responsive-form">
    <p>
        <label for="new-list-title">Enter List Title:</label>
        <input type="text" id="new-list-title" required>
    </p>

    <div id="items-container">
        <p>
            <label>Enter List Item:</label>
            <input type="text" class="new-list-item">
        </p>
    </div>

    <button type="button" id="add-item">+ Add Task</button>

    <p>
        <label for="new-list-due-date">Enter Due Date</label>
        <input type="date" id="new-list-due-date" required>
    </p>

    <button type="submit">Create New ToDo-List</button>
</form>

<!-- JavaScript controller -->
<script src="./controller/create-new-list-controller.js"></script>

<?php include "view/footer.php"; // Include footer ?>