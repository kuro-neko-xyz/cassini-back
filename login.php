<?php
  $conect = mysqli_connect('localhost', 'nakadashi', '123456', 'users') or die('Error connecting to MySQL server.');
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
    </head>
    <body>
        <form action="login.php" method="post">
            <label for="username">Username:</label>
            <input name="username" id="username" type="text">

            <label for="password">Password:</label>
            <input name="password" id="password" type="password">

            <button type="submit">Submit</button>
        </form>
    </body>
</html>