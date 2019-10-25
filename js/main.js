window.onload = function() {
    resetForm();
}

function storeData() {
    if (document.myForm.pass.value != document.myForm.cpass.value) {
        statusShow();
        document.getElementById("showStatuscpass").innerHTML = "Password and Confirm Password are different!!";
        statusHide();
        return false;
    } else {
        return true;
    }
}

//function to store data
function submitData() {
    resetForm();
    if (validateEmailDuplicate()) {
        // if (checkAllValue()) {
        // if (document.myForm.pass.value < 5) {
        //     if ((document.myForm.pass.value).length == "") {
        //         document.getElementById("showStatuspass").innerHTML = "Password is empty!!";
        //     } else {
        //         statusShow();
        //         document.getElementById("showStatuspass").innerHTML = "Password is less than 5 characters!!";
        //         statusHide();
        //     }
        // } else {
        if (document.myForm.mobile.value < 11) {
            document.getElementById("showStatusmobile").innerHTML = "Password is empty!!";
        } else {
            statusShow();
            document.getElementById("showStatusmobile").innerHTML = "Password is less than 5 characters!!";
            statusHide();
        }
        var profile = {
            fname: document.myForm.fname.value,
            lname: document.myForm.lname.value,
            gender: document.myForm.gender.value,
            email: document.myForm.email.value,
            pass: document.myForm.pass.value,
            mobile: document.myForm.mobile.value,
            status: "0",
        };
        // window.alert((document.myForm.pass.value).length);
        // window.alert(profile.fname);
        localStorage.setItem(document.myForm.email.value, JSON.stringify(profile));
        var test = JSON.parse(localStorage.getItem("profileArray"));
        // window.alert("test:" + test);
        if (test == null) {
            test = [];
            test.push(document.myForm.email.value);
        } else {
            test.push(document.myForm.email.value);
        }
        localStorage.setItem("profileArray", JSON.stringify(test));
        window.location.replace("./index.html");
        // return true;
        // }
        // }
    }
}

function validateEmailDuplicate() {
    var testEmail = JSON.parse(localStorage.getItem("profileArray"));
    // window.alert("test:" + test);
    var checkEmail = document.myForm.email.value;
    if (checkAllValue()) {
        if (Array.isArray(testEmail) && testEmail.length) {
            if (testEmail.includes(checkEmail)) {
                statusShow();
                document.getElementById("showStatusemail").innerHTML = "Email Already Registered!!";
                statusHide();
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    }
}


function checkAllValue() {
    var z = checkData(20, document.myForm.fname.value, "showStatusfname", "First Name");
    var x = checkData(20, document.myForm.lname.value, "showStatuslname", "Last Name");
    var c = checkData(5, document.myForm.pass.value, "showStatuspass", "Password");
    var v = checkData(5, document.myForm.cpass.value, "showStatuscpass", "Confirm Password");
    var b = checkData(11, document.myForm.mobile.value, "showStatusmobile", "Mobile");
    var n = checkData(30, document.myForm.email.value, "showStatusemail", "Email");
    var m = storeData();
    // if (z == true && x == true && c == true && v == true && b == true && n == true && m == true) {
    //     return true;
    // } else {
    //     return false;
    // }
    return (z && x && c && v && b && n && m);
}

function checkData(num, eleVal, eleNam, nams) {
    if (eleVal < num) {
        if (eleVal.length == "") {
            statusShow();
            document.getElementById(eleNam).innerHTML = nams + " is empty!!";
            statusHide();
            return false;
        } else {
            statusShow();
            document.getElementById(eleNam).innerHTML = nams + " is less than " + num + " characters!!";
            statusHide();
            return false;
        }
    } else {
        return true;
    }
}

function statusHide() {
    $("#status").delay(1000).fadeOut();
}

function statusShow() {
    $("#status").fadeIn();
}

function resetForm() {
    document.getElementById("showStatusmobile").innerHTML = "";
    document.getElementById("showStatusemail").innerHTML = "";
    document.getElementById("showStatusfname").innerHTML = "";
    document.getElementById("showStatuslname").innerHTML = "";
    document.getElementById("showStatuspass").innerHTML = "";
    document.getElementById("showStatuscpass").innerHTML = "";
}