<?php $page_name = "edit-category"; ?>
<?php include "view/header.php"; ?>

<h1 class="page-title">Edit Category</h1>

<!-- this form lets a user create a new category -->
<form id="edit-category-form" class="responsive-form">
    <label for="edit-category-name-field">Enter Category Name:</label>
    <input type="text" id="edit-category-name-field">
    <label for="edit-category-description-field">Enter Category Description:</label>
    <input type="password" id="edit-category-description-field">
    <label for="edit-category-select-color">Choose a color:</label>
    <input type="color" id="edit-category-select-color" name="category-color" value="#ff0000">
    <input type="submit" value="Save Changes">
</form>

<!-- this script provieds the functionalities for creating new categories-->
<script src="controller/edit-category-controller.js"></script>

<?php include "view/footer.php"; ?>