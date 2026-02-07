<?php $page_name = "log-in"; // Current page identifier ?>
<?php include "view/header.php"; // Shared header markup ?>

<!-- Page title -->
<h1 class="page-titel">Log In</h1>

<!-- Login form -->
<form id="login-form" class="responsive-form">
    <label for="username-field">Username:</label>
    <input type="text" id="username-field">
    <label for="password-field">Password:</label>
    <input type="password" id="password-field">
    <input type="submit" value="SIGN IN">
</form>

<!-- Sign-up prompt and link -->
<p id="sign-up-link-text">Don't have an account yet?</p>
<a id="sign-up-link" href="sign-up.php">Sign Up here!</a>

<!-- Page-specific controller script -->
<script src="controller/login-controller.js"></script>

<?php include "view/footer.php"; // Shared footer markup ?>
