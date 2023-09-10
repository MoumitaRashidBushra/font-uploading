<?php
$target_dir = "uploads/";
$allowed_extensions = ["ttf"];

if ($_FILES["file"]["error"] === 0) {
    $file_info = pathinfo($_FILES["file"]["name"]);
    $extension = strtolower($file_info["extension"]);

    if (in_array($extension, $allowed_extensions)) {
        $file_name = uniqid() . "." . $extension;
        $target_path = $target_dir . $file_name;

        if (move_uploaded_file($_FILES["file"]["tmp_name"], $target_path)) {
            // Font upload successful
            // Insert the font information into the database

            // Database connection
            $db_host = "localhost";
            $db_user = "root"; // MySQL username
            $db_pass = "";     // MySQL password
            $db_name = "font_management"; // Your database name
            $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);

            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            }

            $font_name = $_FILES["file"]["name"];
            $preview_text = "Sample Preview"; // You can customize this

            $sql = "INSERT INTO fonts (name, file_path, preview_text) VALUES ('$font_name', '$target_path', '$preview_text')";

            if ($conn->query($sql) === TRUE) {
                $response = [
                    "success" => true,
                    "message" => "Font uploaded successfully."
                ];
                echo json_encode($response);
            } else {
                $response = [
                    "success" => false,
                    "message" => "Error inserting font into the database: " . $conn->error
                ];
                echo json_encode($response);
            }

            $conn->close();
        } else {
            http_response_code(500);
            echo "Error uploading file.";
        }
    } else {
        http_response_code(400);
        echo "Invalid file extension.";
    }
} else {
    http_response_code(400);
    echo "File upload error.";
}
?>
