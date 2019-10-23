var url_string = window.location.href;
var url = new URL(url_string);
var uemail = url.searchParams.get("email");
var data = localStorage.getItem(uemail);
var obj = JSON.parse(data);

window.onload = function() {
    document.getElementById("logTitle").innerHTML += " " + obj.fname + " " + obj.lname;
}

function logout() {
    localStorage.removeItem("session@" + uemail);
    obj.status = "0";
    // window.alert(obj.status);
    localStorage.setItem(uemail, JSON.stringify(obj));
    window.location.replace("./index.html");
}

function deRegister() {
    var cnfMsg = window.confirm("Are you Sure ??\nDo you really want to delete your Profile??");
    // window.alert(cnfMsg);
    if (cnfMsg) {
        localStorage.removeItem("session@" + uemail);
        localStorage.removeItem(uemail);
        window.location.replace("./index.html");
    } else {
        return false;
    }
}