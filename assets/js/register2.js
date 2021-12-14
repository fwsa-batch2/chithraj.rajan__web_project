
            let array = [];
            function onPageLoad() {
                let recollect = JSON.parse(localStorage.getItem("usersdetail"));
                if (recollect) {
                    array = recollect;
                }
            }
            onPageLoad();


            function userInput() {
                event.preventDefault();
                let userName = document.getElementById("fname").value;
                let email = document.getElementById("email").value;
                let password = document.getElementById("createpassword").value;
                let confirmPassword = document.getElementById("confirmpassword").value;
                let emailId = isEmailExist(email);
                if (password != confirmPassword) {
                    alert("password invalid");
                } else if (emailId) {
                    alert("this email already exist");
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
                for (let i = 0; i < array.length; i++) {
                    if (inputEmail == array[i].email) {
                        isExist = true;
                        break;
                    }

                }
                return isExist


            }

            function visibleValue() {
                const visiblePassword = document.getElementById("createpassword");
                const vari = document.getElementById("check");

                if (vari.checked) {
                    document.getElementById("createpassword").type = "text";
                } else {
                    document.getElementById("createpassword").type = "password";
                }


            }


            /*let userData = {
                    "userName": userName,
                    "email": email,
                    "password": password,
                    "cpass": confirmPassword
                }

                array.push(userData);
                let arrayinstring = JSON.stringify(array);
                localStorage.setItem("usersdetail", arrayinstring);
            }

            function check() {
                const input = JSON.parse(localStorage.getItem("usersdetail"));

                for (let i = 0; i < input.length; i++) {
                    if (password != confirmPassword) {
                        alert("Invalid Registration !");
                        window.location.href = "#";
                        break;

                    }
                    if (input[i].email == email) {
                        alert("E-mail already exists");
                        window.location.href = "#";
                        break;

                    }

                }

            }


            // get data from localStorage
            // if data present in localstorage
            // loop data
            // get user details
            // get user email

            // if user email == input email
            // isExist = true
            // break the loop

            // localStorage.getItem("userdetails");
            // if()


            // return isExist*/
        