<?php
// Check if the request includes font ID and updated data
if (isset($_POST["font_id"]) && isset($_POST["font_name"]) && isset($_POST["preview_text"])) {
    // Database connection
    $db_host = "localhost";
    $db_user = "root"; // MySQL username
    $db_pass = "";     // MySQL password
    $db_name = "font_management"; // Your database name
    $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $font_id = $_POST["font_id"];
    $font_name = $_POST["font_name"];
    $preview_text = $_POST["preview_text"];

    $sql_update = "UPDATE fonts SET name = '$font_name', preview_text = '$preview_text' WHERE id = $font_id";

    if ($conn->query($sql_update) === TRUE) {
        echo "Font updated successfully.";
    } else {
        echo "Error updating font: " . $conn->error;
    }

    $conn->close();
} else {
    echo "Invalid request.";
}
?>
