<?php $page_name = "overview"; ?>
<?php include "view/header.php"; ?>

<header>
    <button type="button" class="login-button" id="sign-out-button">SIGN OUT</button>
</header>

<h1>My Todo-Lists</h1>
<button id="addButton">Create New Todo-List</button>
<div class="list-box" id="display-list-box"></div>

<script src="controller/overview-controller.js"></script>

<?php include "view/footer.php"; ?>