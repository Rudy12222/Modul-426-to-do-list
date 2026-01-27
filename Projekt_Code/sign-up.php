<?php $page_name = "sign-up"; ?>
<?php include "view/header.php"; ?>

<!-- this is the header for the page -->
<h1 class="page-titel">Create new account</h1>

<!-- this form lets a user login -->
<form id="sign-up-form" class="responsive-form">
    <label for="username-field">Enter a username:</label>
    <input type="text" id="username-field">
    <label for="password-field">Enter a password:</label>
    <input type="password" id="repeat-password-field">
    <label for="repeat-password-field">Enter the same password again:</label>
    <input type="password" id="repeat-password-field">
    <input type="submit" value="Create Account">
</form>

<!--this script provides the functionalities of the current page -->
<script src="controller/login-controller.js"></script>

<?php include "view/footer.php"; ?>