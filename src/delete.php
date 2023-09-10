<?php
// Check if the request includes a font ID to delete
if (isset($_POST["font_id"])) {
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

    // First, delete the file from the server
    $sql_select = "SELECT file_path FROM fonts WHERE id = $font_id";
    $result = $conn->query($sql_select);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $file_path = $row["file_path"];
        if (unlink($file_path)) {
            // File deleted successfully, now delete the font record
            $sql_delete = "DELETE FROM fonts WHERE id = $font_id";
            if ($conn->query($sql_delete) === TRUE) {
                echo "Font deleted successfully.";
            } else {
                echo "Error deleting font: " . $conn->error;
            }
        } else {
            echo "Error deleting font file.";
        }
    } else {
        echo "Font not found.";
    }

    $conn->close();
} else {
    echo "Invalid request.";
}
?>
