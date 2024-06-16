function validate(){
    var firstName=document.querySelector("#firstName")
    var lastName=document.querySelector("#lastName")
    var emailAddress=document.querySelector("#emailAddress")
    var mobileNumber=document.querySelector("#mobileNumber")
    var errorMessage=document.querySelector("#errorMessage")
    if(firstName.value=="" || lastName.value==""|| emailAddress.value==""|| mobileNumber.value=="" ){
        console.log("All fields are mandatory.")
        errorMessage.innerHTML="All fields are mandatory.";
        if(firstName.value==""){
            firstName.style.animation="errorAnimation linear 2s";
            
        }
        else  if(lastName.value==""){
            lastName.style.animation="errorAnimation linear 2s";
            
        }
        else if(emailAddress.value==""){
            emailAddress.style.animation="errorAnimation linear 2s";
           
        }
        else if(mobileNumber.value==""){
            mobileNumber.style.animation="errorAnimation linear 2s";
            
        }
    }else{
        errorMessage.innerHTML="";
    }
}