﻿using SaleWeb.THU_VIEN;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace SaleWeb.PAGES
{
    public partial class CheckOutPage : System.Web.UI.Page
    {
        public static StoreProcedure sp;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (sp == null)
            {
                sp = getConnect();
            }
            if (HttpContext.Current.Session["DANGNHAP"] != null && HttpContext.Current.Session["DANGNHAP"].ToString() != "")
            {
                dropdownMenuTaiKhoan.InnerHtml = HttpContext.Current.Session["DANGNHAP"].ToString() + " <i class='fa fa-sign-in'></i>";

                string key = System.Configuration.ConfigurationManager.AppSettings["language"];



            }
            else
            {
                //DataTable dt = sp.getDataTable()
                //HttpContext.Current.Session["GIOHANG"] = 
            }
        }
        public static bool checkSSGioHang()
        {
            if (HttpContext.Current.Session["GIOHANG"] != null && HttpContext.Current.Session["GIOHANG"].ToString() != "")
            {
                return true;

            }
            else
            {
                return false;
            }
        }

        public static List<string> getOrderCodeAndCustomerCode()
        {
            //orderCode = Session GIOHANG
            string orderCode = "";
            string customerCode = "";
            List<string> lst = new List<string>();
            if (HttpContext.Current.Session["GIOHANG"] != null && HttpContext.Current.Session["GIOHANG"].ToString() != ""
                && HttpContext.Current.Session["MAKHACH"] != null && HttpContext.Current.Session["MAKHACH"].ToString() != "")
            {
                orderCode = HttpContext.Current.Session["GIOHANG"].ToString();
                customerCode = HttpContext.Current.Session["MAKHACH"].ToString();
                lst.Add(orderCode);
                lst.Add(customerCode);
                return lst;
            }
            else return null;
        }

        public StoreProcedure getConnect()
        {
            string connect = ConfigurationManager.ConnectionStrings["Connect"].ConnectionString;
            //ScriptManager.RegisterStartupScript(this, typeof(Page), "Alert", "<script>alert('" + cs+ "');</script>", false);
            string[] arrListStr = connect.Split(new char[] { ';' });
            string server = arrListStr[0].Substring(arrListStr[0].IndexOf('=') + 1, arrListStr[0].Length - (arrListStr[0].IndexOf('=') + 1));
            string data = arrListStr[1].Substring(arrListStr[1].IndexOf('=') + 1, arrListStr[1].Length - (arrListStr[1].IndexOf('=') + 1));
            //string server = arrListStr[2].Substring(arrListStr[0].IndexOf('=') + 1, arrListStr[0].Length - (arrListStr[0].IndexOf('=') + 1));
            string user = arrListStr[3].Substring(arrListStr[3].IndexOf('=') + 1, arrListStr[3].Length - (arrListStr[3].IndexOf('=') + 1));
            string pass = arrListStr[4].Substring(arrListStr[4].IndexOf('=') + 1, arrListStr[4].Length - (arrListStr[4].IndexOf('=') + 1));
            StoreProcedure sp = new StoreProcedure(server, data, user, pass);
            return sp;
        }

        #region WebMethod
        [WebMethod]
        public static string fclearSS(string customerCode)
        {
           
            HttpContext.Current.Session["GIOHANG"] = null;
            HttpContext.Current.Session["DANGNHAP"] = null;
            HttpContext.Current.Session["MAKHACH"] = null;
            HttpContext.Current.Session.Abandon();
            return "OK";
        }
        [WebMethod]
        public static string fGetGroup(string productCode)
        {

            DataTable dt = sp.getDataTable("SP_GIOHANG", new string[] { "@flag", "@maSanPham" }, new object[] { 3, productCode });
            string result = "";

            if (dt.Rows.Count > 0)
            {

                //DM_DONHANG_CHITIET chiTietDonHang;

                result = dt.Rows[0]["MANHOM"].ToString();
                if (result == null || result == "")
                {
                    return null;
                }
                else
                {
                    //maNhom = result;
                    return result;
                }

            }
            return null;
        }

        [WebMethod]
        public static List<DM_KHACHHANG_DIACHI> fGetUserAddress(string customerCode)
        {
        
            //Get customerCode by Session
            List<string> lstOrderCodeAndCustomerCode = new List<string>();
            lstOrderCodeAndCustomerCode = getOrderCodeAndCustomerCode();

            if (lstOrderCodeAndCustomerCode != null)
            {
                //orderCode = lstOrderCodeAndCustomerCode[0];
                customerCode = lstOrderCodeAndCustomerCode[1];
            }
            else return null;
            
            DataTable dt_ListAddress = sp.getDataTable("SP_CHECKOUT", new string[] { "@flag", "@maKhach" }, new object[] { 1, customerCode });
            List<DM_KHACHHANG_DIACHI> lstAddress = new List<DM_KHACHHANG_DIACHI>();
            if (dt_ListAddress == null || dt_ListAddress.Rows.Count<1)
            {
                return null;
            }
            int indexDefault = 0;
            if(dt_ListAddress.Rows.Count > 0)
            {
                
                for(int i=0; i < dt_ListAddress.Rows.Count; i++)
                {
                    DM_KHACHHANG_DIACHI address = new DM_KHACHHANG_DIACHI();
                    address.MADIACHI = dt_ListAddress.Rows[i]["MADIACHI"].ToString();
                    address.MAKHACHHANG = dt_ListAddress.Rows[i]["MAKHACHHANG"].ToString();
                    address.DIACHI= dt_ListAddress.Rows[i]["DIACHI"].ToString();
                    //address.MACDINH = dt_ListAddress.Rows[i]["MACDINH"];
                    string tempDefault = "";
                    tempDefault = dt_ListAddress.Rows[i]["MACDINH"].ToString();
                    if (tempDefault == "True")
                    {
                        address.MACDINH = true;
                        indexDefault = i;
                    }
                    else address.MACDINH = false;
                    address.TENNGUOINHAN = dt_ListAddress.Rows[i]["TENNGUOINHAN"].ToString();
                    address.SDTNGUOINHAN = dt_ListAddress.Rows[i]["SDTNGUOINHAN"].ToString();
                    lstAddress.Add(address);

                }
            }
            if(lstAddress != null)
            {
                if (indexDefault != 0)
                {
                    DM_KHACHHANG_DIACHI tempAddress = lstAddress[0];
                    lstAddress[0] = lstAddress[indexDefault];
                    lstAddress[indexDefault] = tempAddress;

                }
                return lstAddress;
            }
            else return null;
        }
        [WebMethod]
        public static bool fUpdateOrderStatus(string customerCode, string orderCode, string addressCode)
        {
            List<string> lstOrderCodeAndCustomerCode = new List<string>();
            lstOrderCodeAndCustomerCode = getOrderCodeAndCustomerCode();

            if (lstOrderCodeAndCustomerCode != null)
            {
                orderCode = lstOrderCodeAndCustomerCode[0];
                customerCode = lstOrderCodeAndCustomerCode[1];
            }
            else return false;
            int result = 0;

            result = sp.updateTable("SP_CHECKOUT", new string[] { "@flag", "@maDon", "@maKhach", "@maDiaChi"}, new object[] { 4, orderCode, customerCode,addressCode});
            if (result != -1)
            {
                return true;
            }
            else return false;
        }
     
        [WebMethod]
        public static bool fCheckPayByCard(string cardHolderName, string cardNumber, string month, string year, string ccv, float money)
        {
            //List<THE> the = new List<THE>();
            //bool checkExist = false;
            List<string> lstOrderCodeAndCustomerCode = new List<string>();
            lstOrderCodeAndCustomerCode = getOrderCodeAndCustomerCode();
            string orderCode = "";
            string customerCode = "";
           
            if (lstOrderCodeAndCustomerCode != null)
            {
                orderCode = lstOrderCodeAndCustomerCode[0];
                customerCode = lstOrderCodeAndCustomerCode[1];
            }
            else return false;
            DataTable dt = sp.getDataTable("SP_CHECKOUT", new string[] { "@flag", "@tenChuThe", "@maThe", "@thang", "@nam" , "@ccv" }, new object[] { 5, cardHolderName,cardNumber,month,year,ccv });

            if(dt == null)
            {
                return false;
            }
            DM_THE cardPay = new DM_THE();
            if (dt.Rows.Count > 0)
            {
                //THE cardPay = new THE();
                cardPay.MATHE = dt.Rows[0]["MATHE"].ToString();
                cardPay.TENCHUTHE = dt.Rows[0]["TENCHUTHE"].ToString();
                cardPay.THANG = dt.Rows[0]["THANG"].ToString();
                cardPay.NAM = dt.Rows[0]["NAM"].ToString();
                cardPay.CCV = dt.Rows[0]["CCV"].ToString();
                cardPay.TIEN = float.Parse(dt.Rows[0]["TIEN"].ToString());
            }
            int result = 0;
            if (cardPay != null)
            {
                if (cardPay.TIEN - money >= 0)
                {
                    result = sp.updateTable("SP_CHECKOUT", new string[] {"@flag","@maThe", "@soTienThanhToan","@maDon","@maKhach" }, new object[] {6, cardNumber, money, orderCode, customerCode });
                }
                else return false;
            }
            else
            {
                return false;
            }
            if (result != -1)
                return true;
            else return false;
            
        }
        [WebMethod]
        public static bool fAddAddress(string customerCode, string address, string receiverName, string phoneNumber)
        {
            //Get customerCode by Session
            List<string> lstOrderCodeAndCustomerCode = new List<string>();
            lstOrderCodeAndCustomerCode = getOrderCodeAndCustomerCode();

            int result = 0;
            if (lstOrderCodeAndCustomerCode != null)
            {
                //orderCode = lstOrderCodeAndCustomerCode[0];
                customerCode = lstOrderCodeAndCustomerCode[1];
            }
            else return false;

            List<DM_KHACHHANG_DIACHI> lstAddress = new List<DM_KHACHHANG_DIACHI>();
            lstAddress = fGetUserAddress(customerCode);
            bool checkAddress = false;
            string addressCode = "";
            addressCode = customerCode + "_";

            //Add address for the first time
            if(lstAddress == null || lstAddress.Count == 0)
            {
                //(@maKhach,@maDiaChi,@danhDauMacDinh,@diaChi,@tenNguoiNhan,@sdtNguoiNhan)
                addressCode += "1";
                result = sp.updateTable("SP_CHECKOUT", new string[] { "@flag", "@maKhach", "@maDiaChi", "@danhDauMacDinh", "@diaChi", "@tenNguoiNhan", "@sdtNguoiNhan" }, new object[] { 2, customerCode, addressCode, true, address,  receiverName, phoneNumber });
                if (result != -1)
                {
                    return true;
                }
                else return false;
            }
            else
            {
                for (int i = 0; i < lstAddress.Count;i++)
                {
                    if(lstAddress[i].DIACHI == address)
                    {
                        checkAddress = true;
                    }
                }
            }

            //Check address = true mean address already exist 
            if (checkAddress)
            {
                return false;
            }
            else
            {
                addressCode += lstAddress.Count + System.DateTime.Today.Year;
                result = sp.updateTable("SP_CHECKOUT", new string[] { "@flag", "@maKhach", "@maDiaChi", "@danhDauMacDinh", "@diaChi", "@tenNguoiNhan", "@sdtNguoiNhan" }, new object[] { 2, customerCode, addressCode, false, address, receiverName, phoneNumber });

            }
            
      
            if (result != -1)
            {
                return true;
            }
            else return false;
           
        }
        [WebMethod]
        public static bool fUpdateDefaultAddress(string customerCode, string addressCode)
        {
            //Get customerCode by Session
            List<string> lstOrderCodeAndCustomerCode = new List<string>();
            lstOrderCodeAndCustomerCode = getOrderCodeAndCustomerCode();

            if (lstOrderCodeAndCustomerCode != null)
            {
                //orderCode = lstOrderCodeAndCustomerCode[0];
                customerCode = lstOrderCodeAndCustomerCode[1];
            }
            else return false;
            int result = 0;

            result = sp.updateTable("SP_CHECKOUT", new string[] { "@flag", "@maKhach", "@maDiaChi"}, new object[] { 3, customerCode, addressCode});
            if (result != -1)
            {
                return true;
            }
            else return false;

        }
        [WebMethod]

        public static DM_DONHANG_CHITIET[] fGetListOrderDetails(string orderCode)
        {
            List<string> lstOrderCodeAndCustomerCode = new List<string>();
            lstOrderCodeAndCustomerCode = getOrderCodeAndCustomerCode();
            string customerCode = "";
            if (lstOrderCodeAndCustomerCode != null)
            {
                orderCode = lstOrderCodeAndCustomerCode[0];
                customerCode = lstOrderCodeAndCustomerCode[1];
            }
            //if (checkSSGioHang())
            //{
            //    orderCode = HttpContext.Current.Session["GIOHANG"].ToString();
            //    customerCode = "KH_0000001";
            //}
            else
            {
                return null;
            }
            DataTable dt_chiTietDonHang = sp.getDataTable("SP_GIOHANG", new string[] { "@flag", "@maDonHang", "@maKhach" }, new object[] { 2, orderCode, customerCode });
            List<DM_DONHANG_CHITIET> lst = new List<DM_DONHANG_CHITIET>();

            if (dt_chiTietDonHang == null)
            {
                return null;
            }

            if (dt_chiTietDonHang.Rows.Count > 0)
            {

                DM_DONHANG_CHITIET chiTietDonHang;
                for (int i = 0; i < dt_chiTietDonHang.Rows.Count; i++)
                {
                    chiTietDonHang = new DM_DONHANG_CHITIET();
                    chiTietDonHang.MADONHANG = dt_chiTietDonHang.Rows[i]["MADONHANG"].ToString();
                    chiTietDonHang.MACHITIETDONHANG = dt_chiTietDonHang.Rows[i]["MACHITIETDONHANG"].ToString();
                    chiTietDonHang.MASANPHAM = dt_chiTietDonHang.Rows[i]["MASANPHAM"].ToString();
                    chiTietDonHang.TENSANPHAM = dt_chiTietDonHang.Rows[i]["TENSANPHAM"].ToString();
                    chiTietDonHang.SOLUONG = float.Parse(dt_chiTietDonHang.Rows[i]["SOLUONG"].ToString());
                    chiTietDonHang.DONGIA = float.Parse(dt_chiTietDonHang.Rows[i]["DONGIA"].ToString());
                    chiTietDonHang.THANHTIEN = float.Parse(dt_chiTietDonHang.Rows[i]["THANHTIEN"].ToString());
                    chiTietDonHang.SIZE = dt_chiTietDonHang.Rows[i]["SIZE"].ToString();
                    chiTietDonHang.MAU = dt_chiTietDonHang.Rows[i]["MAU"].ToString();
                    chiTietDonHang.DUNGTICH = dt_chiTietDonHang.Rows[i]["DUNGTICH"].ToString();
                    chiTietDonHang.LOAI = dt_chiTietDonHang.Rows[i]["LOAI"].ToString();
                    chiTietDonHang.SALE = float.Parse(dt_chiTietDonHang.Rows[i]["SALE"].ToString());
                    chiTietDonHang.MUIHUONG = dt_chiTietDonHang.Rows[i]["MUIHUONG"].ToString();

                    lst.Add(chiTietDonHang);
                }

                if (lst.Count >= 0)
                {
                    return lst.ToArray();
                }
                else
                {
                    return null;
                }

            }
            else
            {
                return null;
            }

        }
        #endregion
        protected void loadCartHere(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "loadCart()", true);
        }

        protected void address_Load(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "load()", true);
        }

        protected void btnAddAddress_Click(object sender, EventArgs e)
        {
            List<string> lstOrderCodeAndCustomerCode = new List<string>();
            lstOrderCodeAndCustomerCode = getOrderCodeAndCustomerCode();
            string customerCode = "";
            if (lstOrderCodeAndCustomerCode != null)
            {
                //orderCode = lstOrderCodeAndCustomerCode[0];
                customerCode = lstOrderCodeAndCustomerCode[1];
            }
            //public static bool fAddAddress(string customerCode, string address, string receiverName, string phoneNumber)
            fAddAddress(customerCode,txtAddress.Value,txtReceiverName.Value,txtPhoneNumber.Value);
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "load()", true);
        }
    }
}