
$(document).ready(function () {
    var myVar = setInterval(myTimer, 2000);

    function myTimer() {

       // var a = document.getElementById("lblSoLuong").innerHTML;
        //a = parseInt(a);
        //document.getElementById("lblSoLuong").innerHTML = a + 1;
        
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

        fLoadSanPham(ma);

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
        fLoadSanPham(ma);

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
        fLoadSanPham(ma);
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
        fLoadSanPham(ma);
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
        fLoadSanPham(ma);
    }
}

function fChonSize(size, mahang) {

        document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau_" + mahang).innerHTML = "";

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

        fLoadMau(mahang, size);

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

        fLoadMau(mahang, size);

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
        fLoadMau(mahang, size);

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

        document.getElementById("size_" + mahang).innerHTML = "M";
        fLoadMau(mahang, size);

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
        fLoadMau(mahang, size);
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
        fLoadMau(mahang, size);
    }
}

function fChonMau(id, mau,mahang) {
    if (id == "mau1") {

       // alert(id + "" + mahang+""+mau);

        document.getElementById(id+"_"+mahang).style.border = "solid 3px green";
        document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";

        document.getElementById("mau_" + mahang).innerHTML = mau;

    } else if (id=="mau2") {
        document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
        document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau_" + mahang).innerHTML = mau;
    } else if (id=="mau3") {
        document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
        document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau_" + mahang).innerHTML = mau;
    } else if (id=="mau4") {
        document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
        document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau_" + mahang).innerHTML = mau;
    } else if (id=="mau5") {
        document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
        document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau6" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau_" + mahang).innerHTML = mau;
    } else {
        document.getElementById(id + "_" + mahang).style.border = "solid 3px green";
        document.getElementById("mau2" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau3" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau4" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau5" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau1" + "_" + mahang).style.border = "solid 1px rgba(128, 128, 128, 0.30)";
        document.getElementById("mau_" + mahang).innerHTML = mau;
    }
}

function fLoadMau(mahang, size) {

    var bien = "{mahang:'" + mahang + "'";
    bien += ",size:'" + size + "'}";
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        data:bien,
        url: 'HomePage.aspx/fLoadMau',
        success:function(result){
            if (result.d.length > 0) {
                try {
                    for (i = 0 ; i < result.d.length; i++) {

                       // alert(result.d[i]);
                        document.getElementById("mau" + (i + 1) + "_" + mahang).style.backgroundColor = result.d[i];
                        document.getElementById("col_mau" + (i + 1) + "_" + mahang).style.display = 'inline';
                        document.getElementById("mau" + (i + 1) + "_" + mahang).innerHTML = result.d[i];
                        var id = "mau" + (i + 1) + "";
                        var mau = result.d[i];
                        document.getElementById("mau" + (i + 1) + "_" + mahang).onclick = function () { fChonMau(id, mau, mahang) };

                    }
                    //document.getElementById("mau2" + "_" + mahang).style.backgroundColor = result.d[1];
                    //document.getElementById("col_mau2" + "_" + mahang).style.display = 'inline';
                    //document.getElementById("mau2" + "_" + mahang).innerHTML = result.d[1];
                    //document.getElementById("mau2" + "_" + mahang).onclick = "fChonMau(" + '"mau2"' + "," + '"' + result.d[1] + '"' + "," + '"' + mahang + '"' + ")";


                    //document.getElementById("mau3" + "_" + mahang).style.backgroundColor = result.d[2];
                    //document.getElementById("col_mau3" + "_" + mahang).style.display = 'inline';
                    //document.getElementById("mau3" + "_" + mahang).innerHTML = result.d[2];
                    //document.getElementById("mau3" + "_" + mahang).onclick = "fChonMau(" + '"mau3"' + "," + '"' + result.d[2] + '"' + "," + '"' + mahang + '"' + ")";


                    //document.getElementById("mau4" + "_" + mahang).style.backgroundColor = result.d[3];
                    //document.getElementById("col_mau4" + "_" + mahang).style.display = 'inline';
                    //document.getElementById("mau4" + "_" + mahang).innerHTML = result.d[3];
                    //document.getElementById("mau4" + "_" + mahang).onclick = "fChonMau(" + '"mau4"' + "," + '"' + result.d[3] + '"' + "," + '"' + mahang + '"' + ")";

                    //document.getElementById("mau5" + "_" + mahang).style.backgroundColor = result.d[4];
                    //document.getElementById("col_mau5" + "_" + mahang).style.display = 'inline';
                    //document.getElementById("mau5" + "_" + mahang).innerHTML = result.d[4];
                    //document.getElementById("mau5" + "_" + mahang).onclick = "fChonMau(" + '"mau5"' + "," + '"' + result.d[4] + '"' + "," + '"' + mahang + '"' + ")";

                    //document.getElementById("mau6" + "_" + mahang).style.backgroundColor = result.d[5];
                    //document.getElementById("ol_mau6" + "_" + mahang).style.display = 'inline';
                    //document.getElementById("mau6" + "_" + mahang).innerHTML = result.d[5];
                    //document.getElementById("mau6" + "_" + mahang).onclick = "fChonMau(" + '"mau6"' + "," + '"' + result.d[5] + '"' + "," + '"' + mahang + '"' + ")";
                } catch (e) {
                    alert("a");
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

function fShowDangXuat() {
    $("#modalDangXuat").modal();
}

function fshowgiohang() {

    if (document.getElementById('hdfMuaHang').value == "1") {
        window.location.replace("CartPage.aspx");
    } else {
        alertCustom("Thong bao", "Gio hang dang trong");
    }
}

function fLoadSanPham(manhom) {
  
        document.getElementById("pnlSanPham").innerHTML = "";
        var lstDanhSachSanPham = "";
        var arrSize = new Array(0, 0, 0, 0, 0, 0); // XS,S,M,L,XL,XXL
        var arrColor = new Array("0", "0", "0", "0", "0", "0");
        var arrlst;
        //var manhom = "NHH_001";
        var bien = "{manhom:'" + manhom + "'}";

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
                       
                        // kiem tra size & mau
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
                                var add = true;
                                for (k = 0; k < arrColor.length; k++) {
                                    if (arrColor[k] == result.d[j].MAU) {
                                        add = false;
                                        break;
                                    }
                                }
                                if (add) {
                                    for (l = 0; l < arrColor.length; l++) {
                                        if (arrColor[l] == "0") {
                                            arrColor[l] = result.d[j].MAU;
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

                        if (addSP) {
                            arrlst.push(result.d[i].MASANPHAM);
                            lstDanhSachSanPham += "<div class='col-xs-2 productCard animated bounceIn'>";
                            lstDanhSachSanPham += "<div class='row cardProductHeader'>";
                            lstDanhSachSanPham += "<img src='../IMAGES/DONGHO/" + result.d[i].MASANPHAM + ".png' class='productImage'/>";
                            lstDanhSachSanPham += "</div>";

                            lstDanhSachSanPham += "<div class='row cardProductBody'>";
                            lstDanhSachSanPham += "<div class='row ProductName'>";
                            lstDanhSachSanPham += "<label style='width:100%;font-size:18px;white-space:pre-wrap;'>" + result.d[i].TENSANPHAM + "</label>";
                            lstDanhSachSanPham += "</div>";

                            lstDanhSachSanPham += " <hr style='margin-top:0px;margin-bottom:0px;margin-left:20px;margin-right:20px;'/>";
                            lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold'>Size</div>";

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

                            lstDanhSachSanPham += "</div>";

                            lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;font-weight:bold;'>Màu</div>";

                            lstDanhSachSanPham += "<div class='row' style='margin-left:10px;margin-right:10px;text-align:left;'>";

                            //if (arrColor[0] != "0") {
                            //    lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;'>";
                            //    lstDanhSachSanPham += "<label id='mau1_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[0] + ";' onclick='fChonMau(" + '"mau1"' + "," + '"' + arrColor[0] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[0] + "</label>";
                            //    lstDanhSachSanPham += "</div>";
                            //} else {
                                lstDanhSachSanPham += "<div id='col_mau1_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;display:none;'>";
                                lstDanhSachSanPham += "<label id='mau1_" + result.d[i].MASANPHAM + "'" + " class='productColor' ></label>";
                                lstDanhSachSanPham += "</div>";
                            //}


                            //if (arrColor[1] != "0") {
                            //    lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;'>";
                            //    lstDanhSachSanPham += "<label id='mau2_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[1] + ";' onclick='fChonMau(" + '"mau2"' + "," + '"' + arrColor[1] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[1] + "</label>";
                            //    lstDanhSachSanPham += "</div>";
                            //} else {
                                lstDanhSachSanPham += "<div id='col_mau2_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;display:none;'>";
                                lstDanhSachSanPham += "<label id='mau2_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[1] + ";' onclick='fChonMau(" + '"mau2"' + "," + '"' + arrColor[1] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[1] + "</label>";
                                lstDanhSachSanPham += "</div>";
                            //}


                            //if (arrColor[2] != "0") {
                            //    lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;'>";
                            //    lstDanhSachSanPham += "<label id='mau3_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[2] + ";' onclick='fChonMau(" + '"mau3"' + "," + '"' + arrColor[2] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[2] + "</label>";
                            //    lstDanhSachSanPham += "</div>";
                            //} else {
                                lstDanhSachSanPham += "<div id='col_mau3_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;display:none;'>";
                                lstDanhSachSanPham += "<label id='mau3_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[2] + ";' onclick='fChonMau(" + '"mau3"' + "," + '"' + arrColor[2] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[2] + "</label>";
                                lstDanhSachSanPham += "</div>";
                            //}

                            //if (arrColor[3] != "0") {
                            //    lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;'>";
                            //    lstDanhSachSanPham += "<label id='mau4_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[3] + ";' onclick='fChonMau(" + '"mau4"' + "," + '"' + arrColor[3] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[3] + "</label>";
                            //    lstDanhSachSanPham += "</div>";
                            //} else {
                                lstDanhSachSanPham += "<div id='col_mau4_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;display:none;'>";
                                lstDanhSachSanPham += "<label id='mau4_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[3] + ";' onclick='fChonMau(" + '"mau4"' + "," + '"' + arrColor[3] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[3] + "</label>";
                                lstDanhSachSanPham += "</div>";
                            //}

                            //if (arrColor[4] != "0") {
                            //    lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;'>";
                            //    lstDanhSachSanPham += "<label id='mau5_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[4] + ";' onclick='fChonMau(" + '"mau5"' + "," + '"' + arrColor[4] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[4] + "</label>";
                            //    lstDanhSachSanPham += "</div>";
                            //} else {
                                lstDanhSachSanPham += "<div id='col_mau5_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;display:none;'>";
                                lstDanhSachSanPham += "<label id='mau5_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[4] + ";' onclick='fChonMau(" + '"mau5"' + "," + '"' + arrColor[4] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[4] + "</label>";
                                lstDanhSachSanPham += "</div>";
                           // }

                            //if (arrColor[5] != "0") {
                            //    lstDanhSachSanPham += "<div class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;'>";
                            //    lstDanhSachSanPham += "<label id='mau6_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[5] + ";' onclick='fChonMau(" + '"mau6"' + "," + '"' + arrColor[5] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[5] + "</label>";
                            //    lstDanhSachSanPham += "</div>";
                            //} else {
                                lstDanhSachSanPham += "<div id='col_mau6_" + result.d[i].MASANPHAM + "'" + " class='col-xs-2' style='text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;display:none;'>";
                                lstDanhSachSanPham += "<label  id='mau6_" + result.d[i].MASANPHAM + "'" + " class='productColor' style='background-color:" + arrColor[5] + ";' onclick='fChonMau(" + '"mau6"' + "," + '"' + arrColor[5] + '"' + "," + '"' + result.d[i].MASANPHAM + '"' + ");'>" + arrColor[5] + "</label>";
                                lstDanhSachSanPham += "</div>";
                           // }
                            lstDanhSachSanPham += "</div>";

                            lstDanhSachSanPham += " <div class='row'>";
                            lstDanhSachSanPham += "<button type='button' id='btnMuaHang-" + result.d[i].MASANPHAM + "-" + result.d[i].SIZE+"-"+result.d[i].MAU+"-"+result.d[i].DUNGTICH + "' onclick='fMuaHang("+'"'+result.d[i].MASANPHAM+'"'+","+'"'+result.d[i].SIZE+'"'+","+'"'+result.d[i].MAU+'"'+","+'"'+result.d[i].DUNGTICH+'"'+");' class='btn btn-success productPrice animated bounceInLeft' >" + result.d[i].GIA1 + " VND</button>";
                            // hidden input
                            lstDanhSachSanPham += "<label style='display:none;' id='size_" + result.d[i].MASANPHAM + "'></label>";
                            lstDanhSachSanPham += "<label style='display:none;' id='mau_" + result.d[i].MASANPHAM + "'></label>";
                            lstDanhSachSanPham += "<label style='display:none;' id='dungtich_" + result.d[i].MASANPHAM + "'></label>";
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

                        //reset mau
                        arrColor[0] = "0";
                        arrColor[1] = "0";
                        arrColor[2] = "0";
                        arrColor[3] = "0";
                        arrColor[4] = "0";
                        arrColor[5] = "0";

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

function fMuaHang(mahang, size, mau, dungtich) {
    // kiem tra dang nhap

    //

    

    var s = document.getElementById("size_" + mahang).innerHTML;
    var m = document.getElementById("mau_" + mahang).innerHTML;
    if (s == "" || m == "") {
        alertCustom("Thong bao", "Ban chua chon size/mau");
    } else {

        var bien = "{madon:'" + 1 + "'"; // session don hang
        bien += ",makhach:'" + 2 + "'"; // session dang nhap
        bien += ",masanpham:'" + mahang + "'";
        bien += ",soluong:'" + 1 + "'";
        bien += ",size:'" + s + "'";
        bien += ",mau:'" + m + "'}";

        $.ajax({
            type : 'POST',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
            data: bien,
            url: 'HomePage.aspx/fMuaHang',
            success: function (result) {
                if (result.d == "OK") {
                    alert("Da them vao gio hang");
                } else if (result.d == "LOGIN") {
                    $("#modalDangNhap").modal();
                }
            }, error: function (result) {

            }
        });
    }
}



