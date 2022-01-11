let array = [];
function onPageLoad() {
    let recollect = JSON.parse(localStorage.getItem("usersdetail"));
    if (recollect) {
        array = recollect;
    }
}
onPageLoad();


function userInput(event) {
    event.preventDefault();
    let userName = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let emailId = isEmailExist(email);
    let password = isPasswordExist(pass);
    let boolean = false;
    if (password == boolean) {
        alert("Invalid login credentials");
    }

    if (emailId == boolean) {
        alert("Invalid login credentials");
    }

    if (password === true && emailId === true) {
        window.location.href = "/pages/storyhome.html";
    }


}

let arrLen = array.length;
function isEmailExist(inputEmail) {
    let isExist = false;

    for (let i = 0; i < arrLen; i++) {
        if (inputEmail == array[i].email) {
            isExist = true;
            break;
        }

    }
    return isExist


}

function isPasswordExist(inputPassword) {
    let isExist = false;

    for (let i = 0; i < arrLen; i++) {
        if (inputPassword == array[i].password) {
            isExist = true;
            break;
        }

    }
    return isExist


}

function visibleValue() {

    const vari = document.getElementById("check");

    if (vari.checked) {
        document.getElementById("password").type = "text";
    } else {
        document.getElementById("password").type = "password";
    }


}
