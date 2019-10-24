//reset form
function resetForm() {
    document.getElementById("status").innerHTML = "";
    document.getElementById("passDisplay").hidden = true;
}


function nextData() {
    // debugger;
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
    if (document.getElementById("npass").value == "" || document.getElementById("ncpass").value == "") {
        statusShow()
        document.getElementById("status").innerHTML = "Please enter new password!!";
        statusHide()
    } else {
        if (document.getElementById("npass").value != document.getElementById("ncpass").value) {
            statusShow()
            document.getElementById("status").innerHTML = "Password and Confirm Password are different!!";
            statusHide()
            return false;
        } else {
            resetPwd();
        }
    }
}

function resetPwd() {
    // debugger;
    var femail = document.getElementById("email").value;
    var data = localStorage.getItem(femail);
    var obj = JSON.parse(data);
    var passChange = document.getElementById("npass").value;
    // window.alert("pC:" + passChange);
    obj.pass = passChange;
    // window.alert("op:" + obj.pass);
    localStorage.setItem(femail, JSON.stringify(obj));
    // window.alert(hello);
    window.location.href = "./index.html";
}


function statusHide() {
    $("#status").delay(1000).fadeOut();
}

function statusShow() {
    $("#status").fadeIn();
}