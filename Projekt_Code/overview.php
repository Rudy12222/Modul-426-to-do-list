<?php $page_name = "overview"; ?>
<?php include "view/header.php"; ?>

<h1>My Todo-Lists</h1>
<div class="list-box">
    <ul id="todo-list-overview">
    </ul>
    <button id="addButton">Create New Todo-List</button>
</div>

<h1>My Categories</h1>
<div id="list-categories-box" class="list-box">
    <ul id="category-list-overview">
    </ul>
    <button id="addButton">Create New Category</button>
</div>

<script src="controller/overview-controller.js"></script>

<?php include "view/footer.php"; ?>