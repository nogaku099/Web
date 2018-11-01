$(document).ready(function () {
    document.getElementById('FileUpload2').addEventListener('change', handleFileSelect, false);
});


function alertCustom(title, mess) {
    BootstrapDialog.show({
        title: title,
        message: mess
    });
}

function fUpLoadProduct() {
    var cbbgroup = document.getElementById("cbbgroup");
    var groupID = cbbgroup.options[cbbgroup.selectedIndex].value;

    var productName = document.getElementById("txtName").value;
    var productDes = document.getElementById("txtDes").value;
    var productUnit = document.getElementById("txtUnit").value;
    var productPrice = document.getElementById("txtPrice").value;

    var cbbsize = document.getElementById("cbbsize");
    var size = cbbsize.options[cbbsize.selectedIndex].value;

    var color = document.getElementById("color").value;
    var flavour = document.getElementById("txtFlavour").value;
    var capacity = document.getElementById("txtCapacity").value;

    var cbbsex = document.getElementById("cbbsex");
    var sex = cbbsex.options[cbbsex.selectedIndex].value;


    var variable = "{groupID:'" + groupID + "'";
    variable += ",productName:'" + productName + "'";
    variable += ",productDes:'" + productDes + "'";
    variable += ",productUnit:'" + productUnit + "'";
    variable += ",productPrice:'" + productPrice + "'";
    variable += ",size:'" + size + "'";
    variable += ",color:'" + color + "'";
    variable += ",flavour:'" + flavour + "'";
    variable += ",capacity:'" + capacity + "'";
    variable += ",sex:'" + sex + "'}";
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset:utf-8',
        dataType: 'json',
        data: variable,
        url: 'AdminManager.aspx/fUpLoadProduct',
        success: function (result) {
            if (result.d == null) {
                alertCustom("WEBSALE:", "Product has already. Choose another detail");
            }
            else if (result.d.length > 0) {
                document.getElementById('lblGroupCode').innerHTML = result.d[0];
                document.getElementById('lblImageCode').innerHTML = result.d[1];


                BootstrapDialog.show({
                    title: "WEBSALE:",
                    message: "Do you want to upload image for this product",
                    buttons: [{
                        label: "YES",

                        action: function (Itself) {
                            Itself.close();
                            $("#modalUpImage").modal();
                        }
                    }, {
                        label: "No",
                        action: function (Itself) {
                            Itself.close();
                        }
                    }]
                });

            }
        }, error: function (result) {

        }
    });


}

function fReLoad() {

    fReset();
    var cbbgroup = document.getElementById("cbbGroupEdit");
    var groupID = cbbgroup.options[cbbgroup.selectedIndex].value;

    var variable = "{groupID:'" + groupID + "'}";
    var lst_sp = "";
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset:utf-8',
        dataType: 'json',
        data: variable,
        url: 'AdminManager.aspx/fReLoad',
        success: function (result) {
            if (result.d == null) {
                alertCustom("Warning", "Something went wrong...or there is no product to display");
                document.getElementById("pnlProduct").innerHTML = "";
            } else {
                for (i = 0; i < result.d.length; i++) {
                    lst_sp += "<div class='row itemrow animated bounceIn' id='" + result.d[i].MASANPHAM + "-" + result.d[i].SIZE + "-" + result.d[i].MAU + "-" + result.d[i].MUIHUONG + "-" + result.d[i].DUNGTICH + "'onclick='fGetInFo(" + '"' + result.d[i].MASANPHAM + '"' + "," + '"' + result.d[i].SIZE + '"' + "," + '"' + result.d[i].MAU + '"' + "," + '"' + result.d[i].MUIHUONG + '"' + "," + '"' + result.d[i].DUNGTICH + '"' + ");' >";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label  class='lblIFo' id ='Name-" + result.d[i].MASANPHAM + "-" + result.d[i].SIZE + "-" + result.d[i].MAU + "-" + result.d[i].MUIHUONG + "-" + result.d[i].DUNGTICH + "'>" + result.d[i].TENSANPHAM + "</label>";
                    lst_sp += "</div>";


                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label  class='lblIFo' id ='Size-" + result.d[i].MASANPHAM + "-" + result.d[i].SIZE + "-" + result.d[i].MAU + "-" + result.d[i].MUIHUONG + "-" + result.d[i].DUNGTICH + "'>" + result.d[i].SIZE + "</label>";
                    lst_sp += "</div>";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label  style='width:100%;background-color:" + result.d[i].MAU + ";color:" + result.d[i].MAU + "' id ='Color-" + result.d[i].MASANPHAM + "-" + result.d[i].SIZE + "-" + result.d[i].MAU + "-" + result.d[i].MUIHUONG + "-" + result.d[i].DUNGTICH + "'>" + result.d[i].MAU + "</label>";
                    lst_sp += "</div>";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label  class='lblIFo' id ='Flavour-" + result.d[i].MASANPHAM + "-" + result.d[i].SIZE + "-" + result.d[i].MAU + "-" + result.d[i].MUIHUONG + "-" + result.d[i].DUNGTICH + "'>" + result.d[i].MUIHUONG + "</label>";
                    lst_sp += "</div>";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label  class='lblIFo' id ='Capacity-" + result.d[i].MASANPHAM + "-" + result.d[i].SIZE + "-" + result.d[i].MAU + "-" + result.d[i].MUIHUONG + "-" + result.d[i].DUNGTICH + "'>" + result.d[i].DUNGTICH + "</label>";
                    lst_sp += "</div>";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label  class='lblIFo' id ='Price-" + result.d[i].MASANPHAM + "-" + result.d[i].SIZE + "-" + result.d[i].MAU + "-" + result.d[i].MUIHUONG + "-" + result.d[i].DUNGTICH + "'>" + number_format(result.d[i].GIA1, 0) + "</label>";
                    lst_sp += "</div>";

                    lst_sp += "</div>";

                }
                document.getElementById("pnlProduct").innerHTML = "";
                document.getElementById("pnlProduct").innerHTML = lst_sp;
            }
        }, error: function (result) {

        }

    });

}

function fShowEdit() {

    $('html,body').animate({
        scrollTop: $("#editrow").offset().top
    }, 'slow');

}

function fShowOS() {
    $('html,body').animate({
        scrollTop: $("#OS").offset().top
    }, 'slow');


}

function fShowOrder() {
    var lst_sp = "";
    var variable = "{temp:'" + '1' + "'}";
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset:utf-8',
        dataType: 'json',
        data: variable,
        url: 'AdminManager.aspx/fShowOrder',
        success: function (result) {
            if (result.d == null) {

            } else {
                for (i = 0; i < result.d.length; i++) {
                    lst_sp += "<div class='row order animated flipInX' id=" + result.d[i].MADONHANG + " onclick='fShowUpdateStatus(this.id);'>";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label class='lblOrder' id='ID-" + result.d[i].MADONHANG + "'>" + result.d[i].MADONHANG + "</label>"
                    lst_sp += " </div>";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label class='lblOrder' id='CUS-" + result.d[i].MAKHACHHANG + "'>" + result.d[i].MAKHACHHANG + "</label>"
                    lst_sp += " </div>";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label class='lblOrder' id='DATE-" + ToJavaScriptDate(result.d[i].NGAYLAP) + "'>" + ToJavaScriptDate(result.d[i].NGAYLAP) + "</label>"
                    lst_sp += " </div>";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label class='lblOrder' id='TOTAL-" + number_format(result.d[i].TONGTIEN, 0) + "'>" + number_format(result.d[i].TONGTIEN, 0) + "</label>"
                    lst_sp += " </div>";


                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label class='lblOrder' id='PAYMETHOD-" + result.d[i].MAHINHTHUCTHANHTOAN + "'>" + result.d[i].MAHINHTHUCTHANHTOAN + "</label>"
                    lst_sp += " </div>";

                    lst_sp += "<div class='col-xs-2' style='text-align:center;'>";
                    lst_sp += "<label class='lblOrder' id='STATUS-" + result.d[i].MATRANGTHAI + "'>" + result.d[i].MATRANGTHAI + "</label>"
                    lst_sp += " </div>";

                    lst_sp += "</div>";

                }
                document.getElementById("pnlOrder").innerHTML = "";
                document.getElementById("pnlOrder").innerHTML = lst_sp;
            }
        }, error: function (result) {

        }
    });
}

function fGetInFo(productID, size, color, flavour, capacity) {

    var cbbgroup = document.getElementById("cbbGroupEdit");
    var groupID = cbbgroup.options[cbbgroup.selectedIndex].value;
    var variable = "{productID:'" + productID + "'";
    variable += ",size:'" + size + "'";
    variable += ",color:'" + color + "'";
    variable += ",flavour:'" + flavour + "'";
    variable += ",capacity:'" + capacity + "'";
    variable += ",groupID:'" + groupID + "'}";
    $.ajax({
        type: 'POST',
        contentType: 'application/json;charset:utf-8',
        dataType: 'json',
        data: variable,
        url: 'AdminManager.aspx/fGetInFo',
        success: function (result) {
            if (result.d == null) {
                alertCustom("Warning", "Something went wrong...");
            } else {

                document.getElementById('lblIDCUR').innerHTML = productID;
                document.getElementById('lblSIZECUR').innerHTML = size;
                document.getElementById('lblCOLORCUR').innerHTML = color;
                document.getElementById('lblFLAVOURCUR').innerHTML = flavour;
                document.getElementById('lblCAPACUR').innerHTML = capacity;
                document.getElementById('txtNameEdit').value = result.d[0];
                document.getElementById('txtDesEdit').value = result.d[1];
                document.getElementById('txtPriceEdit').value = result.d[2];
                var cbbsex = document.getElementById("txtSex");
                if (result.d[3] == "True") {
                    cbbsex.selectedIndex = 0;
                } else {
                    cbbsex.selectedIndex = 1;
                }

                var groupID = result.d[4];
                var folder = "";
                switch (groupID) {
                    case "NHH_001":
                        folder = "DONGHO";
                        break;
                    case "NHH_002":
                        folder = "GIAYDEP";
                        break;
                    case "NHH_003":
                        folder = "QUANAO";
                        break;
                    case "NHH_004":
                        folder = "TUIXACH";
                        break;
                    case "NHH_005":
                        folder = "NUOCHOA";
                        break;
                }
                var src = "../IMAGES/" + folder + "/" + productID + ".png";
                document.getElementById("imgProduct").src = src;

            }
        }, error: function (result) {
            alert("ERROR: fGetInFo");
        }
    });



}

function fReset() {
    document.getElementById('lblIDCUR').innerHTML = "";
    document.getElementById('lblSIZECUR').innerHTML = "";
    document.getElementById('lblCOLORCUR').innerHTML = "";
    document.getElementById('lblFLAVOURCUR').innerHTML = "";
    document.getElementById('lblCAPACUR').innerHTML = "";
    document.getElementById('txtNameEdit').value = "";
    document.getElementById('txtDesEdit').value = "";
    document.getElementById('txtPriceEdit').value = "";
    document.getElementById("imgProduct").src = "";
}


function fDeleteProduct() {

    var id = document.getElementById('lblIDCUR').innerHTML;
    var size = document.getElementById('lblSIZECUR').innerHTML;
    var color = document.getElementById('lblCOLORCUR').innerHTML;
    var fla = document.getElementById('lblFLAVOURCUR').innerHTML;
    var capa = document.getElementById('lblCAPACUR').innerHTML;

    if (id == "" || (size == "" || color == "") && (fla == "" || capa == "")) {
        alertCustom("WEBSALE:", "Choose one product to delete");
        return;
    }

    BootstrapDialog.show({
        title: "WEBSALE:",
        message: "Do you want to delete this product? This action can not undo!",
        buttons: [{
            label: "Yes",

            action: function (Itself) {
                Itself.close();


                var variable = "{id:'" + id + "'";
                variable += ",size:'" + size + "'";
                variable += ",color:'" + color + "'";
                variable += ",fla:'" + fla + "'";
                variable += ",capa:'" + capa + "'}";

                $.ajax({
                    type: 'POST',
                    contentType: 'application/json;charset:utf-8',
                    dataType: 'json',
                    data: variable,
                    url: 'AdminManager.aspx/fDeleteProduct',
                    success: function (result) {
                        if (result.d == "OK") {
                            alertCustom("WEBSALE:", "Product was deleted");
                            fReLoad();
                            fReset();
                        } else {
                            alertCustom("Warning", "Something went wrong...");
                        }

                    }, error: function (result) {
                        alert("ERROR: fDeleteProduct");
                    }
                });



            }
        }, {
            label: "No",
            action: function (Itself) {
                Itself.close();
            }
        }]
    });
}

function fUpdateProduct() {
    var id = document.getElementById('lblIDCUR').innerHTML;
    var size = document.getElementById('lblSIZECUR').innerHTML;
    var color = document.getElementById('lblCOLORCUR').innerHTML;
    var fla = document.getElementById('lblFLAVOURCUR').innerHTML;
    var capa = document.getElementById('lblCAPACUR').innerHTML;

    var newName = document.getElementById('txtNameEdit').value;
    var newDes = document.getElementById('txtDesEdit').value;
    var newPrice = document.getElementById('txtPriceEdit').value;

    var cbbSex = document.getElementById("txtSex");
    var newSex = cbbSex.options[cbbSex.selectedIndex].value;

    var cbbGroupEdit = document.getElementById("cbbGroupEdit");
    var groupID = cbbGroupEdit.options[cbbGroupEdit.selectedIndex].value;

    if (id == "" || (size == "" || color == "") && (fla == "" || capa == "")) {
        alertCustom("WEBSALE:", "Choose one product to update");
        return;
    }

    var variable = "{id:'" + id + "'";
    variable += ",size:'" + size + "'";
    variable += ",color:'" + color + "'";
    variable += ",fla:'" + fla + "'";
    variable += ",capa:'" + capa + "'";
    variable += ",name:'" + newName + "'";
    variable += ",des:'" + newDes + "'";
    variable += ",sex:'" + newSex + "'";
    variable += ",price:'" + newPrice + "'";
    variable += ",groupID:'" + groupID + "'}";

    $.ajax({

        type: 'POST',
        contentType: 'application/json;charset:utf-8',
        dataType: 'json',
        data: variable,
        url: 'AdminManager.aspx/fUpdateProduct',
        success: function (result) {
            if (result.d == "OK") {
                alertCustom("WEBSALE:", "Product up to date");
                fReLoad();
                fReset();
            } else {
                alertCustom("Warning", "Something went wrong...");
            }

        }, error: function (result) {
            alert("ERROR: fUpdateProduct");
        }

    });



}

function fShowUpdateStatus(orderCode) {

    $("#modalUpdateStatus").modal();
    var variable = "{orderCode:'" + orderCode +"'}";
    var lstHtml = "";
    
    $.ajax({

        type: 'POST',
        contentType: 'application/json;charset:utf-8',
        dataType: 'json',
        data: variable,
        url: 'AdminManager.aspx/fLoadStatus',
        success: function (result) {
            if (result.d == null) {
                alertCustom("Error:", "Cant get status of this order");
                
            } else {
                var status = parseFloat(result.d.MATRANGTHAI);
                lstHtml += "<div class='row'>";
                switch (status) {
                    
                    case 0:
                        lstHtml += "<div class='col-xs-2'>";
                        lstHtml += "<input type='button' value='ordering' disabled id='ordering' style='border: 1px solid red; background-color: white; font-weight: bold; color:grey' onclick='changeStatus(this.id,orderCode)' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='ordered' id='ordered' style='border: none; background-color: white; font-weight: bold; color: black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='confirmed' id='confirmed' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='delivering' id='delivering' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2'>"
                        lstHtml += "<input type='button' value='delivered'  id='delivered' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='complete' id='complete' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "</div>";

                        document.getElementById('loadStatus').innerHTML = lstHtml;
                        break;
                    case 1:
                        lstHtml += "<div class='col-xs-2'>";
                        lstHtml += "<input type='button' value='ordering' disabled id='ordering' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='ordered' disabled id='ordered' style='border: 1px solid red; background-color: white; font-weight: bold; color:grey; ' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='confirmed' id='confirmed' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='delivering' id='delivering' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2'>"
                        lstHtml += "<input type='button' value='delivered'  id='delivered' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='complete' id='complete' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "</div>";

                        document.getElementById('loadStatus').innerHTML = lstHtml;
                        break;
                    case 2:
                        lstHtml += "<div class='col-xs-2'>";
                        lstHtml += "<input type='button' value='ordering' disabled id='ordering' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='ordered' disabled id='ordered' style='border: none; background-color: white; font-weight: bold; color:grey; ' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='confirmed' disabled id='confirmed' style='border: 1px solid red; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='delivering' id='delivering' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2'>"
                        lstHtml += "<input type='button' value='delivered'  id='delivered' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='complete' id='complete' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "</div>";

                        document.getElementById('loadStatus').innerHTML = lstHtml;
                        break;
                    case 3:
                        lstHtml += "<div class='col-xs-2'>";
                        lstHtml += "<input type='button' value='ordering' disabled id='ordering' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='ordered' disabled id='ordered' style='border: none; background-color: white; font-weight: bold; color:grey; ' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='confirmed' disabled id='confirmed' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='delivering' disabled id='delivering' style='border: 1px solid red; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2'>"
                        lstHtml += "<input type='button' value='delivered'  id='delivered' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='complete' id='complete' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "</div>";

                        document.getElementById('loadStatus').innerHTML = lstHtml;
                        break;
                    case 4:
                        lstHtml += "<div class='col-xs-2'>";
                        lstHtml += "<input type='button' value='ordering' disabled id='ordering' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='ordered' disabled id='ordered' style='border: none; background-color: white; font-weight: bold; color:grey; ' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='confirmed' disabled id='confirmed' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='delivering' disabled id='delivering' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2'>"
                        lstHtml += "<input type='button' value='delivered' disabled id='delivered' style='border: 1px solid red; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='complete' id='complete' style='border: none; background-color: white; font-weight: bold; color:black' onclick='changeStatus(this.id,orderCode)'/>";
                        lstHtml += "</div>";
                        lstHtml += "</div>";

                        document.getElementById('loadStatus').innerHTML = lstHtml;
                        break;
                    case 5:
                        lstHtml += "<div class='col-xs-2'>";
                        lstHtml += "<input type='button' value='ordering' disabled id='ordering' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='ordered' disabled id='ordered' style='border: none; background-color: white; font-weight: bold; color:grey; ' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='confirmed' disabled id='confirmed' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='delivering' disabled id='delivering' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2'>"
                        lstHtml += "<input type='button' value='delivered' disabled  id='delivered' style='border: none; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "<div class='col-xs-2' >";
                        lstHtml += "<input type='button' value='complete' disabled id='complete' style='border: 1px solid red; background-color: white; font-weight: bold; color:grey' />";
                        lstHtml += "</div>";
                        lstHtml += "</div>";

                        document.getElementById('loadStatus').innerHTML = lstHtml;
                        break;
                    
                }
                
                
            }
            document.getElementById('loadStatus').innerHTML = lstHtml;
            return;
        }, error: function (result) {
            alert("ERROR: fLoadStatus");
        }

    });
    
    
    
    //lstHtml += "<input type='button' value='Default' disabled " + "id='def_" + addressCode + "'" + " style='border: none; background-color: white; font-weight: bold; color:grey' />";
}
function changeStatus(idStatus, orderCode) {
    var status = 0;
    if (idStatus == "ordering")
        status = 0;
    else if (idStatus == "ordered")
        status = 1;
    else if (idStatus == "confirmed")
        status = 2;
    else if (idStatus == "delivering")
        status = 3;
    else if (idStatus == "delivered")
        status = 4;
    else if (idStatus == "complete")
        status = 5;
    BootstrapDialog.show({
        title: "WEBSALE:",
        message: "Do you want to change status of this order? This action can not undo and you cant change status to lower!",
        buttons: [{
            label: "Yes",
            action: function (Itself) {
                Itself.close();


                var variable = "{orderCode:'" + BootstrapDialog.show({
                    title: "WEBSALE:",
                    message: "Do you want to delete this product? This action can not undo!",
                    buttons: [{
                        label: "Yes",

                        action: function (Itself) {
                            Itself.close();

                            var variable = "{status:'" + status + "'";
                            variable += ",orderCode:'" + orderCode + "'}";

                            $.ajax({
                                type: 'POST',
                                contentType: 'application/json;charset:utf-8',
                                dataType: 'json',
                                data: variable,
                                url: 'AdminManager.aspx/fUpdateStatus',
                                success: function (result) {
                                    if (result.d == "OK") {
                                        alertCustom("WEBSALE:", "Order status updated");
                                        
                                    } else {
                                        alertCustom("Warning", "Something went wrong...");
                                    }

                                }, error: function (result) {
                                    alert("ERROR: fUpdateStatus");
                                }
                            });



                        }
                    }, {
                        label: "No",
                        action: function (Itself) {
                            Itself.close();
                        }
                    }]
                }); 

            }
        }, {
            label: "No",
            action: function (Itself) {
                Itself.close();
            }
        }]
    });
}
function ToJavaScriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var dt = new Date(parseFloat(results[1]));
    return dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
}


function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    //document.getElementById("btnUpdateImage").style.visibility = 'visible';
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {

        // Only process image files.
        if (!f.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function (theFile) {
            return function (e) {
                // Render thumbnail.
                document.getElementById('list').innerHTML = "";
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result,
                    '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById('list').insertBefore(span, null);

            };
        })(f);

        // Read in the image file as a data URL.
        reader.readAsDataURL(f);
    }
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