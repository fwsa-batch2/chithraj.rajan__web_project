
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
                let password = document.getElementById("createpassword").value;
                let confirmPassword = document.getElementById("confirmpassword").value;
                let emailId = isEmailExist(email);
                if (password != confirmPassword) {
                    alert("Invalid credentials");
                } else if (emailId) {
                    alert("Invalid credentials");
                } else {
                    let userData = {
                        "userName": userName,
                        "email": email,
                        "password": password,
                        "cpass": confirmPassword
                    }
                    array.push(userData);
                    let arrayinstring = JSON.stringify(array);
                    localStorage.setItem("usersdetail", arrayinstring);
                    window.location.href = "/pages/login.html"
                }
            }
            function isEmailExist(inputEmail) {
                let isExist = false;
                let arrLength = array.length;
                for (let i = 0; i < arrLength ; i++) {
                    if (inputEmail == array[i].email) {
                        isExist = true;
                        break;
                    }

                }
                return isExist


            }

            // function visibleValue() {
            //     const visiblePassword = document.getElementById("createpassword");
            //     const vari = document.getElementById("check");

            //     if (vari.checked) {
            //         document.getElementById("createpassword").type = "text";
            //     } else {
            //         document.getElementById("createpassword").type = "password";
            //     }


            // }


           