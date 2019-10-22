function submitData() {
    if (document.myForm.pass.value != document.myForm.cpass.value) {
        document.getElementById("status").innerHTML = "Password and Confirm Password are different!!";
        return false;
    } else {
        var profile = {
            fname: document.myForm.fname.value,
            lname: document.myForm.lname.value,
            gender: document.myForm.gender.value,
            email: document.myForm.email.value,
            pass: document.myForm.pass.value
        };
        localStorage.setItem(document.myForm.email.value, JSON.stringify(profile));
        // document.getElementById("status").innerHTML = "!!Thankyou for Registration!!";
    }
}