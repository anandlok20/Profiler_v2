function submitData() {
    if (document.myForm.pass.value != document.myForm.cpass.value) {
        statusShow();
        document.getElementById("status").innerHTML = "Password and Confirm Password are different!!";
        statusHide();
        return false;
    } else {
        return storeDataLS();
    }
}

//function to store data
function storeDataLS() {
    if (validateEmailDuplicate()) {
        if (document.myForm.pass.value == "" || (document.myForm.pass.value).length < 5 || document.myForm.mobile.value == "") {
            statusShow();
            document.getElementById("status").innerHTML = "Please Fill the correct Details!!";
            statusHide();
            return false;
        } else {
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
            return true;
        }
    } else {
        statusShow();
        document.getElementById("status").innerHTML = "Please Fill the Required Details!!";
        statusHide();
        return false;
    }
}

function validateEmailDuplicate() {
    var testEmail = JSON.parse(localStorage.getItem("profileArray"));
    // window.alert("test:" + test);
    var checkEmail = document.myForm.email.value;
    if (Array.isArray(testEmail) && testEmail.length) {
        if (testEmail.includes(checkEmail)) {
            statusShow();
            document.getElementById("status").innerHTML = "Email Already Registered!!";
            statusHide();
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}


function resetForm() {
    document.getElementById("status").innerHTML = "";
}

function statusHide() {
    $("#status").delay(1000).fadeOut();
}

function statusShow() {
    $("#status").fadeIn();
}