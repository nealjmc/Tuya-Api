<?php
//error_reporting(1);
    if(isset($_POST['command'])){
        if($_POST['command'] == "getStatus"){
            $output = shell_exec("node ./tuyaapp/index.js getStatus");
        }
        else if($_POST['command'] == "toggleFan"){
            $output = shell_exec("node ./tuyaapp/index.js toggleFan");
        }
        
         echo "$output";        
    }
?>