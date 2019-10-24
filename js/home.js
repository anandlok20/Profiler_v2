var url_string = window.location.href;
var url = new URL(url_string);
var uemail = url.searchParams.get("email");
var data = localStorage.getItem(uemail);
var obj = JSON.parse(data);

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
        var recData = JSON.parse(localStorage.getItem("profileArray"));
        window.alert(recData);
        var retValue = recData.pop(uemail);
        window.alert(retValue);
        localStorage.setItem("profileArray", JSON.stringify(recData));
        window.location.replace("./index.html");
    } else {
        return false;
    }
}

window.onload = function() {
    interceptor();
    var htmlData;
    var c = 1;
    document.getElementById("logTitle").innerHTML += " " + obj.fname + " " + obj.lname;
    var usArray = JSON.parse(localStorage.getItem("profileArray"));
    for (let i = 0; i < usArray.length; i++) {
        objNew = JSON.parse(localStorage.getItem(usArray[i]));
        if (objNew.status == "1") {
            htmlData = '<tr><td scope="row">' + c + '</td><td>' + objNew.fname + '</td><td>' + objNew.lname + '</td></tr>';
            document.getElementById("activeData").innerHTML += htmlData;
            c = c + 1;
        }
    }
}

function interceptor() {
    var cnfSession = localStorage.getItem("session@" + uemail);
    if (cnfSession == null) {
        window.location.replace("./index.html");
    }
}