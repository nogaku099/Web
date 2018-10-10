
function loadGioHang() {
    
    var lstsp = "";
    var tongTien = 0;
    var tongSoLuong = 0;
    lstsp += "<br/>";
    var temp = "{maDonHang:'" + 1 + "'}";
    
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        data: temp,
        url: 'CartPage.aspx/fGetDanhSachChiTietDonHang',
        success: function (result) {
            if (result.d == null) {
                alert("asfnasnf");
                return;
            }
            
            if (result.d.length > 0) {
                alert("ok");
                var maSP = "{maSanPham:'" + result.d[0].MASANPHAM.toString() + "'}";
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    dataType: 'json',
                    data: maSP,
                    url: 'CartPage.aspx/fGetMaNhom',
                    success: function (ketQua) {
                        if (ketQua.d == null) {
                            alert("ma nhom rong");

                        }
                        if (ketQua.d.length > 0) {
                            var maNhom = ketQua.d;
                            //alert(maNhom);
                            for (var i = 0; i < result.d.length; i++) {
                                lstsp += "<div class='row backgroundRowSanPham'>";
                                lstsp += "<div class='col-xs-6'>";
                                lstsp += "<div class='row'>";

                                lstsp += "<div class='col-xs-4'>";
                                var tenThuMucHinh = "";





                                //Lay ma nhom 



                                //alert(maNhom);
                                //alert(document.getElementById("hdfMaNhom").value);
                                //maNhom = document.getElementById("hdfMaNhom").value.toString();

                                if (maNhom == "NHH_001") {
                                    tenThuMucHinh = "DONGHO";
                                }
                                else if (maNhom == "NHH_002") {
                                    tenThuMucHinh = "GIAYDEP";
                                }
                                else if (maNhom == "NHH_003") {
                                    tenThuMucHinh = "QUANAO";
                                }
                                else if (maNhom == "NHH_004") {
                                    tenThuMucHinh = "TUIXACH";
                                }
                                else if (maNhom == "NHH_005") {
                                    tenThuMucHinh = "NUOCHOA";
                                }
                                else if (maNhom == "NHH_006") {
                                    tenThuMucHinh = "KHAC";
                                }

                                lstsp += "<img src='../IMAGES/" + tenThuMucHinh + "/" + result.d[i].MASANPHAM.toString() + ".png" + " ' height='40px'/>";

                                lstsp += "</div>";
                                lstsp += "<div class='col-xs-8' style='text-align:left'>";
                                //lstsp += "<span id='lblTenSanPham'></span>";
                                lstsp += result.d[i].TENSANPHAM.toString();
                                lstsp += "</div>";
                                lstsp += "</div>";
                                lstsp += "</div>";
                                lstsp += "<div class='col-xs-6'>";
                                lstsp += "<div class='row'>";
                                lstsp += "<div class ='col-xs-3'style='margin-top:5px;'>";

                                lstsp += "<span id='lblGiaSanPham'>" + number_format(parseFloat(result.d[i].DONGIA).toString(), 0).toString() + "</span>";
                                //document.getElementById('lblGiaSanPham').InnerHtml = result.d[i].DONGIA;
                                lstsp += "</div>";
                                lstsp += "<div class ='col-xs-3'style='padding-left:0px;padding-right:0px;'>";
                                //lstsp += "<div class='row'>";
                                lstsp += "<div class='col-xs-4'style='padding:0px;'>";
                                lstsp += "<button class='btn' style='width:100%;'>";
                                lstsp += "-";
                                lstsp += "</button>";
                                lstsp += "</div>";
                                lstsp += "<div class='col-xs-4'style='padding:0px;margin-top:5px;'>";
                                lstsp += "<input type='text' id='lblSoLuong' style='width:100%;text-align:center' value='" + result.d[i].SOLUONG + "'>";
                                tongSoLuong += parseFloat(result.d[i].SOLUONG.toString());
                                //document.getElementById('lblSoLuong').InnerHtml = result.d[i].SOLUONG;
                                lstsp += "</div>";
                                lstsp += "<div class='col-xs-4'style='padding:0px;'>";
                                lstsp += "<button class='btn'style='width:100%;'>";
                                lstsp += "+";
                                lstsp += "</button>";
                                lstsp += "</div>";

                                //lstsp += "</div>";

                                lstsp += "</div>";

                                lstsp += "<div class ='col-xs-3'style='margin-top:5px;'>";
                                lstsp += "<span id='lblThanhTienSanPham'>" + number_format(parseFloat(result.d[i].THANHTIEN).toString(), 0).toString() + "</span>";
                                //document.getElementById('lblThanhTienSanPham').InnerHtml = result.d[i].THANHTIEN;
                                tongTien += parseFloat(result.d[i].THANHTIEN.toString());
                                //alert(tongTien.toString());
                                lstsp += "</div>";

                                lstsp += "<div class ='col-xs-3'style='margin-top:5px;'>";
                                lstsp += "Xoá";
                                lstsp += "</div>";
                                lstsp += "</div>";
                                lstsp += "</div>";
                                lstsp += "</div>";
                                lstsp += "<hr style='margin-top:2px;margin-bottom:2px;background-color:#e00d0df2;border-color:#e00d0df2;margin-left:20px;margin-right:20px;'/>";

                            }
                            lstsp += "<br />";
                            lstsp += "</div>";

                            document.getElementById('gioHangODa').innerHTML = lstsp;
                            document.getElementById('lblTongTien').innerHTML = number_format(tongTien, 0).toString();
                            document.getElementById('lblTongSanPham').innerHTML = tongSoLuong.toString();

                        }
                        //console.log(ketQua.d.toString());
                        return;

                    }, error: function (ketQua) {
                        alert(ketQua.responseText);
                    }
                });                          
            }
        }, error: function (result) {
            alert(result.statusText);
        }
    });

}

function changeMaNhom(retString) {
    maNhom = retString;
    document.getElementById('hdfMaNhom').value = maNhom;
    alert(document.getElementById('hdfMaNhom').value.toString());
    
}

function getMaNhom(maSanPham) {
    return 
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        data: maSanPham,
        url: 'CartPage.aspx/fGetDanhSachChiTietDonHang',
        success: function (response) {
            if (response.d == null) {
                //alert("ma nhom rong");
                changeMaNhom("NULL");
            }
            if (response.d.length > 0) {
                changeMaNhom(response);
            }

            
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