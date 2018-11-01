<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="AdminManager.aspx.cs" Inherits="SaleWeb.PAGES.AdminManager" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Manager</title>

    <link rel="stylesheet" href="../CSS/BOOTSTRAP/animate.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/bootstrap.min.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/Alert.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/HomePage.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/ProductDetail.css" />
    <link rel="stylesheet" href="../CSS/USERDEFINE/AdminManager.css" />
    <link rel="stylesheet" href="../CSS/BOOTSTRAP/font-awesome.min.css" />

    <script src="../SCRIPT/BOOTSTRAP/jquery-1.12.4.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/jquery-ui.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap.min.js" type="text/javascript"></script>
    <script src="../SCRIPT/BOOTSTRAP/bootstrap-dialog.js" type="text/javascript"></script>
    <script src="../SCRIPT/USERDEFINE/AdminManager.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">




        <div class="modal fade" id="modalUpImage" role="dialog" style="display: none">
            <div class="modal-dialog" style="width: 80%">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" style="color: white;">Upload image</h3>
                    </div>

                    <div class="modal-body">
                        <div class="row">
                            <asp:FileUpload ID="FileUpload1" runat="server" />
                        </div>

                         <div class="row">
                             <label>Group code:</label>
                            <label id="lblGroupCode" runat="server"></label>
                        </div>

                        <div class="row">
                            <label style="color:red;">Warning: Naming your file as same as image code</label>
                        </div>
                        <div class="row">
                             <label>Image code:</label>
                            <label id="lblImageCode" runat="server"></label>
                        </div>

                       

                        <div class="row" style="text-align: center;">
                            <asp:Button ID="Button1" runat="server" Text="Submit" OnClick="Button1_Click" />
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <div class="row UpLoadContent" style="margin-left: 0px;">
            <div class="row UploadHeader" style="margin-left: 0px;margin-right:0px;">
                <h3 style="color: white;">Upload product</h3>
            </div>


            <div class="col-xs-6">
                <div class="row" style="text-align: center; width: 100%; margin-top: -20px;margin-bottom: 15px;">
                    <h2 style="background-color: white; color: #960b0b">Master</h2>
                </div>
                <div class="row" style="margin-left: 0px;margin-bottom:5px;">
                    <div class="col-xs-4" >
                        <label class="lbl">Group  </label>
                    </div>
                    
                    <div class="col-xs-8 ">
                        <select id="cbbgroup"class="cbb">
                            <option value="NHH_001">Đồng hồ</option>
                            <option value="NHH_003">Quần áo</option>
                            <option value="NHH_002">Giày dép</option>
                            <option value="NHH_004">Túi xách</option>
                            <option value="NHH_005">Nước hoa</option>
                            <option value="NHH_006">Khác</option>
                        </select>
                    </div>
                </div>

                <div class="row" style="margin-left: 0px;margin-bottom:5px;">
                    <div class="col-xs-4">
                        <label class="lbl">Name</label>
                    </div>
                    
                    <div class="col-xs-8">
                         <input type="text" id="txtName" class="txt"/>
                    </div>
                </div>


                <div class="row" style="margin-left: 0px;margin-bottom:5px;">
                    <div class="col-xs-4">
                        <label class="lbl">Des</label>
                    </div>
                    
                    <div class="col-xs-8">
                        <input type="text" id="txtDes" class="txt" />
                    </div>
                </div>
            </div>


            <div class="col-xs-6">
                <div class="row" style="text-align: center; width: 100%; margin-top: -20px;margin-bottom: 15px;">
                    <h2 style="background-color: white; color: #960b0b">Detail</h2>
                </div>

                <div class="row" style="margin-left: 0px;margin-bottom:5px;">
                    <div class="col-xs-4">
                        <label class="lbl">Unit</label>
                    </div>
                    
                    <div class="col-xs-8">
                        <input type="text" id="txtUnit" class="txt" />
                    </div>
                    
                </div>

                <div class="row" style="margin-left: 0px;margin-bottom:5px;">
                    <div class="col-xs-4">
                        <label class="lbl">Price</label>
                    </div>
                    
                    <div class="col-xs-8">
                        <input type="number" id="txtPrice" class="txt" />
                    </div>
                    
                </div>

                <div class="row" style="margin-left: 0px;margin-bottom:5px;">

                    <div class="col-xs-4">
                        <label class="lbl">Size</label>
                    </div>
                    
                    <div class="col-xs-8">
                        <select id="cbbsize" class="cbb">
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                </div>

                <div class="row" style="margin-left: 0px;margin-bottom:5px;">
                    <div class="col-xs-4">
                         <label class="lbl">Color</label>
                    </div>

                    <div class="col-xs-8">
                        <input type="color" id="color" name="color"
                        value="#e66465" style="width: 100%;margin-left: -30px;height: 42px;" />
                    </div>
                </div>

                <div class="row" style="margin-left: 0px;margin-bottom:5px;">
                    <div class="col-xs-4">
                         <label class="lbl">Flavour</label>
                    </div>
                   
                    <div class="col-xs-8">
                         <input type="text" id="txtFlavour" class="txt" />
                    </div>
                </div>

                <div class="row" style="margin-left: 0px;margin-bottom:5px;">
                    <div class="col-xs-4">
                        <label class="lbl">Capacity(ml)</label>
                    </div>
                    
                    <div class="col-xs-8">
                        <input type="text" id="txtCapacity" class="txt" />
                    </div>
                </div>

                <div class="row" style="margin-left: 0px;margin-bottom:5px;">
                    <div class="col-xs-4">
                        <label class="lbl">Sex</label>
                    </div>
                    
                    <div class="col-xs-8">
                        <select id="cbbsex" class="cbb">
                            <option value="1">Male</option>
                            <option value="0">Female</option>
                        </select>
                    </div>

                </div>
            </div>

            <div class="row" style="text-align: center;">
                <%--<asp:Button ID="btnUpLoad" runat="server" Text="UpLoad" CssClass="cbtnUpLoad" OnClick="btnUpLoad_Click" OnClientClick="fUpLoadProduct();" />--%>
                <input type="button" class="cbtnUpLoad" value="Upload" id="btnUpLoad" onclick="fUpLoadProduct();" />
            </div>


        </div>

        <div class="row" id="editrow">
            <div class="row UploadHeader" style="margin-left: -15px;">
                <h3 style="color: white;cursor:pointer;" onclick="fShowEdit();">Edit product</h3>
                <select id="cbbGroupEdit" class="cbbGroup" style="position:absolute" onchange="fReLoad();">
                    <option style="background-color:#960b0b" value="">All</option>
                    <option style="background-color:#960b0b" value="NHH_001">Đồng hồ</option>
                    <option style="background-color:#960b0b" value="NHH_002">Giày dép</option>
                    <option style="background-color:#960b0b" value="NHH_003">Quần áo</option>
                    <option style="background-color:#960b0b" value="NHH_004">Túi xách</option>
                    <option style="background-color:#960b0b" value="NHH_005">Nước hoa</option>
                    
                </select>
            </div>

            <div class="col-xs-6">
                <div class="row" style="box-shadow: 5px 5px 50px -15px;background-color:#226d47;height:30px;width:100%;margin-left: 0px;margin-bottom: 2px;">
                    <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Name</label>
                    </div>

                     <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Size</label>
                    </div>

                    <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Color</label>
                    </div>

                     <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Flavour</label>
                    </div>

                     <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Capacity</label>
                    </div>

                    <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Price</label>
                    </div>
                </div>

                 <asp:Panel ID="pnlProduct" runat="server" Height="600px" ScrollBars="Both">
                     <%--<div class="row itemrow" id="HH_0000001-S-Black-Woody-100" onclick="fGetInFo('HH_0000001','S','Black','Woody','100');" >
                    <div class="col-xs-2" style="text-align:center;">
                        <label style="color:#960b0b;" id ="Name-HH_0000001-S-Black-Woody-100">Name</label>
                    </div>

                     <div class="col-xs-2" style="text-align:center;">
                        <label style="color:#960b0b;" id ="Size-HH_0000001-S-Black-Woody-100">Size</label>
                    </div>

                    <div class="col-xs-2" style="text-align:center;">
                        <label style="color:#960b0b; " id ="Color-HH_0000001-S-Black-Woody-100">Color</label>
                    </div>

                     <div class="col-xs-2" style="text-align:center;">
                        <label style="color:#960b0b;" id ="Flavour-HH_0000001-S-Black-Woody-100">Flavour</label>
                    </div>

                     <div class="col-xs-2" style="text-align:center;">
                        <label style="color:#960b0b;" id ="Capacity-HH_0000001-S-Black-Woody-100">Capacity</label>
                    </div>

                    <div class="col-xs-2" style="text-align:center;">
                        <label style="color:#960b0b;" id ="Price-HH_0000001-S-Black-Woody-100">Price</label>
                    </div>


                </div>--%>
                     
                 </asp:Panel>
            </div>

             <div class="col-xs-6">
                <div class="row" style="margin-top:10px;">
                    <div class="col-xs-5">
                        <label class="lblEdit">Name</label>
                    </div>

                     <div class="col-xs-7">
                         <input type="text" id="txtNameEdit" class="txtEdit"/>
                    </div>
                </div>

                  <div class="row" style="margin-top:10px;">
                    <div class="col-xs-5">
                        <label class="lblEdit">Des</label>
                    </div>

                     <div class="col-xs-7">
                         <input type="text" id="txtDesEdit" class="txtEdit"/>
                    </div>
                </div>

                  <div class="row" style="margin-top:10px;">
                    <div class="col-xs-5">
                        <label class="lblEdit">Price</label>
                    </div>

                     <div class="col-xs-7">
                         <input type="number" id="txtPriceEdit" class="txtEdit"/>
                    </div>
                </div>


                  <div class="row" style="margin-top:10px;">
                     <div class="col-xs-5">
                        <label class="lblEdit">Sex</label>
                    </div>

                     <div class="col-xs-7">
                         <select id="txtSex" class="txtEdit" style="font-size: 28px;">
                             <option value="1">Male</option>
                             <option value="0">Female</option>
                         </select>
                    </div>
                </div>


                 <div class="row" style="margin-top:10px;text-align:center;">
                     
                     <div class="col-xs-8" style="margin-left: -15px;margin-bottom:10px;">
                          <h4 style="width:91%;background-color:#960b0b;color:white;margin-left:15px;height:25px;
                          border-top-left-radius:10px;border-top-right-radius:10px;">Image</h4>
                      
                         <div class="row" style="width:91%;margin-left:15px;height:300px;background-color:transparent;border:solid 1px #960b0b;margin-top:-10px;text-align:center;">
                             <img id="imgProduct" src="" alt="Product Image" style="width:300px;height:300px;"/>
                         </div>
                     </div>

                     <div class="col-xs-4" style="margin-left: -50px;margin-bottom: 10px;width: 40%;">
                         <h4 style="width:91%;background-color:#960b0b;color:white;margin-left:15px;height:25px;
                          border-top-left-radius:10px;border-top-right-radius:10px;">Change image</h4>

                         <div class="row" style="width:91%;margin-left:15px;height:300px;background-color:transparent;border:solid 1px #960b0b;margin-top:-10px;text-align:center;">
                             <asp:FileUpload ID="FileUpload2" runat="server" Font-Size="8" />
                             <output id="list"></output>
                             <asp:Button ID="btnUpdateImage"  runat="server" Text="Update image" BackColor="Green" CssClass="btnEditProduct" OnClick="btnUpdate_Click"  />
                         </div>
                     </div>

                     <div class="row"style="margin-top:20px;">
                         <div class="col-xs-6">
                             <input type="button" id="btnDelete" value="Delete product" class="btnEditProduct" onclick="fDeleteProduct();" />
                         </div>

                         <div class="col-xs-6">
                             <input type="button" id="btnUpdateProduct" style="background-color:green;" value="Update product" class="btnEditProduct" onclick="fUpdateProduct();" />
                         </div>

                         <label id="lblIDCUR" style="display:none"></label>
                         <label id="lblSIZECUR" style="display:none"></label>
                         <label id="lblCOLORCUR" style="display:none"></label>
                         <label id="lblFLAVOURCUR" style="display:none"></label>
                         <label id="lblCAPACUR" style="display:none"></label>

                     </div>
                    
                </div>

            </div>
        </div>

        <div class="row" id="OS">
            <div class="row UploadHeader" style="margin-left: -15px;">
                <h3 style="color: white;cursor:pointer;" onclick="fShowOS();">Order status</h3>
                <input type="button" onclick="fShowOrder();" value="Show order"/>
            </div>

            <div class="row" style="box-shadow: 5px 5px 50px -15px;background-color:#226d47;height:25px;width:98%;margin-left: 0px;margin-bottom: 2px;">
                    <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Order ID</label>
                    </div>

                     <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Customer</label>
                    </div>

                    <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Order date</label>
                    </div>

                     <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Total</label>
                    </div>

                     <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Type of Payment</label>
                    </div>

                    <div class="col-xs-2" style="text-align:center;border-right:solid 1px white;">
                        <label style="color:white;">Status</label>
                    </div>
                </div>


             <div class="modal fade" id="modalUpdateStatus" role="dialog" style="display: none">
                <div class="modal-dialog" style="width: 80%">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title" style="color: white;">Update order status</h3>
                        </div>

                        <div class="modal-body">
                           <asp:Panel runat="server" ID="loadStatus">

                           </asp:Panel>
                        </div>

                        
                    </div>
                </div>
            </div>

            <asp:Panel Height="620px" ScrollBars="Both" runat="server" Width="98%" ID="pnlOrder">

               <%-- <div class="row order animated flipInX" id="1112018" onclick="fUpdateStatus();">
                    <div class="col-xs-2"style="text-align:center";>
                        <label class="lblOrder" id="ID-1112018">1112018</label>
                    </div>

                    <div class="col-xs-2"style="text-align:center";>
                        <label class="lblOrder" id="ID-1112018">ABC</label>
                    </div>

                    <div class="col-xs-2"style="text-align:center";>
                        <label class="lblOrder" id="ID-1112018">1/11/2018</label>
                    </div>

                    <div class="col-xs-2"style="text-align:center";>
                        <label class="lblOrder" id="ID-1112018">1000000</label>
                    </div>

                    <div class="col-xs-2"style="text-align:center;">
                        <label class="lblOrder" id="ID-1112018">Cash</label>
                    </div>

                    <div class="col-xs-2" style="text-align:center;">
                        <label class="lblOrder" id="ID-1112018">Pending</label>
                    </div>
                </div>--%>

            </asp:Panel>

        </div>

    </form>
</body>
</html>
