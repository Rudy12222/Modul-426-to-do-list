<?php $page_name = "edit-list"; ?>
<?php include "view/header.php"; ?>

<h1 class="page-tile">Edit ToDo-List</h1>

<form id="edit-list-form" class="responsive-form">
    <label for="edit-list-title">Enter List Tile:</label>
    <input type="text" id="edit-list-title">
    <label for="edit-list-item">Enter List Item:</label>
    <input type="text" id="edit-list-item">
    <label for="edit-list-due-date">Enter Due Date</label>
    <input type="date" id="edit-list-due-date" name="due-date">
    <input type="submit" value="Save Changes">
</form>

<script href="controller/edit-list-controller.js"></script>

<?php include "view/footer.php"; ?>