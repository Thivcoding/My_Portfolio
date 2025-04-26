<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contacts";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    // Sanitize and validate input
    $firstName = htmlspecialchars($data['firstName']);
    $lastName = htmlspecialchars($data['lastName']);
    $email = htmlspecialchars($data['email']);
    $message = htmlspecialchars($data['message']);

    // Prepare SQL query
    $stmt = $conn->prepare("INSERT INTO tbl_contacts (first_name, last_name, email, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $firstName, $lastName, $email, $message);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Form submitted successfully!"]);
    } else {
        echo json_encode(["message" => "Error: " . $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["message" => "No data received."]);
}

$conn->close();
?>
