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
            lstsp += "<div class ='col-xs-3'>";
            lstsp += "1.550.000";
            lstsp += "</div>";
            lstsp += "<div class ='col-xs-3'>";
            lstsp += "<div class='row'>";
            lstsp += "<div class='col-xs-4'>";
            lstsp += "<button class='btn'>";
            lstsp += "-";
            lstsp += "</button>";
            lstsp += "</div>";
            lstsp += "<div class='col-xs-4'>";
            lstsp += "1";
            lstsp += "</div>";
            lstsp += "<div class='col-xs-4'>";
            lstsp += "<button class='btn'>";
            lstsp += "+";
            lstsp += "</button>";
            lstsp += "</div>";

            lstsp += "</div>";

            lstsp += "</div>";

            lstsp += "<div class ='col-xs-3'>";
            lstsp += "1.550.000";
            lstsp += "</div>";

            lstsp += "<div class ='col-xs-3'>";
            lstsp += "Xoá";
            lstsp += "</div>";
            lstsp += "</div>";
            lstsp += "</div>";
            lstsp += "</div>";
        }

        document.getElementById('hienGioHang').innerHTML = lstsp;

    }
    else {
        document.getElementById('hienGioHang').innerHTML = lstsp;
    }
    
}