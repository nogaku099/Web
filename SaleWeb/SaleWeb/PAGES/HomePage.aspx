<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HomePage.aspx.cs" Inherits="SaleWeb.FRONT_END.HomePage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>HomePage</title>
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/animate.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/bootstrap.min.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/Alert.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/HomePage.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/ProductDetail.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/font-awesome.min.css" />

    <script src="../SCRIPT/BOOTSTRAP/jquery-1.12.4.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/jquery-ui.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap.min.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap-dialog.js" type="text/javascript"></script>
    <script src="../SCRIPT/USERDEFINE/HomePage.js" type="text/javascript"></script>


</head>
<body>
    <form id="form1" runat="server">

        <div>
            <!-- nav  -->

            <nav class="navbar  navbar-fixed-top navbar-default narcustom">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="HomePage.aspx" style="color: white;">WEBSALE.com</a>
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

                        <li id="lblDangNhap" runat="server">
                            <%--<a href="#"  id="lblTenDangNhap" runat="server" style="color: white;" onclick="fShowDangNhap();" >Đăng nhập
                            <i class="fa fa-sign-in"></i>
                            </a>--%>
                            
                        </li>




                    </ul>

                </div>
            </nav>
            <div class="modal fade" id="modalDangNhap" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;">
                <div class="modal-dialog" style="width: 80%;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color: White;">
                                <span aria-hidden="true" style="color: White; font-size: 28px;">×</span></button>
                            <h4 class="modal-title" style="color: white;">Đăng nhập</h4>
                        </div>

                        <div class="modal-body" style="padding-top: 0px;">
                            <div class="row">
                                <div class="col-xs-8" style="border-right: solid 1px gray;">
                                    <div class="row" style="text-align: right; margin-top: 5px;">
                                        <label style="color: gray; font-size: small; margin-right: 15px;">
                                            Những thông tin có dánh dấu (*) là bắt buộc nhập</label>
                                    </div>

                                    <div class="row">
                                        <div class="col-xs-4">
                                            <div class="row" style="text-align: right;">
                                                <label style="font-size: x-small; color: red; width: 100%;">*</label>
                                            </div>
                                            <div class="row" style="margin-top: -15px; text-align: right;">
                                                <label style="width: 100%;">Tên đăng nhập</label>
                                            </div>
                                        </div>

                                        <div class="col-xs-8">
                                            <input type="text" runat="server" id="txtTenDangNhap" required="required" style="border-radius: 5px; border: solid 1px gray; width: 100%; margin-top: 2px; height: 28px; padding-right: 5px;" />
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-xs-4">
                                            <div class="row" style="text-align: right;">
                                                <label style="font-size: x-small; color: red; width: 100%;">*</label>
                                            </div>
                                            <div class="row" style="margin-top: -15px; text-align: right;">
                                                <label style="width: 100%;">Mật khẩu</label>
                                            </div>
                                        </div>

                                        <div class="col-xs-8">
                                            <input type="password" runat="server" id="txtMatKhau" required="required" style="border-radius: 5px; border: solid 1px gray; width: 100%; margin-top: 2px; height: 28px; padding-right: 5px;" />
                                        </div>
                                    </div>
                                    <div class="row">
                                    </div>

                                    <div class="row" style="text-align: center;">
                                        <div class="col-xs-4"></div>

                                        <div class="col-xs-8">
                                            <asp:Button runat="server" CssClass="btn" ID="btnDangNhap" Style="background-color: #960b0b; color: white; width: 100%;" Text="Đăng nhập" OnClick="btnDangNhap_Click"></asp:Button>
                                        </div>

                                    </div>
                                </div>

                                <div class="col-xs-4">

                                    <div class="row" style="text-align: center; margin-top: 10px;">
                                        <label>Bạn chưa có tài khoản ?</label>
                                    </div>

                                    <div class="row" style="text-align: center; margin-left: 10px; margin-right: 10px;">
                                        <button type="button" class="btn" style="background-color: #960b0b; width: 100%; color: white;" onclick="fShowReg();">Đăng ký ngay</button>
                                    </div>

                                    <div class="row" style="margin-left: 10px; margin-right: 10px; text-align: center; margin-top: 5px;">
                                        <label style="width: 100%; color: gray;">__________HOẶC__________</label>
                                    </div>

                                    <div class="row" style="text-align: center; margin-left: 10px; margin-right: 10px;">
                                        <button type="button" class="btn" style="background-color: cornflowerblue; width: 100%; color: white;">Đăng nhập bằng facebook</button>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

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

            <div class="modal fade" id="modalReg" role="dialog" style="display: none">
                <div class="modal-dialog" style="width: 80%">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" style="color: white;">Account registration</h3>
                        </div>

                        <div class="modal-body">
                            <div class="row">
                                <div class="col-xs-5">
                                    <label class="lblReg">User name</label>
                                </div>

                                <div class="col-xs-7">
                                    <input type ="text" class="txtReg"  id="txtUserNameReg" />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xs-5">
                                    <label class="lblReg">Password</label>
                                </div>

                                <div class="col-xs-7">
                                    <input type ="password" class="txtReg"  id="txtPassWordReg" />
                                </div>
                            </div>

                            <div class="row" style="text-align:center;">
                                <input type="button" id="btnReg" class="btn btnReg" value="Submit" onclick="fReg();" />
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
            <!-- end nav -->

            <!-- row2 -->
            <div class="row SearchArea" style="margin-left: 0px; margin-right: 0px;">
                <div class="col-xs-3" style="text-align: center">
                    <img width="60" height="60" src="../Images/logo.png" />
                </div>

                <div class="col-xs-6" style="text-align: center">
                    <div class="row">
                        <div class="col-xs-8" style="padding-right: 0px;">
                            <input type="text" id="txtTim" placeholder="Tim kiem..." class="searchtext" />
                        </div>

                        <div class="col-xs-4" style="padding-left: 0px; padding-top: 3px;">
                            <input type="button" id="btnTim" onclick="fTimKiem();" class="btn searchbutton" value="Tìm" />
                        </div>
                    </div>

                </div>

                <div class="col-xs-3" style="text-align: center; margin-top: 10px;">
                    <img runat="server" onclick="fshowgiohang();" style="cursor: pointer; width: 30px; height: 30px;" src="../Images/cart.png" />
                    <label id="lblSoLuong" class="labelSL"></label>
                </div>
            </div>

            <!-- row3 -->
            <div class="row parallax" style="text-align: center; margin-left: 0px; margin-right: 0px;">
                <img width="100%" alt="quang cao" src="../Images/quangcao.gif" />
            </div>

            <!-- row4 -->
            <div class="row " style="text-align: center; margin-left: 10px; margin-right: 10px; margin-bottom: 10px;">
                <div class="col-xs-2 " style="padding-left: 0px; padding-right: 0px;">
                    <label class="btn nhom active-nhom" id="btnDongHo" onclick="fChonNhomHang('NHH_001');">Đồng hồ</label>
                </div>

                <div class="col-xs-2" style="padding-left: 0px; padding-right: 0px;">
                    <label class="btn nhom" id="btnQuanAo" onclick="fChonNhomHang('NHH_003');">Quần áo</label>
                </div>

                <div class="col-xs-2" style="padding-left: 0px; padding-right: 0px;">
                    <label class="btn nhom" id="btnGiayDep" onclick="fChonNhomHang('NHH_002');">Giày dép</label>
                </div>

                <div class="col-xs-2" style="padding-left: 0px; padding-right: 0px;">
                    <label class="btn nhom" id="btnNuocHoa" onclick="fChonNhomHang('NHH_005');">Nước hoa</label>
                </div>

                <div class="col-xs-2" style="padding-left: 0px; padding-right: 0px;">
                    <label class="btn nhom" id="btnTuiXach" onclick="fChonNhomHang('NHH_004');">Túi xách</label>
                </div>

                <div class="col-xs-2" style="padding-left: 0px; padding-right: 0px;">
                    <label class="btn nhom" id="btnKhac" onclick="fChonNhomHang('NHH_004');">Khác</label>
                </div>
            </div>



            <!-- modal product detail -->
            <div class="modal fade" role="dialog" id="modalCardDetail" style="display:none;">
                <%--<div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-body detail">
                            <div class="row r1"></div>
                            <div class="row r2"></div>

                            <div class="container2">
                                <div class="row" style="margin-left: 0px; margin-right: 0px;">
                                    <div class="col-xs-6 c1" style="left: 0px;">


                                        <div class="row" style="margin-top: 120px;">
                                            <div class="row" style="padding-top: 5px; margin-left: 30px;">
                                                <label class="brand">swatch</label>
                                            </div>
                                            <div class="row" style="padding-top: 5px; width: 100px; margin-left: 30px;">
                                                <label class="name">Blue Rebel</label>
                                            </div>
                                            <div class="row" style="padding-top: 5px; width: 100px; margin-left: 30px;">
                                                <label class="price">1,000,000</label>
                                            </div>

                                            <div class="row" style="padding-top: 5px; width: 100px; margin-left: 30px;">
                                                <div class="col-xs-2 productSizeDetail" onclick="fSelectColor_Detail('HH_0000001','XS')" id="HH_0000001_XS">XS</div>
                                                <div class="col-xs-2 productSizeDetail" onclick="fSelectColor_Detail('HH_0000001','S')" id="HH_0000001_S">S</div>
                                                <div class="col-xs-2 productSizeDetail" onclick="fSelectColor_Detail('HH_0000001','M')" id="HH_0000001_M">M</div>
                                                <div class="col-xs-2 productSizeDetail" onclick="fSelectColor_Detail('HH_0000001','L')" id="HH_0000001_L">L</div>
                                                <div class="col-xs-2 productSizeDetail" onclick="fSelectColor_Detail('HH_0000001','XL')" id="HH_0000001_XL">XL</div>
                                                <div class="col-xs-2 productSizeDetail" onclick="fSelectColor_Detail('HH_0000001','XXL')" id="HH_0000001_XXL">XXL</div>
                                            </div>

                                            <div class="row" style="padding-top: 5px; width: 100px; margin-left: 30px;">
                                                <div class="col-xs-2 productColorDetail " id="HH_0000001_M1">M1
                                                    <i class="fa fa-check animated rotateIn" id="HH_0000001_M1_check" style="display:none; font-size: 20px;color: green; margin-left: -4px;position:absolute"></i>
                                                </div>
                                                <div class="col-xs-2 productColorDetail" id="HH_0000001_M2">M2
                                                    <i class="fa fa-check rotateIn" id="HH_0000001_M2_check" style="display:none; font-size: 20px;color: green;  margin-left: -4px;position:absolute;"></i>
                                                </div>
                                                <div class="col-xs-2 productColorDetail" id="HH_0000001_M3">M3
                                                    <i class="fa fa-check rotateIn" id="HH_0000001_M3_check" style="display:none; font-size: 20px;color: green;  margin-left: -4px;position:absolute;"></i>
                                                </div>
                                                <div class="col-xs-2 productColorDetail" id="HH_0000001_M4">M4
                                                    <i class="fa fa-check rotateIn" id="HH_0000001_M4_check" style="display:none; font-size: 20px;color: green;  margin-left: -4px;position:absolute;"></i>
                                                </div>
                                                <div class="col-xs-2 productColorDetail" id="HH_0000001_M5">M5
                                                    <i class="fa fa-check rotateIn" id="HH_0000001_M5_check" style="display:none; font-size: 20px;color: green;  margin-left: -4px;position:absolute;"></i>
                                                </div>
                                                <div class="col-xs-2 productColorDetail" id="HH_0000001_M6">M6
                                                    <i class="fa fa-check rotateIn" id="HH_0000001_M6_check" style="display:none; font-size: 20px;color: green;  margin-left: -4px;position:absolute;"></i>
                                                </div>
                                            </div>
                                            <div class="row" style="padding-top: 5px; width: 100px; margin-left: 30px; display:none;">
                                                <label id="size_detail_HH_0000001"></label>
                                                <label id="color_detail_HH_0000001"></label>
                                                <label id="qty_detail_HH_0000001"></label>
                                            </div>

                                        </div>


                                    </div>
                                    <div class="col-xs-6 c2" style="left: 0px;">

                                        <div class="row" style="margin-top: 120px; margin-right: 10px;">

                                            <div class="row" style="padding-top: 15px; margin-left: 80px; text-align: center; height: 130px">
                                                <label class="des">Snciacnadi diasjd idjisdis dsidjsijd sisjdisjds dsd odkwd okdod dokod sssuot fdijidj ssin jisjdisdsidsijd ijsd iijs asdasd sidjsidj sdijsidjsid sdisjijsd sdisjdi sdijsijd sidjisjd dsd</label>
                                            </div>

                                            <div class="row" style="margin-left: 120px; margin-top: 60px">
                                                <label>Qty: </label>
                                                <input type="number" id="qty_detail" style="width: 50px; height: 30px; text-align: center;" onchange="fChangeQtyDetail('HH_0000001')" />
                                            </div>

                                        </div>

                                        <div class="row" style="height: 30%;">
                                            <div class="row" style="margin-left: 110px; padding-top: 10px;">
                                                <input type="button" class="btn btn-cart" value="Add to cart"/>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="../IMAGES/DONGHO/HH_0000002.png" class="img" style="z-index: 5;" />
                                    <label class="group">Watch</label>
                                    <input type="button" class="btn btn-exit" onclick="fExit_Detail('HH_0000001')" value="X"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>--%>
                </div>
                <!-- end modal product detail-->

                <!-- row5 -->
                <div class="row" id ="r5" style="margin-right: 10px;">

                    <asp:Panel ID="pnlSanPham" runat="server" ScrollBars="Both" Width="100%" Height="500px" OnLoad="pnlSanPham_Load">

                        <%--<div class="col-xs-2 productCard animated bounceIn">
                        <div class="row cardProductHeader" >
                            <img src="../IMAGES/DONGHO/HH_0000001.png" class="productImage"   />
                        </div>

                        <div class="row cardProductBody" >
                            <div class="row ProductName">
                               <label style="width:100%;font-size:18px;white-space:pre-wrap;" >ABCDEFGH</label>
                            </div>
                            <hr style="margin-top:0px;margin-bottom:0px;margin-left:20px;margin-right:20px;"/>
                            <div class="row" style="margin-left:10px;margin-right:10px;text-align:left;font-weight:bold;">Size</div>
                            

                            <div class="row" style="margin-left:10px;margin-right:10px;text-align:left;">
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;">
                                    <label id="sizeXS" class="productSize" onclick="fChonSize('XS');">XS</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;">
                                    <label  id="sizeS"  class="productSize" onclick="fChonSize('S');">S</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;">
                                    <label  id="sizeM"  class="productSize" onclick="fChonSize('M');">M</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;">
                                    <label  id="sizeL" class="productSize" onclick="fChonSize('L');">L</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;">
                                    <label  id="sizeXL" class="productSize" onclick="fChonSize('XL');">XL</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;">
                                    <label  id="sizeXXL" class="productSize" onclick="fChonSize('XXL');">XXL</label>
                                </div>
                            </div>

                            <div class="row" style="margin-left:10px;margin-right:10px;text-align:left;font-weight:bold;">Màu</div>
                            
                            <div class="row" style="margin-left:10px;margin-right:10px;text-align:left;">
                                 <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;">
                                    <label id="mau1" class="productColor" style="background-color:aliceblue;" onclick="fChonMau('mau1','aliceblue');">aliceblue</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;">
                                    <label  id="mau2"  class="productColor" style="background-color:#862b2b;" onclick="fChonMau('mau2','#862b2b');">#862b2b</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;">
                                    <label  id="mau3"  class="productColor" style="background-color:yellow;" onclick="fChonMau('mau3','#862b2b');">#862b2b</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;">
                                    <label  id="mau4" class="productColor" style="background-color:black;" onclick="fChonMau('mau4','#862b2b');">#862b2b</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;">
                                    <label  id="mau5" class="productColor" style="background-color:pink;" onclick="fChonMau('mau5','#862b2b');">#862b2b</label>
                                </div>
                                <div class="col-xs-2"style="text-align:center;padding-left:0px;padding-right:0px;margin-top:-10px;">
                                    <label  id="mau6" class="productColor" style="background-color:blue;" onclick="fChonMau('mau6','#862b2b');">#862b2b</label>
                                </div>
                            </div>

                            <div class="row">
                                <button type="button" id="btnMuaHang" onclick="fMuaHang();" class="btn btn-success productPrice animated bounceInLeft" >100000 VND</button>
                            </div>
                        </div>
                    </div>--%>
                    </asp:Panel>
                </div>

                <!-- row6 -->
                <div class="row footer " style="margin-left: 0px; margin-right: 0px;">
                    <input type="text" value="Thực hiện bởi : " style="background-color: #862b2b; color: white; padding-left: 20px; border: none;" />
                </div>

            </div>






            <!-- HiddenField -->
            <asp:HiddenField ID="hdfDangNhap" runat="server" ClientIDMode="Static" Value="0" />
            <asp:HiddenField ID="hdfMuaHang" runat="server" ClientIDMode="Static" Value="0" />
    </form>
</body>
</html>
