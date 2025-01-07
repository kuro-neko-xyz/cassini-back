<?php
  if (!empty($_POST['password'])) {
    echo htmlspecialchars($_POST['username']);
  }
?>