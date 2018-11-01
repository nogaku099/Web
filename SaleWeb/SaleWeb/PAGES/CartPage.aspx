<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="CartPage.aspx.cs" Inherits="SaleWeb.PAGES.CartPage" %>

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



<body>
    <form id="form1" runat="server">
        <!--Div header -->
        <div>
            <!-- nav  -->

            <nav class="navbar navbar-fixed-top navbar-default narcustom">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="HomePage.aspx" style="color: white;">WEBSALE.com</a>
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
                                <a class="btn btn-secondary dropdown-toggle" onclick="fShowDangXuat();" href="#" role="button" id="dropdownMenuTaiKhoan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    style="color: white;padding-top:15px; background-color: #960b0b" runat="server">Menu Tài Khoản
                                </a>

                               <%-- <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="background-color: #e42424;position:relative">
                                    <a class="dropdown-item" href="#" style="color: white; background-color: #e42424; margin-left: 10px">Quản lý tài khoản
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </a>
                                    <br />
                                    <a class="dropdown-item" href="#" style="color: white; background-color: #e42424; margin-left: 10px">Đăng xuất
                                         <i class="fa fa-sign-out"></i>
                                    </a>
                                   
                                </div>--%>
                            </div>

                            <%--       data-toggle="modal" data-target="#modalDangNhap"--%>
                            
                        </li>



                    </ul>

                </div>
            </nav>
             <div class="modal fade" id="modalDangXuat" role="dialog" style="display: none">
                <div class="modal-dialog" style="width: 80%">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" style="color: white;">Account</h3>
                        </div>

                        <div class="modal-body" style="height:300px;">
                            <div class="col-xs-6">
                                <div class="row">
                                    <div class="col-xs-5">
                                        <label class=" lblInfo">Full name</label>
                                    </div>

                                    <div class="col-xs-7">
                                        <input type="text" class=" txtInfo" id="txtFullName" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-6">
                                       <label class="radSex">Male  </label><input  type="radio" id="radMale" name="G1"/>
                                         <label class="radSex">FeMale  </label><input  type="radio" id="radFeMale" name ="G1"/>
                                    </div>

                                </div>

                                 <div class="row">
                                    <div class="col-xs-5">
                                        <label class=" lblInfo">BirthDay</label>
                                    </div>

                                     <div class="col-xs-3">
                                        <label class="txtInfo" style="padding-left: 0;margin-right:-30px;border-bottom-right-radius:0px;border-top-right-radius:0;" id="lblDate">00/00/0000</label>
                                    </div>
                                    <div class="col-xs-4">
                                        <input type="date" class="txtInfo" style="margin-left: -20px;width: 115%;font-size: 18px;height: 28px;" id="txtDate" />
                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-xs-5">
                                        <label class=" lblInfo">Phone</label>
                                    </div>

                                    <div class="col-xs-7">
                                        <input type="text" class=" txtInfo" id="txtPhone" />
                                    </div>
                                </div>

                                 <div class="row">
                                    <div class="col-xs-5">
                                        <label class=" lblInfo">Email</label>
                                    </div>

                                    <div class="col-xs-7">
                                        <input type="text" class="txtInfo" id="txtEmail" />
                                    </div>
                                </div>

                                <div class="row">
                                     <input type="button" class="btnInfo" value="Update" onclick="fUpdateInfo();"/>
                                </div>
                            </div>

                            <div class="col-xs-6">
                               <div class="row">
                                    <div class="col-xs-5">
                                        <label class=" lblInfo">Old Password</label>
                                    </div>

                                    <div class="col-xs-7">
                                        <input type="password" class="txtInfo" id="txtOldPass" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-5">
                                        <label class=" lblInfo">New Password</label>
                                    </div>

                                    <div class="col-xs-7">
                                        <input type="password" class="txtInfo" id="txtNewPass" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-5">
                                        <label class=" lblInfo">Re Password</label>
                                    </div>

                                    <div class="col-xs-7">
                                        <input type="password" class="txtInfo" id="txtRetypePass" />
                                    </div>
                                </div>

                                <div class="row">
                                        <input type="button" class="btnInfo" id="txtChangePass" value="Change Password" onclick="fChangePassWord();" />
                                </div>



                                 <div class="row">
                                        <input type="button" class="btnInfo" id="txtLogOutPass" value="Log out" onclick="fLogOut();"/>
                                </div>

                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
            <!-- end nav -->

            <!-- row2 -->
            <%--<div class="row SearchArea" style="margin-left: 0px; margin-right: 0px;margin-top:-70px;">
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
            </div>--%>
        </div>



        <%--Div noi dung--%>
        <div runat="server" class="container" style="margin-top:120px;">
            <%--Row Thông tin--%>
            <div class="row backgroundRow">
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
            <%--Row SanPham--%>
            <asp:Panel ScrollBars="Horizontal" Height="400px" id="cartHere"  OnLoad="gioHangODay_Load" runat="server" Width="100%">

            </asp:Panel>

            <br />
            <%--Row Tong Tien--%>

            <div class="row backgroundRow">
                <div class="col-xs-1">
                </div>
                <div class="col-xs-11" style="text-align: right">

                    Total (
                    <span id="lblTotalQuantity">
                        12
                    </span>
                    product):
                    <span id="lblTotal">
                        50.000.000
                    </span>
                    <%--<button onclick="showCheckPage()" class="btn btn-success" style="color:white;height:50px;width:150px;font-size:large">
                        Buy
                    </button>--%>
                    <input type="button" class="btn btn-success" style="color:white;height:50px;width:150px;font-size:large" value="Buy" onclick="showCheckPage()"/>
                </div>
            </div>
        </div>
        <!-- HiddenField -->
        <asp:HiddenField ID="hdfMaNhom" runat="server" ClientIDMode="Static"/>
        <asp:HiddenField ID="hdfG" runat="server" ClientIDMode="Static"/>
        
        <asp:HiddenField ID="language" runat="server" ClientIDMode="Static" />
    </form>
</body>
</html>
