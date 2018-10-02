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
    if (ma == 'NHH_001') {
        $("btnDongHo").removeClass("active-nhom");
        document.getElementById("btnDongHo").style.color = "#862b2b";
        document.getElementById("btnDongHo").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnQuanAo").style.color = "black";
        document.getElementById("btnQuanAo").style.border = "solid 1px gray";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px gray";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px gray";

        document.getElementById("btnTuiXach").style.color = "black";
        document.getElementById("btnTuiXach").style.border = "solid 1px gray";

        fHienThiHangHoa(ma);

    } else if (ma == 'NHH_002') {
        $("btnDongHo").removeClass("active-nhom");
        document.getElementById("btnGiayDep").style.color = "#862b2b";
        document.getElementById("btnGiayDep").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnDongHo").style.color = "black";
        document.getElementById("btnDongHo").style.border = "solid 1px gray";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px gray";

        document.getElementById("btnQuanAo").style.color = "black";
        document.getElementById("btnQuanAo").style.border = "solid 1px gray";

        document.getElementById("btnTuiXach").style.color = "black";
        document.getElementById("btnTuiXach").style.border = "solid 1px gray";
    } else if(ma == 'NHH_003') {
        $("btnDongHo").removeClass("active-nhom");
        document.getElementById("btnQuanAo").style.color = "#862b2b";
        document.getElementById("btnQuanAo").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px gray";

        document.getElementById("btnDongHo").style.color = "black";
        document.getElementById("btnDongHo").style.border = "solid 1px gray";

        document.getElementById("btnTuiXach").style.color = "black";
        document.getElementById("btnTuiXach").style.border = "solid 1px gray";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px gray";
    } else if (ma == 'NHH_004') {
        document.getElementById("btnTuiXach").style.color = "#862b2b";
        document.getElementById("btnTuiXach").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px gray";

        document.getElementById("btnDongHo").style.color = "black";
        document.getElementById("btnDongHo").style.border = "solid 1px gray";

        document.getElementById("btnQuanAo").style.color = "black";
        document.getElementById("btnQuanAo").style.border = "solid 1px gray";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px gray";
    } else {
        document.getElementById("btnNuocHoa").style.color = "#862b2b";
        document.getElementById("btnNuocHoa").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px gray";

        document.getElementById("btnDongHo").style.color = "black";
        document.getElementById("btnDongHo").style.border = "solid 1px gray";

        document.getElementById("btnQuanAo").style.color = "black";
        document.getElementById("btnQuanAo").style.border = "solid 1px gray";

        document.getElementById("btnTuiXach").style.color = "black";
        document.getElementById("btnTuiXach").style.border = "solid 1px gray";
    }
}

function fChonSize(size) {
    if (size == "XS") {
        document.getElementById("sizeXS").style.backgroundColor = "orangered";
        document.getElementById("sizeXS").style.color = "white";

        document.getElementById("sizeS").style.backgroundColor = "white";
        document.getElementById("sizeS").style.color = "black";

        document.getElementById("sizeM").style.backgroundColor = "white";
        document.getElementById("sizeM").style.color = "black";

        document.getElementById("sizeL").style.backgroundColor = "white";
        document.getElementById("sizeL").style.color = "black";

        document.getElementById("sizeXL").style.backgroundColor = "white";
        document.getElementById("sizeXL").style.color = "black";

        document.getElementById("sizeXXL").style.backgroundColor = "white";
        document.getElementById("sizeXXL").style.color = "black";

        // save hidden


    } else if (size == "S") {
        document.getElementById("sizeS").style.backgroundColor = "orangered";
        document.getElementById("sizeS").style.color = "white";

        document.getElementById("sizeXS").style.backgroundColor = "white";
        document.getElementById("sizeXS").style.color = "black";

        document.getElementById("sizeM").style.backgroundColor = "white";
        document.getElementById("sizeM").style.color = "black";

        document.getElementById("sizeL").style.backgroundColor = "white";
        document.getElementById("sizeL").style.color = "black";

        document.getElementById("sizeXL").style.backgroundColor = "white";
        document.getElementById("sizeXL").style.color = "black";

        document.getElementById("sizeXXL").style.backgroundColor = "white";
        document.getElementById("sizeXXL").style.color = "black";

    } else if (size == "M") {
        document.getElementById("sizeM").style.backgroundColor = "orangered";
        document.getElementById("sizeM").style.color = "white";

        document.getElementById("sizeS").style.backgroundColor = "white";
        document.getElementById("sizeS").style.color = "black";

        document.getElementById("sizeXS").style.backgroundColor = "white";
        document.getElementById("sizeXS").style.color = "black";

        document.getElementById("sizeL").style.backgroundColor = "white";
        document.getElementById("sizeL").style.color = "black";

        document.getElementById("sizeXL").style.backgroundColor = "white";
        document.getElementById("sizeXL").style.color = "black";

        document.getElementById("sizeXXL").style.backgroundColor = "white";
        document.getElementById("sizeXXL").style.color = "black";

    } else if (size == "L") {
        document.getElementById("sizeL").style.backgroundColor = "orangered";
        document.getElementById("sizeL").style.color = "white";

        document.getElementById("sizeXS").style.backgroundColor = "white";
        document.getElementById("sizeXS").style.color = "black";

        document.getElementById("sizeS").style.backgroundColor = "white";
        document.getElementById("sizeS").style.color = "black";

        document.getElementById("sizeM").style.backgroundColor = "white";
        document.getElementById("sizeM").style.color = "black";

        document.getElementById("sizeXL").style.backgroundColor = "white";
        document.getElementById("sizeXL").style.color = "black";

        document.getElementById("sizeXXL").style.backgroundColor = "white";
        document.getElementById("sizeXXL").style.color = "black";

    } else if (size == "XL") {
        document.getElementById("sizeXL").style.backgroundColor = "orangered";
        document.getElementById("sizeXL").style.color = "white";

        document.getElementById("sizeS").style.backgroundColor = "white";
        document.getElementById("sizeS").style.color = "black";

        document.getElementById("sizeM").style.backgroundColor = "white";
        document.getElementById("sizeM").style.color = "black";

        document.getElementById("sizeL").style.backgroundColor = "white";
        document.getElementById("sizeL").style.color = "black";

        document.getElementById("sizeXS").style.backgroundColor = "white";
        document.getElementById("sizeXS").style.color = "black";

        document.getElementById("sizeXXL").style.backgroundColor = "white";
        document.getElementById("sizeXXL").style.color = "black";
    } else {
        document.getElementById("sizeXXL").style.backgroundColor = "orangered";
        document.getElementById("sizeXXL").style.color = "white";

        document.getElementById("sizeS").style.backgroundColor = "white";
        document.getElementById("sizeS").style.color = "black";

        document.getElementById("sizeM").style.backgroundColor = "white";
        document.getElementById("sizeM").style.color = "black";

        document.getElementById("sizeL").style.backgroundColor = "white";
        document.getElementById("sizeL").style.color = "black";

        document.getElementById("sizeXL").style.backgroundColor = "white";
        document.getElementById("sizeXL").style.color = "black";

        document.getElementById("sizeXS").style.backgroundColor = "white";
        document.getElementById("sizeXS").style.color = "black";
    }
}

function fChonMau(id,mau) {
    if (id == "mau1") {
        document.getElementById("mau1").style.border = "solid 2px green";
        document.getElementById("mau2").style.border = "none";
        document.getElementById("mau3").style.border = "none";
        document.getElementById("mau4").style.border = "none";
        document.getElementById("mau5").style.border = "none";
        document.getElementById("mau6").style.border = "none";

    } else if (id == "mau2") {
        document.getElementById("mau2").style.border = "solid 2px green";
        document.getElementById("mau1").style.border = "none";
        document.getElementById("mau3").style.border = "none";
        document.getElementById("mau4").style.border = "none";
        document.getElementById("mau5").style.border = "none";
        document.getElementById("mau6").style.border = "none";
    } else if (id == "mau3") {
        document.getElementById("mau3").style.border = "solid 2px green";
        document.getElementById("mau2").style.border = "none";
        document.getElementById("mau1").style.border = "none";
        document.getElementById("mau4").style.border = "none";
        document.getElementById("mau5").style.border = "none";
        document.getElementById("mau6").style.border = "none";
    } else if (id == "mau4") {
        document.getElementById("mau4").style.border = "solid 2px green";
        document.getElementById("mau2").style.border = "none";
        document.getElementById("mau3").style.border = "none";
        document.getElementById("mau1").style.border = "none";
        document.getElementById("mau5").style.border = "none";
        document.getElementById("mau6").style.border = "none";
    } else if (id == "mau5") {
        document.getElementById("mau5").style.border = "solid 2px green";
        document.getElementById("mau2").style.border = "none";
        document.getElementById("mau3").style.border = "none";
        document.getElementById("mau4").style.border = "none";
        document.getElementById("mau1").style.border = "none";
        document.getElementById("mau6").style.border = "none";
    } else {
        document.getElementById("mau6").style.border = "solid 2px green";
        document.getElementById("mau2").style.border = "none";
        document.getElementById("mau3").style.border = "none";
        document.getElementById("mau4").style.border = "none";
        document.getElementById("mau5").style.border = "none";
        document.getElementById("mau1").style.border = "none";
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

function fLoadSanPham() {
   
}

function fHienThiHangHoa(manhom) {
    


}


