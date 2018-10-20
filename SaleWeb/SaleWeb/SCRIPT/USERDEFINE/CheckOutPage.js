﻿function alertCustom(title, mess) {
    BootstrapDialog.show({
        title: title,
        message: mess
    });
}
function loadCart() {

    var lstHtml = "";
    var total = 0;
    var totalQuantity = 0;
    lstHtml += "<br/>";
    var tempOrderId = "{orderCode:'" + 1 + "'}";

    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset=utf-8',
        dataType: 'json',
        data: tempOrderId,
        url: 'CheckOutPage.aspx/fGetListOrderDetails',
        success: function (result) {
            if (result.d == null) {
                alertCustom("Error", "Cant load your Cart!");
                return;
            }

            if (result.d.length > 0) {

                var productCode = "{productCode:'" + result.d[0].MASANPHAM.toString() + "'}";
                $.ajax({
                    type: 'POST',
                    contentType: 'application/json;charset=utf-8',
                    dataType: 'json',
                    data: productCode,
                    url: 'CheckOutPage.aspx/fGetGroup',
                    success: function (ketQua) {
                        if (ketQua.d == null) {
                            alertCustom("Error", "Cant get group code");

                        }
                        //Get group code of each product to assign folder name for load product's image
                        if (ketQua.d.length > 0) {
                            var groupCode = ketQua.d;

                            for (var i = 0; i < result.d.length; i++) {
                                var formatItem = "";
                                formatItem = "_" + result.d[i].MASANPHAM.toString()
                                    + "_" + result.d[i].SIZE.toString() + "_" + result.d[i].MAU.toString();
                                var idRow = "";
                                idRow = "row" + formatItem;
                                lstHtml += "<div class='row backgroundRowProduct' style='margin-left:50px;margin-right:50px;' id='" + idRow + "'>";
                                lstHtml += "<div class='col-xs-6'>";
                                lstHtml += "<div class='row'>";

                                lstHtml += "<div class='col-xs-4'>";
                                var imageFolder = "";

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

                                lstHtml += "<img src='../IMAGES/" + imageFolder + "/" + result.d[i].MASANPHAM.toString() + ".png" + " ' height='40px'/>";

                                lstHtml += "</div>";
                                lstHtml += "<div class='col-xs-8' style='text-align:left'>";

                                lstHtml += result.d[i].TENSANPHAM.toString();
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                lstHtml += "<div class='col-xs-6'>";
                                lstHtml += "<div class='row'>";
                                lstHtml += "<div class ='col-xs-3'style='margin-top:5px;'>";

                                lstHtml += "<span id='lblUnitPrice" + formatItem + "'>" + number_format(parseFloat(result.d[i].DONGIA).toString(), 0).toString() + "</span>";

                                lstHtml += "</div>";
                                lstHtml += "<div class ='col-xs-3'style='padding-left:0px;padding-right:0px;'>";

                                lstHtml += "<div class='col-xs-4'style='padding:0px;'>";


                                //lstHtml += "<input type='button' onclick='minusQuantity(this.id)' style='width:100%;padding:0px;margin-top:5px' id='btnMinus"
                                //    + formatItem + "' value='-'/> ";

                                lstHtml += "</div>";
                                lstHtml += "<div class='col-xs-4'style='padding:0px;margin-top:5px;'>";

                                lstHtml += "<span id='lblQuantity" + formatItem
                                    + "' style='width:100%;text-align:center'>" + result.d[i].SOLUONG + "</span>";
                                totalQuantity += parseFloat(result.d[i].SOLUONG.toString());

                                lstHtml += "</div>";
                                lstHtml += "<div class='col-xs-4'style='padding:0px;'>";

                                //lstHtml += "<input type='button' onclick='plusQuantity(this.id)' style='width:100%;padding:0px;margin-top:5px' id='btnPlus"
                                //    + formatItem + "' value='+'/> ";
                                lstHtml += "</div>";

                                lstHtml += "</div>";

                                lstHtml += "<div class ='col-xs-3'style='margin-top:5px;'>";
                                lstHtml += "<span id='lblTotalPrice" + formatItem + "'>" + number_format(parseFloat(result.d[i].THANHTIEN).toString(), 0).toString() + "</span>";

                                total += parseFloat(result.d[i].THANHTIEN.toString());

                                lstHtml += "</div>";

                                lstHtml += "<div class ='col-xs-3'style='margin-top:5px;'>";
                                //lstHtml += "<input type='button'" + " id='btnDelete" + formatItem + "'"
                                //    + "value = 'Delete' class='buttonDelete' style = 'background-color:white;width:100%;border:none;' onclick='callAlertCustomConfirm(this.id)' /> ";
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                lstHtml += "</div>";
                                var idHr = "hr" + formatItem;
                                lstHtml += "<hr style='margin-top:2px;margin-bottom:2px;background-color:#e00d0df2;border-color:#e00d0df2;margin-left:50px;margin-right:50px;'" +
                                    "id='" + idHr + "'/>";

                            }
                            lstHtml += "<br />";
                            lstHtml += "</div>";

                            document.getElementById('cartHere').innerHTML = lstHtml;
                            document.getElementById('lblTotal').innerHTML = number_format(total, 0).toString();
                            document.getElementById('lblTotalQuantity').innerHTML = totalQuantity.toString();

                        }

                        return;

                    }, error: function (ketQua) {
                        alert(ketQua.responseText);
                    }
                });
            }
        }, error: function (result) {
            alert(result.responseText);
            alert("loadCart");
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
