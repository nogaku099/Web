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
                                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuTaiKhoan" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                    style="color: white; padding-top: 15px; background-color: #960b0b" runat="server">Menu Tài Khoản
                                </a>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink" style="background-color: #e42424; position: relative">
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
            <div class="row SearchArea" style="margin-left: 0px; margin-right: 0px; margin-top: -70px;">
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
        <!-- -->

        <div class="modal fade" id="modalCreateNewAddress" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;">
            <div class="modal-dialog" style="width: 80%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: White;">
                            <span aria-hidden="true" style="color: White; font-size: 28px;">×</span></button>
                        <h4 class="modal-title" style="color: white;">Add new Address</h4>
                    </div>

                    <div class="modal-body" style="padding-top: 0px;">
                        <div class="row">
                            <div class="col-xs-8" style="border-right: solid 1px gray;">
                                <div class="row" style="text-align: right; margin-top: 5px;">
                                    <label style="color: gray; font-size: small; margin-right: 15px;">
                                        Field with (*) is require</label>
                                </div>

                                <div class="row">
                                    <div class="col-xs-4">
                                        <div class="row" style="text-align: right;">
                                            <label style="font-size: x-small; color: red; width: 100%;">*</label>
                                        </div>
                                        <div class="row" style="margin-top: -15px; text-align: right;">
                                            <label style="width: 100%;">Receiver</label>
                                        </div>
                                    </div>

                                    <div class="col-xs-8">
                                        <input type="text" runat="server" id="txtReceiverName" required="required" style="border-radius: 5px; border: solid 1px gray; width: 100%; margin-top: 2px; height: 28px; padding-right: 5px;" />
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-xs-4">
                                        <div class="row" style="text-align: right;">
                                            <label style="font-size: x-small; color: red; width: 100%;">*</label>
                                        </div>
                                        <div class="row" style="margin-top: -15px; text-align: right;">
                                            <label style="width: 100%;">Phone number</label>
                                        </div>
                                    </div>

                                    <div class="col-xs-8">
                                        <input type="text" runat="server" id="txtPhoneNumber" required="required" style="border-radius: 5px; border: solid 1px gray; width: 100%; margin-top: 2px; height: 28px; padding-right: 5px;" />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xs-4">
                                        <div class="row" style="text-align: right;">
                                            <label style="font-size: x-small; color: red; width: 100%;">*</label>
                                        </div>
                                        <div class="row" style="margin-top: -15px; text-align: right;">
                                            <label style="width: 100%;">Address</label>
                                        </div>
                                    </div>

                                    <div class="col-xs-8">
                                        <input type="text" runat="server" id="txtAddress" required="required" style="border-radius: 5px; border: solid 1px gray; width: 100%; margin-top: 2px; height: 28px; padding-right: 5px;" />
                                    </div>
                                </div>

                                <div class="row">
                                </div>

                                <div class="row" style="text-align: center;">
                                    <div class="col-xs-4"></div>

                                    <div class="col-xs-8">

                                        <asp:Button runat="server" CssClass="btn" ID="btnAddAddress" Style="background-color: #960b0b; color: white; width: 100%;" Text="Add" OnClick="btnAddAddress_Click"></asp:Button>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div class="modal fade" id="modalCardPay" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;">
            <div class="modal-dialog" style="width: 100%;">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: White;">
                            <span aria-hidden="true" style="color: White; font-size: 28px;">×</span></button>
                        <h4 class="modal-title" style="color: white;">Card Pay</h4>
                    </div>

                    <div class="modal-body" style="padding-top: 0px;padding-left:50px">
                        <div class="row">
                            <div class="col-xs-6" style="width:225px">
                                <label for="">Name on card</label>
                                <input placeholder='Nguyen Van A' type='text' id="cardHolderName" />
                            </div>
                            <div class="col-xs-6" style="width:245px;">
                                <label for="">Card Number</label>
                                <input maxlength="16" placeholder="4478 6632 9923 8890" type="number" class="modifyInputNumber" id="cardNumber"/>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-xs-4" style="float:left;width:143px">
                                <label for="">Expiry Date</label>
                                <select id="monthPick">
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>
                            <div class="col-xs-4" style="float:left;width:143px;padding-top:25px">
                                <label for="">&#x200b;</label>
                                <select id="yearPick">
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                    <option>2026</option>
                                    <option>2027</option>
                                    <option>2028</option>
                                </select>
                            </div>
                            <div class="col-xs-4" style="float:left;width:143px">
                                <label for="">CVV</label>
                                <input maxlength="3" placeholder="633" type="number" class="modifyInputNumber" id="ccv"/>
                            </div>
                        </div>
                    

                        <div class="row">
                            <input type="button" class="btn btn-danger" value="Process" onclick="payByCard()" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
        
        <!-- Div Address-->
        <div runat="server" style="margin-top: 120px; background-color: white; height: 200px; border-radius: 5px 5px; margin-left: 50px; margin-right: 50px">
            <div style="color: red; align-content: center">
                <i class="fa fa-location-arrow" aria-hidden="true" style="color: red;"></i>Address
            </div>

            <!-- Div load Address -->
            <asp:Panel ID="address" OnLoad="address_Load" runat="server" Width="100%" ScrollBars="Horizontal" Height="200px">
                <div class="row" style="font-weight: bold">
                    <div class="col-xs-1">
                        <input type="radio" name="paymentType" value="AddressCode" />
                    </div>
                    <div class="col-xs-3" id="userNameAndPhone">
                        Nguyễn Văn A (+84) 132456789
                    </div>

                    <div class="col-xs-6" id="userAddress">
                        Đường Lê Văn Lương, Huyện Nhà Bè, TP. Hồ Chí Minh
                    </div>

                    <div class="col-xs-1">
                        <input type="button" value="Default" style="border: none; background-color: white; font-weight: bold" />
                    </div>
                    <div class="col-xs-1">
                        <input type="button" value="Change" style="border: none; background-color: white; font-weight: bold" />
                    </div>
                </div>
            </asp:Panel>



        </div>


        <br />
        <!-- Div List product (Cart) -->
        <div class="row" style="background-color: #960b0b; height: 50px; border-radius: 5px 5px; margin-left: 50px; margin-right: 50px; text-align: center; color: white; display: flex; justify-content: center; align-items: center;">
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
                    </div>
                </div>
            </div>
        </div>

        <br />

        <asp:Panel ID="cartHere" OnLoad="loadCartHere" runat="server" Width="100%">
        </asp:Panel>
        <%--Row Tong Tien--%>

        <div class="row" style="background-color: #960b0b; height: 50px; border-radius: 5px 5px; margin-left: 50px; margin-right: 50px; text-align: center; color: white">
            <div class="col-xs-1">
            </div>
            <div class="col-xs-11" style="text-align: right">
                Total (
                    <span style="color: #79ff16; font-weight: bold; font-size: larger" id="lblTotalQuantity">12
                    </span>
                product):
                    <span id="lblTotal" style="color: #79ff16; font-weight: bold; font-size: larger">50.000.000
                    </span>
            </div>

        </div>
        <br />
        <%--Row Phuong Thuc Thanh Toan--%>
        <div class="row" style="background-color: white; height: 50px; border-radius: 5px 5px; margin-left: 50px; margin-right: 50px; text-align: left">
            Choose your payment method:
            <br />
            <input type="radio" name="paymentType" value="COD" id="COD" />&nbsp Cash On Delivery(COD)<br />
            <input type="radio" name="paymentType" value="banking" id="banking" />&nbsp Internet Banking<br />
        </div>

        <div class="row" style="background-color: white; height: 50px; border-radius: 5px 5px; margin-left: 50px; margin-right: 50px; text-align: center">
            <input type="button" class="btn btn-danger btn-lg" value="Confirm" style="background-color: #960b0b" onclick="confirmOrder()" />
        </div>

        <!-- HiddenField -->
        <asp:HiddenField ID="hdfPaymentStatus" runat="server" ClientIDMode="Static" Value="0" />

    </form>
</body>
</html>
