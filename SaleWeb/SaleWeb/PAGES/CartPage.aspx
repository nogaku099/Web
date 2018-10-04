﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CartPage.aspx.cs" Inherits="SaleWeb.PAGES.CartPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">

<head runat="server">
    <title>CartPage</title>
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/animate.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/bootstrap.min.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/Alert.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/CartPage.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/HomePage.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/font-awesome.min.css" />

    <script src="../SCRIPT/BOOTSTRAP/jquery-1.12.4.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/jquery-ui.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap.min.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap-dialog.js" type="text/javascript"></script>
    <script src="../SCRIPT/USERDEFINE/CartPage.js" type="text/javascript"></script>
    

</head>



<body onload="loadGioHang('true')">
    <form id="form1" runat="server">
        <!--Div header -->
        <div>
            <!-- nav  -->

            <nav class="navbar navbar-default narcustom">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#" style="color: white;">TRUONGHUNG.com</a>
                    </div>
                    <ul class="nav navbar-nav" style="float: right;">
                        <li><a href="#" style="color: white;">Thông báo
                             <i class="fa fa-car"></i>
                        </a>

                        </li>
                        <li><a href="#" style="color: white;">Hỗ trợ
                            <i class="fa fa-car"></i>
                        </a>

                        </li>
                        <li>
                            <div class="dropdown show">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuTaiKhoan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    style="color: white;padding-top:15px; background-color: #960b0b" runat="server">Menu Tài Khoản
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="background-color: #e42424">
                                    <a class="dropdown-item" href="#" style="color: white; background-color: #e42424; margin-left: 10px">Quản lý tài khoản
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </a>
                                    <br />
                                    <a class="dropdown-item" href="#" style="color: white; background-color: #e42424; margin-left: 10px">Đăng xuất
                                         <i class="fa fa-sign-out"></i>
                                    </a>
                                   
                                </div>
                            </div>

                            <%--       data-toggle="modal" data-target="#modalDangNhap"--%>
                            
                        </li>



                    </ul>

                </div>
            </nav>

            <!-- end nav -->

            <!-- row2 -->
            <div class="row SearchArea" style="margin-left: 0px; margin-right: 0px;">
                <div class="col-xs-3" style="text-align: center">
                    <img width="60px" height="60px" src="../Images/logo.png" />
                </div>

                <div class="col-xs-6" style="text-align: center">
                    <div class="row">
                        <div class="col-xs-8" style="padding-right: 0px;">
                            <input type="text" placeholder="Tim kiem..." class="searchtext" />
                        </div>

                        <div class="col-xs-4" style="padding-left: 0px; padding-top: 3px;">
                            <input type="button" class="btn searchbutton" value="Tìm" />
                        </div>
                    </div>

                </div>

                <div class="col-xs-3" style="text-align: center; margin-top: 10px;">
                    <img runat="server" onclick="fshowgiohang();" style="width: 30px; height: 30px;" src="../Images/cart.png" />
                    <label id="lblSoLuong" class="labelSL">10</label>
                </div>
            </div>
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
                        <div class="col-xs-3">
                            Đơn giá
                        </div>
                        <div class="col-xs-3">
                            Số lượng
                        </div>
                        <div class="col-xs-3">
                            Số tiền
                        </div>
                        <div class="col-xs-3">
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
                        <div class="col-xs-8" style="text-align: left">
                            Nước hoa qưeifqipfjqiofhnqoebnoqeghioqhgioqhgiqo
                        </div>
                    </div>
                </div>
                <div class="col-xs-6">
                    <div class="row">
                        <div class="col-xs-3">
                            1.550.000
                        </div>
                        <div class="col-xs-3">
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
                        <div class="col-xs-3">
                            1.550.000
                        </div>
                        <div class="col-xs-3">
                            Xoá
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <%--Row Tong Tien--%>

            <div class="row backgroundRow">
                <div class="col-xs-1">
                </div>
                <div class="col-xs-11" style="text-align: right">

                    Tổng Tiền (
                    <span id="lblTongSanPham">
                        12
                    </span>
                    sản phẩm):
                    <span id="lblTongTien">
                        50.000.000
                    </span>
                    <button class="btn btn-success" style="color:white;height:50px;width:150px;font-size:large">
                        Mua hàng
                    </button>
                </div>

            </div>
        </div>
    </form>
</body>
</html>
