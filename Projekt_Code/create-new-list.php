<?php $page_name = "create-new-list"; ?>
<?php include "view/header.php"; ?>

<h1 class="page-tile">Create A New ToDo-List</h1>

<form id="create-new-list-form" class="responsive-form">
    <label for="new-list-title">Enter List Tile:</label>
    <input type="text" id="new-list-title">
    <label for="new-list-item">Enter List Item:</label>
    <input type="text" id="new-list-item">
    <label for="new-list-due-date">Enter Due Date</label>
    <input type="date" id="new-list-due-date" name="due-date">
    <input type="submit" value="Create New ToDo-List">
</form>

<script href="controller/create-new-list-controller.js"></script>

<?php include "view/footer.php"; ?>