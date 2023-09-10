<?php

header("Access-Control-Allow-Origin: *");

// Allow these HTTP methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Allow these HTTP headers to be sent with the request
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Allow cookies to be sent with the request (if needed)
header("Access-Control-Allow-Credentials: true");


// Database connection configuration
$host = "localhost";  // Replace with your MySQL host
$username = "root";   // Replace with your MySQL username
$password = "";       // Replace with your MySQL password
$database = "font_management";  // Replace with your MySQL database name

// Create a connection to the database
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to fetch fonts from the database
$sql = "SELECT * FROM fonts";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $fonts = array();

    // Fetch font data and store it in an array
    while ($row = $result->fetch_assoc()) {
        $fonts[] = array(
            'id' => $row['id'],
            'name' => $row['name'],
            'previewText' => $row['preview_text']
        );
    }

    // Return the fonts as JSON
    echo json_encode(array('success' => true, 'fonts' => $fonts));
} else {
    // No fonts found
    echo json_encode(array('success' => false, 'message' => 'No fonts found.'));
}

// Close the database connection
$conn->close();
?>
