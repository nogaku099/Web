<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="HomePage.aspx.cs" Inherits="SaleWeb.FRONT_END.HomePage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>HomePage</title>
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/animate.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/bootstrap.min.css" />
    <link rel="stylesheet" href="../CSS/USER DEFINE/alert.css" />
    <link rel="stylesheet" href="../CSS/USER DEFINE/HomePage.css" />

    <script src="../SCRIPT/BOOTSTRAP/jquery-1.12.4.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/jquery-ui.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap.min.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap-dialog.js" type="text/javascript"></script>
    <script src="../SCRIPT/USER DEFINE/HomePage.js" type="text/javascript"></script>


</head>
<body>
    <form id="form1" runat="server">
        <div>
            <!-- row 1 -->
            <div class="row toolbar">
                <div class="col-xs-9 coltoolbar9"></div>
                <div class="col-xs-1 coltoolbar">
                    <label>thongbao</label>
                </div>
                <div class="col-xs-1 coltoolbar">
                    <label>thongbao</label>
                </div>
                <div class="col-xs-1 coltoolbar">
                    <label id="lblTenDangNhap">truonghung.t2h4995@gmmail.com</label>
                </div>
            </div>


            <!-- row2 -->
            <div class="row searchbar" >
                <input type="button"class="btn btn-menu" id="btn" value="abc" onclick="fonclick()" />


            </div>

        </div>



        <div>



        </div>
        <div></div>


        <asp:Panel runat="server" id="lst">
           

        </asp:Panel>

        <div></div>
        <div></div>
    </form>
</body>
</html>
