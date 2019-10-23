function loginVerify() {
    // debugger;
    var vemail = document.getElementById("email").value;
    var vpass = document.getElementById("pass").value;
    var data = localStorage.getItem(vemail);
    // console.log(vemail);
    // console.log(vpass);
    // console.log(data.toString());
    var obj = JSON.parse(data);
    // console.log(obj.pass);
    if (data == null) {
        statusShow()
        document.getElementById("status").innerHTML = "Incorrect Email!!";
        statusHide();
    } else {
        if (obj.pass != vpass) {
            statusShow()
            document.getElementById("status").innerHTML = "Incorrect Password!!";
            statusHide();
        } else {
            // window.alert("Login Sucess!!");
            sessionStorage.setItem("session@" + vemail, vemail);
            obj.status = "1";
            window.alert(obj.status);
            localStorage.setItem(vemail, JSON.stringify(obj));
            window.location.href = "./home.html";
        }
    }
}

function statusHide() {
    $("#status").delay(1000).fadeOut();
}

function statusShow() {
    $("#status").fadeIn();
}