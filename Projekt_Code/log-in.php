<?php $page_name = "log-in"; ?>
<?php include "view/header.php"; ?>

<!-- this is the header for the page -->
<h1 class="page-titel">Log In</h1>

<!-- this form lets a user login -->
<form id="login-form" class="responsive-form">
    <label for="username-field">Username:</label>
    <input type="text" id="username-field">
    <label for="password-field">Password:</label>
    <input type="password" id="password-field">
    <input type="submit" value="SIGN IN">
</form>

<!-- link and text to create account-->
<p id="sign-up-link-text">Don't have an account yet?</p>
<a id="sign-up-link" href="sign-up.php">Sign Up here!</a>

<!--this script provides the functionalities of the current page -->
<script src="controller/login-controller.js"></script>

<?php include "view/footer.php"; ?>