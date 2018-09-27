<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HomePage.aspx.cs" Inherits="SaleWeb.FRONT_END.HomePage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>HomePage</title>
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/animate.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/bootstrap.min.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/Alert.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/HomePage.css" />
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
                        <li><a href="#"  id="lblTenDangNhap" runat="server" style="color: white;" onclick="fShowDangNhap();" >Đăng nhập
                            <i class="fa fa-sign-in"></i>
                     <%--       data-toggle="modal" data-target="#modalDangNhap"--%>
                            </a>
                        </li>

                        
                       
                    </ul>
                  
                </div>
            </nav>
              <div class="modal fade" id="modalDangNhap"  role="dialog"aria-labelledby="exampleModalLabel"style="display: none;">
                         <div class="modal-dialog" style="width:80%;">
                             <div class="modal-content">
                                 <div class="modal-header">
                                      <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="color:White;" >
                                      <span aria-hidden="true" style="color:White; font-size:28px;">×</span></button>
                                     <h4 class="modal-title"style="color:white;">Đăng nhập</h4>
                                 </div>

                                 <div class="modal-body"style="padding-top:0px;">
                                  <div class="row">
                                         <div class="col-xs-8"style="border-right:solid 1px gray;">
                                             <div class="row" style="text-align:right;margin-top:5px;">
                                                 <label style="color:gray;font-size:small;margin-right:15px;">
                                                     Những thông tin có dánh dấu (*) là bắt buộc nhập</label>
                                             </div>

                                             <div class="row">
                                                 <div class="col-xs-4">
                                                     <div class="row"style="text-align:right;">
                                                         <label style="font-size:x-small;color:red;width:100%;">*</label>
                                                     </div>
                                                     <div class="row"style="margin-top: -15px;text-align:right;">
                                                         <label style="width:100%;">Tên đăng nhập</label>
                                                     </div>
                                                 </div>

                                                 <div class="col-xs-8">
                                                     <input type="text" runat="server" id="txtTenDangNhap" required="required" style="border-radius:5px;border:solid 1px gray;width: 100%; margin-top: 2px;height: 28px;padding-right:5px;" />
                                                 </div>

                                             </div>

                                             <div class="row">
                                                 <div class="col-xs-4">
                                                     <div class="row"style="text-align:right;">
                                                         <label style="font-size:x-small;color:red;width:100%;">*</label>
                                                     </div>
                                                     <div class="row"style="margin-top: -15px;text-align:right;">
                                                         <label style="width:100%;">Mật khẩu</label>
                                                     </div>
                                                 </div>

                                                 <div class="col-xs-8">
                                                     <input type="password" runat="server" id="txtMatKhau" required="required" style="border-radius:5px;border:solid 1px gray;width: 100%; margin-top: 2px;height: 28px;padding-right:5px;" />
                                                 </div>
                                             </div>

                                             <div class="row">

                                             </div>

                                             <div class="row"style="text-align:center;" >
                                                 <div class="col-xs-4"></div>

                                                 <div class="col-xs-8">
                                                     <asp:Button runat="server" CssClass="btn" id="btnDangNhap" style="background-color:#960b0b;color:white;width:100%;"  Text="Đăng nhập" OnClick="btnDangNhap_Click"></asp:Button>
                                                 </div>
                                                 
                                             </div>
                                         </div>

                                         <div class="col-xs-4">
                                             <div class="row" style="text-align:center;margin-top:10px;">
                                                 <label>Bạn chưa có tài khoản ?</label>
                                             </div>

                                             <div class="row" style="text-align:center; margin-left:10px;margin-right:10px;">
                                                 <button type="button" class="btn" style="background-color:#960b0b; width:100%;color:white;">Đăng ký ngay</button>
                                             </div>

                                             <div class="row" style="margin-left:10px;margin-right:10px;text-align:center;margin-top:5px;">
                                                 <label style="width:100%;color:gray;">__________HOẶC___________</label>
                                             </div>

                                             <div class="row" style="text-align:center; margin-left:10px;margin-right:10px;">
                                                 <button type="button" class="btn" style="background-color:cornflowerblue; width:100%;color:white;">Đăng nhập bằng facebook</button>
                                             </div>

                                         </div>
                                     </div>
                                 </div>
                                 
                                
                             </div>
                         </div>
                     </div>
            <!-- end nav -->

            <!-- row2 -->
            <div class="row SearchArea"style=" margin-left:0px;margin-right:0px; ">
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
                    <img runat="server" onclick="fshowgiohang();" style="width:30px;height:30px;" src="../Images/cart.png"  />
                   
                </div>
            </div>

            <!-- row3 -->
            <div class="row parallax" style="text-align: center;margin-left:0px;margin-right:0px;">
               <%-- <img width="100%" alt="quang cao" src="../Images/quangcao.gif" />--%>
            </div>

            <!-- row4 -->
            <div class="row " style="text-align: center; margin-left: 10px; margin-right: 10px;margin-bottom:10px;">
                <div class="col-xs-4 " style="padding-left: 0px; padding-right: 0px;">
                    <label class="btn nhom active-nhom" id="btnGiayDep"onclick="fChonNhomHang('1');">Giày dép</label>
                </div>

                <div class="col-xs-4" style="padding-left: 0px; padding-right: 0px;">
                    <label class="btn nhom" id="btnQuanAo"onclick="fChonNhomHang('2');">Quần áo</label>
                </div>

                <div class="col-xs-4" style="padding-left: 0px; padding-right: 0px;">
                    <label class="btn nhom" id="btnNuocHoa"onclick="fChonNhomHang('3');">Nước hoa</label>
                </div>
            </div>

            <!-- row5 -->
            <div class="row" style="margin-left: 10px; margin-right: 10px; text-align: center;">
                <asp:Panel runat="server" ScrollBars="Both" Width="100%" Height="500px">
                    <div class="col-xs-3" style="text-align: center">
                        <div class="w3-card-4 cardProduct" >
                            <img src="../Images/product.jpg" alt="Norway" style="width: 100%" />
                            <div class="w3-container w3-center">
                                <p>The Italian / Austrian Alps</p>
                                <p>100,000d</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-3" style="text-align: center">
                        <div class="w3-card-4 cardProduct" >
                            <img src="../Images/product.jpg" alt="Norway" style="width: 100%" />
                            <div class="w3-container w3-center">
                                <p>The Italian / Austrian Alps</p>
                                <p>100,000d</p>
                            </div>
                        </div>
                    </div>


                    <div class="col-xs-3" style="text-align: center">
                        <div class="w3-card-4 cardProduct" >
                            <img src="../Images/product.jpg" alt="Norway" style="width: 100%" />
                            <div class="w3-container w3-center">
                                <p>The Italian / Austrian Alps</p>
                                <p>100,000d</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-3" style="text-align: center">
                        <div class="w3-card-4 cardProduct" >
                            <img src="../Images/product.jpg" alt="Norway" style="width: 100%" />
                            <div class="w3-container w3-center">
                                <p>The Italian / Austrian Alps</p>
                                <p>100,000d</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-3" style="text-align: center">
                        <div class="w3-card-4 cardProduct" >
                            <img src="../Images/product.jpg" alt="Norway" style="width: 100%" />
                            <div class="w3-container w3-center">
                                <p>The Italian / Austrian Alps</p>
                                <p>100,000d</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-3" style="text-align: center">
                        <div class="w3-card-4 cardProduct" >
                            <img src="../Images/product.jpg" alt="Norway" style="width: 100%" />
                            <div class="w3-container w3-center">
                                <p>The Italian / Austrian Alps</p>
                                <p>100,000d</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-3" style="text-align: center">
                        <div class="w3-card-4 cardProduct" >
                            <img src="../Images/product.jpg" alt="Norway" style="width: 100%" />
                            <div class="w3-container w3-center">
                                <p>The Italian / Austrian Alps</p>
                                <p>100,000d</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-3" style="text-align: center">
                        <div class="w3-card-4 cardProduct" >
                            <img src="../Images/product.jpg" alt="Norway" style="width: 100%" />
                            <div class="w3-container w3-center">
                                <p>The Italian / Austrian Alps</p>
                                <p>100,000d</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xs-3" style="text-align: center">
                        <div class="w3-card-4 cardProduct" >
                            <img src="../Images/product.jpg" alt="Norway" style="width: 100%" />
                            <div class="w3-container w3-center">
                                <p>The Italian / Austrian Alps</p>
                                <p>100,000d</p>
                            </div>
                        </div>
                    </div>

                    
                </asp:Panel>

            </div>

            <!-- row6 -->
            <div class="row footer "style="margin-left:0px;margin-right:0px;">
                <input type="text" value="Thực hiện bởi : " style="background-color: #862b2b; color: white; padding-left: 20px; border: none;" />
            </div>

        </div>
        





    <!-- HiddenField -->
        <asp:HiddenField id="hdfDangNhap" runat="server" ClientIDMode="Static" Value="0"/>
         <asp:HiddenField id="hdfMuaHang" runat="server" ClientIDMode="Static" Value="0"/>
    </form>
</body>
</html>
