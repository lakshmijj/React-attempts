<?php
// needed to see error messages
ini_set('display_errors', 1);

// construct an empty array
$samples = [];

header("Content-type: application/json");
// put samples array into a root object (JSON requires root object)
$root = new stdClass();
$root->samples = $samples;
// encode into a JSON string as response
echo json_encode($root);    
?>