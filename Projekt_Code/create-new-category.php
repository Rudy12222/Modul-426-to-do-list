<?php $page_name = "create-new-category"; ?>
<?php include "view/header.php"; ?>

<h1 class="page-title">Create New Category</h1>
<!-- this form lets a user create a new category -->
<form id="create-new-category-form" class="responsive-form">
    <label for="new-category-name-field">Enter Category Name:</label>
    <input type="text" id="new-category-name-field">
    <label for="new-category-description-field">Enter Category Description:</label>
    <input type="password" id="new-category-description-field">
    <label for="new-category-select-color-list">Choose a color:</label>
    <input type="color" id="new-category-select-color" name="category-color" value="#ff0000">
    <input type="submit" value="Create Category">
</form>

<!-- this script provieds the functionalities for creating new categories-->
<script src="controller/create-new-category-controller.js"></script>

<?php include "view/footer.php"; ?>