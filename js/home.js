// var url_string = window.location.href;
// var url = new URL(url_string);
// var uemail = url.searchParams.get("email");
var uemail = sessionStorage.getItem("on");
if (sessionStorage.length != 0) {

}
var data = localStorage.getItem(uemail);
var obj = JSON.parse(data);

//logout
function logout() {
    sessionStorage.removeItem("on");
    obj.status = "0";
    // window.alert(obj.status);
    localStorage.setItem(uemail, JSON.stringify(obj));
    window.location.replace("./index.html");
}

//delete users
function deRegister() {
    var cnfMsg = window.confirm("Are you Sure ??\nDo you really want to delete your Profile??");
    // window.alert(cnfMsg);
    if (cnfMsg) {
        sessionStorage.removeItem("on");
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

//on page load
window.onload = function() {
    var cnfSession = sessionStorage.getItem("on");
    var recData = JSON.parse(localStorage.getItem("profileArray"));
    if (cnfSession == null || sessionStorage.length == 0) {
        // sessionStorage.clear();
        for (let i = 0; i < recData.length; i++) {
            var objNewData = JSON.parse(localStorage.getItem(recData[i]));
            if (objNewData.status == "1") {
                objNewData.status = "0";
                localStorage.setItem(recData[i], JSON.stringify(objNewData));
                // window.location.replace("./index.html");
            }
        }
        window.location.replace("./index.html");
        // } else if (cnfSession != null) {
        //     // var nemail = cnfSession.replace("session@", "");
        //     var neWSession = sessionStorage.getItem("session@" + uemail);

        //     // window.alert(nemail);
    } else {
        // debugger;
        var htmlData;
        var c = 1;
        document.getElementById("logTitle").innerHTML += " " + obj.fname + " " + obj.lname;
        var usArray = JSON.parse(localStorage.getItem("profileArray"));
        for (let i = 0; i < usArray.length; i++) {
            var objNew = JSON.parse(localStorage.getItem(usArray[i]));
            if (objNew.status == "1") {
                if (objNew.email != uemail) {
                    htmlData = '<tr><td scope="row">' + c + '</td><td>' + objNew.fname + '</td><td>' + objNew.lname + '</td></tr>';
                    document.getElementById("activeData").innerHTML += htmlData;
                    c = c + 1;
                }
            }
        }
    }

}