<?php $page_name = "edit-list"; ?>
<?php include "view/header.php"; ?>

<h1 class="page-tile">Edit ToDo-List</h1>

<form id="edit-list-form">
    <h2>Edit List</h2>

    <label>
        Title
        <input type="text" id="edit-title" required>
    </label>

    <label>
        Due date
        <input type="date" id="edit-due-date" required>
    </label>

    <label>
        Items (one per line)
        <textarea id="edit-items" rows="6"></textarea>
    </label>

    <button type="submit">Save</button>
    <button type="button" id="cancel-edit">Cancel</button>
</form>


<script src="controller/edit-list-controller.js" defer></script>

<?php include "view/footer.php"; ?>