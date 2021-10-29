<?php
header("Access-Control-Allow-Origin: *");
if(isset($_GET['getSaludo'])){
  if($_GET["getSaludo"]==1){
    echo "Hola, desde el server+"."54.974706, -1.615757";

  }
  else{
    echo "No saludo a nadie";
  }
}
