<?php $page_name = "edit-category"; // Current page identifier ?>
<?php include "view/header.php"; // Shared header markup ?>

<!-- Page title -->
<h1 class="page-title">Edit Category</h1>

<!-- Form for editing a category -->
<form id="edit-category-form" class="responsive-form">
    <!-- Category name input -->
    <label for="edit-category-name-field">Enter Category Name:</label>
    <input type="text" id="edit-category-name-field">
    <!-- Category description input -->
    <label for="edit-category-description-field">Enter Category Description:</label>
    <input type="password" id="edit-category-description-field">
    <!-- Category color picker -->
    <label for="edit-category-select-color">Choose a color:</label>
    <input type="color" id="edit-category-select-color" name="category-color" value="#ff0000">
    <!-- Submit changes -->
    <input type="submit" value="Save Changes">
</form>

<!-- Page-specific controller script -->
<script src="controller/edit-category-controller.js"></script>

<?php include "view/footer.php"; // Shared footer markup ?>
