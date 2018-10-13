using SaleWeb.THU_VIEN;
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
    public partial class CartPage : System.Web.UI.Page
    {
        public static StoreProcedure sp;

        public static string maNhom = "";
        protected void Page_Load(object sender, EventArgs e)
        {
          
            if(sp == null)
            {
                sp = getConnect();
            }
            if (HttpContext.Current.Session["DANGNHAP"] != null && HttpContext.Current.Session["DANGNHAP"].ToString() != "" )
            {
                dropdownMenuTaiKhoan.InnerHtml = HttpContext.Current.Session["DANGNHAP"].ToString() + " <i class='fa fa-sign-in'></i>";

                string key= System.Configuration.ConfigurationManager.AppSettings["language"];
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
        public void fTaoGioHang()
        {
           
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

        

        protected void btnMenuTaiKhoan_Click(object sender, EventArgs e)
        {

        }

        #region webMethod
        [WebMethod]
        public static DM_DONHANG_CHITIET[] fGetListOrderDetails(string maDonHang)
        {
            if (checkSSGioHang())
            {
                maDonHang = HttpContext.Current.Session["GIOHANG"].ToString();
            }
            else
            {
                return null;
            }
            DataTable dt_chiTietDonHang = sp.getDataTable("SP_GIOHANG", new string[] { "@flag", "@maDonHang" }, new object[] { 2, maDonHang });
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
        [WebMethod]
        public static string fGetGroup(string maSanPham)
        {
           
            DataTable dt = sp.getDataTable("SP_GIOHANG", new string[] { "@flag", "@maSanPham" }, new object[] { 3, maSanPham });
            string ketQua = "";
            
            if (dt.Rows.Count > 0)
            {
                
                //DM_DONHANG_CHITIET chiTietDonHang;

                ketQua = dt.Rows[0]["MANHOM"].ToString();
                if (ketQua == null || ketQua == "")
                {
                    return null;
                }
                else
                {
                    maNhom = ketQua;
                    return ketQua;
                }
                
            }
            return null;
        }
        #endregion

        protected void gioHangODay_Load(object sender, EventArgs e)
        {
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Script", "loadGioHang()", true);
        }
    }
}