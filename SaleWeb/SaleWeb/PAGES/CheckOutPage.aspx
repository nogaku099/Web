<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CheckOutPage.aspx.cs" Inherits="SaleWeb.PAGES.CheckOutPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>CheckOutPage</title>
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/animate.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/bootstrap.min.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/Alert.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/CartPage.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/HomePage.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/CheckOutPage.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/font-awesome.min.css" />

    <script src="../SCRIPT/BOOTSTRAP/jquery-1.12.4.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/jquery-ui.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap.min.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap-dialog.js" type="text/javascript"></script>

    <script src="../SCRIPT/USERDEFINE/CheckOutPage.js" type="text/javascript"></script>

</head>
<body>
    <form id="form1" runat="server">

        <!--Div header -->
            <!--Div header -->
        <div>
            <!-- nav  -->

            <nav class="navbar navbar-fixed-top navbar-default narcustom">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#" style="color: white;">WEBSALE.com</a>
                    </div>
                    <ul class="nav navbar-nav" style="float: right;">
                        <li><a href="#" style="color: white;">Thông báo
                             <i class="fa fa-car"></i>
                        </a>

                        </li>
                        <li><a href="#" style="color: white;">Support
                            <i class="fa fa-car"></i>
                        </a>

                        </li>
                        <li>
                            <div class="dropdown show">
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuTaiKhoan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    style="color: white;padding-top:15px; background-color: #960b0b" runat="server">Menu Tài Khoản
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="background-color: #e42424;position:relative">
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
            <div class="row SearchArea" style="margin-left: 0px; margin-right: 0px;margin-top:-70px;">
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



        <!--Div status check out -->
        <div>

        </div>
        <br />

        <!-- Div Address-->
        <div runat="server" style="margin-top:120px;background-color:white;height:200px;border-radius: 5px 5px;margin-left:50px;margin-right:50px">
            <div style="color:red;align-content:center">
                <i class="fa fa-location-arrow" aria-hidden="true" style="color:red;"></i> Address
            </div>

            <!-- Div load Address -->
            <div class="row" style="font-weight:bold">
                <div class="col-xs-4">
                    Phan Tuấn Trọng (+84) 974930868
                </div>

                <div class="col-xs-6">
                    Đường Lê Văn Lương, Huyện Nhà Bè, TP. Hồ Chí Minh
                </div>

                <div class="col-xs-1">
                    <input type="button" value="Default" style="border:none;background-color:white;font-weight:bold" />
                </div>
                <div class="col-xs-1">
                    <input type="button" value="Change" style="border:none;background-color:white;font-weight:bold"/>
                </div>
            </div>
            
        </div>


        <br />
        <!-- Div List product (Cart) -->
        <div class="row" style="background-color:white;height:50px;border-radius: 5px 5px;margin-left:50px;margin-right:50px;text-align:center">
                <div class="col-xs-6">
                    Product
                </div>
                <div class="col-xs-6">
                    <div class="row">
                        <div class="col-xs-3">
                            Unit Price
                        </div>
                        <div class="col-xs-3">
                            Quantity
                        </div>
                        <div class="col-xs-3">
                            Total Price
                        </div>
                        <div class="col-xs-3">
                            Actions
                        </div>
                    </div>
                </div>
            </div>
            <br />

        <%--<asp:Panel id="cartHere"  OnLoad="gioHangODay_Load" runat="server" Width="100%">

        </asp:Panel>--%>
    </form>
</body>
</html>
