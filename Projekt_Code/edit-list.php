<?php $page_name = "edit-list"; // Current page identifier ?>
<?php include "view/header.php"; // Shared header markup ?>

<!-- Page title -->
<h1 class="page-tile">Edit ToDo-List</h1>

<!-- Form for editing an existing list -->
<form id="edit-list-form">
    <!-- Section heading -->
    <h2>Edit List</h2>

    <!-- Title input -->
    <label>
        Title
        <input type="text" id="edit-title" required>
    </label>

    <!-- Due date input -->
    <label>
        Due date
        <input type="date" id="edit-due-date" required>
    </label>

    <!-- Items textarea -->
    <label>
        Items (one per line)
        <textarea id="edit-items" rows="6"></textarea>
    </label>

    <!-- Action buttons -->
    <button type="submit">Save</button>
    <button type="button" id="cancel-edit">Cancel</button>
</form>


<!-- Page-specific controller script -->
<script src="controller/edit-list-controller.js" defer></script>

<?php include "view/footer.php"; // Shared footer markup ?>
