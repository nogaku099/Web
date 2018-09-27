function alertCustom(title,mess) {
    BootstrapDialog.show({
        title: title,
        message: mess
    });
}


function alertConfirmCustom(title, mess,yes,no) {
    BootstrapDialog.show({
        title: title,
        message: mess,
        buttons: [{
            label: yes,
            cssClass: 'demo',
            action: function (Itself) {
                alertCustom('bam', 'yes');
            }
        }, {
            label: no,
            action: function (Itself) {
                alertCustom('bam', 'no');
            }
        }]
    });
}

function demo() {
    BootstrapDialog.show({
        title: title,
        message: mess,
        buttons: [{
            label: yes,
            cssClass: 'demo',
            action: function (Itself) {
                alertCustom('bam', 'yes');
            }
        }, {
            label: no,
            action: function (Itself) {
                alertCustom('bam', 'no');
            }
        }]
    });
}

function fonclick() {
    document.getElementById("btn").style.color = "red";
    document.getElementById("btn").style.borderBottom = "solid 2px red";


    var lstsp = "";
    var dong = 1;
    var cot = 0;

    for (var i = 0; i < 7; i++) {

        lstsp += "<div class='row'>";
            lstsp += "<div class='col-xs-3'>";
            lstsp += "</div>";
        lstsp += "</div>";
    }
    document.getElementById('lst').innerHTML = lstsp;
}

function fChonNhomHang(ma) {
    if (ma == '1') {
        $("btnGiayDep").removeClass("active-nhom");
        document.getElementById("btnGiayDep").style.color = "#862b2b";
        document.getElementById("btnGiayDep").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnQuanAo").style.color = "black";
        document.getElementById("btnQuanAo").style.border = "solid 1px gray";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px gray";
    } else if (ma == '2') {
        $("btnGiayDep").removeClass("active-nhom");
        document.getElementById("btnQuanAo").style.color = "#862b2b";
        document.getElementById("btnQuanAo").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px gray";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px gray";
    } else {
        $("btnGiayDep").removeClass("active-nhom");
        document.getElementById("btnNuocHoa").style.color = "#862b2b";
        document.getElementById("btnNuocHoa").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnQuanAo").style.color = "black";
        document.getElementById("btnQuanAo").style.border = "solid 1px gray";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px gray";
    }
}
function fShowDangNhap() {
    if (document.getElementById("hdfDangNhap").value == "0") {
        $("#modalDangNhap").modal();
    } else {
        
    }
}

function fshowgiohang() {
    document.getElementById('hdfMuaHang').value = "1";
    window.location.replace("CartPage.aspx");
}


