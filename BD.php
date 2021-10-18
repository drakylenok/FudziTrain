<?php 

$AdressDB= new mysqli('localhost','root','root','adreses');

$street = ($_POST['street']);
$HomeNumber = ($_POST['HomeNumber']);
$BuildingN = ($_POST['BuildingN']);
$entranceNumber = ($_POST['entranceNumber']);
$ApartNumber = ($_POST['ApartNumber']);
$FloorNumber = ($_POST['FloorNumber']);
$Code = ($_POST['Code']);
$MakeNew = ($_POST['MakeNew']);
$id = ($_POST['id']);


if($MakeNew==1){

$AdressDB->query ("INSERT INTO `adres` (`Street`, `House`, `Building`, `Entrance`, `Apartment`, `Floor`, `Code`) VALUES ('".$street."', '".$HomeNumber."', '".$BuildingN."', '".$entranceNumber."', '".$ApartNumber."', '".$FloorNumber."', '".$Code."');");
$AdressDB->close();
}else{
$AdressDB->query ("UPDATE `adres` SET `Street` = '".$street."', `House` = '".$HomeNumber."', `Building` = '".$BuildingN."', `Entrance` = '".$entranceNumber."', `Apartment` = '".$ApartNumber."', `Floor` = '".$FloorNumber."', `Code` = '".$Code."' WHERE `adres`.`id` = ".$id.";");
$AdressDB->close();
}


 ?>