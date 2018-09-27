<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CartPage.aspx.cs" Inherits="SaleWeb.PAGES.CartPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>CartPage</title>
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/animate.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/bootstrap.min.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/Alert.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/CartPage.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/font-awesome.min.css" />

    <script src="../SCRIPT/BOOTSTRAP/jquery-1.12.4.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/jquery-ui.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap.min.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap-dialog.js" type="text/javascript"></script>
    <script src="../SCRIPT/USERDEFINE/CartPage.js" type="text/javascript"></script>
</head>
<body >

    
    <form id="form1" runat="server">
        <!--Div header -->
        <div>
            
        </div>
        

        <%--Div noi dung--%>
        <div class="container" id="hienGioHang">
            <%--Row Thông tin--%>
            <div class="row backgroundRow">
                <div class="col-xs-6">
                    Sản phẩm
                </div>
                <div class="col-xs-6">
                    <div class="row">
                        <div class ="col-xs-3">
                            Đơn giá
                        </div>
                        <div class ="col-xs-3">
                            Số lượng
                        </div>
                        <div class ="col-xs-3">
                            Số tiền
                        </div>
                        <div class ="col-xs-3">
                            Thao tác
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <%--Row SanPham--%>
            <div class="row backgroundRowSanPham">
                <div class="col-xs-6">
                    <div class="row">
                        <%--Hinh san pham--%>
                        <div class="col-xs-4">
                            <img src="../IMAGES/product.jpg" height="40px" />
                        </div>
                        <%--Ten san pham--%>
                        <div class="col-xs-8" style="text-align:left">
                            Nước hoa qưeifqipfjqiofhnqoebnoqeghioqhgioqhgiqo
                        </div>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="row">
                        <div class ="col-xs-3">
                            1.550.000
                        </div>
                        <div class ="col-xs-3">
                            <div class="row">
                                <div class="col-xs-4">
                                    <button class="btn">-</button>
                                </div>
                                <div class="col-xs-4">
                                     1
                                </div>
                                <div class="col-xs-4">
                                    <button class="btn">+</button>
                                </div>

                            </div>
                           
                        </div>
                        <div class ="col-xs-3">
                            1.550.000
                        </div>
                        <div class ="col-xs-3">
                            Xoá
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </form>
</body>
</html>
