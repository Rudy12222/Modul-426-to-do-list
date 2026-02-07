<?php $page_name = "view-detailed-list"; // Current page identifier ?>
<?php include "view/header.php"; // Shared header markup ?>


<!-- Container for the detailed list view -->
<div id="view-detailed-list-box">
    <!-- List items will be injected here -->
    <ul id="to-do-list"></ul>
</div>

<!-- Page-specific controller script -->
<script href="controller/view-detailed-list-controller.js"></script>

<?php include "view/footer.php"; // Shared footer markup ?>
