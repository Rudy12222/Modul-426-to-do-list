<?php $page_name = "create-new-category"; // Current page identifier ?>
<?php include "view/header.php"; // Shared header markup ?>

<!-- Page title -->
<h1 class="page-title">Create New Category</h1>
<!-- Form for creating a new category -->
<form id="create-new-category-form" class="responsive-form">
    <!-- Category name input -->
    <label for="new-category-name-field">Enter Category Name:</label>
    <input type="text" id="new-category-name-field">
    <!-- Category description input -->
    <label for="new-category-description-field">Enter Category Description:</label>
    <input type="password" id="new-category-description-field">
    <!-- Category color picker -->
    <label for="new-category-select-color-list">Choose a color:</label>
    <input type="color" id="new-category-select-color" name="category-color" value="#ff0000">
    <!-- Submit button -->
    <input type="submit" value="Create Category">
</form>

<!-- Page-specific controller script -->
<script src="controller/create-new-category-controller.js"></script>

<?php include "view/footer.php"; // Shared footer markup ?>
