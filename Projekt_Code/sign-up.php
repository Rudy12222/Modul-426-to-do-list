<?php $page_name = "sign-up"; // Current page identifier ?>
<?php include "view/header.php"; // Shared header markup ?>

<!-- Page title -->
<h1 class="page-titel">Create new account</h1>

<!-- Sign-up form -->
<form id="sign-up-form" class="responsive-form">
    <!-- Username input -->
    <label for="username-field">Enter a username:</label>
    <input type="text" id="username-field">
    <!-- Password input -->
    <label for="password-field">Enter a password:</label>
    <input type="password" id="repeat-password-field">
    <!-- Repeat password input -->
    <label for="repeat-password-field">Enter the same password again:</label>
    <input type="password" id="repeat-password-field">
    <input type="submit" value="Create Account">
</form>

<!-- Page-specific controller script -->
<script src="controller/login-controller.js"></script>

<?php include "view/footer.php"; // Shared footer markup ?>
