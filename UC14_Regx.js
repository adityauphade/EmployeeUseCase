var mail = "adityauphade@gmail.com";
var regx_mail = /^([\w.]+[@][a-zA-Z1-9]+[.][a-z]+([.a-z]+)$)$/;
// console.log(regx.test(mail));
if (regx_mail.test(mail) == true) {
    console.log(`Mail is validated`);
}
else{
    console.log(`Mail is not validated`);
}

var mobile = "91 7045711681";
var regx_mobile = /^([\d]{2}[ ][6-9][\d]{9})$/;
if (regx_mobile.test(mobile) == true) {
    console.log(`Mobile is validated`);
}
else{
    console.log(`Mobile is not validated`);
}

var name = "Aditya";
var regx_name = /^([A-Z][a-z]{2,30})$/;
if (regx_name.test(name) == true) {
    console.log(`Name is validated`);
}
else{
    console.log(`Name is not validated`);
}

var gender = "M";
var regx_gender = /^([MF]{1})$/;
if (regx_gender.test(gender) == true) {
    console.log(`Gender is validated`);
}
else{
    console.log(`Gender is not validated`);
}


var uid = "aditya.uphade";
var regx_uid = /^([a-zA-z.]+)$/;
if (regx_uid.test(uid) == true) {
    console.log(`UserID is validated`);
}
else{
    console.log(`UserID is not validated`);
}