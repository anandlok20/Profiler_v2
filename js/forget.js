function resetForm() {
    document.getElementById("status").innerHTML = "";
}

function nextData() {
    debugger;
    var femail = document.getElementById("email").value;
    var fmobile = document.getElementById("mobile").value;
    var data = localStorage.getItem(femail);
    var obj = JSON.parse(data);
    if (data == null) {
        statusShow()
        document.getElementById("status").innerHTML = "Incorrect Email!!";
        statusHide();
    } else {
        if (obj.mobile != fmobile) {
            statusShow()
            document.getElementById("status").innerHTML = "Incorrect Contact No!!";
            statusHide();
        } else {
            document.getElementById("passDisplay").hidden = false;
            document.getElementById("btnreg").hidden = true;
            document.getElementById("btnrec").hidden = false;
        }
    }
}

function checkPassEqual() {
    if (document.getElementById("npass").value == "") {
        document.getElementById("status").innerHTML = "Please enter new password!!";
    } else {
        if (document.getElementById("npass").value != document.getElementById("ncpass").value) {
            document.getElementById("status").innerHTML = "Password and Confirm Password are different!!";
            return false;
        } else {
            return resetPwd();
        }
    }
}

function resetPwd() {
    window.alert("Hello");
}


function statusHide() {
    $("#status").delay(1000).fadeOut();
}

function statusShow() {
    $("#status").fadeIn();
}