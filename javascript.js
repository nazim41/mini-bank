document.getElementById("btn-submit").addEventListener("click", function(){

//getting the mail into a variav=ble.


const userMail = document.getElementById("user-mail");
const mail = userMail.value;


const userPssword = document.getElementById("user-password");
const password = userPssword.value;



if ( mail==="nazim@gmail.com" && password ==="screat")
{
    window.location.href= 'index2.html';
}
else{
    console.log("Envalid user.");
}

})

