<?php
// needed to see error messages
ini_set('display_errors', 1);

$servername = "my-mysql-server";
$username = "w0090347";
$password = "Forrester308";
$dbname = "sean_fullstackSamples";

try {
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    // query the data
    $sql = "SELECT * FROM tblPortfolio WHERE id>0";
    $result = $conn->query($sql);

    // construct an empty array
    $samples = [];
    while($row = $result->fetch_assoc()) {
        // construct an empty generic object
        $newSample = new stdClass();
        $newSample->id = htmlspecialchars($row["id"]);
        $newSample->name = htmlspecialchars($row["name"]);
        $newSample->description = htmlspecialchars($row["description"]);
        $newSample->url = htmlspecialchars($row["URL"]);

        $tempyArray = array();
        for ($n = 1; $n <= 4; $n++) {
            $tempyImage = new stdClass();
            $tempyImage->filename = htmlspecialchars($row["image" . $n]);
            array_push($tempyArray, $tempyImage);
        }
        $newSample->images = $tempyArray;

        // this is a push in PHP
        $samples[] = $newSample;
    }

    header("Content-type: application/json");
    // put samples array into a root object (JSON requires root object)
    $root = new stdClass();
    $root->samples = $samples;
    // encode into a JSON string as response
    echo json_encode($root);
    
} finally {
    $conn->close();
}
?>