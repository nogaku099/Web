function loadGioHang(emty) {
    //document.getElementById("btn").style.color = "red";
    //document.getElementById("btn").style.borderBottom = "solid 2px red";
    var lstsp = "";
    if (emty == "true") {
        
        //var dong = 1;
        //var cot = 0;

        lstsp += "<div class='row backgroundRow'>";

        lstsp += "<div class='col-xs-6'>";
        lstsp += "Sản phẩm";
        lstsp += "</div>"; //dong col 6

        lstsp += "<div class='col-xs-6'>";
        lstsp += "<div class='row'>";

        lstsp += "<div class='col-xs-3'>";
        lstsp += "Đơn giá";
        lstsp += "</div>";

        lstsp += "<div class='col-xs-3'>";
        lstsp += "Số lượng";
        lstsp += "</div>";

        lstsp += "<div class='col-xs-3'>";
        lstsp += "Số tiền";
        lstsp += "</div>";

        lstsp += "<div class='col-xs-3'>";
        lstsp += "Thao tác";
        lstsp += "</div>";

        lstsp += "</div>" //row cua col 6 
        lstsp += "</div>" //dong col 6 




        lstsp += "</div>"; // dong div thong tin

        lstsp += "<br />";
        //for hien thi san pham

        for (var i = 0; i < 7; i++) {
            
            lstsp += "<div class='row backgroundRowSanPham'>";
            lstsp += "<div class='col-xs-6'>";
            lstsp += "<div class='row'>";

            lstsp += "<div class='col-xs-4'>";
            lstsp += "<img src='../IMAGES/product.jpg' height='40px' />";
            lstsp += "</div>";

            lstsp += "<div class='col-xs-8' style='text-align:left'>";
            lstsp += "Nước hoa qưeifqipfjqiofhnqoebnoqeghioqhgioqhgiqo";
            lstsp += "</div>";
            lstsp += "</div>";
            lstsp += "</div>";
            lstsp += "<div class='col-xs-6'>";
            lstsp += "<div class='row'>";
            lstsp += "<div class ='col-xs-3'style='margin-top:5px;'>";
            lstsp += "1.550.000";
            lstsp += "</div>";
            lstsp += "<div class ='col-xs-3'style='padding-left:0px;padding-right:0px;'>";
//lstsp += "<div class='row'>";
            lstsp += "<div class='col-xs-4'style='padding:0px;'>";
            lstsp += "<button class='btn' style='width:100%;'>";
            lstsp += "-";
            lstsp += "</button>";
            lstsp += "</div>";
            lstsp += "<div class='col-xs-4'style='padding:0px;margin-top:5px;'>";
            lstsp += "<input type='text'style='width:100%;'>";
            lstsp += "</div>";
            lstsp += "<div class='col-xs-4'style='padding:0px;'>";
            lstsp += "<button class='btn'style='width:100%;'>";
            lstsp += "+";
            lstsp += "</button>";
            lstsp += "</div>";

          //  lstsp += "</div>";

            lstsp += "</div>";

            lstsp += "<div class ='col-xs-3'style='margin-top:5px;'>";
            lstsp += "1.550.000";
            lstsp += "</div>";

            lstsp += "<div class ='col-xs-3'style='margin-top:5px;'>";
            lstsp += "Xoá";
            lstsp += "</div>";
            lstsp += "</div>";
            lstsp += "</div>";
            lstsp += "</div>";
            lstsp += "<hr style='margin-top:2px;margin-bottom:2px;background-color:#e00d0df2;border-color:#e00d0df2;margin-left:20px;margin-right:20px;'/>"
        }

        document.getElementById('hienGioHang').innerHTML = lstsp;

    }
    else {
        document.getElementById('hienGioHang').innerHTML = lstsp;
    }
    
}