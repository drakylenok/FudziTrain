<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>Форма</title>
	<link rel="stylesheet" href="css/scss.css">
</head>
<body>

	<form action="" method="post" name="FORM">

		<div class="deselected" >
			<label>Выберите улицу (начните вводить): </label>
			<input type="text" class="Street"> 
		</div><br>
		
		<div calss="deselected" >
			<label>Дом*: </label>
			<input disabled type="text" class="HomeNumber">
		</div><br>

		<div calss="deselected" >
			<label>Корпус: </label>
			<input disabled type="text" class="BuildingN">
		</div><br>
		
		<div calss="deselected" >
			<label>Квартира*: </label>
			<input disabled type="text" class="ApartNumber">
		</div><br>

		<div calss="deselected" >
			<label>Подъезд*: </label>
			<input disabled type="text" class="entranceNumber">
		</div><br>

		<div calss="deselected" >
			<label>Этаж*: </label>
			<input disabled type="text" class="FloorNumber">
		</div><br>

		<div calss="deselected" >
			<label>Код двери: </label>
			<input  disabled type="text" class="Code">
		</div> <br>

		<div >
		<label>Выберите адрес доставки: </label>




		<select class="Fulladdres">
			<option isstart="true" value="Добавить адрес">Добавить адрес  </option>

<?php 
	
	//////Подключение к базе данных
	$AdressDB= new mysqli('localhost','root','root','adreses');
	$success= $AdressDB->query ("SELECT * FROM `adres`");

	//Цикличное заполнение данных 
	while ($row=$success ->fetch_assoc()) {
			$street=$row['Street'];
			$HomeNumber=$row['House'];
			$BuildingN=$row['Building'];
			$entranceNumber=$row['Entrance'];
			$ApartNumber=$row['Apartment'];
			$FloorNumber=$row['Floor'];
			$Code=$row['Code'];
			$id=$row['id'];
			$adress='';
			$adress .= "Улица:".(string)$street;
			$adress .=" Дом: ".(string)$HomeNumber;
			$adress .=" Корпус: ".(string)$BuildingN;
			$adress .=" Подъезд: ".(string)$entranceNumber;
			$adress .=" Этаж: ".(string)$ApartNumber;
			$adress .=" Квартира: ".(string)$FloorNumber;
			$adress .=" Код домофона: ".(string)$Code;
			echo '<option street='.$street.' HomeNumber='.$HomeNumber.' BuildingN='.$BuildingN.' entranceNumber='.$entranceNumber.' ApartNumber='.$ApartNumber.' Code='.$Code.'FloorNumber='.$FloorNumber.' id='.$id.'>'.$adress.'</option>'; 

	}
	$AdressDB->close();
 ?>





		</select>

		</div> <br>

		<input type="button" onclick="btnClick();" value="Добавить адрес" class="buttonClick">








	</form>


























<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="main.js"> </script>
</body>

</html>
