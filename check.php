<?php

if (isset($_GET['username'])) {

    $username = htmlspecialchars($_GET['username']);

    echo "Username '$username' is available.";

}

elseif (isset($_GET['email'])) {

    $email = htmlspecialchars($_GET['email']);

    echo "Email '$email' is available.";

}

else {

    echo "No data received.";

}

?>