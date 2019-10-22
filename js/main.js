function submitData() {
    if (document.myForm.pass.value != document.myForm.cpass.value) {
        document.getElementById("status").innerHTML = "Password and Confirm Password are different!!";
        return false;
    } else {
        storeDataLS();
    }
}

//function to store data
function storeDataLS() {
    var profile = {
        fname: document.myForm.fname.value,
        lname: document.myForm.lname.value,
        gender: document.myForm.gender.value,
        email: document.myForm.email.value,
        pass: document.myForm.pass.value
    };
    localStorage.setItem(document.myForm.email.value, JSON.stringify(profile));
    var test = JSON.parse(localStorage.getItem("profileArray"));
    window.alert("test:" + test);
    if (test == null) {
        test = [];
        test.push(document.myForm.email.value);
    } else {
        test.push(document.myForm.email.value);
    }
    localStorage.setItem("profileArray", JSON.stringify(test));
}