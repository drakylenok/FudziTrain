////////////////////////////////////Обработчик изменения активного селекта///////////////////
$(function() {






	$(".Fulladdres").change(function(){
		$('.Street').val($('.Fulladdres option:selected').attr('Street'));
		$('.HomeNumber').val($('.Fulladdres option:selected').attr('HomeNumber'));
		$('.BuildingN').val($('.Fulladdres option:selected').attr('BuildingN'));
		$('.entranceNumber').val($('.Fulladdres option:selected').attr('entranceNumber'));
		$('.ApartNumber').val($('.Fulladdres option:selected').attr('ApartNumber'));
		$('.FloorNumber').val($('.Fulladdres option:selected').attr('FloorNumber'));
		$('.Code').val($('.Fulladdres option:selected').attr('Code'));

/////////////Работает GПРОПИСАТЬ ОСТАЛЬНЫЕ ВЫБОРЫ//////////////


	if($('.Fulladdres option:selected').attr('isstart')){
	 	MakeNew=1;
	 	
	 	$('.buttonClick').prop('value', 'Добавить адрес');
	}else{
		MakeNew=0;
		
		$('.buttonClick').prop('value', 'Редактировать адрес');
};

});

});




var MakeNew=1;
var id;
var i=-1;
var adress="";
//////////////////////////////////////////////////Обработчик нажатия на конпку
function btnClick(){
	
///////////////////Чтение данных из инпута

	let street = $('.Street').val();
	let HomeNumber = $('.HomeNumber').val();
	let BuildingN = $('.BuildingN').val();
	let entranceNumber = $('.entranceNumber').val();
	let ApartNumber = $('.ApartNumber').val();
	let FloorNumber = $('.FloorNumber').val();
	let Code = $('.Code').val();
	let id = $('.Fulladdres option:selected').attr('id');
	

/////////////AJAX ЗАПРОС////////////////////////////////////////


$.post('/bd.php', {street: street,HomeNumber:HomeNumber,BuildingN:BuildingN,entranceNumber:entranceNumber,ApartNumber:ApartNumber,FloorNumber:FloorNumber,Code:Code,MakeNew:MakeNew,id:id}, function(data){
	//alert(data);
});


	 adress="";
    if(street){adress += "Улица:"+street};
    if(HomeNumber){adress +=" Дом: "+HomeNumber};
    if(BuildingN){adress +=" Корпус: "+BuildingN};
    if(entranceNumber){adress +=" Подъезд: "+entranceNumber};
    if(ApartNumber){adress +=" Квартира: "+ApartNumber};
    if(FloorNumber){adress +=" Этаж: "+FloorNumber};
    if(Code){adress +=" Код домофона: "+Code};

     
   /////////////////Генерация записи и запись данных в атрибуты
	if (MakeNew==1){

	   	if(adress){

			   	i++;
			   	$('.Fulladdres').append('<Option class='+i+'adres>'+adress+'</Option>');


			   	$('.'+i+'adres').attr('street',street);
			   	$('.'+i+'adres').attr('HomeNumber',HomeNumber);
			   	$('.'+i+'adres').attr('BuildingN',BuildingN);
			   	$('.'+i+'adres').attr('entranceNumber',entranceNumber);
			   	$('.'+i+'adres').attr('ApartNumber',ApartNumber);
			   	$('.'+i+'adres').attr('FloorNumber',FloorNumber);
			   	$('.'+i+'adres').attr('Code',Code);
		//////////////Автоматический выбор
			   	$('.'+i+'adres').prop('selected', true);
	 	   	//////////////Обнуление переменных
	 	
	 	   		MakeNew=0;
	 			$('.buttonClick').prop('value', 'Редактировать адрес');
	 	

				street="";
				HomeNumber="";	    	
				BuildingN="";
				entranceNumber="";
				ApartNumber="";
				FloorNumber="";
				Code="";
				adress="";
				}
		else{alert("Введите значения")}
			
	}else{
		

				let street = $('.Street').val();
				let HomeNumber = $('.HomeNumber').val();
				let BuildingN = $('.BuildingN').val();
				let entranceNumber = $('.entranceNumber').val();
				let ApartNumber = $('.ApartNumber').val();
				let FloorNumber = $('.FloorNumber').val();
				let Code = $('.Code').val();

					///////////////////Запись данных в переменную 
					adress='';	
			    if(street){adress += "Улица:"+street};
			    if(HomeNumber){adress +=" Дом: "+HomeNumber};
			    if(BuildingN){adress +=" Корпус: "+BuildingN};
			    if(entranceNumber){adress +=" Подъезд: "+entranceNumber};
			    if(ApartNumber){adress +=" Квартира: "+ApartNumber};
			    if(FloorNumber){adress +=" Этаж: "+FloorNumber};
			    if(Code){adress +=" Код домофона: "+Code};


				$('.Fulladdres option:selected').html(adress);

				$('.Fulladdres option:selected').attr('street',street);
			   	$('.Fulladdres option:selected').attr('HomeNumber',HomeNumber);
			   	$('.Fulladdres option:selected').attr('BuildingN',BuildingN);
			   	$('.Fulladdres option:selected').attr('entranceNumber',entranceNumber);
			   	$('.Fulladdres option:selected').attr('ApartNumber',ApartNumber);
			   	$('.Fulladdres option:selected').attr('FloorNumber',FloorNumber);
			   	$('.Fulladdres option:selected').attr('Code',Code);




	}


}; 
