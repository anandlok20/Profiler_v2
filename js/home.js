var url_string = window.location.href;
// alert("url string" + url_string);
var url = new URL(url_string);
// alert("url" + url);
// var uemail = url.searchParams.get("email");
var hn = JSON.stringify(url).search("home.html");
// alert("hostname" + hn);
var uemail = sessionStorage.getItem("on");
var data = localStorage.getItem(uemail);
// alert(data);
var obj = JSON.parse(data);
// alert(obj);


if (uemail == null) {
    // alert("ssl : " + sessionStorage.length);
    sessionStorage.removeItem("on");
    if (sessionStorage.getItem("on") != null) {
        obj.status = "0";
    }
    // window.alert(obj.status);
    window.location.replace("./index.html");

} else {
    // debugger;
    // var obj12 = localStorage.getItem(uemail);
    alert("object  " + obj);
    // var obj1 = JSON.parse(obj12);
    alert("obj name " + obj.fname);
    var dispHtml = " " + obj.fname + " " + obj.lname;
    document.getElementById("logTitle").innerHTML += dispHtml;
    var htmlData;;
    var c = 1;
    var objNew;
    var usArray = JSON.parse(localStorage.getItem("profileArray"));
    for (let i = 0; i < usArray.length; i++) {
        objNew = JSON.parse(localStorage.getItem(usArray[i]));
        if (objNew.status == "1") {
            if (objNew.email != uemail) {
                htmlData = '<tr><td scope="row">' + c + '</td><td>' + objNew.fname + '</td><td>' + objNew.lname + '</td></tr>';
                document.getElementById("activeData").innerHTML += htmlData;
                c = c + 1;
            }
        }
    }
}

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