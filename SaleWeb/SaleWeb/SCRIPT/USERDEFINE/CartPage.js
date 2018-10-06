
function loadGioHang() {
    
    var lstsp = "";
    var tongTien = 0;
    var tongSoLuong = 0;
    lstsp += "<br/>";
    //for (var i = 0; i < 7; i++) {

    //    lstsp += "<div class='row backgroundRowSanPham'>";
    //    lstsp += "<div class='col-xs-6'>";
    //    lstsp += "<div class='row'>";

    //    lstsp += "<div class='col-xs-4'>";
    //    lstsp += "<img src='../IMAGES/product.jpg' height='40px' />";
    //    lstsp += "</div>";

    //    lstsp += "<div class='col-xs-8' style='text-align:left'>";
    //    lstsp += "<span id='lblTenSanPham'>Nước hoa qưeifqipfjqiofhnqoebnoqeghioqhgioqhgiqo</span>";
    //    lstsp += "</div>";
    //    lstsp += "</div>";
    //    lstsp += "</div>";
    //    lstsp += "<div class='col-xs-6'>";
    //    lstsp += "<div class='row'>";
    //    lstsp += "<div class ='col-xs-3'style='margin-top:5px;'>";
    //    lstsp += "<span id='lblGiaSanPham'>1.550.000</span>";

    //    lstsp += "</div>";
    //    lstsp += "<div class ='col-xs-3'style='padding-left:0px;padding-right:0px;'>";
    //    //lstsp += "<div class='row'>";
    //    lstsp += "<div class='col-xs-4'style='padding:0px;'>";
    //    lstsp += "<button class='btn' style='width:100%;'>";
    //    lstsp += "-";
    //    lstsp += "</button>";
    //    lstsp += "</div>";
    //    lstsp += "<div class='col-xs-4'style='padding:0px;margin-top:5px;'>";
    //    lstsp += "<input type='text'style='width:100%;'>";
    //    lstsp += "</div>";
    //    lstsp += "<div class='col-xs-4'style='padding:0px;'>";
    //    lstsp += "<button class='btn'style='width:100%;'>";
    //    lstsp += "+";
    //    lstsp += "</button>";
    //    lstsp += "</div>";

    //    //lstsp += "</div>";

    //    lstsp += "</div>";

    //    lstsp += "<div class ='col-xs-3'style='margin-top:5px;'>";
    //    lstsp += "<span id='lblThanhTienSanPham'>1.550.000</span>";

    //    lstsp += "</div>";

    //    lstsp += "<div class ='col-xs-3'style='margin-top:5px;'>";
    //    lstsp += "Xoá";
    //    lstsp += "</div>";
    //    lstsp += "</div>";
    //    lstsp += "</div>";
    //    lstsp += "</div>";
    //    lstsp += "<hr style='margin-top:2px;margin-bottom:2px;background-color:#e00d0df2;border-color:#e00d0df2;margin-left:20px;margin-right:20px;'/>";


    //}
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
                
                for (var i = 0; i < result.d.length; i++) {
                    lstsp += "<div class='row backgroundRowSanPham'>";
                    lstsp += "<div class='col-xs-6'>";
                    lstsp += "<div class='row'>";

                    lstsp += "<div class='col-xs-4'>";
                    var tenThuMucHinh = "";
                    var maNhom = "";
                    var maSP = result.d[i].MASANPHAM.toString();

                    //Lay ma nhom 
                    //$.ajax({
                    //    type: 'POST',
                    //    contentType: 'application/json;charset=utf-8',
                    //    dataType: 'json',
                    //    data: maSP,
                    //    url: 'CartPage.aspx/fGetMaNhom',
                    //    success: function (result) {
                    //        if (result.d == null) {
                    //            alert("ma nhom rong");
                    //            return;
                    //        }
                    //        if (result.d.length > 0) {
                    //            maNhom = result.d.toString();
                    //        }
                    //        return;

                    //    }, error: function (result) {
                    //        alert(result.responseText);
                    //    }
                    //});
                    //alert(maNhom.toString());
                    maNhom = "NHH_001";
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
                    //alert(tenThuMucHinh.toString());
                    var duongDan = "";
                    duongDan = "/Images/" + tenThuMucHinh + "/" + result.d[i].MASANPHAM.toString() + ".png";
                    //alert(duongDan.toString());
                    lstsp += "<img src='../IMAGES/" + tenThuMucHinh + "/" + result.d[i].MASANPHAM.toString() + ".png" + " ' height='40px'/>";
                    //alert("<img src='../IMAGES/" + tenThuMucHinh + "/" + result.d[i].MASANPHAM.toString() + ".png" + " ' height='40px'/>");
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
                    lstsp += "<span id='lblGiaSanPham'>"+result.d[i].DONGIA+"</span>";
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
                    lstsp += "<input type='text' id='lblSoLuong' style='width:100%;' value='" + result.d[i].SOLUONG + "'>";
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
                    lstsp += "<span id='lblThanhTienSanPham'>" + result.d[i].THANHTIEN+"</span>";
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

                //Hien thi tong tien
                //lstsp += "<div class='row backgroundRow'>";
                //lstsp += "<div class='col-xs-12' style='text-align: right'>";
                //lstsp += "Tổng Tiền (";
                //lstsp += "<span id='lblTongSanPham'>";
                //lstsp += "2";
                //lstsp += "</span>";
                //lstsp += " sản phẩm):";
                //lstsp += "<span id='lblTongTien'>";
                //lstsp += "50.000.000";
                //lstsp += "</span>";
                //lstsp += "<button class='btn btn-success customButtonMuaHang'>";
                //lstsp += "Mua hàng";
                //lstsp += "</button>";
                //lstsp += "</div>";
                //lstsp += "</div>";

                lstsp += "</div>";

                document.getElementById('gioHangODa').innerHTML = lstsp;
                document.getElementById('lblTongTien').innerHTML = tongTien.toString();
                document.getElementById('lblTongSanPham').innerHTML = tongSoLuong.toString();
              //  return;
            }
        }, error: function (result) {
            alert(result.statusText);
        }
    });





   



}




