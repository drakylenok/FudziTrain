////////////////////////////////////Обработчик изменения активного селекта///////////////////
$(function() {

    $(".Fulladdres").change(function() {
        $('.Street').val($('.Fulladdres option:selected').attr('Street'));
        $('.HomeNumber').val($('.Fulladdres option:selected').attr('HomeNumber'));
        $('.BuildingN').val($('.Fulladdres option:selected').attr('BuildingN'));
        $('.entranceNumber').val($('.Fulladdres option:selected').attr('entranceNumber'));
        $('.ApartNumber').val($('.Fulladdres option:selected').attr('ApartNumber'));
        $('.FloorNumber').val($('.Fulladdres option:selected').attr('FloorNumber'));
        $('.Code').val($('.Fulladdres option:selected').attr('Code'));

        /////////////Работает GПРОПИСАТЬ ОСТАЛЬНЫЕ ВЫБОРЫ//////////////
 ///////////Разрешение редактирования 

  ///////////////////////////////////////////////////////////////

        if ($('.Fulladdres option:selected').attr('isstart')) {
            MakeNew = 1;
              $('.Street').removeAttr('disabled');
              $('.HomeNumber').attr('disabled', 'disabled');
              $('.BuildingN').attr('disabled', 'disabled');
              $('.ApartNumber').attr('disabled', 'disabled');
              $('.entranceNumber').attr('disabled', 'disabled');
              $('.FloorNumber').attr('disabled', 'disabled');
              $('.Code').attr('disabled', 'disabled');
              $( ".Street" ).parent().attr('class','deselected');
              $( ".HomeNumber" ).parent().attr('class','deselected');
              $( ".BuildingN" ).parent().attr('class','deselected');
              $( ".entranceNumber" ).parent().attr('class','deselected');
              $( ".ApartNumber" ).parent().attr('class','deselected');
              $( ".FloorNumber" ).parent().attr('class','deselected');
              $( ".Code" ).parent().attr('class','deselected');


            $('.buttonClick').prop('value', 'Добавить адрес');
        } else {
            MakeNew = 0;
              $('.Street').removeAttr('disabled');
              $('.HomeNumber').removeAttr('disabled');
              $('.BuildingN').removeAttr('disabled');
              $('.ApartNumber').removeAttr('disabled');
              $('.entranceNumber').removeAttr('disabled');
              $('.FloorNumber').removeAttr('disabled');
              $('.Code').removeAttr('disabled');
              $( ".Street" ).parent().attr('class','deselected');
              $( ".HomeNumber" ).parent().attr('class','deselected');
              $( ".BuildingN" ).parent().attr('class','deselected');
              $( ".entranceNumber" ).parent().attr('class','deselected');
              $( ".ApartNumber" ).parent().attr('class','deselected');
              $( ".FloorNumber" ).parent().attr('class','deselected');
              $( ".Code" ).parent().attr('class','deselected');




            $('.buttonClick').prop('value', 'Редактировать адрес');
        };

    });

});


//////////КЛИК ПО УЛИЦЕ/////////////////////////////////////

$(function() {
    $( ".Street" ).click(function() {  
          $( ".Street" ).parent().attr('class','selected');
          $('.Street').removeAttr('disabled');
          $( ".HomeNumber" ).parent().attr('class','deselected');
          $('.HomeNumber').removeAttr('disabled');
          $( ".BuildingN" ).parent().attr('class','deslected');
          $('.BuildingN').attr('disabled', 'disabled');
          $( ".entranceNumber" ).parent().attr('class','deslected');
          $('.entranceNumber').attr('disabled', 'disabled');
          $( ".ApartNumber" ).parent().attr('class','deslected');
          $('.ApartNumber').attr('disabled', 'disabled');
          $( ".FloorNumber" ).parent().attr('class','deslected');
          $('.FloorNumber').attr('disabled', 'disabled');
          $( ".Code" ).parent().attr('class','deslected');
          $('.Code').attr('disabled', 'disabled');

    });

});

//////////КЛИК ПО ДОМУ/////////////////////////////////////

$(function() {
    $( ".HomeNumber" ).click(function() {  
          $( ".Street" ).parent().attr('class','deslected');
          $('.Street').attr('disabled', 'disabled');
          $( ".HomeNumber" ).parent().attr('class','selected');
          $('.HomeNumber').removeAttr('disabled');
          $( ".BuildingN" ).parent().attr('class','deslected');
          $('.BuildingN').removeAttr('disabled');
          $( ".entranceNumber" ).parent().attr('class','deslected');
          $('.entranceNumber').attr('disabled', 'disabled');
          $( ".ApartNumber" ).parent().attr('class','deslected');
          $('.ApartNumber').attr('disabled', 'disabled');
          $( ".FloorNumber" ).parent().attr('class','deslected');
          $('.FloorNumber').attr('disabled', 'disabled');
          $( ".Code" ).parent().attr('class','deslected');
          $('.Code').attr('disabled', 'disabled');
    });

});

//////////КЛИК ПО Корпусу/////////////////////////////////////

$(function() {
    $( ".BuildingN" ).click(function() {  
          $( ".Street" ).parent().attr('class','deslected');
          $('.Street').attr('disabled', 'disabled');
          $( ".HomeNumber" ).parent().attr('class','deslected');
          $('.HomeNumber').attr('disabled', 'disabled');
          $( ".BuildingN" ).parent().attr('class','selected');
          $('.BuildingN').removeAttr('disabled');
          $( ".ApartNumber" ).parent().attr('class','deslected');
          $('.ApartNumber').removeAttr('disabled');
          $( ".entranceNumber" ).parent().attr('class','deslected');
          $('.entranceNumber').attr('disabled', 'disabled');
          $( ".FloorNumber" ).parent().attr('class','deslected');
          $('.FloorNumber').attr('disabled', 'disabled');
          $( ".Code" ).parent().attr('class','deslected');
          $('.Code').attr('disabled', 'disabled');
    });

});

//////////КЛИК ПО Квартире/////////////////////////////////////

$(function() {
    $( ".ApartNumber" ).click(function() {  
          $( ".Street" ).parent().attr('class','deslected');
          $('.Street').attr('disabled', 'disabled');
          $( ".HomeNumber" ).parent().attr('class','deslected');
          $('.HomeNumber').attr('disabled', 'disabled');
          $( ".BuildingN" ).parent().attr('class','deslected');
          $('.BuildingN').attr('disabled', 'disabled');
          $( ".ApartNumber" ).parent().attr('class','selected');
          $('.ApartNumber').removeAttr('disabled');
          $( ".entranceNumber" ).parent().attr('class','deslected');
          $('.entranceNumber').removeAttr('disabled');
          $( ".FloorNumber" ).parent().attr('class','deslected');
          $('.FloorNumber').attr('disabled', 'disabled');
          $( ".Code" ).parent().attr('class','deslected');
          $('.Code').attr('disabled', 'disabled');
    });

});

//////////КЛИК ПО Подъезду/////////////////////////////////////

$(function() {
    $( ".entranceNumber" ).click(function() {  
          $( ".Street" ).parent().attr('class','deslected');
          $('.Street').attr('disabled', 'disabled');
          $( ".HomeNumber" ).parent().attr('class','deslected');
          $('.HomeNumber').attr('disabled', 'disabled');
          $( ".BuildingN" ).parent().attr('class','deslected');
          $('.BuildingN').attr('disabled', 'disabled');
          $( ".ApartNumber" ).parent().attr('class','deslected');
          $('.ApartNumber').attr('disabled', 'disabled');
          $( ".entranceNumber" ).parent().attr('class','selected');
          $('.entranceNumber').removeAttr('disabled');
          $( ".FloorNumber" ).parent().attr('class','deslected');
          $('.FloorNumber').removeAttr('disabled');
          $( ".Code" ).parent().attr('class','deslected');
          $('.Code').attr('disabled', 'disabled');
    });

});

//////////КЛИК ПО Этажу/////////////////////////////////////

$(function() {
        $( ".FloorNumber" ).click(function() {  
          $( ".Street" ).parent().attr('class','deslected');
          $('.Street').attr('disabled', 'disabled');
          $( ".HomeNumber" ).parent().attr('class','deslected');
          $('.HomeNumber').attr('disabled', 'disabled');
          $( ".BuildingN" ).parent().attr('class','deslected');
          $('.BuildingN').attr('disabled', 'disabled');
          $( ".ApartNumber" ).parent().attr('class','deslected');
          $('.ApartNumber').attr('disabled', 'disabled');
          $( ".entranceNumber" ).parent().attr('class','deslected');
          $('.entranceNumber').attr('disabled', 'disabled');
          $( ".FloorNumber" ).parent().attr('class','selected');
          $('.FloorNumber').removeAttr('disabled');
          $( ".Code" ).parent().attr('class','deslected');
          $('.Code').removeAttr('disabled');
    });

});

//////////КЛИК ПО Коду домофона/////////////////////////////////////

$(function() {
    $( ".Code" ).click(function() {  
          $( ".Street" ).parent().attr('class','deslected');
          $('.Street').attr('disabled', 'disabled');
          $( ".HomeNumber" ).parent().attr('class','deslected');
          $('.HomeNumber').attr('disabled', 'disabled');
          $( ".BuildingN" ).parent().attr('class','deslected');
          $('.BuildingN').attr('disabled', 'disabled');
          $( ".ApartNumber" ).parent().attr('class','deslected');
          $('.ApartNumber').attr('disabled', 'disabled');
          $( ".entranceNumber" ).parent().attr('class','deslected');
          $('.entranceNumber').attr('disabled', 'disabled');
          $( ".FloorNumber" ).parent().attr('class','deslected');
          $('.FloorNumber').attr('disabled', 'disabled');
          $( ".Code" ).parent().attr('class','selected');
          $('.Code').removeAttr('disabled');
    });

});







var MakeNew = 1;
var id;
var i = -1;
var adress = "";
//////////////////////////////////////////////////Обработчик нажатия на конпку
function btnClick() {
    //////////////////////////////////////////ЗАПРЕД ВВОДА КНОПОК НЕ ПО ОЧЕРЕДИ
 
      $('.Street').removeAttr('disabled');
      $('.HomeNumber').attr('disabled', 'disabled');
      $('.BuildingN').attr('disabled', 'disabled');
      $('.ApartNumber').attr('disabled', 'disabled');
      $('.entranceNumber').attr('disabled', 'disabled');
      $('.FloorNumber').attr('disabled', 'disabled');
      $('.Code').attr('disabled', 'disabled');

      $( ".Code" ).parent().attr('class','deslected');


    ///////////////////////////////////////////////

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


    $.post('/bd.php', { street: street, HomeNumber: HomeNumber, BuildingN: BuildingN, entranceNumber: entranceNumber, ApartNumber: ApartNumber, FloorNumber: FloorNumber, Code: Code, MakeNew: MakeNew, id: id }, function(data) {

    });


    adress = "";
    if (street) { adress += "Улица:" + street };
    if (HomeNumber) { adress += " Дом: " + HomeNumber };
    if (BuildingN) { adress += " Корпус: " + BuildingN };
    if (entranceNumber) { adress += " Подъезд: " + entranceNumber };
    if (ApartNumber) { adress += " Квартира: " + ApartNumber };
    if (FloorNumber) { adress += " Этаж: " + FloorNumber };
    if (Code) { adress += " Код домофона: " + Code };


    /////////////////Генерация записи и запись данных в атрибуты
    if (MakeNew == 1) {

        if (adress) {

            i++;
            $('.Fulladdres').append('<Option class=' + i + 'adres>' + adress + '</Option>');


            $('.' + i + 'adres').attr('street', street);
            $('.' + i + 'adres').attr('HomeNumber', HomeNumber);
            $('.' + i + 'adres').attr('BuildingN', BuildingN);
            $('.' + i + 'adres').attr('entranceNumber', entranceNumber);
            $('.' + i + 'adres').attr('ApartNumber', ApartNumber);
            $('.' + i + 'adres').attr('FloorNumber', FloorNumber);
            $('.' + i + 'adres').attr('Code', Code);
            //////////////Автоматический выбор
            $('.' + i + 'adres').prop('selected', true);
            //////////////Обнуление переменных

            MakeNew = 0;
            $('.buttonClick').prop('value', 'Редактировать адрес');


            street = "";
            HomeNumber = "";
            BuildingN = "";
            entranceNumber = "";
            ApartNumber = "";
            FloorNumber = "";
            Code = "";
            adress = "";
        } else { alert("Введите значения") }

    } else {


        let street = $('.Street').val();
        let HomeNumber = $('.HomeNumber').val();
        let BuildingN = $('.BuildingN').val();
        let entranceNumber = $('.entranceNumber').val();
        let ApartNumber = $('.ApartNumber').val();
        let FloorNumber = $('.FloorNumber').val();
        let Code = $('.Code').val();

        ///////////////////Запись данных в переменную 
        adress = '';
        if (street) { adress += "Улица:" + street };
        if (HomeNumber) { adress += " Дом: " + HomeNumber };
        if (BuildingN) { adress += " Корпус: " + BuildingN };
        if (entranceNumber) { adress += " Подъезд: " + entranceNumber };
        if (ApartNumber) { adress += " Квартира: " + ApartNumber };
        if (FloorNumber) { adress += " Этаж: " + FloorNumber };
        if (Code) { adress += " Код домофона: " + Code };


        $('.Fulladdres option:selected').html(adress);

        $('.Fulladdres option:selected').attr('street', street);
        $('.Fulladdres option:selected').attr('HomeNumber', HomeNumber);
        $('.Fulladdres option:selected').attr('BuildingN', BuildingN);
        $('.Fulladdres option:selected').attr('entranceNumber', entranceNumber);
        $('.Fulladdres option:selected').attr('ApartNumber', ApartNumber);
        $('.Fulladdres option:selected').attr('FloorNumber', FloorNumber);
        $('.Fulladdres option:selected').attr('Code', Code);




    }


};