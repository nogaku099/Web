<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="SaleWeb.PAGES.Admin" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Admin</title>

    <link rel="stylesheet" href="../CSS/BOOTSTRAP/animate.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/bootstrap.min.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/Alert.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/HomePage.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/ProductDetail.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/Admin.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/font-awesome.min.css" />

    <script src="../SCRIPT/BOOTSTRAP/jquery-1.12.4.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/jquery-ui.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap.min.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap-dialog.js" type="text/javascript"></script>
    
    <script src="../SCRIPT/USERDEFINE/Admin.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="row loginbox">
            <div class="row" style="text-align: center;">
                <h3 style="color: white">Login</h3>
            </div>
            <hr />

            <div class="row">
                <div class="col-xs-5">
                    <label class="lblLog">Username</label>
                </div>

                <div class="col-xs-7">
                    <input runat="server" type="text" class="txtLog" id="txtAdLog" />
                </div>
            </div>

            <div class="row">
                <div class="col-xs-5">
                    <label class="lblLog">Password</label>
                </div>

                <div class="col-xs-7">
                    <input runat="server" type="password" class="txtLog" id="txtPassAdLog" />
                </div>
            </div>

            <div class="row">
                <asp:Button runat="server" Text="Log In" ID="btnAdLog" CssClass="btnAdLog" OnClick="btnAdLog_Click" />
            </div>

        </div>



    </form>
</body>
</html>
