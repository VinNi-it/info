"use strict"

// бургер
let dropdown = document.getElementsByClassName("menu-bar");

for (var i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {

        var ddd = document.getElementById("menu-burger");

        if (ddd.style.display === "block") {
            ddd.style.display = "none";
        } else
             {
          ddd.style.display = "block";
         }
        //  console.log(ddd);

      })
 }

// отслеживание изменения размера екрана
window.addEventListener('resize',function(){
	document.getElementById("menu-burger").style.display = "none";
});



//год в футер
let date = new Date();
document.getElementById('year').innerText = `${date.getFullYear()} & VinNi`;






document.addEventListener('DOMContentLoaded',function () {
	const form = document.getElementById('form');

	form.addEventListener('submit',create_window);
	
	function create_window(e) {
	if (check()===true){
		var win = window.open('', '_blank', 'height=320, width=320, continued from previous line toolbar=no, directories=no, status=no, menubar=no, continued from previous line scrollbars=no, resizable=no');

		win.document.write
		(`
			<h2>Ваші данні :</h2>
			<div style="padding: 10px">
				<div style="padding: 10px"><b>Ім'я:</b><span style="color: #333333; margin-left: 10px">${form.name.value}</span></div>
				<div style="padding: 10px"><b>Email:</b><span style="color: #333333; margin-left: 10px">${form.email.value}</span></div>
				<div style="padding: 10px"><b>Телефон:</b><span style="color: #333333; margin-left: 10px">${form.phone.value}</span></div>
				<div style="padding: 10px"><b>Повідомлення:</b><span style="color: #333333; margin-left: 10px">${form.message.value}</span></div>
			</div>
		`);

		// либо так
		// win.document.write(`<h2>Ваші данні :</h2>`);
		// win.document.write(`<br>Email: ${form.email.value}`);
		// win.document.write(`<br>Телефон: ${form.phone.value}`);
		// win.document.write(`<br>Повідомлення: ${form.message.value}`);
} else {
		// return;
	// event.preventDefault(); - так если через onsubmit
	e.preventDefault(); //- прерываем стандартное поведение формы
	alert ("Заповніть обов'язкові поля");

}
}//end create_window

function check() {
// console.log(form);


let err = 0; //счетчик ошибок
 let err_name, err_email, err_message, err_phone  = '';


const error_text_name = document.getElementById("error_text_name");//текст ошибки
const error_text_email = document.getElementById("error_text_email");//текст ошибки
const error_text_phone = document.getElementById("error_text_phone");//текст ошибки
const error_text_message = document.getElementById("error_text_message");//текст ошибки


//name
const strname = form.name.value;
if (strname.length>0){
		if ((strname.indexOf("<")>0)||(strname.indexOf(">")>0)) 
			{
				err_name = "не повинно містити символи '<' та '>'";
				console.log (err_name);
				form.name.classList.add('_error');
				err++;
				// return false;
			} else{
				err_name = "";
				form.name.classList.remove('_error');
			}
	}else{ //  если длина поля = 0
		err_name = "заповніть поле";
		err++;
		form.name.classList.add('_error')
	}


//email
const strmail = form.email.value;
if (strmail.length>0){
		if ((strmail.indexOf("@")<0)||(strmail.indexOf(".")<0)||(strmail.lastIndexOf(".")<strmail.indexOf("@"))) 
			{
				err_email = "некоретний Email";
				console.log (err_email);
				form.email.classList.add('_error');
				err++;
				// return false;
			} else{
				err_email = "";
				form.email.classList.remove('_error');
			}
	}else{//  если длина поля = 0
		err_email = "заповніть поле";
		err++;
		form.email.classList.add('_error')
	}

//telefon
const strphone = form.phone.value;
if (strphone.length>0){
		if (!/^((\+)?(3)?(8)?[\- ]?)?(\(?\d{3}\)?[\- ]?)?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/.test(strphone))//регулярное выражение 
			{
				err_phone = "пример: +38 (063) 123-45-67";
				console.log (err_phone);
				form.phone.classList.add('_error');
				err++;
				// return false;
			} else{
				err_phone = "";
				form.phone.classList.remove('_error');
			}
	}else{//  если длина поля = 0
		err_phone = "заповніть поле";
		err++;
		form.phone.classList.add('_error')
	}


//message
const strmessage = form.message.value;
if (strmessage.length>0){
		if ((strmessage.indexOf(">")>0)||(strmessage.indexOf("<")>0)||(strmessage.indexOf("/")>0)||(strmessage.indexOf("#")>0)) 
			{
				err_message = "не повинно містити символи '<,>,/,#'";
				console.log (err_message);
				form.message.classList.add('_error');
				err++;
				// return false;
			} else{
				err_message = "";
				form.message.classList.remove('_error');
			}
			console.log(err);
	}else{//  если длина поля = 0
		err_message = "заповніть поле";
		err++;
		form.message.classList.add('_error')
	}
if(err === 0){
	error_text_name.innerText = ``;
	error_text_email.innerText = ``;
	error_text_phone.innerText = ``;
	error_text_message.innerText = ``;
	return true;
}else{
	// error_text.innerText = `Введить корректні данні: ${err_name},<br> ${err_email},<br> ${err_message}`;
	error_text_name.innerText = `${err_name}`;
	error_text_email.innerText = `${err_email}`;
	error_text_phone.innerText = `${err_phone}`;
	error_text_message.innerText = `${err_message}`;
	return false;
}

}//end check

//message

});