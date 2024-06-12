'use strict';
  const errorField = "This field is required";
  const errorRadio = "Please select a query type";
  const errorEmail = "Please enter a valid email address";
  const errorCheck = "To submit this form,please consent to being contacted";
  const succesfullMessageTitle = "Message Sent! ";
  const succesfullMessageDescription = "Thanks for completing the form. We'll be in touch soon!";
  let fName = document.getElementById("fName");
  let sName = document.getElementById("sName");
  
  var email = document.getElementById("email");
  var radios = document.querySelectorAll(".radio");
  var arrayRadios = Array.from(radios);
  var camposf = document.querySelectorAll(".campo-form");
  var arrayCamposForm = Array.from(camposf);
  var textArea = document.getElementById("textarea");
  var messages = document.querySelectorAll(".message");
  var arrayMessages = Array.from(messages);
  var check = document.getElementById("check");
  var pMsg1 = arrayMessages[0];
  var pMsg2 = arrayMessages[1];
  var pMsg3 = arrayMessages[2];
  var pMsg4 = arrayMessages[3];
  var pMsg5 = arrayMessages[4];
  var pMsg6 = arrayMessages[5];
  var isReady = false;
 
 
 
  window.addEventListener('DOMContentLoaded',(e)=>{
    loadErrorFields();

    let forms = document.querySelectorAll("input[type='text'],input[type='email']");
    let arrayforms = Array.from(forms);
    arrayforms.forEach(function(el){
      el.addEventListener("focus",(e)=>{
        e.preventDefault();
        e.target.style.border = "2px solid hsla(169, 82%, 29%, 0.573)";
      });
    });
    fName.addEventListener("input",(e)=>{

     if(e.target.value == ""){
              fName.classList.add("form__error");
              pMsg1.classList.add("title__error");
              pMsg1.textContent=errorField;    
              isReady = false;       
      }else{
        isReady = true;
        fName.classList.toggle("form__error");
        pMsg1.textContent="";
      }
    }); 

  


    sName.addEventListener("input",(e)=>{
      if(e.target.value == ""){
        sName.classList.add("form__error");
        pMsg2.classList.add("title__error");
        pMsg2.textContent=errorField;
        isReady = false;
      }else{
        isReady = true;
        sName.classList.toggle("form__error");
        pMsg2.textContent="";
      }
    });


   

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    email.addEventListener("input",(e)=>{
      if(emailRegex.test(e.target.value) && e.target.value==""){
        email.classList.add("form__error");
        pMsg3.classList.add("title__error");
        pMsg3.textContent=errorEmail;
        isReady = false;
      }else{
        isReady = true;
        email.classList.toggle("form__error");
        pMsg3.textContent="";
      } 
    });



    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      radio.addEventListener('click', function() {
        // Si ya estaba seleccionado, deselecciónalo
        if (this.checked) {
            this.checked = false;
        }
        // Desmarca todos los demás radios
        radios.forEach(r => r.checked = false);
        // Marca el radio actual solo si no estaba previamente marcado
        this.checked = !this.wasChecked;
        // Actualiza el estado wasChecked
        this.wasChecked = this.checked;


        

        if(this.checked){
          isReady = true;
          arrayCamposForm.forEach(function(e){
            e.classList.remove("form__error");
           });
          pMsg4.textContent="";
        }else{
          isReady = false;
          arrayCamposForm.forEach(function(e){
            e.classList.add("form__error");
           });
          pMsg4.textContent=errorRadio;
        }
    });
  });




      textArea.addEventListener("input",(e)=>{
        if(e.target.value==""){
              isReady = false;
              textArea.classList.add("form__error");
              pMsg5.style.margin = "0 2rem";
              pMsg5.classList.add("title__error");
              pMsg5.textContent=errorField;
            }else{
              isReady = true;
              textArea.classList.toggle("form__error");
              pMsg5.textContent="";
            }
      });
      

    
 
      check.addEventListener("change",(e)=>{
        if(check.checked==false){
          isReady = false;
          check.classList.add("form__error");
          pMsg6.classList.add("title__error");
          pMsg6.style.margin = "0 2rem";
          pMsg6.textContent=errorCheck;
        }else{
          isReady = true;
          check.classList.toggle("form__error");
          pMsg6.textContent="";
        }
      });

  });
  
    document.getElementById("btn").addEventListener("click",(e)=>{
      e.preventDefault();
      validateButtonFields();
  });

  
  function validateButtonFields(){
    if(!isReady){
        email.classList.add("form__error");
        pMsg3.classList.add("title__error");
        pMsg3.textContent=errorEmail;
        fName.classList.add("form__error");
        pMsg1.classList.add("title__error");
        pMsg1.textContent=errorField;
        sName.classList.add("form__error");
        pMsg2.classList.add("title__error");
        pMsg2.textContent=errorField;
        textArea.classList.add("form__error");
        pMsg5.style.margin = "0 2rem";
        pMsg5.classList.add("title__error");
        pMsg5.textContent=errorField;
        check.classList.add("form__error");
        pMsg6.classList.add("title__error");
        pMsg6.style.margin = "0 2rem";
        pMsg6.textContent=errorCheck;

      }else{
        //alerta de que esta todo bien
        Swal.fire({
          title: succesfullMessageTitle,
          text: succesfullMessageDescription,
          icon: "success"
        });
      }
}

function loadErrorFields(){

    //First Name

    fName.classList.add("form__error");
    pMsg1.classList.add("title__error");
    pMsg1.textContent=errorField;

    //Second Name
    sName.classList.add("form__error");
    pMsg2.classList.add("title__error");
    pMsg2.textContent=errorField;

    //Email

    email.classList.add("form__error");
    pMsg3.classList.add("title__error");
    pMsg3.textContent=errorEmail;


    //RadioButtons

    arrayCamposForm.forEach(function(e){
        e.classList.add("form__error");
    });   
    pMsg4.textContent = errorRadio;
    pMsg4.classList.add("title__error");
    


    //TextArea
    textArea.classList.add("form__error");
    pMsg5.style.margin = "0 2rem";
    pMsg5.classList.add("title__error");
    pMsg5.textContent=errorField;

    //Check
    check.classList.add("form__error");
    pMsg6.classList.add("title__error");
    pMsg6.style.margin = "0 2rem";
    pMsg6.textContent=errorCheck;
}