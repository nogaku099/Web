
$(document).ready(function () {
    var myVar = setInterval(myTimer, 2000);

    function myTimer() {
        
        var session = "1";
        var bien = "{session:'"+session+"'}";

        $.ajax({
            type: 'POST',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            data : bien,
            url: 'HomePage.aspx/fGetSoLuong',
            success: function (result) {
               
                if (result.d.toString() != "0") {
                    document.getElementById('hdfMuaHang').value = "1";
                    document.getElementById("lblSoLuong").style.display = 'inline-block';
                    document.getElementById("lblSoLuong").innerHTML = result.d;
                    
                } else {
                    document.getElementById('hdfMuaHang').value = "0";
                    document.getElementById("lblSoLuong").style.display = 'none';
                    document.getElementById("lblSoLuong").innerHTML = result.d;
                }
               
            }, error: function (result) {
                alert("ERROR: fGetSoLuong");
            }
        });
    }

    document.getElementsByClassName('cardProductHeader').onmouseover = function () {
        document.getElementById('lblDetail').style.display = 'block';
        alert('a');
    }

    document.getElementsByClassName('cardProductHeader').onmouseout = function () {
        document.getElementById('lblDetail').style.display = 'none';
    }

    document.getElementById('txtTim').addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
            fTimKiem();
        }
    });
});



function alertCustom(title, mess) {
    BootstrapDialog.show({
        title: title,
        message: mess
    });
}


function alertConfirmCustom(title, mess, yes, no) {
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
        document.getElementById("btnQuanAo").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnTuiXach").style.color = "black";
        document.getElementById("btnTuiXach").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        fLoadSanPham(ma,"");

    } else if (ma == 'NHH_002') {
        $("btnDongHo").removeClass("active-nhom");
        document.getElementById("btnGiayDep").style.color = "#862b2b";
        document.getElementById("btnGiayDep").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnDongHo").style.color = "black";
        document.getElementById("btnDongHo").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnQuanAo").style.color = "black";
        document.getElementById("btnQuanAo").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnTuiXach").style.color = "black";
        document.getElementById("btnTuiXach").style.border = "solid 1px rgba(95, 93, 93, 0.29)";
        fLoadSanPham(ma, "");

    } else if (ma == 'NHH_003') {
        $("btnDongHo").removeClass("active-nhom");
        document.getElementById("btnQuanAo").style.color = "#862b2b";
        document.getElementById("btnQuanAo").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnDongHo").style.color = "black";
        document.getElementById("btnDongHo").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnTuiXach").style.color = "black";
        document.getElementById("btnTuiXach").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px rgba(95, 93, 93, 0.29)";
        fLoadSanPham(ma, "");
    } else if (ma == 'NHH_004') {
        document.getElementById("btnTuiXach").style.color = "#862b2b";
        document.getElementById("btnTuiXach").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnDongHo").style.color = "black";
        document.getElementById("btnDongHo").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnQuanAo").style.color = "black";
        document.getElementById("btnQuanAo").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnNuocHoa").style.color = "black";
        document.getElementById("btnNuocHoa").style.border = "solid 1px rgba(95, 93, 93, 0.29)";
        fLoadSanPham(ma, "");
    } else {
        document.getElementById("btnNuocHoa").style.color = "#862b2b";
        document.getElementById("btnNuocHoa").style.borderBottom = "solid 3px #862b2b";

        document.getElementById("btnGiayDep").style.color = "black";
        document.getElementById("btnGiayDep").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnDongHo").style.color = "black";
        document.getElementById("btnDongHo").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnQuanAo").style.color = "black";
        document.getElementById("btnQuanAo").style.border = "solid 1px rgba(95, 93, 93, 0.29)";

        document.getElementById("btnTuiXach").style.color = "black";
        document.getElementById("btnTuiXach").style.border = "solid 1px rgba(95, 93, 93, 0.29)";
        fLoadSanPham(ma, "");
    }
}

function fChonSize(size, mahang) {

        document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("color_" + mahang).innerHTML = "";

    if (size == "XS") {
        document.getElementById("sizeXS" + "_" + mahang).style.backgroundColor = "orangered";
        document.getElementById("sizeXS" + "_" + mahang).style.color = "white";

        document.getElementById("sizeS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeS" + "_" + mahang).style.color = "black";

        document.getElementById("sizeM" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeM" + "_" + mahang).style.color = "black";

        document.getElementById("sizeL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXXL" + "_" + mahang).style.color = "black";

        // save hidden
        document.getElementById("size_" + mahang).innerHTML = "XS";
        

    } else if (size == "S") {
        document.getElementById("sizeS" + "_" + mahang).style.backgroundColor = "orangered";
        document.getElementById("sizeS" + "_" + mahang).style.color = "white";

        document.getElementById("sizeXS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXS" + "_" + mahang).style.color = "black";

        document.getElementById("sizeM" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeM" + "_" + mahang).style.color = "black";

        document.getElementById("sizeL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXXL" + "_" + mahang).style.color = "black";

        document.getElementById("size_" + mahang).innerHTML = "S";

      

    } else if (size == "M") {
        document.getElementById("sizeM" + "_" + mahang).style.backgroundColor = "orangered";
        document.getElementById("sizeM" + "_" + mahang).style.color = "white";

        document.getElementById("sizeS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeS" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXS" + "_" + mahang).style.color = "black";

        document.getElementById("sizeL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXXL" + "_" + mahang).style.color = "black";

        document.getElementById("size_" + mahang).innerHTML = "M";
       

    } else if (size == "L") {
        document.getElementById("sizeL" + "_" + mahang).style.backgroundColor = "orangered";
        document.getElementById("sizeL" + "_" + mahang).style.color = "white";

        document.getElementById("sizeXS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXS" + "_" + mahang).style.color = "black";

        document.getElementById("sizeS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeS" + "_" + mahang).style.color = "black";

        document.getElementById("sizeM" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeM" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXXL" + "_" + mahang).style.color = "black";

        document.getElementById("size_" + mahang).innerHTML = "L";
        

    } else if (size == "XL") {
        document.getElementById("sizeXL" + "_" + mahang).style.backgroundColor = "orangered";
        document.getElementById("sizeXL" + "_" + mahang).style.color = "white";

        document.getElementById("sizeS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeS" + "_" + mahang).style.color = "black";

        document.getElementById("sizeM" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeM" + "_" + mahang).style.color = "black";

        document.getElementById("sizeL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXS" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXXL" + "_" + mahang).style.color = "black";

        document.getElementById("size_" + mahang).innerHTML = "XL";
       
    } else {
        document.getElementById("sizeXXL" + "_" + mahang).style.backgroundColor = "orangered";
        document.getElementById("sizeXXL" + "_" + mahang).style.color = "white";

        document.getElementById("sizeS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeS" + "_" + mahang).style.color = "black";

        document.getElementById("sizeM" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeM" + "_" + mahang).style.color = "black";

        document.getElementById("sizeL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXL" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXL" + "_" + mahang).style.color = "black";

        document.getElementById("sizeXS" + "_" + mahang).style.backgroundColor = "white";
        document.getElementById("sizeXS" + "_" + mahang).style.color = "black";

        document.getElementById("size_" + mahang).innerHTML = "XXL";
      
    }
    var type = 'master';
    fLoadMau(mahang, size, type);
}

function fChooseFlavour(index, fla, mahang, type) {
    var t = type;
    if (type == "master") {
        t = "";
    } else {
        t = "detail_";
    }
    switch (index) {
        case "1":
           
            document.getElementById("flavour_" + t + index + "_" + mahang).style.background = "green";
            document.getElementById("flavour_" + t + index + "_" + mahang).style.color = "white";


            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.color = "black";

            break;
        case "2":
            document.getElementById("flavour_" + t + index + "_" + mahang).style.background = "green";
            document.getElementById("flavour_" + t + index + "_" + mahang).style.color = "white";

            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.color = "black";
            break;
        case "3":
            document.getElementById("flavour_" + t + index + "_" + mahang).style.background = "green";
            document.getElementById("flavour_" + t + index + "_" + mahang).style.color = "white";

            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.color = "black";
            break;
        case "4":
            document.getElementById("flavour_" + t + index + "_" + mahang).style.background = "green";
            document.getElementById("flavour_" + t + index + "_" + mahang).style.color = "white";

            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.color = "black";
            break;
        case "5":
            document.getElementById("flavour_" + t + index + "_" + mahang).style.background = "green";
            document.getElementById("flavour_" + t + index + "_" + mahang).style.color = "white";

            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "6" + "_" + mahang).style.color = "black";
            break;
        case "6":
            document.getElementById("flavour_" + t + index + "_" + mahang).style.background = "green";
            document.getElementById("flavour_" + t + index + "_" + mahang).style.color = "white";

            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "2" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "3" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "4" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "5" + "_" + mahang).style.color = "black";
            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.background = "white";
            document.getElementById("flavour_" + t + "1" + "_" + mahang).style.color = "black";
            break;
    }
    if (type == "master") {
        document.getElementById("flavour_" + mahang).innerHTML = fla;
    } else {
        document.getElementById("flavour_detail_" + mahang).innerHTML = fla;
    }
    
    fLoadCapacity(mahang, fla, type);
    document.getElementById("capacity_" + mahang).innerHTML = "";
    document.getElementById("capacity_detail_" + mahang).innerHTML = "";
}

function fChonMau(id, mau, mahang, type) {
    // alert(id + "" + mahang + "" + mau);
    if (!mau.includes('#') && mau.includes('rgb')) {
        mau = rgbToHex(mau);
    }
    if (type == "master") {
        //alert(id + "" + mahang + "" + mau);
        if (id == "mau1") {

            //alert(id + "" + mahang+""+mau);


            document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
            document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";

            document.getElementById("color_" + mahang).innerHTML = mau;

        } else if (id == "mau2") {
            document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
            document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("color_" + mahang).innerHTML = mau;
        } else if (id == "mau3") {
            document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
            document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("color_" + mahang).innerHTML = mau;
        } else if (id == "mau4") {
            document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
            document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("color_" + mahang).innerHTML = mau;
        } else if (id == "mau5") {
            document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
            document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("color_" + mahang).innerHTML = mau;
        } else {
            document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
            document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
            document.getElementById("color_" + mahang).innerHTML = mau;
        }
        
    } else {
       // alert(id + "" + mahang + "" + mau);
        if (id == "M1") {
            document.getElementById(mahang + "_" + id + "_check").style.display = 'inline';

            document.getElementById(mahang + "_" + "M2" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M3" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M4" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M5" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M6" + "_check").style.display = 'none';
        } else if (id == "M2") {
            document.getElementById(mahang + "_" + id + "_check").style.display = 'inline';

            document.getElementById(mahang + "_" + "M1" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M3" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M4" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M5" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M6" + "_check").style.display = 'none';
        } else if (id == "M3") {
            document.getElementById(mahang + "_" + id + "_check").style.display = 'inline';

            document.getElementById(mahang + "_" + "M2" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M1" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M4" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M5" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M6" + "_check").style.display = 'none';
        } else if (id == "M4") {
            document.getElementById(mahang + "_" + id + "_check").style.display = 'inline';

            document.getElementById(mahang + "_" + "M2" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M3" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M1" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M5" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M6" + "_check").style.display = 'none';
        } else if (id == "M5") {
            document.getElementById(mahang + "_" + id + "_check").style.display = 'inline';

            document.getElementById(mahang + "_" + "M2" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M3" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M4" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M1" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M6" + "_check").style.display = 'none';
        } else {
            document.getElementById(mahang + "_" + id + "_check").style.display = 'inline';

            document.getElementById(mahang + "_" + "M2" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M3" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M4" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M5" + "_check").style.display = 'none';
            document.getElementById(mahang + "_" + "M1" + "_check").style.display = 'none';
        }
        document.getElementById('color_detail_' + mahang).innerHTML = mau;
    }
    
    fLoadPrice(mahang, document.getElementById("mau1_"+mahang).innerHTML,mau,"","", type);
}

var rgbToHex = function (rgb) {

    var r;
    var g;
    var b;
    var arr;
    arr = rgb.substring(4, rgb.length - 1)
             .replace(/ /g, '')
             .split(',');
    

    var hexr = Number(arr[0]).toString(16);
    if (hexr.length < 2) {
        hexr = "0" + hexr;
    }

    var hexg = Number(arr[1]).toString(16);
    if (hexg.length < 2) {
        hexg = "0" + hexg;
    }

    var hexb = Number(arr[2]).toString(16);
    if (hexb.length < 2) {
        hexb = "0" + hexb;
    }
   // alert("#"+hexr + hexg + hexb);
    return "#" + hexr + hexg + hexb;
};

function fLoadPrice(productID,idcolor, color,idcapa,capa, type) {

    var size, variable,fla;
    if(idcolor != ""){
         size = document.getElementById("size_" + productID).innerHTML;
        if (type == "detail") {
            size = document.getElementById("size_detail_" + productID).innerHTML;
        }
    } else {
        fla = document.getElementById("flavour_" + productID).innerHTML;
        if (type == "detail") {
            fla = document.getElementById("flavour_detail_" + productID).innerHTML;
        }

    }
    variable = "{productID:'" + productID + "'";
    variable += ",size:'" + size + "'";
    variable += ",color:'" + color + "'";
    variable += ",fla:'"+fla+"'";
    variable += ",capa:'" + capa + "'}";
    
    $.ajax({
        type :'POST',
        contentType : 'application/json;charset=utf-8',
        dataType: 'json',
        data: variable,
        url: 'HomePage.aspx/fLoadPrice',
        success: function (result) {

            if (result.d != "0") {
                if (type == "master") {
                    document.getElementById("btnMuaHang-" + productID + "-" + "size" + "-" + "color" + "-" + "capacity" + "-" + "flavour").innerHTML = number_format(result.d, 0) + " VND";

                    
                } else {
                    //if (idcolor != "") {
                        document.getElementById("lblDetail_" + productID + "_" + "size" + "_" + "color"+"_"+"capacity"+"_"+"flavour").innerHTML = number_format(result.d, 0);
                   // } else {
                   //     document.getElementById("lblDetail_" + productID + "_" + "size" + "_" + "color" + "_" + "capacity" + "_" + "flavour").innerHTML = number_format(result.d, 0);
                   // }
                    
                }
            } else {
                if (type == "master") {

                    document.getElementById("btnMuaHang-" + productID + "-" + "size" + "-" + "color" + "-" + "capacity" + "-" + "flavour").innerHTML = number_format(result.d, 0) + " VND";
                } else {

                    //if (idcolor != "") {
                        document.getElementById("lblDetail_" + productID + "_" + "size" + "_" + "color" + "_" + "capacity" + "_" + "flavour").innerHTML = number_format(result.d, 0);
                    //} else {
                     //   document.getElementById("lblDetail_" + productID + "_" + fla + "_" + idcapa).innerHTML = number_format(result.d, 0);
                    //}
                }
            }
            
        },
        error: function (result) {
            alert("ERROR: fLoadPrice");
        }
    });

    
}

function fLoadCapacity(productID, fla,type) {
    var bien = "{productID:'" + productID + "'";
    bien += ",fla:'" + fla + "'}";

    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        data:bien,
        url:'HomePage.aspx/fLoadCapacity',
        success : function(result){
            if (result.d.length > 0) {
                if (type == "master") {
                    for (j = 0; j < result.d.length; j++) {
                        
                        fResetCapacity(productID);

                        document.getElementById("col_capacity" + (j + 1) + "_" + productID).style.display = 'inline';
                        document.getElementById("capacity" + (j + 1) + "_" + productID).innerHTML = result.d[j];
                    }
                   
                } else {
                    for (j = 0 ; j < result.d.length; j++) {
                        document.getElementById("col_capacity_detail_" + (j + 1) + "_" + productID).style.display = 'inline';
                        var append = "<i class='fa fa-check animated rotateIn' id='" + "col_capacity_detail_" + (j + 1) + "_" + productID +"_check"+ "' style='display:none; font-size: 20px;color: green; margin-left: -2px;position:absolute'></i>";
                        document.getElementById("col_capacity_detail_" + (j + 1) + "_" + productID).innerHTML = result.d[j]+append;
                    }
                    
                }
            }
        },error:function(result){
            alert("ERROR: fLoadCapacity");
        }
    });

}

function fChooseCapcityDetail(id, productID,val) {
    document.getElementById(id).style.display = 'inline';
    document.getElementById("capacity_detail_" + productID).innerHTML = document.getElementById(val).textContent;

    fLoadPrice(productID, "", "", "lblDetail_" + productID + "_size_color_capacity_flavour", document.getElementById(val).textContent, "detail");
}

function fResetCapacity(productID){
    for (i = 0 ; i < 6; i++) {
        document.getElementById("capacity" + (i + 1) + "_" + productID).style.backgroundColor = "white";
    }
}

function fLoadMau(mahang, size,type) {

    var bien = "{mahang:'" + mahang + "'";
    bien += ",size:'" + size + "'}";
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        data:bien,
        url: 'HomePage.aspx/fLoadMau',
        success: function (result) {
            if (type == "detail") {
                fResetColorDetail(mahang);
            }
           
            if (result.d.length > 0) {
                try {
                    if (type == "master") {
                       
                        for (i = 0 ; i < result.d.length; i++) {
                            
                            // alert(result.d[i]);
                            document.getElementById("mau" + (i + 1) + "_" + mahang).style.backgroundColor = result.d[i];
                            document.getElementById("col_mau" + (i + 1) + "_" + mahang).style.display = 'inline';
                            document.getElementById("mau" + (i + 1) + "_" + mahang).innerHTML = result.d[i];
                            //var id = "mau" + (i+1) + "";
                           
                            //var mau = result.d[i];
                            //document.getElementById(id + "_" + mahang).onclick = function () { fChonMau(id, mau, mahang,type) };

                        }
                    } else {

                        

                        for (j = 0 ; j < result.d.length; j++) {
                            document.getElementById(mahang + "_M" + (j + 1)).style.backgroundColor = result.d[j];
                            document.getElementById(mahang + "_M" + (j + 1)).style.cursor = 'pointer';
                            document.getElementById(mahang + "_M" + (j + 1)).style.border = 'none';
                            document.getElementById(mahang + "_M" + (j + 1)).style.boxShadow = '0px 0px 10px 2px rgba(82, 66, 57, 0.69)';
                           // document.getElementById(mahang + "_M" + (i + 1)+"_check").style.display = 'inline';
                            var id = "";
                            //var mau = result.d[j];
                            switch ((j + 1)) {
                                case 1:
                                    id = "_M1";
                                    document.getElementById(mahang + id).onclick = function () { fChonMau("M1", document.getElementById(mahang + "_M1").style.backgroundColor, mahang, type) };
                                    break;
                                case 2:
                                    id = "_M2";
                                    document.getElementById(mahang + id).onclick = function () { fChonMau("M2", document.getElementById(mahang + "_M2").style.backgroundColor, mahang, type) };
                                    break;
                                case 3:
                                    id = "_M3";
                                    document.getElementById(mahang + id).onclick = function () { fChonMau("M3", document.getElementById(mahang + "_M3").style.backgroundColor, mahang, type) };
                                    break;
                                case 4:
                                    id = "_M4";
                                    document.getElementById(mahang + id).onclick = function () { fChonMau("M4", document.getElementById(mahang + "_M4").style.backgroundColor, mahang, type) };
                                    break;
                                case 5:
                                    id = "_M5";
                                    document.getElementById(mahang + id).onclick = function () { fChonMau("M5", document.getElementById(mahang + "_M5").style.backgroundColor, mahang, type) };
                                    break;
                                case 6:
                                    id = "_M6";
                                    document.getElementById(mahang + id).onclick = function () { fChonMau("M6", document.getElementById(mahang + "_M6").style.backgroundColor, mahang, type) };
                                    break;
                            }
                            
                        }
                    }
                   
                } catch (e) {
                    alert(e.message);
                }
            }
        }, error: function (result) {

        }
    });
}

function fShowDangNhap() {
    if (document.getElementById("hdfDangNhap").value == "0") {
        $("#modalDangNhap").modal();
    } else {

    }
}
function ToJavaScriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var dt = new Date(parseFloat(results[1]));
    return dt.getDate() +"/" +(dt.getMonth() + 1) + "/" + dt.getFullYear();
}
function fShowDangXuat() {

    var fullname = "";
    var sex = "";
    var birthday = "";
    var phone = "";
    var email = "";

    var variable = "{cusID:'KH_1'}";
    $.ajax({
        type: 'POST',
        contentType : 'application/json;charset=utf-8',
        dataType: 'json',
        data: variable,
        url: 'HomePage.aspx/fShowDangXuat',
        success: function (result) {
            fullname = result.d[0].TENKHACHHANG;
            sex = result.d[0].GIOITINH;
            birthday =  result.d[0].NGAYSINH;
            phone = result.d[0].SODIENTHOAI;
            email = result.d[0].EMAIL;

            //alert(fullname + "-" + sex + "-" + ToJavaScriptDate(birthday) + "-" + phone + "-" + email);
            
            document.getElementById("txtFullName").value = fullname;
            if (sex) {
                document.getElementById("radMale").checked = true;
            } else {
                document.getElementById("radFeMale").checked = true;
            }
            document.getElementById("lblDate").innerHTML = ToJavaScriptDate(birthday);
            document.getElementById("txtDate").value = ToJavaScriptDate(birthday);
            document.getElementById("txtPhone").value = phone;
            document.getElementById("txtEmail").value = email;

            $("#modalDangXuat").modal();
        }, error: function (result) {
            alert("ERROR: fShowDangXuat"+result.statusText);
        }

    });
}

function fUpdateInfo() {
    var fullname = document.getElementById("txtFullName").value;
    var sex;
    if (document.getElementById("radMale").checked == true) {
        sex = true;
    } else {
        sex = false;
    }
    var birthday = document.getElementById("txtDate").value;
    var phone = document.getElementById("txtPhone").value;
    var email = document.getElementById("txtEmail").value;


    //alert(fullname + "-" + sex + "-" + birthday + "-" + phone + "-" + email);
    if (fullname == "" || birthday == "" || phone == "" || email == "") {
        alertCustom("Warning", "Let us know more about you!");

    } else {
        var variable = "{fullname:'"+fullname+"'";
        variable += ",sex:'"+sex+"'";
        variable += ",birthday:'"+birthday+"'";
        variable += ",phone:'"+phone+"'";
        variable += ",email:'"+email+"'}";
        $.ajax({
            type : 'POST',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            data:variable,
            url: 'HomePage.aspx/fUpdateInfo',
            success: function (result) {
                if (result.d == "OK") {
                    alertCustom("WEBSALE:", "Update successfully");
                } else {
                    alertCustom("WEBSALE:", "Update failed");
                }
            }, error: function (result) {
                alert("ERROR: fUpdateInfo");
            }
        });
    }
}

function fshowgiohang() {

    if (document.getElementById('hdfMuaHang').value == "1") {
        window.location.replace("CartPage.aspx");
    } else {
        alertCustom("Thong bao", "Gio hang dang trong");
    }
}

function fLoadSanPham(manhom,text) {
    //alert(manhom);
        document.getElementById("pnlSanPham").innerHTML = "";
        var lstDanhSachSanPham = "";
        var arrSize = new Array(0, 0, 0, 0, 0, 0); // XS,S,M,L,XL,XXL
        var arrColor = new Array("0", "0", "0", "0", "0", "0");
        var arrCapacity = new Array("0", "0", "0", "0", "0", "0");
        var arrFlavour = new Array("0", "0", "0", "0", "0", "0");
        var arrlst;
        
        
        //var manhom = "NHH_001";
        var bien = "{manhom:'" + manhom + "'";
        bien += ",text:'" + text + "'}";

        $.ajax({
            type: 'POST',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            data: bien,
            url: 'HomePage.aspx/fLoadSanPham',
            success: function (result) {
                if (result.d == null) {
                    return;
                }
                if (result.d.length > 0) {
                    arrlst = new Array(result.d.length);
                    for (var i = 0 ; i < result.d.length; i++) {
                       
                        // define size,color,capacity and flavour
                        for (var j = 0; j < result.d.length; j++) {

                            if (result.d[j].MASANPHAM == result.d[i].MASANPHAM) {
                                switch (result.d[j].SIZE) {
                                    case "XS":
                                        arrSize[0] = 1;
                                        break;

                                    case "S":
                                        arrSize[1] = 1;
                                        break;

                                    case "M":
                                        arrSize[2] = 1;
                                        break;

                                    case "L":
                                        arrSize[3] = 1;
                                        break;

                                    case "XL":
                                        arrSize[4] = 1;
                                        break;

                                    case "XXL":
                                        arrSize[5] = 1;
                                        break;
                                }
                                var addColor = true;
                                var addCapacity = true;
                                var addFlavour = true;
                                for (k = 0; k < arrColor.length; k++) {
                                    if (arrColor[k] == result.d[j].MAU) {
                                        addColor = false;
                                        break;
                                    }
                                }

                                for (k = 0; k < arrCapacity.length; k++) {
                                    if (arrCapacity[k] == result.d[j].DUNGTICH) {
                                        addCapacity = false;
                                        break;
                                    }
                                }

                                for (k = 0; k < arrFlavour.length; k++) {
                                    if (arrFlavour[k] == result.d[j].MUIHUONG) {
                                        addFlavour = false;
                                        break;
                                    }
                                }

                                if (addColor) {
                                    for (l = 0; l < arrColor.length; l++) {
                                        if (arrColor[l] == "0") {
                                           // alert(result.d[j].MAU);
                                            arrColor[l] = result.d[j].MAU;

                                            break;
                                        }
                                    }
                                }

                                if (addCapacity) {
                                    for (l = 0; l < arrCapacity.length; l++) {
                                        if (arrCapacity[l] == "0") {
                                            // alert(result.d[j].MAU);
                                            arrCapacity[l] = result.d[j].DUNGTICH;
                                            break;
                                        }
                                    }
                                }

                                if (addFlavour) {
                                    for (l = 0; l < arrFlavour.length; l++) {
                                        if (arrFlavour[l] == "0") {
                                            // alert(result.d[j].MAU);
                                            arrFlavour[l] = result.d[j].MUIHUONG;

                                            break;
                                        }
                                    }
                                }


                            }
                        }
                        //
                        var addSP = true;
                        for (var z = 0 ; z < arrlst.length; z++) {
                            if (arrlst[z] == result.d[i].MASANPHAM) {
                                addSP = false;
                                break;
                            }
                        }
                        var folderName = "DONGHO";
                        switch (manhom) {
                            case "NHH_001":
                                folderName = "DONGHO";
                                break;

                            case "NHH_002":
                                folderName = "GIAYDEP";
                                break;

                            case "NHH_003":
                                folderName = "QUANAO";
                                break;

                            case "NHH_004":
                                folderName = "TUIXACH";
                                break;

                            case "NHH_005":
                                folderName = "NUOCHOA";
                                break;

                            case "NHH_006":
                                folderName = "KHAC";
                                break;

                            case "":
                                folderName = "ALL";
                                break;
                          
                        }
                        if (addSP) {
                            arrlst.push(result.d[i].MASANPHAM);
                            lstDanhSachSanPham += "<div class='col-xs-2 productCard animated bounceIn'>";
                            lstDanhSachSanPham += "<div class='row cardProductHeader' onclick='fLoadDetail("+'"'+result.d[i].MASANPHAM+'"'+")'>";
                            lstDanhSachSanPham += "<img src='../IMAGES/" + folderName + "/" + result.d[i].MASANPHAM + ".png' class='productImage'/>";
                            lstDanhSachSanPham += "<label id='lblDetail' style='display:none;'>Click for more detail</label>";
                            lstDanhSachSanPham += "</div>";

                            lstDanhSachSanPham += "<div class='row cardProductBody'>";
                            lstDanhSachSanPham += "<div class='row ProductName'>";
                            lstDanhSachSanPham += "<label style='width:100%;font-size:18px;white-space:pre-wrap;'>" + result.d[i].TENSANPHAM + "</label>";
                            lstDanhSachSanPham += "</div>";

                            lstDanhSachSanPham += " <hr style='margin-top:0px;margin-bottom:0px;margin-left:20px;margin-right:20px;'/>";
                            if (manhom == "NHH_005") {
                                lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold'>Flavour</div>";
                            } else {
                                if (manhom == "") {
                                    if (result.d[i].LOAI == "1") {
                                        lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold'>Size</div>";
                                    } else {
                                        lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold'>Flavour</div>";
                                    }
                                } else {
                                    lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold'>Size</div>";
                                }
                           }
                            

                            
                            if (manhom == "NHH_005") {
                                lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;overflow-y:scroll;height:41px;'>";
                                for (j = 0 ; j < arrFlavour.length; j++) {
                                    if (arrFlavour[j] != "0") {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;width:100%;border:solid 1px gray;'>";
                                        lstDanhSachSanPham += "<label id='flavour_" + (j+1) + "_" + result.d[i].MASANPHAM + "'" + " class='productFlavour' onclick='fChooseFlavour(" +'"'+(j+1)+'"'+","+ '"' + arrFlavour[j] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' +","+'"'+"master"+'"'+ ");'>" + arrFlavour[j] + "</label>";
                                        lstDanhSachSanPham += " </div>";
                                    } else {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;width:100%;border:solid 1px gray;cursor:not-allowed;display:none;'>";
                                        lstDanhSachSanPham += "<label id='flavour_" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " class='productFlavour'>" + " " + "</label>";
                                        lstDanhSachSanPham += " </div>";
                                    }
                                }
                               
                            } else {

                                if (manhom == "") {
                                    if (result.d[i].LOAI == "1") {
                                        lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;'>";
                                        if (arrSize[0] == 1) {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                            lstDanhSachSanPham += "<label id='sizeXS_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"XS"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>XS</label>";
                                            lstDanhSachSanPham += " </div>";
                                        } else {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                            lstDanhSachSanPham += "<label id='sizeXS_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>XS</label>";
                                            lstDanhSachSanPham += " </div>";
                                        }


                                        if (arrSize[1] == 1) {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:pointer;'>";
                                            lstDanhSachSanPham += "<label id='sizeS_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"S"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>S</label>";
                                            lstDanhSachSanPham += " </div>";
                                        } else {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:not-allowed;'>";
                                            lstDanhSachSanPham += "<label id='sizeS_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>S</label>";
                                            lstDanhSachSanPham += " </div>";
                                        }

                                        if (arrSize[2] == 1) {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:pointer;'>";
                                            lstDanhSachSanPham += "<label id='sizeM_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"M"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>M</label>";
                                            lstDanhSachSanPham += " </div>";
                                        } else {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:not-allowed;'>";
                                            lstDanhSachSanPham += "<label id='sizeM_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>M</label>";
                                            lstDanhSachSanPham += " </div>";
                                        }

                                        if (arrSize[3] == 1) {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:pointer;'>";
                                            lstDanhSachSanPham += "<label id='sizeL_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"L"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>L</label>";
                                            lstDanhSachSanPham += " </div>";
                                        } else {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:not-allowed;'>";
                                            lstDanhSachSanPham += "<label id='sizeL_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>L</label>";
                                            lstDanhSachSanPham += " </div>";
                                        }

                                        if (arrSize[4] == 1) {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:pointer;'>";
                                            lstDanhSachSanPham += "<label id='sizeXL_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"XL"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>XL</label>";
                                            lstDanhSachSanPham += " </div>";
                                        } else {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:not-allowed;'>";
                                            lstDanhSachSanPham += "<label id='sizeXL_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>XL</label>";
                                            lstDanhSachSanPham += " </div>";
                                        }


                                        if (arrSize[5] == 1) {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:pointer;'>";
                                            lstDanhSachSanPham += "<label id='sizeXXL_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"XXL"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>XXL</label>";
                                            lstDanhSachSanPham += " </div>";
                                        } else {
                                            lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;cursor:not-allowed;'>";
                                            lstDanhSachSanPham += "<label id='sizeXXL_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>XXL</label>";
                                            lstDanhSachSanPham += " </div>";
                                        }

                                    } else {
                                        lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;overflow-y:scroll;height:41px;'>";
                                        for (j = 0 ; j < arrFlavour.length; j++) {
                                            if (arrFlavour[j] != "0") {
                                                lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;width:100%;border:solid 1px gray;'>";
                                                lstDanhSachSanPham += "<label id='flavour_" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " class='productFlavour' onclick='fChooseFlavour(" + '"' + (j + 1) + '"' + "," + '"' + arrFlavour[j] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + "," + '"' + "master" + '"' + ");'>" + arrFlavour[j] + "</label>";
                                                lstDanhSachSanPham += " </div>";
                                            } else {
                                                lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;width:100%;border:solid 1px gray;cursor:not-allowed;display:none;'>";
                                                lstDanhSachSanPham += "<label id='flavour_" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " class='productFlavour'>" + " " + "</label>";
                                                lstDanhSachSanPham += " </div>";
                                            }
                                        }
                                    }
                                } else {
                                    lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;'>";
                                    if (arrSize[0] == 1) {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeXS_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"XS"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>XS</label>";
                                        lstDanhSachSanPham += " </div>";
                                    } else {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeXS_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>XS</label>";
                                        lstDanhSachSanPham += " </div>";
                                    }


                                    if (arrSize[1] == 1) {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeS_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"S"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>S</label>";
                                        lstDanhSachSanPham += " </div>";
                                    } else {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeS_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>S</label>";
                                        lstDanhSachSanPham += " </div>";
                                    }

                                    if (arrSize[2] == 1) {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeM_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"M"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>M</label>";
                                        lstDanhSachSanPham += " </div>";
                                    } else {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeM_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>M</label>";
                                        lstDanhSachSanPham += " </div>";
                                    }

                                    if (arrSize[3] == 1) {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeL_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"L"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>L</label>";
                                        lstDanhSachSanPham += " </div>";
                                    } else {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeL_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>L</label>";
                                        lstDanhSachSanPham += " </div>";
                                    }

                                    if (arrSize[4] == 1) {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeXL_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"XL"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>XL</label>";
                                        lstDanhSachSanPham += " </div>";
                                    } else {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeXL_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>XL</label>";
                                        lstDanhSachSanPham += " </div>";
                                    }


                                    if (arrSize[5] == 1) {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeXXL_" + result.d[i].MASANPHAM + "'" + " class='productSize' onclick='fChonSize(" + '"XXL"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>XXL</label>";
                                        lstDanhSachSanPham += " </div>";
                                    } else {
                                        lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;'>";
                                        lstDanhSachSanPham += "<label id='sizeXXL_" + result.d[i].MASANPHAM + "'" + " class='productSize' style='background-color:gray;'>XXL</label>";
                                        lstDanhSachSanPham += " </div>";
                                    }
                                }
                                
                            }
                            lstDanhSachSanPham += "</div>";
                            if (manhom == "NHH_005") {
                                lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold;'>Capacity (ml)</div>";
                            } else {
                                if (manhom == "") {
                                    if (result.d[i].LOAI == "1") {
                                        lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold;'>Color</div>";
                                    } else {
                                        lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold;'>Capacity (ml)</div>";
                                    }
                                } else {
                                    lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold;'>Color</div>";
                                }
                               
                            }
                            

                            lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;'>";

                                
                            if (manhom == "NHH_005") {
                                for (j = 0 ; j < arrCapacity.length; j++) {
                                    lstDanhSachSanPham += "<div id='col_capacity" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:1px;margin-bottom:-10px;display:none;cursor:pointer;border: solid 1px gray;border-radius:5px;'>";
                                    lstDanhSachSanPham += "<label id='capacity" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " style='margin-bottom: -10px;cursor:pointer;width:100%;' onclick='fChooseCapacity(" + '"capacity' + (j + 1) + '"' + "," + '"' + arrCapacity[j] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + "," + '"master"' + ");'>" + arrCapacity[j] + "</label>";
                                    lstDanhSachSanPham += "</div>";
                                }
                            } else {

                                if (manhom == "") {
                                    if (result.d[i].LOAI == "1") {
                                        for (j = 0 ; j < arrColor.length; j++) {
                                            lstDanhSachSanPham += "<div id='col_mau" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;display:none;'>";
                                            lstDanhSachSanPham += "<label id='mau" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[j] + ";' onclick='fChonMau(" + '"mau' + (j + 1) + '"' + "," + '"' + arrColor[j] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + "," + '"master"' + ");'>" + arrColor[j] + "</label>";
                                            lstDanhSachSanPham += "</div>";
                                        }
                                    } else {
                                        for (j = 0 ; j < arrCapacity.length; j++) {
                                            lstDanhSachSanPham += "<div id='col_capacity" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:1px;margin-bottom:-10px;display:none;cursor:pointer;border: solid 1px gray;border-radius:5px;'>";
                                            lstDanhSachSanPham += "<label id='capacity" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " style='margin-bottom: -10px;cursor:pointer;width:100%;' onclick='fChooseCapacity(" + '"capacity' + (j + 1) + '"' + "," + '"' + arrCapacity[j] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + "," + '"master"' + ");'>" + arrCapacity[j] + "</label>";
                                            lstDanhSachSanPham += "</div>";
                                        }
                                    }
                                } else {
                                    for (j = 0 ; j < arrColor.length; j++) {
                                        lstDanhSachSanPham += "<div id='col_mau" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;display:none;'>";
                                        lstDanhSachSanPham += "<label id='mau" + (j + 1) + "_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[j] + ";' onclick='fChonMau(" + '"mau' + (j + 1) + '"' + "," + '"' + arrColor[j] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + "," + '"master"' + ");'>" + arrColor[j] + "</label>";
                                        lstDanhSachSanPham += "</div>";
                                    }
                                }
                               
                            }
                               
                               
                           
                            lstDanhSachSanPham += "</div>";

                            lstDanhSachSanPham += " <div class='row'>";
                            lstDanhSachSanPham += "<button type='button' id='btnMuaHang-" + result.d[i].MASANPHAM + "-" + "size"+"-"+"color"+"-"+"capacity" +"-"+"flavour"+ "' onclick='fMuaHang("+'"'+result.d[i].MASANPHAM+'"'+","+'"'+result.d[i].SIZE+'"'+","+'"'+result.d[i].MAU+'"'+","+'"'+result.d[i].DUNGTICH+'"'+","+'"'+result.d[i].MUIHUONG+'"'+","+'"'+"master"+'"'+ ");' class='btn btn-success productPrice animated bounceInLeft' >" +  number_format(result.d[i].GIA1,0) + " VND</button>";
                            // hidden input
                            lstDanhSachSanPham += "<label style='display:none;' id='size_" + result.d[i].MASANPHAM + "'></label>";
                            lstDanhSachSanPham += "<label style='display:none;' id='color_" + result.d[i].MASANPHAM + "'></label>";
                            lstDanhSachSanPham += "<label style='display:none;' id='capacity_" + result.d[i].MASANPHAM + "'></label>";
                            lstDanhSachSanPham += "<label style='display:none;' id='flavour_" + result.d[i].MASANPHAM + "'></label>";
                            //
                            lstDanhSachSanPham += "</div>";
                            lstDanhSachSanPham += "</div>";
                            lstDanhSachSanPham += "</div>";
                        }
                        // reset size
                        arrSize[0] = 0;
                        arrSize[1] = 0;
                        arrSize[2] = 0;
                        arrSize[3] = 0;
                        arrSize[4] = 0;
                        arrSize[5] = 0;

                        //reset color
                        arrColor[0] = "0";
                        arrColor[1] = "0";
                        arrColor[2] = "0";
                        arrColor[3] = "0";
                        arrColor[4] = "0";
                        arrColor[5] = "0";

                        //reset capacity
                        arrCapacity[0] = "0";
                        arrCapacity[1] = "0";
                        arrCapacity[2] = "0";
                        arrCapacity[3] = "0";
                        arrCapacity[4] = "0";
                        arrCapacity[5] = "0";

                        // reset flavour
                        arrFlavour[0] = "0";
                        arrFlavour[1] = "0";
                        arrFlavour[2] = "0";
                        arrFlavour[3] = "0";
                        arrFlavour[4] = "0";
                        arrFlavour[5] = "0";

                    }
                } else {
                    lstDanhSachSanPham = "";
                }

                document.getElementById("pnlSanPham").innerHTML = lstDanhSachSanPham;
            },
            error: function (result) {
                alert('ERROR: fLoadSanPham' + result.statusText);
            }
        });
}

function fMuaHang(mahang, size, mau, dungtich, muihuong,type) {
   

    var s = document.getElementById("size_" + mahang).innerHTML;
    var c = document.getElementById("color_" + mahang).innerHTML;
    var capa = document.getElementById("capacity_" + mahang).innerHTML;
    var fla = document.getElementById("flavour_" + mahang).innerHTML;
    var qty = 1;
    if (type == "detail") {
        s = document.getElementById("size_detail_" + mahang).innerHTML;
        c = document.getElementById("color_detail_" + mahang).innerHTML;
        capa = document.getElementById("capacity_detail_" + mahang).innerHTML;
        fla = document.getElementById("flavour_detail_" + mahang).innerHTML;
        qty = document.getElementById("qty_detail_" + mahang).innerHTML;
    }

    if ( (s == "" || c == "") && (capa == "" || fla == "") ) {
        alertCustom("Warning", "Choose detail of product ,please!");
    } else {
        //alert(qty);
        var bien = "{madon:'" + 1 + "'"; // session don hang
        bien += ",makhach:'" + 2 + "'"; // session dang nhap
        bien += ",masanpham:'" + mahang + "'";
        bien += ",soluong:'" + qty + "'";
        bien += ",size:'" + s + "'";
        bien += ",mau:'" + c + "'";
        bien += ",dungtich:'" + capa + "'";
        bien += ",muihuong:'" + fla + "'}";

        $.ajax({
            type : 'POST',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            data: bien,
            url: 'HomePage.aspx/fMuaHang',
            success: function (result) {
                if (result.d == "OK") {
                   alertCustom("WEBSALE:","Item is added to cart!")
                } else if (result.d == "LOGIN") {

                    $("#modalCardDetail").modal('hide');

                    $("#modalDangNhap").modal();
                }
            }, error: function (result) {

            }
        });
    }
}

function fLoadDetail(productID) {

    var bien = "{productID:'" + productID + "'}";
    var arrColor = new Array("0", "0", "0", "0", "0", "0");
    var arrCapacity = new Array("0", "0", "0", "0", "0", "0");
    var arrFlavour = new Array("0", "0", "0", "0", "0", "0");
    var lstDetail = "";
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset:utf-8',
        dataType: 'json',
        data: bien,
        url: 'HomePage.aspx/fLoadDetail',
        success: function (result) {
            if (result.d.length > 0) {
                

                for(j = 0 ; j < result.d.length; j++){
                    var addColor = true;
                    var addCapacity = true;
                    var addFlavour = true;


                    for (k = 0; k < arrColor.length; k++) {
                        if (arrColor[k] == result.d[j].MAU) {
                            addColor = false;
                            break;
                        }
                    }

                    for (k = 0; k < arrCapacity.length; k++) {
                        if (arrCapacity[k] == result.d[j].DUNGTICH) {
                            addCapacity = false;
                            break;
                        }
                    }

                    for (k = 0; k < arrFlavour.length; k++) {
                        if (arrFlavour[k] == result.d[j].MUIHUONG) {
                            addFlavour = false;
                            break;
                        }
                    }


                    if (addColor) {
                        for (l = 0; l < arrColor.length; l++) {
                            if (arrColor[l] == "0") {
                                arrColor[l] = result.d[j].MAU;
                                break;
                            }
                        }
                    }

                    if (addCapacity) {
                        for (l = 0; l < arrCapacity.length; l++) {
                            if (arrCapacity[l] == "0") {
                                arrCapacity[l] = result.d[j].DUNGTICH;
                                break;
                            }
                        }
                    }

                    if (addFlavour) {
                        for (l = 0; l < arrFlavour.length; l++) {
                            if (arrFlavour[l] == "0") {
                                arrFlavour[l] = result.d[j].MUIHUONG;
                                break;
                            }
                        }
                    }


                }


                $.ajax({
                    type: 'POST',
                    contentType: 'application/json;charset:utf-8',
                    dataType: 'json',
                    data: bien,
                    url: 'HomePage.aspx/fGetGroupName',
                    success: function (result2) {
                        var groupName = result2.d[0];
                        var brandName = result2.d[1];
                        var des = result2.d[2];
                        var manhom = result2.d[3];
                        var folderName = "DONGHO";
                        switch (manhom) {
                            case "NHH_001":
                                folderName = "DONGHO";
                                break;

                            case "NHH_002":
                                folderName = "GIAYDEP";
                                break;

                            case "NHH_003":
                                folderName = "QUANAO";
                                break;

                            case "NHH_004":
                                folderName = "TUIXACH";
                                break;

                            case "NHH_005":
                                folderName = "NUOCHOA";
                                break;

                            case "NHH_006":
                                folderName = "KHAC";
                                break;
                        }


                        document.getElementById('modalCardDetail').innerHTML = "";
                        lstDetail += "<div class='modal-dialog'>";
                        lstDetail += "<div class='modal-content'>";
                        lstDetail += "<div class='modal-body detail'>";
                        lstDetail += "<div class='row r1'></div>";
                        lstDetail += "<div class='row r2'></div>";
                        lstDetail += "<div class='container2'>";
                        lstDetail += "<div class='row' style='margin-left: 0px; margin-right: 0px;'>";
                        lstDetail += "<div class='col-xs-6 c1' style='left: 0px;'>";
                        if (manhom == "NHH_005") {
                            lstDetail += "<div class='row' style='margin-top: 70px;'>";
                        } else {
                            lstDetail += "<div class='row' style='margin-top: 120px;'>";
                        }
                        lstDetail += "<div class='row' style='padding-top: 5px; margin-left: 30px;'>";
                        lstDetail += " <label class='brand'>" + brandName + "</label>";
                        lstDetail += "</div>";
                        lstDetail += " <div class='row' style='padding-top: 5px; width: 150px; margin-left: 30px;'>";
                        lstDetail += "<label class='name'>" + result.d[0].TENSANPHAM + "</label>";
                        lstDetail += "</div>";
                        lstDetail += "<div class='row' style='padding-top: 5px; width: 100px; margin-left: 30px;'>";
                        //if (manhom == "NHH_005") {
                            lstDetail += "<label class='price' id='lblDetail_" + result.d[0].MASANPHAM + "_" + "size" + "_" + "color" +"_"+"capacity"+"_"+"flavour"+ "'>" + number_format(result.d[0].GIA1,0) + "</label>";
                        //} else {
                        //    lstDetail += "<label class='price' id='lblDetail_" + result.d[0].MASANPHAM + "_" + result.d[0].SIZE + "_" + result.d[0].MAU + "'>" + number_format(result.d[0].GIA1,0) + "</label>";
                        //}
                        
                        lstDetail += "</div>";

                        lstDetail += "<div class='row' style='padding-top: 5px; width: 100px; margin-left: 15px;overflow-y:scroll;width:125px;height:115px;'>";
                        if (manhom == "NHH_005") {
                            for (j = 0 ; j < arrFlavour.length; j++) {
                                if (arrFlavour[j] != "0") {
                                    lstDetail += "<div class='col-xs-2 productSizeDetail' style='width:100%;' onclick='fChooseFlavour(" + '"'+(j+1)+'"'+","+ '"' + arrFlavour[j] + '"' + "," + '"' + result.d[0].MASANPHAM + '"'+ ","+'"'+"detail"+'"' + ")' id=flavour_detail_"  + (j+1) + "_" + result.d[0].MASANPHAM + ">" + arrFlavour[j] + "</div>";
                                } else {
                                    lstDetail += "<div class='col-xs-2 productSizeDetail' style='width:100%;box-shadow:none;display:none;' id=flavour_detail_" + (j + 1) + "_" + result.d[0].MASANPHAM + "></div>";
                                }
                            }
                            
                           
                        } else {
                            lstDetail += "<div class='col-xs-2 productSizeDetail' onclick='fSelectColor_Detail(" + '"' + result.d[0].MASANPHAM + '"' + "," + '"' + "XS" + '"' + ")' id=" + '"' + result.d[0].MASANPHAM + "_XS" + '"' + ">XS</div>";
                            lstDetail += "<div class='col-xs-2 productSizeDetail' onclick='fSelectColor_Detail(" + '"' + result.d[0].MASANPHAM + '"' + "," + '"' + "S" + '"' + ")' id=" + '"' + result.d[0].MASANPHAM + "_S" + '"' + ">S</div>";
                            lstDetail += "<div class='col-xs-2 productSizeDetail' onclick='fSelectColor_Detail(" + '"' + result.d[0].MASANPHAM + '"' + "," + '"' + "M" + '"' + ")' id=" + '"' + result.d[0].MASANPHAM + "_M" + '"' + ">M</div>";
                            lstDetail += "<div class='col-xs-2 productSizeDetail' onclick='fSelectColor_Detail(" + '"' + result.d[0].MASANPHAM + '"' + "," + '"' + "L" + '"' + ")' id=" + '"' + result.d[0].MASANPHAM + "_L" + '"' + ">L</div>";
                            lstDetail += "<div class='col-xs-2 productSizeDetail' onclick='fSelectColor_Detail(" + '"' + result.d[0].MASANPHAM + '"' + "," + '"' + "XL" + '"' + ")' id=" + '"' + result.d[0].MASANPHAM + "_XL" + '"' + ">XL</div>";
                            lstDetail += "<div class='col-xs-2 productSizeDetail' onclick='fSelectColor_Detail(" + '"' + result.d[0].MASANPHAM + '"' + "," + '"' + "XXL" + '"' + ")' id=" + '"' + result.d[0].MASANPHAM + "_XXL" + '"' + ">XXL</div>";
                        }



                        lstDetail += "</div>";

                        lstDetail += " <div class='row' style='padding-top: 5px; width: 100px; margin-left: 30px;'>";

                        if (manhom == "NHH_005") {
                            for (j = 0 ; j < arrCapacity.length; j++) {
                               
                                lstDetail += "<div class='col-xs-2 productCapacityDetail' id='" + "col_capacity_detail_" + (j + 1) + "_" + result.d[0].MASANPHAM + "' onclick='fChooseCapcityDetail(" + '"' + "col_capacity_detail_" + (j + 1) + "_" + result.d[0].MASANPHAM + "_check" + '"' + "," + '"' + result.d[0].MASANPHAM + '"' + "," + '"' + "col_capacity_detail_" + (j + 1) + "_" + result.d[0].MASANPHAM + '"' + ")' >" + arrCapacity[j]; //onclick='fChonMau(" + '"M1"' + "," + '"' + arrColor[0] + '"' + "," + '"' + result.d[0].MASANPHAM + '"' + "," + '"detail"' + ");'
                                    lstDetail += "<i class='fa fa-check animated rotateIn' id='" + "col_capacity_detail_" + (j + 1) + "_" + result.d[0].MASANPHAM +"_check"+ "' style='display:none; font-size: 20px;color: green; margin-left: -2px;position:absolute'></i>";
                                    lstDetail += "</div>"; 
                            }
                        } else {
                            lstDetail += "<div class='col-xs-2 productColorDetail' id='" + result.d[0].MASANPHAM + "_M1" + "' >M1"; //onclick='fChonMau(" + '"M1"' + "," + '"' + arrColor[0] + '"' + "," + '"' + result.d[0].MASANPHAM + '"' + "," + '"detail"' + ");'
                            lstDetail += "<i class='fa fa-check animated rotateIn' id='" + result.d[0].MASANPHAM + "_M1_check" + "' style='display:none; font-size: 20px;color: green; margin-left: -4px;position:absolute'></i>";
                            lstDetail += "</div>";

                            lstDetail += "<div class='col-xs-2 productColorDetail' id='" + result.d[0].MASANPHAM + "_M2" + "' >M2";//onclick='fChonMau(" + '"M2"' + "," + '"' + arrColor[1] + '"' + "," + '"' + result.d[0].MASANPHAM + '"' + "," + '"detail"' + ");'
                            lstDetail += "<i class='fa fa-check animated rotateIn' id='" + result.d[0].MASANPHAM + "_M2_check" + "' style='display:none; font-size: 20px;color: green; margin-left: -4px;position:absolute'></i>";
                            lstDetail += "</div>";

                            lstDetail += "<div class='col-xs-2 productColorDetail' id='" + result.d[0].MASANPHAM + "_M3" + "' >M3"; //onclick='fChonMau(" + '"M3"' + "," + '"' + arrColor[2] + '"' + "," + '"' + result.d[0].MASANPHAM + '"' + "," + '"detail"' + ");'
                            lstDetail += "<i class='fa fa-check animated rotateIn' id='" + result.d[0].MASANPHAM + "_M3_check" + "' style='display:none; font-size: 20px;color: green; margin-left: -4px;position:absolute'></i>";
                            lstDetail += "</div>";

                            lstDetail += "<div class='col-xs-2 productColorDetail' id='" + result.d[0].MASANPHAM + "_M4" + "' >M4"; //onclick='fChonMau(" + '"M4"' + "," + '"' + arrColor[3] + '"' + "," + '"' + result.d[0].MASANPHAM + '"' + "," + '"detail"' + ");'
                            lstDetail += "<i class='fa fa-check animated rotateIn' id='" + result.d[0].MASANPHAM + "_M4_check" + "' style='display:none; font-size: 20px;color: green; margin-left: -4px;position:absolute'></i>";
                            lstDetail += "</div>";

                            lstDetail += "<div class='col-xs-2 productColorDetail' id='" + result.d[0].MASANPHAM + "_M5" + "' >M5"; //onclick='fChonMau(" + '"M5"' + "," + '"' + arrColor[4] + '"' + "," + '"' + result.d[0].MASANPHAM + '"' + "," + '"detail"' + ");'
                            lstDetail += "<i class='fa fa-check animated rotateIn' id='" + result.d[0].MASANPHAM + "_M5_check" + "' style='display:none; font-size: 20px;color: green; margin-left: -4px;position:absolute'></i>";
                            lstDetail += "</div>";

                            lstDetail += "<div class='col-xs-2 productColorDetail' id='" + result.d[0].MASANPHAM + "_M6" + "' >M6"; //onclick='fChonMau(" + '"M6"' + "," + '"' + arrColor[5] + '"' + "," + '"' + result.d[0].MASANPHAM + '"' + "," + '"detail"' + ");'
                            lstDetail += "<i class='fa fa-check animated rotateIn' id='" + result.d[0].MASANPHAM + "_M6_check" + "' style='display:none; font-size: 20px;color: green; margin-left: -4px;position:absolute'></i>";
                            lstDetail += "</div>";
                        }
                        

                        lstDetail += "</div>";

                        lstDetail += "<div class='row' style='padding-top: 5px; width: 100px; margin-left: 30px; display:none;'>";

                        lstDetail +=  "<label id='"+"size_detail_"+result.d[0].MASANPHAM+"'></label>";
                        lstDetail += "<label id='"+"color_detail_"+result.d[0].MASANPHAM+"'></label>";
                        lstDetail += "<label id='" + "qty_detail_" + result.d[0].MASANPHAM + "'></label>";
                        lstDetail += "<label id='" + "capacity_detail_" + result.d[0].MASANPHAM + "'></label>";
                        lstDetail += "<label id='" + "flavour_detail_" + result.d[0].MASANPHAM + "'></label>";
                        lstDetail += "</div>";
                        lstDetail += "</div>";
                        lstDetail += "</div>";
                        
                        lstDetail += "<div class='col-xs-6 c2' style='left: 0px;'>";
                        lstDetail += "<div class='row' style='margin-top: 120px; margin-right: 10px;'>";
                        lstDetail += "<div class='row' style='padding-top: 0px;font-size:12px; margin-left: 80px; text-align: center; height: 130px'>";
                        lstDetail += "<label class='des'>"+des+"</label>";
                        lstDetail += "</div>";

                        lstDetail += "<div class='row' style='margin-left: 120px; margin-top: 60px'>";
                        lstDetail+= "<label>Qty: </label>";
                        lstDetail += "<input type='number' id='qty_detail' style='width: 50px; height: 30px; text-align: center;' onchange='fChangeQtyDetail("+'"'+result.d[0].MASANPHAM+'"'+")' />";
                        lstDetail += "</div>";
                        lstDetail += "</div>";

                        lstDetail += "<div class='row' style='height: 30%;'>";
                        lstDetail += "<div class='row' style='margin-left: 110px; padding-top: 10px;'>";
                        lstDetail += "<input type='button' class='btn btn-cart' value='Add to cart' onclick='fBuyFromDetail(" + '"' + result.d[0].MASANPHAM + '"' + ");'/>";
                        lstDetail += "</div>";
                        lstDetail += "</div>";
                        lstDetail += "</div>";

                        lstDetail += "<img src='../IMAGES/"+folderName+"/"+result.d[0].MASANPHAM+".png' class='img' style='z-index: 5;' />";
                        lstDetail += "<label class='group'>" + groupName + "</label>";
                        lstDetail += "<input type='button' class='btn btn-exit' onclick='fExit_Detail(" + '"' + result.d[0].MASANPHAM + '"' +","+'"'+manhom+'"'+ ")' value='X'/>";

                        lstDetail += "</div>";
                        lstDetail += "</div>";
                        lstDetail += "</div>";
                        lstDetail += "</div>";
                        lstDetail += "</div>";
                       
                        
                        document.getElementById('modalCardDetail').innerHTML = lstDetail;
                        $("#modalCardDetail").modal({
                            backdrop: 'static',
                            keyboard: false
                        });
                    },
                    error: function (result2) {

                    }
                });
            }
           
        }, error: function (result) {

        }
    });
    
}

function fExit_Detail(mahang,manhom) {
    //.getElementById("size_detail_" + mahang).innerHTML = "";
    //document.getElementById("color_detail_" + mahang).innerHTML = "";

    fSelectColor_Detail(mahang, "",manhom);

    $("#modalCardDetail").modal('hide');
}

function fSelectColor_Detail(ma, size,manhom) {
    if (size == "XS") {
        document.getElementById(ma+"_"+size).style.boxShadow = "0px 0px 10px 2px rgba(255, 255, 255, 0.69)";
        document.getElementById(ma+"_"+size).style.color = "white";

        document.getElementById(ma + "_S").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_S").style.color = "#000000";
        document.getElementById(ma + "_M").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_M").style.color = "#000000";
        document.getElementById(ma + "_L").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_L").style.color = "#000000";
        document.getElementById(ma + "_XL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XL").style.color = "#000000";
        document.getElementById(ma + "_XXL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XXL").style.color = "#000000";

    }
    else if (size == "S") {
        document.getElementById(ma + "_" + size).style.boxShadow = "0px 0px 10px 2px rgba(255, 255, 255, 0.69)";
        document.getElementById(ma + "_" + size).style.color = "white";

        document.getElementById(ma + "_XS").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XS").style.color = "#000000";
        document.getElementById(ma + "_M").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_M").style.color = "#000000";
        document.getElementById(ma + "_L").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_L").style.color = "#000000";
        document.getElementById(ma + "_XL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XL").style.color = "#000000";
        document.getElementById(ma + "_XXL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XXL").style.color = "#000000";
    } else if (size == "M") {
        document.getElementById(ma + "_" + size).style.boxShadow = "0px 0px 10px 2px rgba(255, 255, 255, 0.69)";
        document.getElementById(ma + "_" + size).style.color = "white";

        document.getElementById(ma + "_S").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_S").style.color = "#000000";
        document.getElementById(ma + "_XS").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XS").style.color = "#000000";
        document.getElementById(ma + "_L").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_L").style.color = "#000000";
        document.getElementById(ma + "_XL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XL").style.color = "#000000";
        document.getElementById(ma + "_XXL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XXL").style.color = "#000000";
    } else if (size == "L") {
        document.getElementById(ma + "_" + size).style.boxShadow = "0px 0px 10px 2px rgba(255, 255, 255, 0.69)";
        document.getElementById(ma + "_" + size).style.color = "white";

        document.getElementById(ma + "_XS").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XS").style.color = "#000000";
        document.getElementById(ma + "_S").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_S").style.color = "#000000";
        document.getElementById(ma + "_M").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_M").style.color = "#000000";
        document.getElementById(ma + "_XL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XL").style.color = "#000000";
        document.getElementById(ma + "_XXL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XXL").style.color = "#000000";
    } else if (size == "XL") {
        document.getElementById(ma + "_" + size).style.boxShadow = "0px 0px 10px 2px rgba(255, 255, 255, 0.69)";
        document.getElementById(ma + "_" + size).style.color = "white";

        document.getElementById(ma + "_XS").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XS").style.color = "#000000";
        document.getElementById(ma + "_S").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_S").style.color = "#000000";
        document.getElementById(ma + "_M").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_M").style.color = "#000000";
        document.getElementById(ma + "_L").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_L").style.color = "#000000";
        document.getElementById(ma + "_XXL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XXL").style.color = "#000000";
    } else if(size=="XXL") {
        document.getElementById(ma + "_" + size).style.boxShadow = "0px 0px 10px 2px rgba(255, 255, 255, 0.69)";
        document.getElementById(ma + "_" + size).style.color = "white";

        document.getElementById(ma + "_XS").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XS").style.color = "#000000";
        document.getElementById(ma + "_S").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_S").style.color = "#000000";
        document.getElementById(ma + "_M").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_M").style.color = "#000000";
        document.getElementById(ma + "_L").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_L").style.color = "#000000";
        document.getElementById(ma + "_XL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
        document.getElementById(ma + "_XL").style.color = "#000000";
    } else {
        if (manhom == "NHH_005") {

        } else {
            document.getElementById(ma + "_XXL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
            document.getElementById(ma + "_XXL").style.color = "#000000";
            document.getElementById(ma + "_XS").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
            document.getElementById(ma + "_XS").style.color = "#000000";
            document.getElementById(ma + "_S").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
            document.getElementById(ma + "_S").style.color = "#000000";
            document.getElementById(ma + "_M").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
            document.getElementById(ma + "_M").style.color = "#000000";
            document.getElementById(ma + "_L").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
            document.getElementById(ma + "_L").style.color = "#000000";
            document.getElementById(ma + "_XL").style.boxShadow = "0px 0px 10px 2px rgba(82, 66, 57, 0.69)";
            document.getElementById(ma + "_XL").style.color = "#000000";

            fResetColorDetail(ma);
        }
       
    }
    document.getElementById("size_detail_" + ma).innerHTML = size;
    document.getElementById("color_detail_" + ma).innerHTML = "";
    document.getElementById('qty_detail_' + ma).innerHTML = "";
    document.getElementById('flavour_detail_' + ma).innerHTML = "";
    document.getElementById('capacity_detail_' + ma).innerHTML = "";
    if (size != "") {
        var type = 'detail';
        fLoadMau(ma, size, type);
    }
  
}

function fResetColorDetail(mahang) {

    for (i = 0 ; i <= 5; i++) {
        
        document.getElementById(mahang + "_M" + (i + 1)).style.backgroundColor = 'transparent';
        document.getElementById(mahang + "_M" + (i + 1)).style.cursor = 'not-allowed';
        document.getElementById(mahang + "_M" + (i + 1)).style.border = 'solid 1px rgba(128, 128, 128, 0.60)';
        document.getElementById(mahang + "_M" + (i + 1)).style.boxShadow = 'none';
        document.getElementById(mahang + "_M" + (i + 1) + "_check").style.display = 'none';
        document.getElementById(mahang + "_M" + (i + 1)).onclick = 'none';

        
    }
    document.getElementById('qty_detail').value = "";
}
function fChangeQtyDetail(ma) {
    document.getElementById('qty_detail_' + ma).innerHTML = document.getElementById('qty_detail').value;
    //var id = 'qty_detail_' + ma;
    //document.getElementById('qty_detail_' + ma).addEventListener("keydown", function (e) {
    //    if (e.keyCode == 13) {
    //        document.getElementById('qty_detail_' + ma).innerHTML = document.getElementById('qty_detail').value;
    //    }
    //});
}

function fTimKiem() {
    var val = document.getElementById('txtTim').value;
    if (val == "") {
        alert("Input something to search...");
        fChonNhomHang("NHH_001");
    } else {
        goToByScroll();
        fLoadSanPham("", val);
    }
}

function goToByScroll() {
    $('html,body').animate({
        scrollTop: $("#r5").offset().top
    }, 'slow');
}

function fBuyFromDetail(mahang) {
    //alert("Comming soon");

    var size = document.getElementById('size_detail_' + mahang).innerHTML;
    var color = document.getElementById('color_detail_' + mahang).innerHTML;
    var qty = document.getElementById('qty_detail_' + mahang).innerHTML;
    var capacity = document.getElementById('capacity_detail_' + mahang).innerHTML;
    var flavour = document.getElementById('flavour_detail_' + mahang).innerHTML;

    if (size == "" || color == "") {
        if (capacity == "" || flavour == "") {
            alertCustom("Warning", "Choose detail of item, please");
            return;
        } else {
            if (qty == "") {
                alertCustom("Warning", "How many do you want to buy ?");
                return;
            } else {
                if (qty <= 0) {
                    alertCustom("WEBSALE:", "Qty must greater than 0");
                    return;
                } else {
                    //alertCustom("WEBSALE:", mahang + "/" + capacity + "/" + flavour + "/" + qty);
                    
                }
               
            }
        }
       
    } else {
        if (qty == "") {
            alertCustom("Warning", "How many do you want to buy ?");
            return;
        }
        else {
            if (qty <= 0) {
                alertCustom("WEBSALE:", "Qty must greater than 0");
                return;
            } else {
                //alertCustom("WEBSALE:", mahang + "/" + size + "/" + color + "/" + qty);
            }
        }
    }
    //alert(mahang, size, color, capacity, flavour);
    fMuaHang(mahang, size, color, capacity, flavour,"detail");

}

function fChooseCapacity(id, capa, productID, type) {

    document.getElementById(id + "_" + productID).style.backgroundColor = "orangered";
    document.getElementById(id + "_" + productID).style.Color = "white";
    //alert("capacity" + id + "_" + productID);
    document.getElementById("capacity_" + productID).innerHTML = document.getElementById(id + "_" + productID).innerHTML;

    fLoadPrice(productID, "", "", document.getElementById("capacity1_" + productID).innerHTML, document.getElementById(id + "_" + productID).innerHTML, "master");

}
function fShowReg() {
    $("#modalDangNhap").modal('hide');
    $("#modalReg").modal();

}

function fReg() {
    var username = document.getElementById("txtUserNameReg").value;
    var password = document.getElementById("txtPassWordReg").value;

    if (username == "" || password == "") {
        alertCustom("Warning", "Username and password can not blank");
        return;
    }

    var variable = "{u:'" + username + "'";
    variable += ",p:'" + password + "'}";

    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset:utf-8',
        dataType: 'json',
        data: variable,
        url: 'HomePage.aspx/fReg',
        success: function (result) {
            if (result.d == "OK") {

                BootstrapDialog.show({
                    title: 'Info',
                    message: 'Registered successfully! You should update your information then go shopping!',
                    closable:false,
                    buttons: [{
                        label: 'Yes',
                        cssClass: 'demo',
                        action: function (Itself) {
                            Itself.close();
                            $("#modalReg").modal('hide');
                            $("#modalDangXuat").modal();
                        }
                    }, {
                        label: 'Not now',
                        action: function (Itself) {
                            Itself.close();
                            $("#modalReg").modal('hide');
                            $("#modalDangNhap").modal();
                        }
                    }]
                });

                

            } else {
                alertCustom("Warning","Username has already! Please try another.")
            }
        },
        error: function (result) {
            alert("ERROR: fReg");
        }
    });
}

function fLogOut() {
    BootstrapDialog.show({
        title: 'Warning',
        message: 'Your cart will be deleted when you logout.Are you sure?',
        closable: false,
        buttons: [{
            label: 'Yes',
            cssClass: 'demo',
            action: function (Itself) {
                Itself.close();
                $("#modalDangXuat").modal('hide');
                
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json;charset:utf-8',
                    dataType: 'json',
                    data: '',
                    url: 'HomePage.aspx/fLogOut',
                    success: function (result) {
                        if (result.d == "OK") {
                            location.reload(true);
                        }
                    }, error: function (result) {
                        alert("ERROR: fLogOut");
                    }


                });
               
            }
        }, {
            label: 'Not now',
            action: function (Itself) {
                Itself.close();
            }
        }]
    });
}

function fChangePassWord() {
    var OldPass = document.getElementById("txtOldPass").value;
    var NewPass = document.getElementById("txtNewPass").value;
    var RetypePass = document.getElementById("txtRetypePass").value;

    if (OldPass == "" || NewPass == "" || RetypePass == "") {
        alertCustom("Warning", "Password can not blank!");
        return;
    }

    if (NewPass != RetypePass) {
        alertCustom("Warning", "Retype password does not match!");
        return;
    }
    var variable = "{Old:'" + OldPass + "'";
    variable += ",New:'" + NewPass + "'";
    variable += ",Re:'" + RetypePass + "'}";
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset:utf-8',
        dataType: 'json',
        data:variable,
        url: 'HomePage.aspx/fChangePassWord',
        success : function(result){
            if (result.d == "OK") {
                alertCustom("Warning", "Your password has been changed");
                $("#modalReg").modal('hide');
            } else {
                alertCustom("Warning", "Your old password was incorrect");

            }
        },error: function (result){

        }
    });
}







































function number_format(number, decimals, dec_point, thousands_sep) {
    // http://kevin.vanzonneveld.net
    // + original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // + improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // + bugfix by: Michael White (http://crestidg.com)
    // + bugfix by: Benjamin Lupton
    // + bugfix by: Allan Jensen (http://www.winternet.no)
    // + revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // * example 1: number_format(1234.5678, 2, '.', '');
    // * returns 1: 1234.57

    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
    var d = dec_point == undefined ? "," : dec_point;
    var t = thousands_sep == undefined ? "." : thousands_sep, s = n < 0 ? "-" : "";
    var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

