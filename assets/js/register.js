let userarray = [];
function userInput(event) {
    event.preventDefault();

    let userTitle = document.getElementById("title").value;
    let userFname = document.getElementById("fname").value;
    let userLname = document.getElementById("lname").value;
    let userRole = document.getElementById("role").value;
    let userGrade = document.getElementById("grade").value;
    let userSchool = document.getElementById("school").value;

    const userDetails = {
        "userTitle": userTitle,
        "userFname": userFname,
        "userLname": userLname,
        "userRole": userRole,
        "userGrade": userGrade,
        "userSchool": userSchool
    }

    console.log(userDetails);

    userarray.push(userDetails);
    const peter = JSON.stringify(userarray);

    localStorage.setItem("usersInfo", peter);

    window.location.href = "/pages/password and mail.html"
}

function onRefresh() {

    const getLocal = JSON.parse(localStorage.getItem("usersInfo"));
    if (getLocal) {
        userarray = getLocal;
    } else {
        userarray = [];
    }


}
onRefresh();
