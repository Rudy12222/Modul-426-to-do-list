<?php $page_name = "overview"; // Current page identifier ?>
<?php include "view/header.php"; // Shared header markup ?>

<!-- Page title -->
<h1>My Todo-Lists</h1>
<!-- Button to create a new list -->
<button id="addButton">Create New Todo-List</button>
<!-- Container where lists will be rendered -->
<div class="list-box" id="display-list-box"></div>

<!-- Page-specific controller script -->
<script src="controller/overview-controller.js"></script>

<?php include "view/footer.php"; // Shared footer markup ?>
