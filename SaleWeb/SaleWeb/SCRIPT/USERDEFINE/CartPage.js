
function loadGioHang() {
    
    var lstHtml = "";
    var total = 0;
    var totalQuantity = 0;
    lstHtml += "<br/>";
    var tempOrderId = "{maDonHang:'" + 1 + "'}";
    
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        data: tempOrderId,
        url: 'CartPage.aspx/fGetListOrderDetails',
        success: function (result) {
            if (result.d == null) {
                alert("Cant load your Cart!");
                return;
            }
            
            if (result.d.length > 0) {
                //alert("ok");
                var productCode = "{maSanPham:'" + result.d[0].MASANPHAM.toString() + "'}";
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    dataType: 'json',
                    data: productCode,
                    url: 'CartPage.aspx/fGetGroup',
                    success: function (ketQua) {
                        if (ketQua.d == null) {
                            alert("ma nhom rong");

                        }
                        if (ketQua.d.length > 0) {
                            var groupCode = ketQua.d;
                            //alert(maNhom);
                            for (var i = 0; i < result.d.length; i++) {
                                lstHtml += "<div class='row backgroundRowProduct'>";
                                lstHtml += "<div class='col-xs-6'>";
                                lstHtml += "<div class='row'>";

                                lstHtml += "<div class='col-xs-4'>";
                                var imageFolder = "";
                                
                                //Lay ma nhom 
                                
                                //alert(maNhom);
                                //alert(document.getElementById("hdfMaNhom").value);
                                //maNhom = document.getElementById("hdfMaNhom").value.toString();

                                if (groupCode == "NHH_001") {
                                    imageFolder = "DONGHO";
                                }
                                else if (groupCode == "NHH_002") {
                                    imageFolder = "GIAYDEP";
                                }
                                else if (groupCode == "NHH_003") {
                                    imageFolder = "QUANAO";
                                }
                                else if (groupCode == "NHH_004") {
                                    imageFolder = "TUIXACH";
                                }
                                else if (groupCode == "NHH_005") {
                                    imageFolder = "NUOCHOA";
                                }
                                else if (groupCode == "NHH_006") {
                                    imageFolder = "KHAC";
                                }
                                var formatItem = "";
                                formatItem = "_" + result.d[i].MASANPHAM.toString()
                                    + "_" + result.d[i].SIZE.toString() + "_" + result.d[i].MAU.toString();
                                lstHtml += "<img src='../IMAGES/" + imageFolder + "/" + result.d[i].MASANPHAM.toString() + ".png" + " ' height='40px'/>";

                                lstHtml += "</div>";
                                lstHtml += "<div class='col-xs-8' style='text-align:left'>";
                                //lstHtml += "<span id='lblTenSanPham'></span>";
                                lstHtml += result.d[i].TENSANPHAM.toString();
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                lstHtml += "<div class='col-xs-6'>";
                                lstHtml += "<div class='row'>";
                                lstHtml += "<div class ='col-xs-3'style='margin-top:5px;'>";

                                lstHtml += "<span id='lblUnitPrice" + formatItem + "'>" + number_format(parseFloat(result.d[i].DONGIA).toString(), 0).toString() + "</span>";
                                //document.getElementById('lblGiaSanPham').InnerHtml = result.d[i].DONGIA;
                                lstHtml += "</div>";
                                lstHtml += "<div class ='col-xs-3'style='padding-left:0px;padding-right:0px;'>";
                                //lstHtml += "<div class='row'>";
                                lstHtml += "<div class='col-xs-4'style='padding:0px;'>";

                                //"<input type='button'" + " id='btnDelete" + formatItem + "'"
                                //+ "value = 'Delete' class='buttonDelete' style = 'background-color:white;width:100%;border:none;' /> ";
                                lstHtml += "<input type='button' onclick='minusQuantity(this.id)' style='width:100%;padding:0px;margin-top:5px' id='btnMinus"
                                    + formatItem + "' value='-'/> ";


                                //lstHtml += "<button class='btn' onclick='minusQuantity()' style='width:100%;' id='btnMinus"
                                //    + formatItem + "'> ";
                                //lstHtml += "-";
                                //lstHtml += "</button>";
                                lstHtml += "</div>";
                                lstHtml += "<div class='col-xs-4'style='padding:0px;margin-top:5px;'>";

                                lstHtml += "<input type='text' id='lblQuantity" + formatItem
                                    + "' style='width:100%;text-align:center' value='" + result.d[i].SOLUONG + "'>";
                                totalQuantity += parseFloat(result.d[i].SOLUONG.toString());
                                //document.getElementById('lblSoLuong').InnerHtml = result.d[i].SOLUONG;
                                lstHtml += "</div>";
                                lstHtml += "<div class='col-xs-4'style='padding:0px;'>";
                                //lstHtml += "<button class='btn' onclick='plusQuantity()' style='width:100%;' id='btnPlus"
                                //    + formatItem + "'> ";
                                //lstHtml += "+";
                                //lstHtml += "</button>";
                                lstHtml += "<input type='button' onclick='plusQuantity(this.id)' style='width:100%;padding:0px;margin-top:5px' id='btnPlus"
                                    + formatItem + "' value='+'/> ";
                                lstHtml += "</div>";

                                //lstHtml += "</div>";

                                lstHtml += "</div>";

                                lstHtml += "<div class ='col-xs-3'style='margin-top:5px;'>";
                                lstHtml += "<span id='lblTotalPrice" + formatItem + " '>" + number_format(parseFloat(result.d[i].THANHTIEN).toString(), 0).toString() + "</span>";
                                //document.getElementById('lblThanhTienSanPham').InnerHtml = result.d[i].THANHTIEN;
                                total += parseFloat(result.d[i].THANHTIEN.toString());
                                //alert(total.toString());
                                lstHtml += "</div>";

                                lstHtml += "<div class ='col-xs-3'style='margin-top:5px;'>";
                                lstHtml += "<input type='button'" + " id='btnDelete" + formatItem + "'"
                                + "value = 'Delete' class='buttonDelete' style = 'background-color:white;width:100%;border:none;' /> ";
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                lstHtml += "<hr style='margin-top:2px;margin-bottom:2px;background-color:#e00d0df2;border-color:#e00d0df2;margin-left:20px;margin-right:20px;'/>";

                            }
                            lstHtml += "<br />";
                            lstHtml += "</div>";

                            document.getElementById('gioHangODa').innerHTML = lstHtml;
                            document.getElementById('lblTotal').innerHTML = number_format(total, 0).toString();
                            document.getElementById('lblTotalQuantity').innerHTML = totalQuantity.toString();

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
function getQuantity(str, type) {
    var tempID = "";
    if (type == "-") {
        tempID = str.substring(8, str.len);
        tempID = "lblQuantity" + tempID;
    }
    if (type == "+") {
        tempID = str.substring(7, str.len);
        tempID = "lblQuantity" + tempID;
    }
    var currentQuantity = document.getElementById(tempID).value;
   
    return [currentQuantity,tempID];
    
}

function minusQuantity(id) {

    var [quantity,idQuantity] =[0," "];

    [quantity, idQuantity] = getQuantity(id, "-");

    if (quantity > 1) {
        quantity--;
        document.getElementById(idQuantity).value = quantity;
    }
    else {
        alert("Ko the giam");
    }
}

function plusQuantity(id) {
    var [quantity, idQuantity] = [0, " "];

    [quantity, idQuantity] = getQuantity(id, "+");
   
    quantity++;
    //handle display quantity

    document.getElementById(idQuantity).value = quantity;
    



}
function deleteProduct (){

}

function getButtonID(obj) {
    return obj;
}